---
layout: default-editorial
title: January 2019
problem: Rita Hayworth
---

## Solution 

In this problem, we wish to minimize the cost needed to take the package from Red, $R$ to Andy, $A$. 
Since the good guys, $G$, cells transport Rita Hayworth free of cost, 
we only need the services of Brooks each time we encounter a block of Bad, $B$, cells. 

We scan the string that represents the row of cells and keep track of the cost. 
We begin updating the cost once we are in between $R$ and $A$ as follows

$$ if \  \ A_i = "B" and \ \ A_{i - 1} \ne "B" \implies C = C + 2 $$
$$ if \  \ A_i = "B" and \ \ A_{i - 1} = "B" \implies C = C + 1 $$

This is because the number of exchanges performed across each block of $B$'s is $1$ + the number of cells within the block. 
Finally when we reach the other character $R$ or $A$, we stop iterating. 

Note: The cost remains the same if we swap the cells with $R$ and $A$.


## Implementation

```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
    string s;
    cin >> s;

    int i = s.find('A');
    int j = s.find('R');

    if (i > j) {
        swap(i, j);
    }

    int bad_guys = 0, groups = 0;
    for (int k = i + 1; k < j; ++k) {
        if (s[k] == 'B') {
            ++groups;
        }

        while (k < j && s[k] == 'B') {
            ++bad_guys;
            ++k;
        }
    }

    cout << bad_guys + groups << '\n';
}
```

* _Time complexity_: $\mathcal{O}(N)$
* _Space complexity_: $\mathcal{O}(N)$ to store the string where $N$ is the length of the string.

[back](../../)

