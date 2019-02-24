---
layout: default-editorial
title: January 2019
problem: Hope is a good thing
link: https://www.hackerrank.com/contests/uvce-ncode-january-2019/challenges/hope-is-a-good-thing
---

## Solution 

Problem was about finding hidden number X using a string S of 1's and 0's where, 

$$
    S[i] = 0,\ if\  X\  mod\  2^i < X\  mod\  2^{i + 1} \\ 
    S[i] = 1,\ if\  X\  mod\  2^i \ge X\  mod\  2^{i + 1}
$$

Main idea is, if we know that $y =  X\  mod\  2^i$, then we can get the value of $X\  mod\  2^{i + 1}$, 
just by knowing if $S[i]$ is $0$ or $1$. 

So by building on that, then in end we can have exact value of 
$X\  mod\   2^{31}$ and as $2^{31} > 2 * 10^9$ we would know exact value of $X$.

While you register that have a look at this :

$X\  mod\   2^{i + 1}$ can take values : $0, 1, 2 ... 2^{i - 1}, 2^i, 2^{i + 1}... 2^{i + 1} - 1$

$X\  mod\   2^i$ can take values: $0, 1, 2 ... 2^{i - 1}, 0, 1...2^{i - 1}$.  

Note that $X\  mod\   2^{i + 1}$ is either $y$ or $y + 2^i$ therefore, 
if $S[i] = 0$ that means $X\  mod\  2^{i + 1} = y + 2^i$
else $X\  mod\  2^{i + 1} = y$.
So we know how to calculate $X\  mod\  2^{i + 1}$ from $X\  mod\   2^i$ using $S[i]$, 
but we need exact value of $X\  mod\  2^i$ for some $i$,

if $s[0] = 0$ that means $X\  mod\  1 < X\  mod\  2$ hence $X\  mod\   2 = 1$
else if $s[0] = 1$ that would mean $X\  mod\  2 = 0$
Now we know $X\  mod\  2$ we can build upto $X\  mod\  2^{31}$ which will be our $X$.


## Implementation

```cpp
#include <bits/stdc++.h>

using namespace std;
using ll = long long;

int main () {
    ios_base :: sync_with_stdio (NULL);
    cin.tie (0);
    int t ;
    cin >> t;
    while (t--) {
        string st;
        cin >> st;
        assert (st.size () == 30);
        ll x = 1, y = 2, rem = 0;
        for (int i = 0; i < 30; i++) {
            if (st[i] == '0') {
                rem += x;
            }
            x = y;
            y *= 2;
        }
        cout << rem << "\n";
    }
}
```

<br>
* _Time complexity_: $\mathcal{O}(T)$
* _Space complexity_: $\mathcal{O}(1)$

[back](./index.html)

