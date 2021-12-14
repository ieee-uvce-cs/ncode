---
layout: default-editorial
title: September 2021
problem: C - Lisbon and Icecreams
link: https://www.hackerrank.com/contests/uvce-ncode-september-2021/challenges/c-lisbon-and-ice-creams
---
# Solution

- $S1, S2$ and $S3$ can be traversed simultaneously.
- If we come across a **'1'** in $S1$, we decrease $F$ by $1$
- If we come across a **'1'** in $S2$, we decrease $N$ by $1$
- If we come across a **'1'** in $S3$, we decrease $M$ by $1$
- In each minute, we print the product $F \times N \times M$.
- $Time Complexity: O(n)$

$$$$

# Implementation in C++

```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    int t, f, n, m, k, i;
    cin>>t;
    
    string s1, s2, s3;
    
    while (t--) {
        cin>>f>>n>>m>>k;
        cin>>s1>>s2>>s3;
        
        for (i = 0; i < k; i++) {
            //Reduce f, n, m according to s1[i], s2[i], s3[i]
            if (s1[i] == '1')
                f--;
            if (s2[i] == '1')
                n--;
            if (s3[i] == '1')
                m--;
            
            //Number of combinations is f*n*m
            cout<<f*n*m<<" ";
        }
        
        cout<<"\n";
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
        
        int t, f, n, m, k, i;
        t = scan.nextInt();
        String s1, s2, s3;

        while (t-- > 0) {
            f = scan.nextInt();
            n = scan.nextInt();
            m = scan.nextInt();
            k = scan.nextInt();
            scan.nextLine();
            
            s1 = scan.nextLine();
            s2 = scan.nextLine();
            s3 = scan.nextLine();

            for (i = 0; i < k; i++) {
                //Reduce f, n, m according to s1[i], s2[i], s3[i]
                if (s1.charAt(i) == '1')
                    f--;
                if (s2.charAt(i) == '1')
                    n--;
                if (s3.charAt(i) == '1')
                    m--;

                //Number of combinations is f*n*m
                System.out.print(f*n*m + " ");
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
    f, n, m, k = map(int, input().split())
    s1 = input()
    s2 = input()
    s3 = input()
    
    for i in range(0, k):
        # Reduce f, n, m according to s1[i], s2[i], s3[i]
        if s1[i] == '1':
            f -= 1
        if s2[i] == '1':
            n -= 1
        if s3[i] == '1':
            m -= 1
            
        # Number of combinations is f*n*m
        print(f*n*m, end = ' ')
    print()
```

$$$$

# Contest Material

- [Video Editorial](https://www.youtube.com/watch?v=WHoSEYlC6YQ)
- [Vedantu - Fundamental Principle of Counting](https://www.vedantu.com/maths/fundamental-principle-of-counting)
- [Codeforces problem - Customising the Track](https://codeforces.com/contest/1543/problem/B)
