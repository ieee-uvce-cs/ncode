---
layout: default-editorial
title: September 2021
problem: E - Tokyo's Vases
link: https://www.hackerrank.com/contests/uvce-ncode-september-2021/challenges/e-tokyos-vases
---
# Solution

- If $N$ is $1$, the only possible arrangements are $B$ and $W$.
- For $N$ is $2$, we can place a $B$ next to any of the strings whose length is $1$.
- But we can place a $W$, only next to those strings whose length $1$ and ends with $B$. This is to avoid having two consecutive $W$s in a string.
- From this, we can observe that, the number of $B$s in at the end of all possible beautiful strings is $result(N-1)$ and the number of $W$s is $result(N-2)$
- This is similar to a Fibonacci sequence.
- The challenge is to find the $N^{th}$ Fibonacci when $N$ is in the range of $10^9$.
- To do that, we can use fast Fibonacci technique using matrix multiplication and binary exponentation.
- Note the fact that there exists faster techniques than the one mentioned above.
- $Time Complexity: O(logn)$

$$$$

# Implementation in C++

```cpp
#include <cstdio>
#include <utility>

using namespace std;
    
long long MOD = 1e9+7;

long long a[100][4];

pair <long long, long long> get_fib(long long n) {
    long long res[4] = {-1, -1, -1, -1};
    long long temp[4] = {-1, -1, -1, -1};
    
    int p = 1;
    
    //Use binary exponentation to find the nth fibonacci number
    while (n) {
        if (n%2) {
            if (res[0] == -1) {
                for (int i = 0; i < 4; i++)
                    res[i] = a[p-1][i];
            }
            else {
                temp[0] = (((res[0]*a[p-1][0])%MOD)+((res[1]*a[p-1][2]))%MOD)%MOD;
                temp[1] = (((res[0]*a[p-1][1])%MOD)+((res[1]*a[p-1][3]))%MOD)%MOD;
                temp[2] = (((res[2]*a[p-1][0])%MOD)+((res[3]*a[p-1][2]))%MOD)%MOD;
                temp[3] = (((res[2]*a[p-1][1])%MOD)+((res[3]*a[p-1][3]))%MOD)%MOD;
                
                for (int i = 0; i < 4; i++)
                    res[i] = temp[i];
            }
        }
        
        n /= 2;
        p++;
    }
    
    //Return f(n+1) and f(n)
    return {res[0], res[1]};
}

int main() {
    a[0][0] = 1;
    a[0][1] = 1;
    a[0][2] = 1;
    a[0][3] = 0;
    
    long long temp[4];
    
    int i, j;
    
    //Generate fibonacci of all powers of 2 by multiplying matrix by itself
    for (i = 1; i < 100; i++) {
        temp[0] = (((a[i-1][0]*a[i-1][0])%MOD)+((a[i-1][1]*a[i-1][2]))%MOD)%MOD;
        temp[1] = (((a[i-1][0]*a[i-1][1])%MOD)+((a[i-1][1]*a[i-1][3]))%MOD)%MOD;
        temp[2] = (((a[i-1][2]*a[i-1][0])%MOD)+((a[i-1][3]*a[i-1][2]))%MOD)%MOD;
        temp[3] = (((a[i-1][2]*a[i-1][1])%MOD)+((a[i-1][3]*a[i-1][3]))%MOD)%MOD;
        
        for (j = 0; j < 4; j++)
            a[i][j] = temp[j];
    }
    
    int t, n;
    scanf("%d", &t);
    
    pair <long long, long long> pp;
    
    while (t--) {
        scanf("%d", &n);
        
        pp = get_fib(n);
        
        printf("%lld %lld\n", pp.first, pp.second);
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
    static long MOD = 1000000007;
    
    static long a[][] = new long[100][4];
    
    public static long[] get_fib(long n) {
        long res[] = new long[4];
        long temp[] = new long[4];
        
        res[0] = -1;
        res[1] = -1;
        res[2] = -1;
        res[3] = -1;
        
        temp[0] = -1;
        temp[1] = -1;
        temp[2] = -1;
        temp[3] = -1;

        int p = 1;

        //Use binary exponentation to find the nth fibonacci number
        while (n > 0) {
            if (n%2 == 1) {
                if (res[0] == -1) {
                    for (int i = 0; i < 4; i++)
                        res[i] = a[p-1][i];
                }
                else {
                    temp[0] = (((res[0]*a[p-1][0])%MOD)+((res[1]*a[p-1][2]))%MOD)%MOD;
                    temp[1] = (((res[0]*a[p-1][1])%MOD)+((res[1]*a[p-1][3]))%MOD)%MOD;
                    temp[2] = (((res[2]*a[p-1][0])%MOD)+((res[3]*a[p-1][2]))%MOD)%MOD;
                    temp[3] = (((res[2]*a[p-1][1])%MOD)+((res[3]*a[p-1][3]))%MOD)%MOD;

                    for (int i = 0; i < 4; i++)
                        res[i] = temp[i];
                }
            }

            n /= 2;
            p++;
        }

        //Return f(n+1) and f(n)
        return new long[] {res[0], res[1]};
    }
    
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        a[0][0] = 1;
        a[0][1] = 1;
        a[0][2] = 1;
        a[0][3] = 0;

        long temp[] = new long[4];

        int i, j;

        //Generate fibonacci of all powers of 2 by multiplying matrix by itself
        for (i = 1; i < 100; i++) {
            temp[0] = (((a[i-1][0]*a[i-1][0])%MOD)+((a[i-1][1]*a[i-1][2]))%MOD)%MOD;
            temp[1] = (((a[i-1][0]*a[i-1][1])%MOD)+((a[i-1][1]*a[i-1][3]))%MOD)%MOD;
            temp[2] = (((a[i-1][2]*a[i-1][0])%MOD)+((a[i-1][3]*a[i-1][2]))%MOD)%MOD;
            temp[3] = (((a[i-1][2]*a[i-1][1])%MOD)+((a[i-1][3]*a[i-1][3]))%MOD)%MOD;

            for (j = 0; j < 4; j++)
                a[i][j] = temp[j];
        }

        int t, n;
        t = scan.nextInt();

        long pp[];

        while (t-- > 0) {
            n = scan.nextInt();

            pp = get_fib(n);
            
            System.out.println(pp[0] + " " + pp[1]);
        }
    }
}
```

$$$$

# Implementation in Python

```python
MOD = (10**9)+7

a = []

for i in range(0, 100):
    temp = []
    for j in range(0, 4):
        temp.append(0)
    a.append(temp)
    
a[0][0] = 1
a[0][1] = 1
a[0][2] = 1
a[0][3] = 0

# Generate fibonacci of all powers of 2 by multiplying matrix by itself
for i in range(1, 100):
    temp = [0, 0, 0, 0]
    
    temp[0] = (((a[i-1][0]*a[i-1][0])%MOD)+((a[i-1][1]*a[i-1][2])%MOD))%MOD
    temp[1] = (((a[i-1][0]*a[i-1][1])%MOD)+((a[i-1][1]*a[i-1][3])%MOD))%MOD
    temp[2] = (((a[i-1][2]*a[i-1][0])%MOD)+((a[i-1][3]*a[i-1][2])%MOD))%MOD
    temp[3] = (((a[i-1][2]*a[i-1][1])%MOD)+((a[i-1][3]*a[i-1][3])%MOD))%MOD
    
    for j in range(0, 4):
        a[i][j] = temp[j]

def get_fib(n):
    temp = [-1, -1, -1, -1]
    res = [-1, -1, -1, -1]
    
    p = 0

    # Use binary exponentation to find the nth fibonacci number
    while n > 0:
        if n%2 == 1:
            if res[0] == -1:
                for i in range(0, 4):
                    res[i] = a[p][i]
            else:
                temp[0] = (((res[0]*a[p][0])%MOD)+((res[1]*a[p][2])%MOD))%MOD
                temp[1] = (((res[0]*a[p][1])%MOD)+((res[1]*a[p][3])%MOD))%MOD
                temp[2] = (((res[2]*a[p][0])%MOD)+((res[3]*a[p][2])%MOD))%MOD
                temp[3] = (((res[2]*a[p][1])%MOD)+((res[3]*a[p][3])%MOD))%MOD
                    
                for i in range(0, 4):
                    res[i] = temp[i]
                    
        n //= 2
        p += 1
        
    # Return f(n+1) and f(n)
    return [res[0], res[1]]

t = int(input())
for _ in range(t):
    n = int(input())
    
    res = get_fib(n)
    print(res[0], res[1])
```

$$$$

# Additional Material

- [Video Editorial](https://www.youtube.com/watch?v=UYvvzT74mAo)
- [Fast Fibonacci Algorithms](https://www.nayuki.io/page/fast-fibonacci-algorithms)
- [Codeforces blog - Calculate 10^18 Fibonacci](https://codeforces.com/blog/entry/14516)
