---
layout: default-editorial
title: July 2021
problem: C - Doctor Differentiation
link: https://www.hackerrank.com/contests/uvce-ncode-july-2021/challenges/c-doctor-differentiation
---
# Solution

- This problem can be solved in various ways but the easiest is by using brute force technique, i.e we can differentiate the given equation $m$ times.
- We know that on differentiating $x^n$ we get $nx^{n-1}$. Keeping this in mind, the power of $x$ is multiplied to the co-efficient every time it's differentiated and it's power is reduced by 1.
- We can maintain two arrays, $a$ and $p$, one for co-efficients and one for power, respectively. In each step, we multiply the co-efficient with the power and decrement the power. This is repeated $m$ times.
- For each term, $k$ is raised to the power of the term, $p_i$, and multiplied with the coefficient of the term, $a_i$, and this product is added to the result.
- In other words, the result if the sum of the product, $a_i \times k^{p_i}$ over all $1 \le i \le n$
- $Time Complexity: O(n^2)$

$$$$

# Example

- For example, lets take a polynomial $y = f(x) = 7x^{2} + 4x + 3$
- $n = 3, m = 1, k = 4$
- $a = \{7, 4, 3\}$
- We are asked to differentiate the given polynomial once and find the value of it at given value of $x = k = 4$.
- After differentiating it once we get $f'(x) = 14x + 4$
- Substituting $x = 4$, we get, $f'(4) = (14 \times 4) + 4 = 60$

$$$$

# Implementation

```c
#include <stdio.h>
#include <math.h>

int main() {
    int t, n, m, k, i, j, ans;
    scanf("%d", &t);
    
    int a[10]; // This array is used to store
    int p[10]; // This array is used to store the powers
    
    while (t--) {
        scanf("%d%d%d", &n, &m, &k);
        
        for (i = 0; i < n; i++)
            scanf("%d", &a[i]);
        
        for (i = 0; i < n; i++)
            p[i] = n-i-1;
        
        //Multiply the power and the coefficient and decrement power
        for (i = 0; i < m; i++)
            for (j = 0; j < n; j++) {
                a[j] *= p[j];
                p[j]--;
            }
        
        ans = 0;
        
        for (i = 0; i < n; i++)
            if (p[i] >= 0)
                ans += a[i]*pow(k, p[i]);
        
        printf("%d\n", ans);
    }
    
    return 0;
}
```

$$$$

# Contest Material

- [Video editorial](https://www.youtube.com/watch?v=LyYn-_bTl-E&list=PLMk3wkBiPDIEQS59Ox7il1QH-w6TqCZY8&index=3)
- [Codeforces - Differentiation](https://codeforces.com/problemset/gymProblem/101807/D)
