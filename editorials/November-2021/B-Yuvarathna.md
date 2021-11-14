---
layout: default-editorial
title: November 2021
problem: B - Yuvarathna
link: https://www.hackerrank.com/contests/uvce-ncode-november-2021/challenges/b-yuvarathna
---
# Solution

- According to relative motion in physics, we can consider the goon to be stationary.
- The Arjun's speed becomes $U-V$ and his distance from the goon becomes $B-A$.
- The time required for Arjun to overtake the goon will be $(B-A)/(U-V)$.
- Time Complexity: $O(1)$

$$$$

# Implementation in C++

```cpp
#include <cstdio>

using namespace std;

int main() {
    int t, a, b, u, v;
    scanf("%d", &t);
    
    while (t--) {
        scanf("%d%d%d%d", &a, &b, &u, &v);
        
        //Use the formula for relative speed
        printf("%d\n", ((b-a)/(u-v))+1);
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
        
        int t, a, b, u, v;
        t = Integer.parseInt(scan.nextLine());
        
        String temp[];
        
        while (t-- > 0) {
            temp = scan.nextLine().split(" ");
            
            a = Integer.parseInt(temp[0]);
            b = Integer.parseInt(temp[1]);
            u = Integer.parseInt(temp[2]);
            v = Integer.parseInt(temp[3]);
            
            //Use the formula for relative speed
            System.out.println(((b-a)/(u-v))+1);
        }
    }
}
```

$$$$

# Implementation in Python

```python
t = int(input())
for _ in range(t):
    a, b, u, v = map(int, input().split())
    # Use the formula for relative speed
    print(((b-a)//(u-v))+1)
```

$$$$

# Contest Material

- [Wikipedia - Relative Velocity](https://en.wikipedia.org/wiki/Relative_velocity)
- [Codeforces - Running Student](https://codeforces.com/problemset/problem/9/B)



