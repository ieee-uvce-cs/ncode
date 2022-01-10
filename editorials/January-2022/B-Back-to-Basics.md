---
layout: default-editorial
title: January 2022
problem: B - Back to Basics
link: https://www.hackerrank.com/contests/uvce-ncode-january-2022/challenges/b-back-to-basics
---
# Solution

- If $a$ is a multiple of $b$, we need not perform any operations.
- Otherwise, we can increase $a$ by $b-(a%b)$ and make the $a$ a multiple of $b$.
- Time Complexity: $O(1)$

$$$$

# Implementation in C++

```cpp
#include <iostream>

using namespace std;

int main() {
    int t, a, b;
    cin>>t;
    
    while (t--) {
        cin>>a>>b;
        
        // If a is a multiple of b, we need not perform
        // any operations. Otherwise, we can increase a
        // by b-(a%b)
        if (a%b == 0)
            cout<<0<<"\n";
        else
            cout<<b-(a%b)<<"\n";
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

            // If a is a multiple of b, we need not perform
            // any operations. Otherwise, we can increase a
            // by b-(a%b)
            if (a%b == 0)
                System.out.println(0);
            else
                System.out.println(b-(a%b));
        }
    }
}
```

$$$$

# Implementation in Python

```python
t = int(input())
for _ in range(t):
    a, b = map(int, input().split())
    
    # If a is divisible by b, we need not perform
    # any operations. Otherwise, we can increase
    # a by b-(a%b)
    if a%b == 0:
        print(0)
    else:
        print(b-(a%b))

```

$$$$

# Contest Material

- [Codeforces - Divisibility Problem](https://codeforces.com/contest/1328/problem/A)

