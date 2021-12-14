---
layout: default-editorial
title: August 2021
problem: A2 - Social Distancing (Hard Version)
link: https://www.hackerrank.com/contests/uvce-ncode-august-2021/challenges/a2-social-distancing-hard-version
---

# Solution 

- Let the number of cones be $freq(C)$ and the number of persons be $freq(P)$
- We can rearrange the string if $freq(P)$ <= $freq(C)$+1
- The rearrangement can be of the form **"PCPCPC....CPCP"**.
- The additional cones can be put at the end of the string or the beginning of the string.

$$$$

# Implementation using C++

```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    int t, n, i, p_count, c_count;
    cin>>t;
    
    string str;
    
    while(t--) {
        cin>>n>>str;
        
        p_count = 0;
        c_count = 0;
        
        for (i = 0; i < n; i++) {
            if (str[i] == 'P')
                p_count++;
            else
                c_count++;
        }
        
        if (p_count <= c_count+1) {
            printf("YES\n");
            
            while (p_count) {
                printf("P");
                p_count--;
                
                if (c_count) {
                    printf("C");
                    c_count--;
                }
            }
            
            while (c_count--)
                printf("C");
            
            printf("\n");
        }
        else
            printf("NO\n");
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
        
        int t, n, i, count_p, count_c;
        
        t = scan.nextInt();
        scan.nextLine();
        
        String s;
        
        while (t-- > 0) {
            n = scan.nextInt();
            scan.nextLine();
            
            s = scan.nextLine();
            
            count_p = 0;
            count_c = 0;
            
            //Count the number of 'P's and 'C's
            for (i = 0; i < n; i++)
                if (s.charAt(i) == 'P')
                    count_p++;
                else
                    count_c++;
            
            //Determine whether social distancing is possible or not
            if (count_p <= count_c+1) {
                System.out.println("YES");
                
                //If answer is YES, find a possible arrangement greedily
                while (count_p > 0) {
                    System.out.print('P');
                    count_p--;
                    
                    if (count_c > 0) {
                        System.out.print('C');
                        count_c--;
                    }
                }
                
                while (count_c > 0) {
                    System.out.print('C');
                    count_c--;
                }
                
                System.out.println();
            }
            else
                System.out.println("NO");
        }
    }
}
```

$$$$

# Implementation using Python

```python
for _ in range(int(input())):
    n = int(input())
    s = input()
    if s.count('P') <= s.count('C')+1:
        print('YES')
        
        p = s.count('P')
        c = s.count('C')
        
        res = ''
        
        #If social distancing is possible, construct a possible string
        while p > 0:
            res += 'P'
            p -= 1
            
            if c > 0:
                res += 'C'
                c -= 1
                
        while c > 0:
            res += 'C'
            c -= 1
            
        print(res)
    else:
        print('NO')
```

$$$$

# Contest Material

- [Video Editorial](https://www.youtube.com/watch?v=vNfshQXpjy0)
- [Tutorialspoint - Strings in C++](https://www.tutorialspoint.com/cplusplus/cpp_strings.htm)
- [Tutorialspoint - Strings in Java](https://www.tutorialspoint.com/java/java_strings.htm)
- [Tutorialspoint - Strings in Python](https://www.tutorialspoint.com/python/python_strings.htm)

