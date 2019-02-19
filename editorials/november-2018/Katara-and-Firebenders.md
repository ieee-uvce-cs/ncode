---
layout: default-editorial
title: November 2018
problem: Katara and Firebenders
link: https://www.hackerrank.com/contests/uvce-ncode-november-2018/challenges/katara-and-firebenders 
---

## Solution 

Katara can deal $X$ amount of damage and this can be repeated $Y$ times, therefore, the total amount of damage that can be dealt is $X * Y$.

Starting at index $i$ for every hi between $i$ and $i + k - 1$, 
check how many $h_i$ are $\le X * Y$, keep track of the max count which is the answer to the problem.

Note: Use 64-bit integers. 

Note: The above soultion has time complexity $\mathcal{O}(n * k)$, a better solution can be obtained using sliding window, 
$\mathcal{O}(n)$.

## Implementation

```cpp
#include <bits/stdc++.h>

using namespace std;
using ll = long long int;

/* 
 * O(n * k) solution.
 *
 * O(n) solution is also possible.
 */

int main() {
    int n, k;
    ll x, y;
    cin >> n >> k >> x >> y;

    ll h[n];
    for (int i = 0; i < n; ++i) {
        cin >> h[i];
    }

    ll z = x * y;
    int res = -1;
    for (int i = 0; i <= n - k; ++i) {
        int count = 0;
        for (int j = i; j < i + k; ++j) {
            count += (h[j] <= z);
        }

        res = max(res, count);
    }

    cout << res << '\n';
}
```

* _Time complexity_: $\mathcal{O}(N * K)$
* _Space complexity_: $\mathcal{O}(N)$

[back](./index.html)

