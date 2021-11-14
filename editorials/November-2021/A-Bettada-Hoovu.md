---
layout: default-editorial
title: November 2021
problem: A - Bettada Hoovu
link: https://www.hackerrank.com/contests/uvce-ncode-november-2021/challenges/a-bettada-hoovu
---
# Solution

- Since it is guaranteed that there is exactly one flower, a nested for loop can be run to find the coordinates of the flower.
- Time Complexity: $O(nm)$

$$$$

# Implementation in C++

```cpp
#include <cstdio>
#include <iostream>
#include <string>

using namespace std;

int main() {
    int t, n, m, i, j, x, y;
    scanf("%d", &t);
    
    string s[10];
    
    while (t--) {
        scanf("%d%d", &n, &m);
        
        for (i = 0; i < n; i++)
            cin>>s[i];
        
        //Find the coordinates of the flower
        for (i = 0; i < n; i++)
            for (j = 0; j < m; j++)
                if (s[i][j] == 'F') {
                    x = i+1;
                    y = j+1;
                }
        
        printf("%d %d\n", x, y);
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
        
        int t, n, m, i, j, x, y;
        t = Integer.parseInt(scan.nextLine());
        
        String temp[];
        
        String s[];
        
        while (t-- > 0) {
            temp = scan.nextLine().split(" ");
            
            n = Integer.parseInt(temp[0]);
            m = Integer.parseInt(temp[1]);
            
            s = new String[n];
            
            for (i = 0; i < n; i++)
                s[i] = scan.nextLine();
            
            x = 0;
            y = 0;
            
            //Find the coordinates of the flower
            for (i = 0; i < n; i++)
                for (j = 0; j < m; j++)
                    if (s[i].charAt(j) == 'F') {
                        x = i+1;
                        y = j+1;
                    }
            
            System.out.println(x + " " + y);
        }
    }
}
```

$$$$

# Implementation in Python

```python
t = int(input())
for _ in range(0, t):
    n, m = map(int, input().split())
    a = []
    for i in range(0, n):
        a.append(input())
    x = 0
    y = 0
    # Find the coordinates of the flower
    for i in range(0, n):
        for j in range(0, m):
            if a[i][j] == 'F':
                x = i+1
                y = j+1
    print(x, y)
```

$$$$

# Additional Material

- [Stack Overflow - Traversing 2d array row first and column first](https://stackoverflow.com/questions/21439619/traversing-2d-array-row-first-and-then-column-first)

