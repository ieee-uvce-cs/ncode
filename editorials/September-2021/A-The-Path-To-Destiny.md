---
layout: default-editorial
title: September 2021
problem: A - The Path To Destiny
link: https://www.hackerrank.com/contests/uvce-ncode-september-2021/challenges/a-the-path-to-destiny
---
# Solution

- Let source point be $(a, b)$ and destination point as $(x, y)$
- If $a$ equals $x$ ( $X$-coordinates ) or $b$ equals $y$ ( $Y$-coordinates ) then they are in the same line. Hence only one straight line is required.
- Otherwise they are not in same line and we need 2 straight line paths
- $Time Complexity: O(1)$

$$$$

# Implementation in C++

```cpp
#include <iostream>

using namespace std;

int main() {
    int t, a, b, x, y;
    cin>>t;
    
    while (t--) {
        cin>>a>>b>>x>>y;
        
        /*
            If a equals x or b equals y, 
            we can travel in one straight line.
            Otherwise, we can travel in
            2 straight lines
        */
        
        if (a == x || b == y)
            cout<<1<<"\n";
        else
            cout<<2<<"\n";
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
        
        int t, a, b, x, y;
        
        t = scan.nextInt();
        
        while (t-- > 0) {
            a = scan.nextInt();
            b = scan.nextInt();
            x = scan.nextInt();
            y = scan.nextInt();
            
            /*
                If a equals x or b equals y, 
                we can travel in one straight line.
                Otherwise, we can travel in
                2 straight lines
            */
            
            if (a == x || b == y)
                System.out.println(1);
            else
                System.out.println(2);
        }
    }
}
```

$$$$

# Implementation in Python

```python
t = int(input())
for _ in range(t):
    a, b, x, y = map(int, input().split())
    
    # If a eqauls x or b equals y
    # we can travel in a single straight line
    # Otherwise, we can travel in
    # 2 straight lines
    
    if a == x or b == y:
        print(1)
    else:
        print(2)
```

$$$$

# Additional Material

- [Video Editorial](https://www.youtube.com/watch?v=YC2x98EO6Sw)
- [Codeforces problem - Shortest Path With Obstacle](https://codeforces.com/contest/1547/problem/A)
- [Codeforces problem - Shawarma Tent](https://codeforces.com/contest/1271/problem/C)
