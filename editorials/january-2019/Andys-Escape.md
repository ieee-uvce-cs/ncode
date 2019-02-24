---
layout: default-editorial
title: January 2019
problem: Andy's Escape
link: https://www.hackerrank.com/contests/uvce-ncode-january-2019/challenges/andys-escape 
---

## Solution 

Represent the start and end times in a linear data structure. 
Let $t$ be an array where, $t[i] = j$, indicates that at ith time the guard was at the $j^{th}$ quarter.

Now, we observe that if $t[i] = j$ and $t[i + 1] = k$ then quarters $j$ and $k$ are adjacent to each other (i.e connected by a single edge).

We maintain a stack $s$, the element at the top of the stack is the quarter at which the guard is. 
Traverse the array $t$, from $i = 1 \rightarrow 2 * N$.

If the top of the stack $= t[i]$, it implies, $t[i]$ is a leaf node, pop the top element of the stack. 
Otherwise, an edge exists between the element on top of the stack and $t[i]$, push $t[i]$ on top of stack.

## Implementation

```cpp
#include <bits/stdc++.h>

using namespace std;
using ll = long long;

int main() {
    int n;
    cin >> n;

    int timing[2 * n + 1], k;
    for (int i = 0; i < n; ++i) {
        int s, e;
        cin >> s >> e;
        timing[s] = i + 1;
        timing[e] = i + 1;

        if (s == 1) {
            k = i + 1;
        }
    }

    cout << n << ' ' << n - 1 << ' ' << k << '\n';

    stack<int> quarter;
    quarter.push(timing[1]);

    for (int i = 2; i <= 2 * n; ++i) {
        if (timing[i] == quarter.top()) {
            quarter.pop();
        } else {
            cout << quarter.top() << ' ' << timing[i] << '\n';
            quarter.push(timing[i]);
        }
    }
}
```

<br>
* _Time complexity_: $\mathcal{O}(N)$
* _Space complexity_: $\mathcal{O}(N)$

[back](./index.html)

