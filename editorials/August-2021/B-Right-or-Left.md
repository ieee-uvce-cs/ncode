---
layout: default-editorial
title: August 2021
problem: B - Right or Left?
link: https://www.hackerrank.com/contests/uvce-ncode-august-2021/challenges/b-right-or-left
---

# Solution 

- In a circular arrangement of chairs, chair $1$ comes after the chair $N$ and chair $N$ comes before chair $1$.
- If we are on a chair and we move $N$ chairs to the right or left, we will be on the same chair after the moves.
- Hence, we can add $X$ to the chair position when $C = $ ***'r'*** and subtract $X$ from the chair position when $C = $***'l'***
- Finally, we can print the sum modulo $N$
- Note that in some languages such as C, C++ and Java, modulo of a negative number is negative. We can add $N$ to the result in such cases.
- In Python, the modulo of a negative number is positive.

$$$$

# Implementation using C++

```cpp
#include <iostream>

using namespace std;

int main() {
    int t, n, m, k, i, x;
    cin>>t;
    
    char ch;
    
    int ss;
    
    while (t--) {
        cin>>n>>k>>m;
            
        ss = k;
        
        for (i = 0; i < m; i++) {
            cin>>x>>ch;
            
            //If ch is 'l' subtract x from sum. If ch is 'r' add x to sum
            if (ch == 'l')
                ss -= x;
            else
                ss += x;
        }
        
        ss %= n;
        
        //If sum is negetaive, add n to the sum
        if (ss < 0)
            ss += n;
        
        //If sum is zero, then we are on the last chair
        cout<<((ss == 0) ? n : ss)<<"\n";
    }
    
    return 0;
}
```

$$$$

# Implementation using Java

```java
import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        int t, n, m, k, i, x, ss;
        
        t = scan.nextInt();
        scan.nextLine();
        
        String s[];
        
        while (t-- > 0) {
            n = scan.nextInt();
            k = scan.nextInt();
            m = scan.nextInt();
            scan.nextLine();
            
            ss = k;
            
            for (i = 0; i < m; i++) {
                s = scan.nextLine().split(" ");
                x = Integer.parseInt(s[0]);
                    
                char c = s[1].charAt(0);
                
                //If ch is 'r' add x to sum. If ch is 'l' subtract x from sum
                if (c == 'r')
                    ss += x;
                else
                    ss -= x;
            }
            
            ss %= n;
            
            //If sum is negetaive, add n to the sum
            if (ss < 0)
                ss += n;
            
            //If sum is zero, then we are on the last chair
            if (ss == 0)
                System.out.println(n);
            else
                System.out.println(ss);
            
        }
    }
}
```

$$$$

# Implementation using Python

```python
for _ in range(int(input())):
    n, k, m = map(int, input().split())
    ss = k
    
    # If C is 'l', subtract X from sum. If C is 'r' add X to sum
    for i in range(0, m):
        a = input().split()
        if a[1] == 'l':
            ss -= int(a[0])
        else:
            ss += int(a[0])
            
    # If sum is n, we are on the last chair
    if ss%n == 0:
        print(n)
    else:
        print(ss%n)
```

$$$$

# Additional Material

- [Video Editorial](https://www.youtube.com/watch?v=vQns2cT30RM)
- [Tutorialspoint - Modulus of Negative Numbers in C](https://www.tutorialspoint.com/modulus-of-negative-numbers-in-c)
