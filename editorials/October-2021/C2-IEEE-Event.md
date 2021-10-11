---
layout: default-editorial
title: October 2021
problem: C2 - IEEE Event (Hard Version)
link: https://www.hackerrank.com/contests/uvce-ncode-october-2021/challenges/c2-craziest-sub-sequence
---
# Solution

- Problem is straight forward and asks us to find the longest increasing subsequnce
- Since $N$ is large, use dynamic programming and binary search variation of the problem
- $Time Complexity: O(nlogn)$

$$$$

# Implementation in C++

```cpp
#include <bits/stdc++.h>

using namespace std;

int lis(vector<int> const& a) {
    int n = a.size();
    const int INF = 1e9;
    
    //Initialize all elements to INF
    vector<int> d(n+1, INF);
    d[0] = -INF;

    //Perform LIS algorithm on the array
    for (int i = 0; i < n; i++) {
        for (int j = 1; j <= n; j++) {
            if (d[j-1] < a[i] && a[i] < d[j])
                d[j] = a[i];
        }
    }

    int ans = 0;
    for (int i = 0; i <= n; i++) {
        if (d[i] < INF)
            ans = i;
    }
    return ans;
}

int main() {
    int t, n, i, j;
    scanf("%d", &t);
    
    vector <int> v;
    
    while (t--) {
        scanf("%d", &n);

        v.clear();
        
        for (i = 0; i < n; i++) {
            scanf("%d", &j);
            v.push_back(j);
        }
        
        //Use the LIS algorithm to find the answer
        printf("%d\n", lis(v));
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
    public static int lis(int[] a) {
        int i, j, n = a.length;
        int INF = 100000009;
        int d[] = new int[n+1];

        //Initialize all elements to INF
        for (i = 0; i <= n; i++)
            d[i] = INF;
        
        d[0] = -INF;
        
        //Perform LIS algorithm on the array
        for (i = 0; i < n; i++)
            for (j = 1; j <= n; j++)
                if (d[j-1] < a[i] && a[i] < d[j])
                    d[j] = a[i];
        
        int ans = 0;
        for (i = 0; i < n; i++)
            if (d[i] < INF)
                ans = i;
        
        return ans;
    }
    
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        int t, n, i;
        t = scan.nextInt();
        
        while (t-- > 0) {
            n = scan.nextInt();
            
            int a[] = new int[n];
            
            for (i = 0; i < n; i++)
                a[i] = scan.nextInt();
            
            //Use the LIS algorithm to find the answer
            System.out.println(lis(a));
        }
    }
}
```

$$$$

# Implementation in Python

```python
def lis(a):
    n = len(a)
    INF = 10**9
    d = []
    
    # Initialize all elements to INF
    for i in range(0, n+1):
        d.append(INF)
    d[0] = -INF
    
    # Perform LIS algorithm on the array
    for i in range(0, n):
        for j in range(1, n+1):
            if d[j-1] < a[i] and a[i] < d[j]:
                d[j] = a[i]
                
    ans = 0
    for i in range(0, n):
        if d[i] < INF:
            ans = i
            
    return ans

t = int(input())
for _ in range(t):
    n = int(input())
    a = list(map(int, input().split()))
    print(lis(a))
```

$$$$

# Additional Material

- [Video Editorial](https://www.youtube.com/watch?v=oMYjTUoNQmQ)
- [CP Algorithms - Longest Increasing Subsequence](https://cp-algorithms.com/sequences/longest_increasing_subsequence.html)
