---
layout: default-editorial
title: November 2021
problem: C - Paramathma
link: https://www.hackerrank.com/contests/uvce-ncode-november-2021/challenges/c-guess-the-index
---
# Solution

- Observe that the irrespective of the position, the character with the greatest ASCII value in the left substring must be greater than the character with the least ASCII value in the right substring.
- First we find the character with the maximum ASCII value for all prefixes of the string and character with least ASCII value for all suffixes of the string.
- The index $i$ for which the maximum ASCII value of prefix s less than the minimum ASCII value of suffix beginning at $i+1$ is the answer.
- If such an index does not exist, we simply print $-1$.
- Time complexity: $O(n)$

$$$$

# Implementation in C++

```cpp
#include <cstdio>
#include <iostream>
#include <string>

using namespace std;

int main() {
    int t, n, i, ans;
    scanf("%d", &t);
    
    string s;
    
    char s_prefix[100000], s_suffix[100000];
    char c_min, c_max;
    
    while (t--) {
        scanf("%d", &n);
        
        cin>>s;
        
        c_max = s[0];
        c_min = s[n-1];
        
        //Find the largest character in all prefixes of the string
        for (i = 0; i < n; i++) {
            if (s[i] > c_max)
                c_max = s[i];
            
            s_prefix[i] = c_max;
        }
        
        //Find the smallest character in all suffixes of the string
        for (i = n-1; i >= 0; i--) {
            if (s[i] < c_min)
                c_min = s[i];
            
            s_suffix[i] = c_min;
        }
        
        /*
            Initialize ans to -1 assuming no position exists
            which divides the string according to the problem
        */
        ans = -1;
        
        /*
            Compare the max and min characters in 
            prefix and suffix at all positions
        */
        for (i = 0; i < n-1; i++)
            if (s_prefix[i] < s_suffix[i+1])
                ans = i;
        
        printf("%d\n", ans);
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
        
        int t, n, i, ans;
        t = Integer.parseInt(scan.nextLine());

        String s;

        char s_prefix[] = new char[100000];
        char s_suffix[] = new char[100000];
        
        char c_min, c_max;

        boolean flag;

        while (t-- > 0) {
            n = Integer.parseInt(scan.nextLine());

            s = scan.nextLine();

            c_max = s.charAt(0);
            c_min = s.charAt(n-1);

            flag = false;

            //Find the maximum character in all prefixes of the string
            for (i = 0; i < n; i++) {
                if (s.charAt(i) > c_max)
                    c_max = s.charAt(i);

                s_prefix[i] = c_max;
            }

            //Find the minimum character in all suffixes of the string
            for (i = n-1; i >= 0; i--) {
                if (s.charAt(i) < c_min)
                    c_min = s.charAt(i);

                s_suffix[i] = c_min;
            }
            
            /*
                Initialize ans to -1 assuming no position exists
                which divides the string according to the problem
            */
            ans = -1;
            
            /*
                Compare the max and min characters in 
                prefix and suffix at all positions
            */
            for (i = 0; i < n-1; i++)
                if (s_prefix[i] < s_suffix[i+1])
                    ans = i;

            System.out.println(ans);
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
    
    s_prefix = []
    s_suffix = []
    
    for i in range(0, n):
        s_prefix.append(-1)
    for i in range(0, n):
        s_suffix.append(-1)
        
    c_max = s[0]
    c_min = s[n-1]
    
    # Find the largest character in all prefixes of the string
    for i in range(0, n):
        if s[i] > c_max:
            c_max = s[i]
            
        s_prefix[i] = c_max
        
    # Find the smallest character in all suffixes of the string
    for i in range(n-1, -1, -1):
        if s[i] < c_min:
            c_min = s[i]
            
        s_suffix[i] = c_min

    '''
        Initialize ans to -1 assuming no position exists
        which divides the string according to the problem
    '''
    ans = -1
    
    '''
        Compare the max and min characters in 
        prefix and suffix at all positions
    '''
    for i in range(0, n-1):
        if s_prefix[i] < s_suffix[i+1]:
            ans = i
            
    print(ans)
```

$$$$

# Contest Material

- [Codeforces - Prefixes](https://codeforces.com/problemset/problem/1216/A)
- [Codeforces - Prefix Flip (Easy Version)](https://codeforces.com/contest/1382/problem/C1)
- [Codeforces - Prefix Flip (Hard Version)](https://codeforces.com/contest/1382/problem/C2)
- [Codeforces - Prefixes and Suffixes](https://codeforces.com/problemset/problem/432/D)

