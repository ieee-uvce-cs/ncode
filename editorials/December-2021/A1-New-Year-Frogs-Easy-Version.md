---
layout: default-editorial
title: December 2021
problem: A1 - New Year Frogs (Easy Version)
link: https://www.hackerrank.com/contests/ncode-december-2021/challenges/a1-new-year-frogs
---
# Solution

- The frogs can meet if the position of the frog $A$ is less than or equal to that of the frog $B$ and the distance between them is even.
- Time complexity: $O(1)$

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
        
        if (a <= b && (b-a)%2 == 0)
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
        
        int t, a, b;
        t = scan.nextInt();
        
        while (t-- > 0) {
            a = scan.nextInt();
            b = scan.nextInt();
            
            if (a <= b && (b-a)%2 == 0)
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
for _ in range(int(input())):
    a, b = map(int, input().split())
    
    if a <= b and (b-a)%2 == 0:
        print('YES')
    else:
        print('NO')
```

$$$$

# Contest Material

- [Codeforces - Watermelon](https://codeforces.com/contest/4/problem/A)
