---
layout: default-editorial
title: March 2022
problem: C - Chief Minister's Day Out
link: https://www.hackerrank.com/contests/ncode-march-2022/challenges/c-chief-ministers-day-out
---
# Solution

- The problem can be solved using two pointer technique.
- Both the arrays are sorted initially.
- Since both the arrays are sorted, the first array can be traversed element by element.
- The second array can be traversed in such a way that, the pointer to the array points to the smallest element greater than the current element of the first array.
- In this case, it is guaranteed that either the element to which the pointer is pointing to, or the previous element to which the pointer is pointing to, gives the minimum absolute difference when subtracted with the element of the first array.
- Time Complexity: $O(nlogn)$

$$$$

# Implementation in C++

```cpp
#include <cstdio>
#include <algorithm>

using namespace std;

#define INF 1000000000

int main() {
    int t, n, i, j, k, res;
    scanf("%d", &t);
    
    int a[100000], b[100000];
    
    while (t--) {
        scanf("%d", &n);
        
        for (i = 0; i < n; i++)
            scanf("%d", &a[i]);
        
        for (i = 0; i < n; i++)
            scanf("%d", &b[i]);
        
        sort(a, a+n);
        sort(b, b+n);
        
        k = 0;
        res = INF;
        
        // Use two pointer technique to
        // find the element closest to a[i]
        for (i = 0; i < n; i++) {
            while (k < n && b[k] <= a[i])
                k++;
            
            if (k > 0)
                res = min(res, abs(a[i]-b[k-1]));
            if (k < n)
                res = min(res, abs(a[i]-b[k]));
        }
        
        printf("%d\n", res);
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
    public static int abs(int x) {
        if (x < 0)
            return -x;
        
        return x;
    }
    
    public static int min(int a, int b) {
        if (a < b)
            return a;
        
        return b;
    }
    
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        int t, n, i, j, k, res;
        t = scan.nextInt();
        
        while (t-- > 0) {
            n = scan.nextInt();
        
            int [] a = new int[n];
            int [] b = new int[n];
            
            for (i = 0; i < n; i++)
                a[i] = scan.nextInt();
            for (i = 0; i < n; i++)
                b[i] = scan.nextInt();
            
            Arrays.sort(a);
            Arrays.sort(b);
            
            res = 1000000000;
            k = 0;
            
            // Use two pointer technique to
            // find the element closest to a[i]
            for (i = 0; i < n; i++) {
                while (k < n && b[k] <= a[i])
                    k++;
                
                if (k > 0)
                    res = min(res, abs(a[i]-b[k-1]));
                if (k < n)
                    res = min(res, abs(a[i]-b[k]));
            }
            
            System.out.println(res);
        }
    }
}
```

$$$$

# Implementation in Python

```python
t = int(input())
for _ in range(t):
    n = int(input())
    a = list(map(int, input().split()))
    b = list(map(int, input().split()))
    
    a.sort()
    b.sort()
    
    res = 10**9
    k = 0
    
    # Use two pointer technique to
    # find the element closest to a[i]
    for i in range(0, n):
        while k < n and b[k] <= a[i]:
            k += 1
            
        if k > 0:
            res = min(res, abs(a[i]-b[k-1]))
        if k < n:
            res = min(res, abs(a[i]-b[k]))
            
    print(res)
```

$$$$

# Contest Material

- [Codeforces - K-divisible Sum](https://codeforces.com/problemset/problem/1541/B)
- [Codeforces - Different Divisors](https://codeforces.com/problemset/problem/1474/B)
- [Codeforces - Eugeny and Play List](https://codeforces.com/problemset/problem/302/B)




