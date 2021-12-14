---
layout: default-editorial
title: November 2021
problem: D - XOR Vaccination
link: https://www.hackerrank.com/contests/ncode-december-2021/challenges/d-xor-vaccination
---
# Solution

- Since, XOR is commutative, we can rearrange the array from

$(a_1 \oplus X) \oplus (a_2 \oplus X) \oplus ... \oplus (a_n \oplus X)$ to

$(a_1 \oplus a_2 \oplus .... \oplus a_n) \oplus (X \oplus X \oplus ... \oplus X)$

where $X$ is XORed $N$ times.

- If $N$ is even, $X$ is XORed even number of times and becomes $0$.
- Hence, if $N$ is even and the XOR of all the elements of the array is $0$, then $X$ is $0$.
- If $N$ is even and the XOR of all the elements of the array is not $0$, then the answer is $-1$.
- If $N$ is odd, $X$ is XORed odd number of times and the value of $X$ remains $X$ after all XOR operations.
- Therefore, $X$ can be the XOR of all the elements of the array is $N$ is odd.

- Time Complexity: $O(n)$

$$$$

# Implementation in C++

```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
    int t, n, i;
    cin>>t;
    
    long long res, a[1000];
    
    while (t--) {
        cin>>n;
        
        for (i = 0; i < n; i++)
            cin>>a[i];
        
        res = 0;
        
        for (i = 0; i < n; i++)
            res ^= a[i];
        
        if (n%2)
            cout<<res<<"\n";
        else if (res == 0)
            cout<<0<<"\n";
        else
            cout<<-1<<"\n";
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
        int t, n, i;
        t = scan.nextInt();
        
        long res;
        long [] a = new long[1000];
        
        while (t-- > 0) {
            n = scan.nextInt();
            
            for (i = 0; i < n; i++)
                a[i] = scan.nextLong();
            
            res = 0;
            
            for (i = 0; i < n; i++)
                res ^= a[i];
            
            if (n%2 == 1)
                System.out.println(res);
            else if (res == 0)
                System.out.println(0);
            else
                System.out.println(-1);
        }
    }
}
```

$$$$

# Implementation in Python

```python
for _ in range(int(input())):
    n = int(input())
    a = list(map(int, input().split()))
    
    res = 0
    
    for i in range(0, n):
        res ^= a[i]
        
    if n%2 == 1:
        print(res)
    elif res == 0:
        print(0)
    else:
        print(-1)
```

$$$$

# Contest Material

- [Bitwise Operations - Errichto](https://www.youtube.com/watch?v=xXKL9YBWgCY)
- [Bitwise Hacks for Competitive Programming](https://www.geeksforgeeks.org/bitwise-hacks-for-competitive-programming/)

