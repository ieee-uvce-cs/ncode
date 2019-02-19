---
layout: default-editorial
title: November 2018
problem: Sokka and King of Omashu
link: https://www.hackerrank.com/contests/uvce-ncode-november-2018/challenges/sokka-and-king-of-omashu
---

## Solution 

Either $x$ coordinate or $y$ coordinate of initial and final position are same, 
therefore it shares a column or a row (lies in a straight line). 
As direction doesn't matter, we assume they lie in same column, let us say initial and final positions are $(x, y_s)$ and $(x, y_d)$ 
respectively with $y_d \ge y_s$. Any such query can be done in constant time owing to a pattern.

Pattern: $0, 3, 2, 3, 2, 3, 4, 5, 4, 5, 6, 7, 6, 7...$ 

here, $Pattern[i] \implies$ minimum number of steps required to reach a cell if $y_d - y_s = i$.

Creating this pattern.

This pattern can be obtained using $3$ columns with $x$ coordinates, $x - 1, x, x + 1$.

**Note**: column $x - 1$ and $x + 1$ will be same as both are same to knight.

    x - 1 ->    3 2 1
    x     ->    0 3 2
    x + 1 ->    3 2 1
    
These staring $9$ cells can easily be confirmed to be minimum number of steps to reach from $(x, y_s)$ (till now pattern is done till 0, 3, 2).
$(x + 1, y_s + 3)$ can be reached from $(x - 1, y_s + 2)$ and $(x, y_s + 3)$ can be reached from $(x + 1, y_s + 1)$ in $1$ step. So now,

    x - 1 ->    3 2 1 2
    x     ->    0 3 2 3
    x + 1 ->    3 2 1 2
        
again, 
$$
(x + 1, y_s + 4) = (x - 1, y_s + 3) + 1, \\ 
(x, y_s + 4) = (x + 1, y_s + 2) + 1
$$
        
    x - 1 ->    3 2 1 2 3
    x     ->    0 3 2 3 2
    x + 1 ->    3 2 1 2 3
        
by repetedly doing it we can get the pattern in $x$ (column).

#### Proof:
We can create the pattern, now we prove that it is the minimum possible.

**Note**: Odd number of moves required to traverse to cell with different color and even number of moves required for traversing in same colour cells.
Max $(y_2 - y_1)$ which can be achieved in $n$ steps is $2 * n$, as $+2$ is max change in one direction for knights move. So we define $limit (n) = 2 * n$.

Let $ans(n)$ be the function which gives minimum steps to reach from $(x, y_s)$ to $(x, y_s + n)$.

To prove $Pattern[n] = ans (n)$, it is sufficient to show that limit $(Pattern[n] -2) < n \le limit (Pattern[n])$

```
When n is even

ans(n) will also be even (owing to NOTE(1)).
    n <= limit( ans (n)), when n = limit (Pattern[n]) then Pattern[n] == ans (n).
    Pattern for even indices is 2, 2, 4, 4, 6, 6, 8, 8, 10, 10... 
    more formally Pattern[n] = ceil(n / 4) * 2
    n = k * 4 + r, where r can be 0, 2

when r = 0,
    n = k * 4
    ceil(n / 4) * 2 = k * 2, therefore, 
    limit (Pattern[n]) = k * 4 = n, ans (n) == Pattern[n].
    
when r = 2,
    n = k * 4 + 2
    ceil(n / 4) * 2 = (k + 1) * 2 = k * 2 + 2 therefore, 
    limit (Pattern[n]) = k * 4 + 4 ≥ n
    limit (Pattern[n] - 1) = k * 4 + 2 = n
    as limit (x - 1) < limit (x),  limit (Pattern[n] - 2)  < n  <= limit (Pattern[n])
    
Hence we have proved that Pattern[n] has to be the answer for even n.
        
```

```
    When n is odd

    Pattern for odd indices is defined as Pattern[n] = ceil ((n -1) /4) * 2 + 1, for n = 3, 5, 7, 9...
        when n = 4 * k + 1
            
            Pattern[n] = k * 2 + 1
            limit (Pattern[n]) = k * 4 + 2 > n
            limit (pattern[n] - 1) = k * 4  < n
            therefore limit (Pattern[n] - 2) < n ≤ limit (Pattern[n])
            
        when n = 4 * k + 3
            
            Pattern[n] = k * 2 + 3
            limit (Pattern[n]) = k * 4 + 6 > n
            limit (Pattern[n] - 2) = k * 4 + 2 < n
            
        therefore for odd number also Pattern[n] = ans (n)
```

Hence proved for $n > 1$ that $Pattern[n] = ans (n)$


## Implementation

```cpp
#include <bits/stdc++.h>

using namespace std;
using ll = long long int;

int main() {
    int t;
    cin >> t;

    while (t--) {
        ll x1, y1, x2, y2;
        cin >> x1 >> y1 >> x2 >> y2;

        ll d = max(abs(x1 - x2), abs(y1 - y2));

        if (d == 0) {
            cout << 0 << '\n';
            continue;
        }

        if (d == 1) {
            cout << 3 << '\n';
            continue;
        }
        
        ll res = ((d - 2) / 4 + 1) * 2;
        if (d % 2 != 0) {
            ++res;
        }

        cout << res << '\n';
    }
}
```

* _Time complexity_: $\mathcal{O}(T)$
* _Space complexity_: $\mathcal{O}(1)$

[back](./index.html)

