---
layout: default-editorial
title: October 2021
problem: D - IEEE Factor Sum
link: https://www.hackerrank.com/contests/uvce-ncode-october-2021/challenges/d-ieee-factor-sum
---
# Solution

- Modify Sieve of Eratosthenes algorithm to find the sum of factors.
- Calculate the prefix sums of the sum of factors.
- Print the difference between $R^{th}$ and $L-1^{th}$ prefix sum
- $Time Complexity: O(nlogn)$

$$$$

# Implementation in C++

```cpp
#include <iostream>

using namespace std;

int main() {
    int t, i, j, l, r;
    cin>>t;
    
    long long a[100000];
    
    for (i = 0; i < 100000; i++)
        a[i] = 0;
    
    //Modify the Sieve of Eratosthenes algorithm to find sum of factors.
    for (i = 1; i <= 100000; i++)
        for (j = i; j <= 100000; j += i)
            a[j-1] += i;
    
    //Calculate the prefix sums of all the sum of factors
    for (i = 1; i < 100000; i++)
        a[i] += a[i-1];
    
    while (t--) {
        cin>>l>>r;
        
        //Print the sum of sum of factors of all number between l and r
        if (l == 1)
            cout<<a[r-1]<<"\n";
        else
            cout<<a[r-1]-a[l-2]<<"\n";
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
        
        int t, i, j, l, r;
        t = scan.nextInt();

        long a[] = new long[100000];

        for (i = 0; i < 100000; i++)
            a[i] = 0;

        //Modify the Sieve of Eratosthenes algorithm to find sum of factors.
        for (i = 1; i <= 100000; i++)
            for (j = i; j <= 100000; j += i)
                a[j-1] += i;

        //Calculate the prefix sums of all the sum of factors
        for (i = 1; i < 100000; i++)
            a[i] += a[i-1];

        while (t-- > 0) {
            l = scan.nextInt();
            r = scan.nextInt();

            //Print the sum of sum of factors of all number between l and r
            if (l == 1)
                System.out.println(a[r-1]);
            else
                System.out.println(a[r-1]-a[l-2]);
        }
    }
}
```

$$$$

# Implementation in Python

```python
a = []
for i in range(0, 100000):
    a.append(0)
    
# Modify the Sieve of Eratosthenes algorithm to find sum of factors.
for i in range(1, 100001):
    for j in range(i, 100001, i):
        a[j-1] += i
        
# Calculate the prefix sums of all the sum of factors
for i in range(1, 100000):
    a[i] += a[i-1]
    
t = int(input())
for _ in range(t):
    l, r = map(int, input().split())
    
    # Print the sum of sum of factors of all number between l and r
    if l == 1:
        print(a[r-1])
    else:
        print(a[r-1]-a[l-2])
```

$$$$

# Contest Material

- [Video Editorial](https://www.youtube.com/watch?v=7-u1s0KuC5E)
- [Sieve of Eratosthenes](https://cp-algorithms.com/algebra/sieve-of-eratosthenes.html)
- [Codeforces Blog - Factorization](https://codeforces.com/blog/entry/19946)
- [Wikipedia - Pollard's Rho Algorithm](https://en.wikipedia.org/wiki/Pollard%27s_rho_algorithm)

