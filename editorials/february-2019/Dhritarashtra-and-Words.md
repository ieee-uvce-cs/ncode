---
layout: default-editorial
title: February 2019
problem: Dhritarashtra and Words
link: https://www.hackerrank.com/contests/uvce-ncode-february-2019/challenges/feb-b
---

## Solution 

Start with an empty string $s$, and recursively append to $s$ the letters of the alphabet in lexicographical order.
While appending make sure that the last letter of $s$ and the letter being appended are not the same type, i.e, 
vowels or consonants. When the length of $s$ becomes equal to $n$, print $s$ and return.

## Implementation

```cpp
#include <bits/stdc++.h>

using namespace std;

inline bool isVowel(const char &c) {
    return c == 'a' || c == 'e' || c == 'i' || \
            c == 'o' || c == 'u';
}

void solve(string s, int n) {
    if (s.size() == n) {
        cout << s << '\n';
        return ;
    }

    for (char i = 'a'; i <= 'z'; ++i) {
        /* string is empty or the last character of s and 
            character being appended are different */
        if (s.empty() || isVowel(s.back()) ^ isVowel(i)) {
            solve(s + i, n);
        }
    }
}


int main() {
    int n;
    cin >> n;

    solve("", n);
}
```

<br>
* _Time complexity_: $\mathcal{O}((21 * 5)^{\frac{n}{2}})$
* _Space complexity_: $\mathcal{O}(1)$

[back](./index.html)

