---
layout: default-editorial
title: March 2022
problem: A2 - Election Result (Hard Version)
link: https://www.hackerrank.com/contests/ncode-march-2022/challenges/a2-election-result-hard-version
---
# Solution

- If the votes won by the largest party (the maximum element of the array) is greater than the votes won by the remaining elements (sum of remaining elements of the array), then there is a majority.
- Time Complexity: $O(n)$

$$$$

# Implementation in C++

```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
    int t, n, i, sum, mx;
    cin>>t;
    
    int a[100];
    
    while (t--) {
        cin>>n;
        
        for (i = 0; i < n; i++)
            cin>>a[i];
        
        mx = *max_element(a, a+n);
        
        sum = 0;
        for (i = 0; i < n; i++)
            sum += a[i];
        
        // Check whether the votes won by largest party
        // is greater than the sum of votes
        // obtained by the remaining parties
        if (mx > sum-mx)
            cout<<"MAJORITY\n";
        else
            cout<<"COALITION\n";
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
        
        int t, n, i, mx, sum;
        t = scan.nextInt();
        
        int [] a = new int[100];
        
        while (t-- > 0) {
            n = scan.nextInt();
            
            for (i = 0; i < n; i++)
                a[i] = scan.nextInt();
            
            mx = 0;
            sum = 0;
            
            for (i = 0; i < n; i++) {
                if (a[i] > mx)
                    mx = a[i];
                
                sum += a[i];
            }
            
            // Check whether the votes won by largest party
            // is greater than the sum of votes
            // obtained by the remaining parties
            if (mx > sum-mx)
                System.out.println("MAJORITY");
            else
                System.out.println("COALITION");
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
    
    # Check whether the votes won by largest party
    # is greater than the sum of votes
    # obtained by the remaining parties
    if max(a) > sum(a)-max(a):
        print('MAJORITY')
    else:
        print('COALITION')
```

$$$$

# Contest Material

- [Codechef - Fair Elections](https://www.codechef.com/problems/FAIRELCT)
- [Codeforces - Elections](https://codeforces.com/problemset/problem/570/A)
- [Codeforces - Bear and Elections](https://codeforces.com/problemset/problem/574/A)

