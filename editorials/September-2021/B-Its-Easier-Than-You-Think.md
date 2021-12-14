---
layout: default-editorial
title: September 2021
problem: B - Its Easier Than You Think
link: https://www.hackerrank.com/contests/uvce-ncode-september-2021/challenges/b-its-easier-than-you-think
---
# Solution

- If we write down all the pairs of non-negative numbers whose sum is $N$, we can find the number of pairs is $N+1$.
- $Time Complexity: O(1)$

$$$$

# Implementation in C++

```cpp
#include <iostream>

using namespace std;

int main() {
    int t, n;
    scanf("%d", &t);
    
    while (t--) {
        cin>>n;
        
        //The number of pairs is n+1
        cout<<n+1<<"\n";
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
        
        int t, n;
        t = scan.nextInt();
        
        while (t-- > 0) {
            n = scan.nextInt();
            
            //The number of pairs is n+1
            System.out.println(n+1);
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
    
    # The number of pairs is n+1
    print(n+1)
```

$$$$

# Contest Material

- [Video Editorial](https://www.youtube.com/watch?v=NvyxVs_7d7g)
- [Codeforces problem - Filling Diamonds](https://codeforces.com/contest/1339/problem/A)
- [Codeforces problem - Alex and Rhombus](https://codeforces.com/contest/1180/problem/A)

