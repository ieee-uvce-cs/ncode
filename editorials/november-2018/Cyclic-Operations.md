---
layout: default-editorial
title: November 2018
problem: Cyclic Operations
link: https://www.hackerrank.com/contests/uvce-ncode-november-2018/challenges/cyclic-operations
---

## Solution 

This problem can be solved using [segment tree](https://cp-algorithms.com/data_structures/segment_tree.html) data structure.

The leaves of the segment tree will store the values of $a_i$. 
- At the nodes, the distance from which to the leaves is $1$ OR operation will be performed between both its children. 
- At the nodes, the distance from which to the leaves is $2$, AND operation will be performed between its children.
- Similarly, the nodes, the distance from which to the leaves is $3$, XOR operation will be performed between its children.

Then the root of the tree will contain the value $X$. 

There is no need to rebuild the tree to perform an update operation. To update, we should find a path from the root to the corresponding leaf and recalculate the values only at the nodes that are lying on that path. 

## Implementation

```cpp
#include <bits/stdc++.h>

using namespace std;
using ll = long long int;
constexpr ll N = (1 << 17) + 1;

int t[N << 2];

void build(int *a, int v, int tl, int tr, int &l) {
    if (tl == tr) {
        t[v] = a[tl];
        l = 0;
        return ;
    }

    int tm = (tl + tr) >> 1;
    build(a, v << 1, tl, tm, l);
    build(a, v << 1 | 1, tm + 1, tr, l);

    switch (l) {
        case 0:
            t[v] = t[v << 1] | t[v << 1 | 1];
            break;

        case 1:
            t[v] = t[v << 1] & t[v << 1 | 1];
            break;

        case 2:
            t[v] = t[v << 1] ^ t[v << 1 | 1];
            break;
    }

    l = (l + 1) % 3;
}

void query(int v, int tl, int tr, int x, int y, int &l) {
    if (tl == tr) {
        t[v] = y;
        l = 0;
        return ;
    }

    int tm = (tl + tr) >> 1;

    if (x <= tm) {
        query(v << 1, tl, tm, x, y, l);
    } else {
        query(v << 1 | 1, tm + 1, tr, x, y, l);
    }

    switch (l) {
        case 0:
            t[v] = t[v << 1] | t[v << 1 | 1];
            break;

        case 1:
            t[v] = t[v << 1] & t[v << 1 | 1];
            break;

        case 2:
            t[v] = t[v << 1] ^ t[v << 1 | 1];
            break;
    }

    l = (l + 1) % 3;
}

int main() {
    int n, q;
    cin >> n >> q;

    // n = 2^n
    n = (1 << n); 

    int a[n];
    for (int i = 0; i < n; ++i) {
        cin >> a[i];
    }

    int l = 0;
    build(a, 1, 0, n - 1, l);

    while (q--) {
        int x, y;
        cin >> x >> y;

        l = 0;
        query(1, 0, n - 1, x - 1, y, l);

        cout << t[1] << '\n';
    }
}
```

<br>
* _Time complexity_: $\mathcal{O}(n * q)$
* _Space complexity_: $\mathcal{O}(2^n)$

[back](./index.html)

