---
layout: default-editorial
title: November 2021
problem: B - Friend's Christmas Party
link: https://www.hackerrank.com/contests/ncode-december-2021/challenges/b-friends-christmas-party
---
# Solution

- We can calculate the product of boring value $a[i]$ and distance from our house, $abs(i-M)$ for all the friends $1 \le i \le N$
- After that, the minimum of the all the houses is found out.
- If two houses have the same product of boring value and distance, their boring value is considered, while finding minumum.
- We should be careful not to consider our house while calculating minimum.
- Time complexity: $O(n)$

$$$$

# Implementation in C++

```cpp
#include <bits/stdc++.h>

#define ll long long

using namespace std;

int main() {
    int t, n, m, i, j, k;
    cin>>t;
    
    ll a[100000];
    ll p[100000];
    
    while (t--) {
        cin>>n>>m;
        
        m--;
        
        for (i = 0; i < n; i++)
            cin>>a[i];
        
        // Precompute the product of distance and boring value
        for (i = 0; i < n; i++)
            p[i] = a[i]*abs(i-m);
        
        k = 0;
        
        // If the first house is our house, then k is initially second house
        if (k == m)
            k++;
        
        for (i = 0; i < n; i++)
            if (i != m) {
                // If the product of distance and boring value is less, consider that house
                if (p[i] < p[k])
                    k = i;
                
                // If the product of distance and boring value is equal
                // but the boring value is higher, consider that house
                else if (p[i] == p[k] && a[i] < a[k])
                    k = i;
            }
        
        cout<<k+1<<"\n";
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
        int t, n, m, i, j, k;
        t = scan.nextInt();
        
        long [] a = new long[100000];
        long [] p = new long[100000];
        
        while (t-- > 0) {
            n = scan.nextInt();
            m = scan.nextInt();
            
            for (i = 0; i < n; i++)
                a[i] = scan.nextInt();
            
            m--;
        
            // Precompute the product of distance and boring value
            for (i = 0; i < n; i++)
                p[i] = a[i]*Math.abs(i-m);

            k = 0;

            // If the first house is our house, then k is initially second house
            if (k == m)
                k++;

            for (i = 0; i < n; i++)
                if (i != m) {
                    // If the product of distance and boring value is less, consider that house
                    if (p[i] < p[k])
                        k = i;

                    // If the product of distance and boring value is equal
                    // but the boring value is higher, consider that house
                    else if (p[i] == p[k] && a[i] < a[k])
                        k = i;
                }

            System.out.println(k+1);
        }
    }
}
```

$$$$

# Implementation in Python

```python
t = int(input())
for _ in range(t):
    n, m = map(int, input().split())
    a = list(map(int, input().split()))
    
    p = []
    
    k = 0
    m -= 1
    
    # If the first house is our house, then k is initially second house
    if m == 0:
        k = 1
        
    # Precompute the product of distance and boring value
    for i in range(0, n):
        p.append(a[i]*abs(i-m))
        
    for i in range(0, n):
        if i != m:
            # If the product of distance and boring value is less, consider that house
            if (a[i]*abs(i-m)) < p[k]:
                k = i
                
            # If the product of distance and boring value is equal
            # but the boring value is higher, consider that house
            elif a[i]*abs(i-m) == p[k] and a[i] < a[k]:
                k = i
            
    print(k+1)
```

$$$$

# Contest Material

- [Codeforces - Cow and Haybales](https://codeforces.com/contest/1307/problem/A)

