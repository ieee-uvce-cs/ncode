---
layout: default-editorial
title: December 2021
problem: A2 - New Year Frogs (Hard Version)
link: https://www.hackerrank.com/contests/ncode-december-2021/challenges/a2-new-year-frogs
---
# Solution

- If $A > B$ or the parity of $A$ and $B$ are not same, the result is $-1$.
- Otherwise, the point at which the frogs meet is $(A+B)/2$
- Take extra care while using modulo operator in C/C++ for negative numbers
- Time Complexity: $O(1)$

$$$$

# Implementation in C++

```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
    int t, a, b;
    cin>>t;
    
    while (t--) {
        cin>>a>>b;
        
        if (a > b || (a+b)%2)
            cout<<"-1\n";
        else
            cout<<(a+b)/2<<"\n";
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
        int t, a, b;
        
        t = scan.nextInt();
        
        while (t-- > 0) {
            a = scan.nextInt();
            b = scan.nextInt();
            
            if (a > b || (a+b)%2 != 0)
                System.out.println(-1);
            else
                System.out.println((a+b)/2);
        }
    }
}
```

$$$$

# Implementation in Python

```python
for _ in range(int(input())):
    a, b = map(int, input().split())
    if a > b or (a+b)%2 != 0:
        print(-1)
    else:
        print((a+b)//2)
```

$$$$

# Contest Material

- [Codeforces - Vasya and Hipster](https://codeforces.com/contest/581/problem/A)

