---
layout: default-editorial
title: January 2022
problem: A - Ex O R?
link: https://www.hackerrank.com/contests/uvce-ncode-january-2022/challenges/a-ex-o-r
---
# Solution

- The XOR of two bits is zero if they are equal and one if they are not.
- Hence, we can iterate over all the characters the two strings and print '0' if they are equal and '1' if they are not equal.
- Time complexity: $O(n)$

$$$$

# Implementation in C++

```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
    int t, n, i;
    cin>>t;
    
    string s1, s2, res;
    
    while (t--) {
        cin>>n;
        
        cin>>s1>>s2;
        
        res = "";
        
        for (i = 0; i < n; i++) {
            //If the ith characters of both strings are equal,
	    //put a 0 at the end of the string. Otherwise,
	    //put a 1 at the end of the string.
            if (s1[i] == s2[i])
                res = res+'0';
            else
                res = res+'1';
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
        
        int t, n, i;
        t = Integer.parseInt(scan.nextLine());
        
        String s1, s2, res;
        
        while (t-- > 0) {
            n = Integer.parseInt(scan.nextLine());
            
            s1 = scan.nextLine();
            s2 = scan.nextLine();
            
            res = "";
            
            for (i = 0; i < n; i++) {
                //If the ith characters of both strings are equal,
		//put a 0 at the end of the string. Otherwise,
		//put a 1 at the end of the string.
                if (s1.charAt(i) == s2.charAt(i))
                    res += '0';
                else
                    res += '1';
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
    s1 = input()
    s2 = input()
    res = ''
    
    for i in range(0, n):
        # If the ith character of both strings are equal,
        # put a 0 at the end of the string.
        # Otherwise, put a 1 at the end of the string
        if s1[i] == s2[i]:
            res += '0'
        else:
            res += '1'
            
    print(res)
```

$$$$

# Contest Material

- [Codeforces - Ultra Fast Mathematician](https://codeforces.com/contest/61/problem/A)
