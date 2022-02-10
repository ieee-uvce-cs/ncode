---
layout: default-editorial
title: February 2022
problem: A - Raingirl Likes Multiples
link: https://www.hackerrank.com/contests/ncode-february-2022/challenges/a-my-crush-likes-multiples
---
# Solution

- A number $X$ is a multiple of a number $Y$, if $X \% Y == 0$
- Time Complexity: $O(1)$

$$$$

# Implementation in C++

```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
    int t, n, k;
    cin>>t;
    
    while (t--) {
        cin>>n>>k;
        
        if (n%k == 0)
            cout<<"YES\n";
        else
            cout<<"NO\n";
    }
    return 0;
}
```

$$$$

# Implementation in Java

```java
import java.io.*;
import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        int t, n, k;
        t = scan.nextInt();
        
        while (t-- > 0) {
            n = scan.nextInt();
            k = scan.nextInt();
            
            if (n%k == 0)
                System.out.println("YES");
            else
                System.out.println("NO");
        }
    }
}
```

$$$$

# Implementation in Python

```python
t = int(input())
for _ in range(t):
    n, k = map(int, input().split())
    if n%k == 0:
        print('YES')
    else:
        print('NO')
```

$$$$

# Contest Material

- [Codeforces - Divisibility Problem](https://codeforces.com/contest/1328/problem/A)
- [NCode January 2022 - Back to Basics](https://www.hackerrank.com/contests/uvce-ncode-january-2022/challenges/b-back-to-basics)

