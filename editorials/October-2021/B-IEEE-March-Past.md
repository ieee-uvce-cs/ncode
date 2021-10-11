---
layout: default-editorial
title: October 2021
problem: B - IEEE March Past
link: https://www.hackerrank.com/contests/uvce-ncode-october-2021/challenges/b-ieee-march-past
---
# Solution

- The first element must be the maximum element of the array.
- The remaining elements can be arranged in any order and the sum of differences reamins the same.
- This can be solved by two ways.
- Sort and reverse the array.
- Swap the first element with the maximum element.
- $Time Complexity: O(n)$

$$$$

# Implementation in C++

```cpp
#include <iostream>

using namespace std;

int main() {
    int t, n, i, maxi, temp;
    scanf("%d", &t);
    
    int a[10000];
    
    while (t--) {
        scanf("%d", &n);
        
        for (i = 0; i < n; i++)
            scanf("%d", &a[i]);
        
        maxi = 0;
        
        //Find the position of maximum element
        for (i = 1; i < n; i++)
            if (a[i] > a[maxi])
                maxi = i;
        
        //Swap the first element and maximum element
        temp = a[maxi];
        a[maxi] = a[0];
        a[0] = temp;
        
        for (i = 0; i < n; i++)
            cout<<a[i]<<" ";
        
        cout<<"\n";
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
        int t, n, i, maxi, temp;
        t = scan.nextInt();
        
        int a[] = new int[10000];
        
        while (t-- > 0) {
            n = scan.nextInt();
            
            for (i = 0; i < n; i++)
                a[i] = scan.nextInt();
            
            maxi = 0;
            
            //Find the maximum element
            for (i = 1; i < n; i++)
                if (a[i] > a[maxi])
                    maxi = i;
            
            //Swap the first element and maximum element
            temp = a[maxi];
            a[maxi] = a[0];
            a[0] = temp;
            
            for (i = 0; i < n; i++)
                System.out.print(a[i] + " ");
                
            System.out.println();
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

    max = 0
    # Find the maximum element
    for i in range(0, n):
        if a[i] > a[max]:
            max = i

    # Swap the first element and maximum element
    a[max], a[0] = a[0], a[max]
    print(*a)
```

$$$$

# Additional Material

- [Video Editorial](https://www.youtube.com/watch?v=oWfes5R7Zts)
- [Codeforces - Reorder the array](https://codeforces.com/problemset/problem/1007/A)
