---
layout: default-editorial
title: July 2021
problem: B - Iron Man's Server
link: https://www.hackerrank.com/contests/uvce-ncode-july-2021/challenges/b-iron-mans-server
---
# Solution

- Find the minimum and maximum element of the array. Call them $max$ and $min$.
- If $min$ is lesser than $X$ or $max$ is greater than $Y$, then no matter which elements are added, the minimum element cannot be equal to $X$ and the maximum element cannot be equal to $Y$. Therefore, the answer will be "NO" in this case.
- If $N = M$, no elements can be added to the array. So, only if $min$ is equal to $X$ and $max$ is equal to $Y$, then the answer is "YES".
- If $N-M = 1$, then exactly one element can be added. So, if $min$ is equal to $X$, then $Y$ can be added. If $max$ is equal to $Y$, then $X$ can be added. If both $min = X$ and $max = Y$ is true, then any element in the range $[X, Y]$ can be added.
- If $N-M \ge 2$, then both $X$ and $Y$ can be added. Therefore, the answer is "YES"
- If the above three conditions fail, then the answer will be "NO".
- $Time Complexity: O(n)$

$$$$

# Implementation

```cpp
#include <iostream>

using namespace std;

int main() {
    int t, n, m, x, y, i;
    cin>>t;
    
    int a[10000];
    
    int min_ele, max_ele;
    
    while (t--) {
        cin>>n>>m>>x>>y;
        
        for (i = 0; i < m; i++)
            cin>>a[i];
        
        min_ele = a[0];
        max_ele = a[0];
        
        //Find the minimum and maximum element of the array
        for (i = 0; i < m; i++) {
            if (a[i] < min_ele)
                min_ele = a[i];
            if (a[i] > max_ele)
                max_ele = a[i];
        }
        
        if (min_ele < x || max_ele > y)
            cout<<"NO\n";
        else if (n-m == 0 && min_ele == x && max_ele == y)
            cout<<"YES\n";
        else if (n-m == 1 && (min_ele == x || max_ele == y))
            cout<<"YES\n";
        else if (n-m >= 2)
            cout<<"YES\n";
        else
            cout<<"NO\n";
    }
    
    return 0;
}
```

$$$$

# Contest Material

- [Video editorial](https://www.youtube.com/watch?v=Mvfi9OGX2_c&list=PLMk3wkBiPDIEQS59Ox7il1QH-w6TqCZY8&index=2)
- [Wikipedia - Edge cases](https://en.wikipedia.org/wiki/Edge_case)
