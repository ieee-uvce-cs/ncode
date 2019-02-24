---
layout: default-editorial
title: February 2019
problem: Bishma Pitmah
link: https://www.hackerrank.com/contests/uvce-ncode-february-2019/challenges/feb-d
---

## Solution 

The problem provides a number $x$ (of the region) that must be shot by numbered arrows such that the following rules apply:

1. Each number of the arrow divides the number $x$, i.e, $n_i\mid x$ where $n_i$ is the number of the arrow
2. The numbers of the arrow are pairwise coprime, i.e.  $gcd(n_i, n_j)= 1,\  \forall\  n_i, n_j \in S$ where $S$ is the set of arrow numbers.

The problem asks us to evaluate the number of distinct sets $S$ which have the above mentioned properties and have the maximal size.
The additional constraint is that if the number $1$ is used for any arrow, it forms a singleton set, i.e, no other number is allowed to be part of the set.

We realise that the numbers on the arrows must by rule *1*, be factors of $x$.

Since, one cannot divide a number further than it's prime factorisation, the maximal set $x$ must be composed by all the prime factors, given by:

$$
x =\prod_{p_i\ |\ x} p_i^{a_i}. 
$$

However one can replace any prime factor $p_i$ with its power $p_i^j$ with $j \le a_i$ and the set continues to satisfy the two properties.

The number of such maximal sets is therefore given as the product: 

$$ 
M = \prod_{p_i\ |\ x}{a_i}
$$

To find the prime factorisation of a number $x$, we utilise a sieve to store the minimal prime factor that divides every number within the 
problem constraints of $x$.

The sieve can be implemented in many ways and it's time complexity ranges from $\mathcal{O}(n)$ to $\mathcal{O}(n * log(n))$.
This can be precomputed a single time before handling the different numbers, leading to lower execution time.

We first find the smallest prime using the constructed table, divide by it until the result is coprime with said prime, we continue till $1$ is reached. 
We update $M$ everytime a new prime is divided and finally display it on screen.

The final caveat is that if $1$ is given as input, we must output $1$, as the only set that satisfies the two rules is $\\{1\\}$.

## Implementation

```cpp
#include <bits/stdc++.h>
#define MAX (ll)(1e7 + 1)
#define MA (ll)(3e6 + 1)

using namespace std;
using ll = long long;
int prepr [MAX] = {};
bool ch[MAX] = {};

void pre () {
	 for (int i = 2; i < MAX; i++) {
		if (!ch[i]) {
			prepr[i] = i;
			for (int j = i * 2; j < MAX; j += i) {
				ch[j] = 1;
				if (!prepr[j]) {
					prepr[j] = i;
				}
			}
		}
	}
}

int main () {
	ios_base :: sync_with_stdio (false);
	cin.tie(nullptr);
	pre ();
	int t;
	cin >> t;
	assert (t < MA);
	while (t--) {
		int an;
		cin >> an;
		int pr = 1;

		while (an > 1) {
			int sm = prepr[an];
			int cc = 0;
			while (an % sm == 0) {
				cc++;
				an /= sm;
			}
			pr *= cc;
		}

		cout << pr << "\n";
	}
}
```

<br>
* _Time complexity_: $\mathcal{O}(n * log(n) + t * log(n))$, where $n$ is the range of $x$, and $t$ is the number of testcases.
* _Space complexity_: $\mathcal{O}(x)$

[back](./index.html)

