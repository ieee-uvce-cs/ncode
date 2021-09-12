---
layout: default-editorial
title: September 2021
problem: D - Transform It!?
link: https://www.hackerrank.com/contests/uvce-ncode-september-2021/challenges/d-transform-it
---
# Solution

- The strings can be mapped to integers for easier access
- Create an adjacency matrix and initialize all the elements to infinity
- Mark all edges with 1
- Distance of a node from itself is 0. Hence diagonal elements are marked with 0
- Use Floyd Warshall algorithm to find the minimum distance between each node
- If for any query the corresponding edge in the adjacency matrix is infinity print -1.
- Otherwise print the corresponding element in the adjacency matrix
- $Time Complexity: O(n^3)$

$$$$

# Implementation in C++

```cpp
#include <cstdio>
#include <iostream>
#include <string>
#include <map>

using namespace std;

int INF = 1e9;

int main() {
    int t, n, m, q, i, j, k, x, y;
    scanf("%d", &t);
    
    map <string, int> mm;
    
    string s1, s2;
    
    int adj[100][100];
    
    while (t--) {
        scanf("%d%d%d", &n, &m, &q);
        
        //Map each string to an integer
        for (i = 0; i < n; i++) {
            cin>>s1;
            mm[s1] = i;
        }
        
        //Elements of adjacency matrix are initialised to INF
        for (i = 0; i < n; i++)
            for (j = 0; j < n; j++)
                adj[i][j] = INF;
        
        //M edges are marked with 1
        for (i = 0; i < m; i++) {
            cin>>s1>>s2;
            adj[mm[s1]][mm[s2]] = 1;
        }
        
        //Diagonal elements are initialised to 0
        for (i = 0; i < n; i++)
            adj[i][i] = 0;
        
        //Use Floyd-Warshall algorithm to find distance between nodes
        for (k = 0; k < n; k++)
            for (i = 0; i < n; i++)
                for (j = 0; j < n; j++)
                    if (adj[i][j] > adj[i][k]+adj[k][j])
                        adj[i][j] = adj[i][k]+adj[k][j];
        
        while (q--) {
            cin>>s1>>s2;
            
            //If adj[mm[s1]][mm[s2]] is INF, then path does not exist
            if (adj[mm[s1]][mm[s2]] == INF)
                printf("-1\n");
            else
                printf("%d\n", adj[mm[s1]][mm[s2]]);
        }
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
        int t, n, m, q, i, j, k, x, y;
        t = Integer.parseInt(scan.nextLine());
        
        int INF = 1000000009;

        HashMap <String, Integer> hm = new HashMap<>();

        String s1, s2;

        int adj[][] = new int[100][100];

        while (t-- > 0) {
            String temp[] = scan.nextLine().split(" ");
            n = Integer.parseInt(temp[0]);
            m = Integer.parseInt(temp[1]);
            q = Integer.parseInt(temp[2]);

            //Map each string to an integer
            for (i = 0; i < n; i++) {
                s1 = scan.nextLine();
                hm.put(s1, i);
            }

            //Elements of adjacency matrix are initialised to INF
            for (i = 0; i < n; i++)
                for (j = 0; j < n; j++)
                    adj[i][j] = INF;

            //M edges are marked with 1
            for (i = 0; i < m; i++) {
                temp = scan.nextLine().split(" ");
                s1 = temp[0];
                s2 = temp[1];
                adj[hm.get(s1)][hm.get(s2)] = 1;
            }

            //Diagonal elements are initialised to 0
            for (i = 0; i < n; i++)
                adj[i][i] = 0;

            //Use Floyd-Warshall algorithm to find distance between nodes
            for (k = 0; k < n; k++)
                for (i = 0; i < n; i++)
                    for (j = 0; j < n; j++)
                        if (adj[i][j] > adj[i][k]+adj[k][j])
                            adj[i][j] = adj[i][k]+adj[k][j];

            while (q-- > 0) {
                temp = scan.nextLine().split(" ");
                s1 = temp[0];
                s2 = temp[1];

                //If adj[mm[s1]][mm[s2]] is INF, then path does not exist
                if (adj[hm.get(s1)][hm.get(s2)] == INF)
                    System.out.println(-1);
                else
                    System.out.println(adj[hm.get(s1)][hm.get(s2)]);
            }
        }
    }
}
```

$$$$

# Implementation in Python

```python
adj = []

INF = (10**9)+7

for i in range(0, 100):
    temp = []
    for j in range(0, 100):
        temp.append(0)
    adj.append(temp)

t = int(input())
for _ in range(t):
    n, m, q = map(int, input().split())
    
    mapping = {}
    
    # Map each string to an integer
    for i in range(0, n):
        mapping[input()] = i
        
    # Elements of adjacency matrix are initialised to INF
    for i in range(0, n):
        for j in range(0, n):
            adj[i][j] = INF
        
    # M edges are marked with 1
    for i in range(0, m):
        temp = input().split()
        adj[mapping[temp[0]]][mapping[temp[1]]] = 1
        
    # Diagonal elements are intitialised to 0
    for i in range(0, n):
        adj[i][i] = 0
        
    # Use Floyd-Warshall algorithm to find distance between nodes
    for k in range(0, n):
        for i in range(0, n):
            for j in range(0, n):
                if adj[i][j] > adj[i][k]+adj[k][j]:
                    adj[i][j] = adj[i][k]+adj[k][j]
                    
    for i in range(0, q):
        temp = input().split()
        
        r1 = temp[0]
        r2 = temp[1]
        
        # If adj[mapping[r1]][mapping[r2]] is INF, then path does not exist
        if adj[mapping[r1]][mapping[r2]] == INF:
            print(-1)
        else:
            print(adj[mapping[r1]][mapping[r2]])
```

$$$$

# Additional Material

- [Video Editorial](https://www.youtube.com/watch?v=sCGkeyajwz4)
- [Youtube - Floyd Warshall Algorithm](https://www.youtube.com/watch?v=oNI0rf2P9gE)
- [UVCE NCode - Triwizard Tournament](https://www.hackerrank.com/contests/uvce-ncode-april-2020/challenges/triwizard-tournament-1)

