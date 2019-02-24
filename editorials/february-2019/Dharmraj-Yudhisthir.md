---
layout: default-editorial
title: February 2019
problem:  Dharmraj Yudhisthir 
link:  https://www.hackerrank.com/contests/uvce-ncode-february-2019/challenges/feb-e
---

## Solution 
Problem boils down to finding longest path in a given tree such that sum of number on all the vertices in that path is a multiple of $3$.  
(As then only Yudhitir could pray equally to each of trinity).

Let's say remainder of a path is defined as (sum of numbers on vertices in the path) $\bmod 3$.  
We use a *DFS* like search where each branch would return an array of $3$ integers $r_0, r_1, r_2$, 
where $r_i$ is the longest path with sum$\bmod 3 = i$. 

Suppose we have a node $n_1$ and one of its child is $n_2$, and $n_2$ returned three integer $r_0, r_1, r_2$.   
Then $r_0$ would signify longest path including $n_2$ in the subtree with rooted at $n_2$ ($n_1$ doesn't come in subtree as it is its parent) with $r_0$remainder $= 0$, and similarly $r_1$ with remainder $= 1$ and $r_2$ whith reaminder $ =  2$.

As single node can have multiple childs after we get all triplets from child. We should do two things:
1. Have to pick maximum for each remainders and add current vertice's number to the sum (that will change the remainder) and pass on to its parent.
2. Have to find pair of childs who can give the path with remainder $0$ of maximum length (We have to do this fast can't pick every pair and check).

**First one**

For passing three updated three integer to parent we should note that only one of multiple childs could be chosen as for a path we must choose one child for every node at max.
So all we have to do is pick that maximum length we got for each of the remainders, then update the remainder as current node must be added if we are adding its child in path (we must increment length also by 1).

**Second one**

As it is possible that path doesn't go through the current node's parent path could be made by selecting any two childs of current node (as the current node connects it).

But we cant just iterate to every pair possible ans this would make it too slow to pass the constraints (it would be O ($n^2$)).

The trick is to just pick the Maximum($m_i$) and Second maximum($sm_i$)  for each all three reaminder paired with the number of child it came from.
for getting any remainder by sum of two reaminder there are always two ways eg  $0 + 1 \rightarrow 1$ or $2 + 2 \rightarrow 1$, $ 1 + 1 \rightarrow 2$ or $0 + 2 \rightarrow 2$, $ 0 + 0 \rightarrow 0$ or $1 + 2 \rightarrow 0$
So when we are picking the max for any reaminder we need to consider two ways in one way there will be just single remainder (eg $0 + 0 , 2 + 2, 1 + 1$) for them we pick just add $m_i$ and $sm_i$,
but when we have different say for example $0 + 1 \rightarrow 1$, then we look at the max for both , but if they come from same branch we cant choose them so we have to select between $m_0 + sm_1$ and $m_1 + sm_0$.

After we have for all remainder maximum possile lengths we update again with current node updating remainder as well as length (length increases by one at max) then we update the reamainder with $0$ to a global $val$ which in
end will be our answer.

Implementation is fairly chalenging but life's not easy.

## Implementation
```cpp
#include<bits/stdc++.h>
#define MOD (ll)(1e9+7)
#define MAX (ll)(1e5+3)

using namespace std;
using ll = long long;

vector <int> gr[MAX];
int aa[MAX];
int ma = 0;

vector <int> dfs (int node, int par) {
    pair <int, int> ar[3][2];
    vector <int> ve (3);
    int ind = 1, r = (3 - aa[node] % 3) % 3;
    for (int x : gr[node]) {
        if (x != par) {
            int i = 0;
            for (int xx : dfs (x, node)) {
                if (ar[i][0].first <= xx) {
                    ar[i][1] = ar[i][0];
                    ar[i][0] = make_pair (xx, ind);
                }
                else {
                    if (ar[i][1].first <= xx) {
                        ar[i][1] = make_pair (xx, ind);
                    }
                }
                i++;
            }
        }
        ind ++;
    }
    for (int i = 0; i < 3; i++) {
        ve[i] = max (ve[i], ar[i][0].first);
        for (int j = i; j < 3; j++) {
            if (ar[i][0].second != ar[j][0].second) {
                if (ar[j][0].first && ar[i][0].first) {
                    ve[(i + j) % 3] = max (ve[(i + j) % 3], ar[i][0].first + ar[j][0].first);
                }
            }
            else {
                ve[(i + j) % 3] = max (ve[(i + j) % 3], max ((ar[i][0].first && ar[j][1].first) * (ar[i][0].first + ar[j][1].first), (ar[i][1].first + ar[j][0].first) * (ar[i][1].first && ar[j][0].first)));
            }
        }
    }
    ma = max ((ve[r] + (!r || ve[r])), ma);
    for (int i = 0; i < 3; i++) {
        ve[(i + aa[node]) %3] = ar[i][0].first + (!i || ar[i][0].first);
    }
    return ve;
}
                

int main () {
    int n;
    cin >> n;
    for (int i = 1; i <= n; i++) {
        cin >> aa[i];
    }
    for (int i = 1; i < n; i++) {
        int a, b;
        cin >> a >> b;
        gr[a].push_back (b);
        gr[b].push_back (a);
    }
    auto x = dfs (1, 0);
    cout << ma << "\n";
}

```

<br>
* _Time complexity_: $\mathcal{O}{N}$
* _Space complexity_: $\mathcal{O}{N}$

[back](./index.html)

