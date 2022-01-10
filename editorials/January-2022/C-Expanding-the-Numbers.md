---
layout: default-editorial
title: January 2022
problem: C - Expanding the Number
link: https://www.hackerrank.com/contests/uvce-ncode-january-2022/challenges/c-expanding-the-number
---
# Solution

- Notice that for the $i^{th}$ decimal position, you have to write $s_i \times 10^{i-1}$
- We can simply write $i-1$ zeros for each decimal position after writing **"s_i \times 1"**
- We need to be careful not to print any extra **'x'** characters.
- Hence, we can print the decimal expansion of the first character and for the remaining charcters, we can prefix a **'+'** character before printing the decimal expansion.

$$$$

# Implementation in C++

```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
    int t, n, i, j;
    scanf("%d", &t);
    
    string s;
    
    while (t--) {
        scanf("%d", &n);
        
        cin>>s;
        
        // Print the first character followed by n-1 zeros
        printf("%c x 1", s[0]);
        
        j = n-1;
        
        while (j--)
            printf("0");
        
        for (i = 1; i < n; i++) {
            // If the ith character is 0, we do not print anyhing
            if (s[i] == '0')
                continue;
            
            // Otherwise, we print a + symbol
            // followed by s[i]
            // and x 1
            printf(" + %c x 1", s[i]);
            
            j = n-i-1;
            
            // print n-i-1 zeros
            while (j--)
                printf("0");
        }
        
        printf(" \n");
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
        
        int t, n, i, j;
        t = Integer.parseInt(scan.nextLine());
        
        String s;
        
        while (t-- > 0) {
            n = Integer.parseInt(scan.nextLine());
            
            s = scan.nextLine();
            
            // Print the first character followed by n-1 zeros
            System.out.print(s.charAt(0) + " x 1");
            
            j = n-1;
            
            while (j-- > 0)
                System.out.print('0');
                
            for (i = 1; i < n; i++) {
                // If the ith character is 0, we do not print anyhing
                if (s.charAt(i) == '0')
                    continue;
                
                // Otherwise, we print a + symbol
                // followed by s[i]
                // and x 1
                System.out.print(" + " + s.charAt(i) + " x 1");
                
                j = n-i-1;
                
                // print n-i-1 zeros
                while (j-- > 0)
                    System.out.print('0');
            }
            
            System.out.println();
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
    s = input()
    
    # Print the first character followed by 
    # n-1 zeros
    print(s[0], end = ' x 1')
    
    for i in range(0, n-1):
        print(0, end = '')
        
    for i in range(1, n):
        # If ith character is 0, we do not print anything
        if s[i] == '0':
            continue
            
        # Otherwise, we print a + symbol
        # followed by s[i]
        # and x 1
        print(' +', s[i], end = ' x 1')
        
        for j in range(0, n-i-1):
            print(0, end = '')
            
    print()
```

$$$$

# Contest Material

- [Codeforces - Sum of Round Numbers](https://codeforces.com/contest/1352/problem/A)

