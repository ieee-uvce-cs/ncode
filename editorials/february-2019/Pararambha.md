---
layout: default-editorial
title: February 2019
problem: Pararambha
link: https://www.hackerrank.com/contests/uvce-ncode-february-2019/challenges/pararambha
---

## Solution 

Nothing much to it. Replace every character by the corresponding digit group.

## Implementation

```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
    string s;
    getline(cin, s);
    
    for (int i = 0; i < s.size(); ++i) {
        if (s[i] == ' ') {
            cout << "999";
        } else {
            char group = (s[i] - 97) / 3 + 1 + '0';
            int sub_group = (s[i] - 97) % 3 + 1;
            
            string res(sub_group, group);
            cout << res;
        }
    }
    
    cout << '\n';
}
```
<br>
* _Time complexity_: $\mathcal{O}(\|s\|)$
* _Space complexity_: $\mathcal{O}(\|s\|)$

[back](./index.html)

