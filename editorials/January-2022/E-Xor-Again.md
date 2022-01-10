---
layout: default-editorial
title: January 2022
problem: E - XOR Again
link: https://www.hackerrank.com/contests/uvce-ncode-january-2022/challenges/xor-again-2
---
# Solution

- Notice that if there are 0s in the binary representation of any element in the array, we can either change it 1 or leave it as it is.
- We cannot change a 1 in the binary representation to 0 becuase the $b_i \& a_i$ will not be the same.
- Let the $c0$ be the number of zeros in a position of the binary representation of all the elements. The number of possibilities to change the bits is $2^{c0}$
- For the least significant bit we change it in such a way that there are exactly $2^{number of zeros} \div 2$ odd and even XOR of all elements.
- The only edge case is if the number of 0s in the least significant bit of the binary representations of all the integers in the array is $0$, then the XOR of all elements will be odd if $N$ is odd and even if $N$ is even.
- Time Complexity: $O(nlogn)$

$$$$

# Implementation in C++

```cpp
#include <iostream>

#define MAX 100000
#define MOD 1000000007

using namespace std;

int a[MAX];

long long p[MAX];

long long a1, a2;

int main() {
    int t, q, n, m, i, j, k, l, r, x, y, z, res;
    scanf("%d", &t);

    p[0] = 1;

    //Precompute powers of 2 modulo 10^9+7
    for (i = 1; i < MAX; i++) {
        p[i] = p[i-1]*2;
        p[i] %= MOD;
    }

    int c[31];

    while (t--) {
        scanf("%d%d", &n, &m);

        for (i = 0; i < n; i++)
            scanf("%d", &a[i]);

        for (i = 0; i < m; i++)
            c[i] = 0;

        //For each power of 2 less than 2^31, count the number of
        //times, the & of the power of 2 and the ith integer is 0
        for (i = 0; i < m; i++) {
            k = 1<<i;

            for (j = 0; j < n; j++)
                if ((a[j]&k) == 0)
                    c[i]++;
        }
        
        //If there are no zeros in the least significant bit
        //of all numbers, we can either form only odd XOR if
        //n is odd and only even XOR if n is even
        if (c[0] == 0) {
            a1 = 1;
            a2 = 0;

            for (i = 1; i < m; i++) 
                if (c[i]) {
                    a1 *= p[c[i]];
                    a1 %= MOD;
                }

            if (n%2)
                printf("%lld %lld\n", a1, a2);
            else
                printf("%lld %lld\n", a2, a1);
            
            continue;
        }

        //The number of odd and even XOR which can be formed is equal
        //to the product of 2^(zeros in least significant bit-1) and
        //2^(number of zeros for all other bits)
        a1 = p[c[0]-1];
        a2 = p[c[0]-1];

        for (i = 1; i < m; i++) {
            a1 *= p[c[i]];
            a1 %= MOD;

            a2 *= p[c[i]];
            a2 %= MOD;
        }

        printf("%lld %lld\n", a1, a2);
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
        
        long MOD = 1000000007;

        long p[] = new long[100000];
        int a[] = new int[100000];

        long a1, a2;
        
        int t, q, n, m, i, j, k, l, r, x, y, z, res;
        t = scan.nextInt();

        p[0] = 1;

        //Precompute powers of 2 modulo 10^9+7
        for (i = 1; i < 100000; i++) {
            p[i] = p[i-1]*2;
            p[i] %= MOD;
        }

        int c[] = new int[31];

        while (t-- > 0) {
            n = scan.nextInt();
            m = scan.nextInt();

            for (i = 0; i < n; i++)
                a[i] = scan.nextInt();

            for (i = 0; i < m; i++)
                c[i] = 0;

            //For each power of 2 less than 2^31, count the number of
            //times, the & of the power of 2 and the ith integer is 0
            for (i = 0; i < m; i++) {
                k = 1<<i;

                for (j = 0; j < n; j++)
                    if ((a[j]&k) == 0)
                        c[i]++;
            }

            //If there are no zeros in the least significant bit
            //of all numbers, we can either form only odd XOR if
            //n is odd and only even XOR if n is even
            if (c[0] == 0) {
                a1 = 1;
                a2 = 0;

                for (i = 1; i < m; i++) 
                    if (c[i] > 0) {
                        a1 *= p[c[i]];
                        a1 %= MOD;
                    }

                if (n%2 == 1)
                    System.out.println(a1 + " " + a2);
                else
                    System.out.println(a2 + " " + a1);

                continue;
            }

            //The number of odd and even XOR which can be formed is equal
            //to the product of 2^(zeros in least significant bit-1) and
            //2^(number of zeros for all other bits)
            a1 = p[c[0]-1];
            a2 = p[c[0]-1];

            for (i = 1; i < m; i++) {
                a1 *= p[c[i]];
                a1 %= MOD;

                a2 *= p[c[i]];
                a2 %= MOD;
            }

            System.out.println(a2 + " " + a1);
        }
    }
}
```

$$$$

# Implementation in Python

```python
t = int(input())

MOD = (10**9)+7

p = [1]

# Precompute powers of 2 modulo 10^9+7
for i in range(1, 10**5):
    p.append(p[i-1]*2)
    p[i] %= MOD

for _ in range(t):
    n, m = map(int, input().split())

    c = []

    for i in range(0, m):
        c.append(0)
        
    a = list(map(int, input().split()))

    # For each power of 2 less than 2^31, count the number of
    # times, the & of the power of 2 and the ith integer is 0
    for i in range(0, n):
        x = a[i]

        k = 0

        while k < m:
            if x%2 == 0:
                c[k] += 1
            k += 1
            x //= 2

    # If there are no zeros in the least significant bit
    # of all numbers, we can either form only odd XOR if
    # n is odd and only even XOR if n is even
    if c[0] == 0:
        a1 = 1
        a2 = 0

        for i in range(1, m):
            a1 *= p[c[i]]
            a1 %= MOD

        if n%2 == 1:
            print(a1, a2)
        else:
            print(a2, a1)
            
    # Otherwise, the number of odd and even XOR which can be formed is equal
    # to the product of 2^(zeros in least significant bit-1) and
    # 2^(number of zeros for all other bits)
    else:
        a1 = p[c[0]-1]
        a2 = p[c[0]-1]

        for i in range(1, m):
            a1 *= p[c[i]]
            a1 %= MOD

            a2 *= p[c[i]]
            a2 %= MOD

        print(a1, a2)
```

$$$$

# Contest Material

- [Bitwise Operations - Errichto](https://www.youtube.com/watch?v=xXKL9YBWgCY)
- [Bitwise Hacks for Competitive Programming](https://www.geeksforgeeks.org/bitwise-hacks-for-competitive-programming/)

