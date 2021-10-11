---
layout: default-editorial
title: October 2021
problem: C1 - IEEE Event (Easy Version)
link: https://www.hackerrank.com/contests/uvce-ncode-october-2021/challenges/c1-ieee-events
---
# Solution

$$$$

- Find the frequency of each element of the array.
- The above step can be done using either a Hashmap or by sorting the array and storing the frequencies in a stack.
- If there are two elements which occur consecutively in the set of natural numbers, then the answer is the maximum sum of frequencies of consecutive elements.
- Otherwise, the answer is the highest frequency of all the elements of the array.
- Time Complexity: $O(nlogn)$

$$$$

# Implementation in C++

```cpp
#include <iostream>
#include <algorithm>

using namespace std;

int main() {
    int t, n, i, j, top, ans;
    cin>>t;
    
    int a[10000], b[10000], c[10000];
    
    while (t--) {
        cin>>n;
            
        for (i = 0; i < n; i++)
            cin>>a[i];
            
        sort(a, a+n);
            
        top = 0;
        i = 0;
            
        while (i < n) {
            j = i;
                
            while (i < n && a[i] == a[j])
                i++;
                
            //Push the element and its frequency on top of a stack
            b[top] = a[j];
            c[top] = i-j;
                
            top++;
        }
            
        ans = c[0];
            
        //Find the maximum frequency
        for (i = 1; i < top; i++)
            if (c[i] > ans)
                ans = c[i];
            
        //Find the maximum of sum of frquency of two consecutive elements
        for (i = 1; i < top; i++)
            if (b[i-1] == b[i]-1 && c[i-1]+c[i] > ans)
                ans = c[i-1]+c[i];
            
        cout<<ans<<"\n";
    }
    
    return 0;
}
```


$$$$

# Implementation in Java

```java
import java.io.*;
import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        int t, n, i, j, top, ans;
        t = scan.nextInt();
        
        int b[] = new int[10000];
        int c[] = new int[10000];
        
        while (t-- > 0) {
            n = scan.nextInt();
            
            int a[] = new int[n];
            for (i = 0; i < n; i++)
                a[i] = scan.nextInt();
            
            //Sort the array
            Arrays.sort(a);
            
            top = 0;
            i = 0;
            
            while (i < n) {
                j = i;
                
                while (i < n && a[i] == a[j])
                    i++;
                
                //Push the element and its frequency on top of a stack
                b[top] = a[j];
                c[top] = i-j;
                
                top++;
            }
            
            ans = c[0];
            
            //Find the maximum frequency
            for (i = 1; i < top; i++)
                if (c[i] > ans)
                    ans = c[i];
            
            //Find the maximum of sum of frquency of two consecutive elements
            for (i = 1; i < top; i++)
                if (b[i-1] == b[i]-1 && c[i-1]+c[i] > ans)
                    ans = c[i-1]+c[i];
            
            System.out.println(ans);
        }
    }
}
```

$$$$

# Implementation in Python

```python
t = int(input())
for _ in range(t):
    n = int(input())
    a = list(map(int, input().split()))
    a.sort()
    b = []
    c = []
    i = 0
    
    while i < n:
        j = i
        while i < n and a[j] == a[i]:
            i += 1
            
        # Push the element and its frequency onto the stack
        b.append(a[j])
        c.append(i-j)
        
    ans = max(c)
    
    for i in range(1, len(b)):
        if c[i]+c[i-1] > ans and b[i-1] == b[i]-1:
            ans = c[i]+c[i-1]
            
    print(ans)
```

$$$$

# Additional Material

- [Video Editorial](https://www.youtube.com/watch?v=rcmGY0pW80E)
- [Geeks for Geeks - Frequency of array elements](https://www.geeksforgeeks.org/counting-frequencies-of-array-elements/)
- [Geeks for Geeks - Counting Sort](https://www.geeksforgeeks.org/counting-sort/)

