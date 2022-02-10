---
layout: default-editorial
title: January 2022
problem: B - Raingirl Likes Even Powers
link: https://www.hackerrank.com/contests/ncode-february-2022/challenges/b-raingirl-likes-even-powers
---
# Solution

- We can find the logarithm of any number to the base $X$ by dividing the number by $X$ until it becomes $1$.
- In this problem, it is guaranteed that $N$ is a power of $K$ and since $N$ is small enough to be divided continuously by $X$, we can use a brute force approach to find the power.
- Time complexity: $O(logn)$

$$$$

# Implementation in C++

```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
    int t, n, k, x;
    cin>>t;
    
    while (t--) {
        cin>>n>>k;
        
        x = 0;
        
        while (n >= k) {
            n /= k;
            x++;
        }
        
        if (x%2 == 0)
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
        
        int t, n, k, x;
        t = scan.nextInt();
        
        while (t-- > 0) {
            n = scan.nextInt();
            k = scan.nextInt();
            
            x = 0;
            
            while (n >= k) {
                n /= k;
                x++;
            }
            
            if (x%2 == 0)
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
    x = 0
    
    while n >= k:
        x += 1
        n //= k
        
    if x%2 == 0:
        print('YES')
    else:
        print('NO')
```

$$$$

# Contest Material

- [Codeforces - Divisibility Problem](https://codeforces.com/contest/1328/problem/A)

