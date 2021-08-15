---
layout: default-editorial
title: August 2021
problem: A1 - Social Distancing (Easy Version)
link: https://www.hackerrank.com/contests/uvce-ncode-august-2021/challenges/a1-social-distancing
---

# Solution

- Let the number of cones be $freq(C)$ and the number of persons be $freq(P)$
- We can rearrange the string if $freq(P)$ <= $freq(C)$+1

$$$$

# Implementation using C++

```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    int t, n, i, count_p, count_c;
    cin>>t;
    
    string str;
    
    while(t--) {
        cin>>n>>str;
        
        count_p = 0;
        count_c = 0;
        
        //Count the number of 'P's and 'C's
        for (i = 0; i < n; i++) {
            if (str[i] == 'P')
                count_p++;
            else
                count_c++;
        }
        
        //Determine whether social distancing is possible
        if (count_p <= count_c+1)
            printf("YES\n");
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
            if (count_p <= count_c+1)
                System.out.println("YES");
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
    else:
        print('NO')
```

$$$$

# Additional Material

- [Video Editorial](https://www.youtube.com/watch?v=ZMmkdhwscUM)
- [Tutorialspoint - Strings in C++](https://www.tutorialspoint.com/cplusplus/cpp_strings.htm)
- [Tutorialspoint - Strings in Java](https://www.tutorialspoint.com/java/java_strings.htm)
- [Tutorialspoint - Strings in Python](https://www.tutorialspoint.com/python/python_strings.htm)
