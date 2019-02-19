---
layout: default-editorial
title: November 2018
problem: Aang's Attack
link: https://www.hackerrank.com/contests/uvce-ncode-november-2018/challenges/aangs-attack
---

## Solution 

Number of people of island $i$ is $f(i)$, given $f(i) = f(i - 1) + f(i - 2)$, which is the fibonacci function.  
Given an island number $x$ problem is to find number of island $y$ such that $fib (y) \mid fib (x)$, where $y < x$.  
Key is to note that $fib (a) \mid fib (b) \leftrightarrow a \mid b$, therefore problem breaks down to finding number of divisors $x$ (excluding itself).

**Brute force way of counting number of divisors**  
Iterate from $[1, x)$, then check if it divides $x$. This is done $\mathcal{O}(x)$.  
So we can answer each query in $\mathcal{O}(t * x)$, which will time out.  

**Pre calcultion**  
Idea is to calculate and store number of divisors of every $x < 10^5$, and then answering any query would be instant.
We can do precomputation as shown: 
```cpp
for (int i = 1; i < x; i++) {             
    for (int j = i * 2; j <= x; j += i) {  
        div[j]++;     // An array which stores then number of divisors
    }
}
```
The complexity of the above code is determined by number of times _div[j]_ is updated:  
$$
T(x) = x + \frac{x}{2} + \frac{x}{3} + \frac{x}{4} + ... + 1 \\  
T(x) = x * (1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + ... + \frac{1}{x}) \\ 
T(x) = x * log(x)
$$

**Proof**  
$fib(a) \mid fib(b) \leftrightarrow a \mid b$, can be proved using property of fibonacci  

\begin{equation}\label{fibeqn}
fib(x) * fib(y - 1) + fib(x + 1) * fib(y) = fib(x + y) \quad (1)
\end{equation}

if we put $y = x$, we get, 


\begin{equation}\label{fibeqn2}
fib (x) * (fib (y - 1) + fib (x + 1)) = fib (2x), 
\end{equation}

therefore $fib(x) \mid fib(2x)$, similarly, $fib (2x) \mid fib (3x)$ and rest is mathematical induction.
We know that if $a \mid b$ then $fib(a)$ divides $fib(b)$, $gcd(fib (a), fib (a + 1)) = 1$, 

In eqn(1),  
$gcd (fib (x), fib(x + 1)) = 1$  
$gcd (fib (y - 1) , fib (y)) = 1$  

Let us assume there is a $k$ such that $fib (k) \mid fib (k * q + r)$, where $r\  \epsilon\  [1, k - 1]$   

\begin{equation}
fib (k * q) * fib (r -1) + fib (r) * fib(k * q + 1) = fib (k * q + r) 
\end{equation}

As,   
$fib (k) \mid fib (k * q)$, for  
$fib(k)$ to divide $fib(k * q + r)$ it must divide $fib(r) * fib (k * q + 1)$
but $gcd (fib (k * q + 1), fib (k)) = 1$.  
we have $fib (k)$ must divide $fib (r)$ which is not possible as $r < k$.  
Therefore by contradiction we now we know it is not possible and $r$ must be equal to $0$.


## Implementation

```cpp
#include <bits/stdc++.h>

using namespace std;
using ll = long long int;
constexpr int N = 1e5 + 1;

int res[N];

void precal() {
    // fill res with 2, as f(1) and f(2) will divide every number.
    fill(res, res + N, 2);

    // exceptions.
    res[0] = res[1] = 0;
    res[2] = 1; 

    // sieve.
    for (int i = 3; i < N; ++i) {
        for (int j = 2 * i; j < N; j += i) {
            ++res[j];
        }
    }
}

int main() {
    int q;
    cin >> q;

    precal();

    while (q--) {
        int x;
        cin >> x;

        cout << res[x] << '\n';
    }
}
```

* _Time complexity_: $\mathcal{O}(t + N * log(N))$
* _Space complexity_: $\mathcal{O}(N)$

[back](./index.html)

