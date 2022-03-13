---
layout: default-editorial
title: March 2022
problem: A1 - Election Result (Easy Version)
link: https://www.hackerrank.com/contests/ncode-march-2022/challenges/a1-election-result-easy-version
---
# Solution

- The votes of each party can be compared with the sum of votes of the other two parties.
- Time complexity: $O(1)$

$$$$

# Implementation in C++

```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
    int t, a, b, c;
    cin>>t;
    
    while (t--) {
        cin>>a>>b>>c;
        
        // Check whether any party has won by majority
        if (a > b+c)
            cout<<"MAJORITY\n";
        else if (b > a+c)
            cout<<"MAJORITY\n";
        else if (c > a+b)
            cout<<"MAJORITY\n";
        else
            cout<<"COALITION\n";
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
        
        int t, a, b, c;
        t = scan.nextInt();
        
        while (t-- > 0) {
            a = scan.nextInt();
            b = scan.nextInt();
            c = scan.nextInt();
            
            // Check whether any party has won by majority
            if (a > b+c)
                System.out.println("MAJORITY");
            else if (b > a+c)
                System.out.println("MAJORITY");
            else if (c > a+b)
                System.out.println("MAJORITY");
            else
                System.out.println("COALITION");
        }
    }
}
```

$$$$

# Implementation in Python

```python
t = int(input())
for _ in range(t):
    a, b, c = map(int, input().split())
    
    # Check whether any party has won by a majority
    if a > b+c:
        print('MAJORITY')
    elif b > a+c:
        print('MAJORITY')
    elif c > a+b:
        print('MAJORITY')
    else:
        print('COALITION')
```

$$$$

# Contest Material

- [Codechef - Elections in Chefland](https://www.codechef.com/problems/ELECTIONS)
- [Codeforces - Elections](https://codeforces.com/problemset/problem/1593/A)


