---
layout: default-editorial
title: February 2019
problem: Ved Vyas and Primes 
link: https://www.hackerrank.com/contests/uvce-ncode-february-2019/challenges/feb-c
---

## Solution 

We are given a string of digits $S$ within which we must find prime numbers that form a subsequence of $S$.

To do this task, we first precalculate the set of primes within $10^6$ using a sieve.
Next, we create a vector for each possible digit that stores the different positions where the digit is encountered in $t$ he sequence $S$, 
in sorted order. 

After this, we iterate over every possible prime, checking if its digits of that prime can be found successively within the sequence $S$. 
Here, the vector of positions proves useful, since we can just pick the first possible position of the $i^{th}$ 
digit that has a greater position than that of the chosen position of the $(i-1)^{th}$ digit, using binary search.
    
Finally, we count the number of primes that return true to this check and print it as our answer.

## Implementation

```cpp
#include <bits/stdc++.h>

using namespace std;
constexpr int N = 1e6 + 1;

vector<int> primes;

void precal() {
    vector<bool> is_prime(N, true);

    for (int i = 2; i * i <= N; ++i) {
        if (!is_prime[i]) continue;
        for (int j = i * i; j < N; j += i) {
            is_prime[j] = false; 
        }
    }

    is_prime[0] = is_prime[1] = false;
    for (int i = 0; i < N; ++i) {
        if (is_prime[i]) {
            primes.push_back(i);
        }
    }
}

bool possible(vector<int> *p, string n) {
    int curr = 0;
    for (char d : n) {
        d -= '0';
        auto idx = lower_bound(p[d].begin(), p[d].end(), curr); 
        if (idx == p[d].end()) {
            return false;
        }

        curr = *idx + 1;
    }

    return true;
}

int main() {
    precal();

    string s;
    cin >> s;
    assert(s.size() <= 1e5 && s.size() >= 1);

    vector<int> pos[10];
    for (int i = 0; i < s.size(); ++i) {
        assert(isdigit(s[i]));
        pos[s[i] - '0'].push_back(i);
    }

    int res = 0;
    for (int prime : primes) {
        if (possible(pos, to_string(prime))) {
            ++res;
        }
    }

    cout << res << '\n';
}
```

<br>
* _Time complexity_: $\mathcal{O}(p * log(p) + S)$ where $p$ is the range of primes, and $S$ is the length of sequence.
* _Space complexity_: $\mathcal{O}(p + S)$

[back](./index.html)

