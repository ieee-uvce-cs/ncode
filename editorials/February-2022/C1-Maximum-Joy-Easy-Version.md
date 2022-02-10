---
layout: default-editorial
title: February 2022
problem: C1 - Maximum Joy (Easy Version)
link: https://www.hackerrank.com/contests/ncode-february-2022/challenges/c1-maximum-joy
---
# Solution

- For the easy version of the problem, the constraints are small.
- Hence, we can start in all possible positions and find the total cost.
- We have to print the maximum cost among total costs for all positions.
- Time complexity: $O(n^2)$

$$$$

# Implementation in C++

```cpp
#include <iostream>

using namespace std;

int main() {
    int t, n, i, j, k, temp, time, res;
    cin>>t;
    
    int a[100];
    
    while (t--) {
        cin>>n;
        
        for (i = 0; i < n; i++)
            cin>>a[i];
        
        res = 0;
        
        // Calculate the cost for each starting position
        // and choose the maximum among them
        for (i = 0; i < n; i++) {
            temp = 0;
            time = 1;
            
            for (j = i; j < i+n; j++) {
                temp += time*a[j%n];
                time++;
            }
            
            res = max(res, temp);
        }
        
        cout<<res<<"\n";
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
        
        int t, n, i, j, k, time, temp, res;
        t = scan.nextInt();
        
        int[] a = new int[100];
        
        while (t-- > 0) {
            n = scan.nextInt();
            
            for (i = 0; i < n; i++)
                a[i] = scan.nextInt();
            
            res = 0;
            
            // Calculate the cost for each starting position
            // and choose the maximum among them
            for (i = 0; i < n; i++) {
                temp = 0;
                time = 1;
                
                for (j = i; j < n+i; j++) {
                    temp += time*a[j%n];
                    time++;
                }
                
                if (temp > res)
                    res = temp;
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
    res = 0
    
    # Calculate the cost for each starting position
    # and choose the maximum among them
    for i in range(0, n):
        time = 1
        temp = 0
        for j in range(i, n+i):
            temp += time*a[j%n]
            time += 1
            
        res = max(res, temp)
    print(res)
```

$$$$

# Contest Material

- [Codeforces - Sum of Round Numbers](https://codeforces.com/contest/1352/problem/A)

