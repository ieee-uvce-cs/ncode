---
layout: default-editorial
title: October 2021
problem: A - Reach IEEE Room
link: https://www.hackerrank.com/contests/uvce-ncode-october-2021/challenges/a-reach-ieee-room
---
# Solution

- The problem can be solved greedily.
- $N/M$ is the maximum number of hops.
- $N$ mod $M$ is the minimum number of steps.
- $Time Complexity: O(1)$

$$$$

# Implementation in C++

```cpp
#include <iostream>

using namespace std;

int main() {
    int t, n, m;
    cin>>t;
    
    while (t--) {
        cin>>n>>m;
        cout<<n/m<<" "<<n%m<<"\n";
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
        
        int t, n, m;
        t = scan.nextInt();
        
        while (t-- > 0) {
            n = scan.nextInt();
            m = scan.nextInt();
            
            System.out.println(n/m + " " + n%m);
        }
    }
}
```

$$$$

# Implementation in Python

```python
t = int(input())
for _ in range(t):
    n, m = map(int, input().split())
    print(n//m, n%m)
```

$$$$

# Additional Material

- [Video Editorial](https://www.youtube.com/watch?v=yoBi8DYlvqA)
- [Codeforces - Cherry](https://codeforces.com/problemset/problem/1554/A)
- [Codeforces - Digits Sum](https://codeforces.com/problemset/problem/1553/A)
