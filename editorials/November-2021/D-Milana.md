---
layout: default-editorial
title: November 2021
problem: D - Milana
link: https://www.hackerrank.com/contests/uvce-ncode-november-2021/challenges/d-milana
---
# Solution

- The problem can be solved using DP.
- Since Akash can move only right or down, the minimum number of seconds required to reach the cells in the first row and first column are prefix sums of the row and column.
- Once the time required to reach the cells of the first row and first column are found, the number of seconds required to reach the remaining cells can be found.
- We have to use the formula, $a_{i, j} = a_{i, j}+min(a_{i-1, j}, a_{i, j-1})$, to find the minimum time required to reach each cell.
- The answer will be $a_{N, M}$, since we have found the minimum time required to reach each cell.
- To find the sequence in which cells are visited, we can use backtracking as we have marked the minimum time required to reach each cell.
- Time Complexity: $O(nm)$

$$$$

# Implementation in C++

```cpp
#include <cstdio>

using namespace std;

int main() {
    int t, n, m, i, j, k, x, y;
    scanf("%d", &t);
    
    long long a[1000][1000];
    
    int ans[1000000][2];
    
    while (t--) {
        scanf("%d%d", &n, &m);
        
        for (i = 0; i < n; i++)
            for (j = 0; j < m; j++)
                scanf("%lld", &a[i][j]);
        /*
            Find the time required to reach cells in the
            first row and the first column
        */
        for (i = 1; i < n; i++)
            a[i][0] += a[i-1][0];
        for (i = 1; i < m; i++)
            a[0][i] += a[0][i-1];
        
        //Find the time required to reach the remaining cells
        for (i = 1; i < n; i++)
            for (j = 1; j < m; j++)
                a[i][j] += ((a[i][j-1] < a[i-1][j]) ? a[i][j-1] : a[i-1][j]);
        
        x = n-1;
        y = m-1;
        
        k = 0;
        
        //Find the path which provides the quickest route
        while (x > 0 || y > 0) {
            ans[k][0] = x+1;
            ans[k][1] = y+1;
            
            k++;
            
            if (x == 0)
                y--;
            else if (y == 0)
                x--;
            else if (a[x-1][y] < a[x][y-1])
                x--;
            else
                y--;
        }
        
        printf("%lld\n", a[n-1][m-1]);
        
        printf("1 1\n");
        
        for (i = k-1; i >= 0; i--)
            printf("%d %d\n", ans[i][0], ans[i][1]);
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
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

            int t, n, m, i, j, k, x, y;
            t = Integer.parseInt(br.readLine());

            long a[][] = new long[1000][1000];

            int ans[][] = new int[1000000][2];

            String temp[];

            while (t-- > 0) {
                temp = br.readLine().split(" ");

                n = Integer.parseInt(temp[0]);
                m = Integer.parseInt(temp[1]);

                for (i = 0; i < n; i++) {
                    temp = br.readLine().split(" ");

                    for (j = 0; j < m; j++)
                        a[i][j] = Long.parseLong(temp[j]);
                }

                /*
                    Find the time required to reach cells in the
                    first row and the first column
                */
                for (i = 1; i < n; i++)
                    a[i][0] += a[i-1][0];
                for (i = 1; i < m; i++)
                    a[0][i] += a[0][i-1];

                //Find the time required to reach the remaining cells
                for (i = 1; i < n; i++)
                    for (j = 1; j < m; j++)
                        a[i][j] += ((a[i][j-1] < a[i-1][j]) ? a[i][j-1] : a[i-1][j]);

                x = n-1;
                y = m-1;

                k = 0;

                //Find the path which provides the quickest route
                while (x > 0 || y > 0) {
                    ans[k][0] = x+1;
                    ans[k][1] = y+1;

                    k++;

                    if (x == 0)
                        y--;
                    else if (y == 0)
                        x--;
                    else if (a[x-1][y] < a[x][y-1])
                        x--;
                    else
                        y--;
                }

                System.out.println(a[n-1][m-1]);

                System.out.println("1 1");

                for (i = k-1; i >= 0; i--)
                    System.out.println(ans[i][0]+" "+ans[i][1]);
            }
        }
        catch (Exception e) {
            
        }
    }
}
```

$$$$

# Implementation in Python

```python
t = int(input())
for _ in range(t):
    n, m = map(int, input().split())
    a = []
    for i in range(0, n):
        a.append(list(map(int, input().split())))
        
    '''
        Find the time required to reach cells in the
        first row and the first column
    '''
    for i in range(1, n):
        a[i][0] += a[i-1][0]
    for i in range(1, m):
        a[0][i] += a[0][i-1]
        
    # Find the time required to reach the remaining cells
    for i in range(1, n):
        for j in range(1, m):
            a[i][j] += min(a[i-1][j], a[i][j-1])

    x = n-1
    y = m-1

    ans = []

    # Find the path which provides the quickest route
    while x > 0 or y > 0:
        ans.append([x+1, y+1])

        if x == 0:
            y -= 1
        elif y == 0:
            x -= 1
        elif a[x-1][y] < a[x][y-1]:
            x -= 1
        else:
            y -= 1

    ans.append([1, 1])
    
    print(a[n-1][m-1])

    for i in range(len(ans)-1, -1, -1):
        print(ans[i][0], ans[i][1])
```

$$$$

# Additional Material

- [Video Editorial](https://www.youtube.com/watch?v=sCGkeyajwz4)
- [Youtube - Floyd Warshall Algorithm](https://www.youtube.com/watch?v=oNI0rf2P9gE)
- [UVCE NCode - Triwizard Tournament](https://www.hackerrank.com/contests/uvce-ncode-april-2020/challenges/triwizard-tournament-1)

