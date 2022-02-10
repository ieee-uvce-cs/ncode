---
layout: default-editorial
title: February 2022
problem: C2 - Maximum Joy (Hard Version)
link: https://www.hackerrank.com/contests/ncode-february-2022/challenges/c2-maximum-joy-hard-version
---
# Solution

- 
- Time Complexity: $O(n)

$$$$

# Implementation in C++

```cpp
#include <iostream>
#include <vector>

using namespace std;

vector <int> adj[100000];

int a[100000];

void dfs(int node, int parent) {
    // The function subtracts subtree sum of all
    // children of the node
    for (int i = 0; i < adj[node].size(); i++) 
        if (adj[node][i] != parent) {
            a[node] -= a[adj[node][i]];
            dfs(adj[node][i], node);
        }
}

int main() {
    int t, n, m, i, j, x, y;
    cin>>t;
    
    while (t--) {
        cin>>n;
        
        for (i = 0; i < n; i++) {
            cin>>a[i];
            
            adj[i].clear();
        }
        
        for (i = 1; i < n; i++) {
            cin>>x>>y;
            
            adj[x-1].push_back(y-1);
            adj[y-1].push_back(x-1);
        }
        
        dfs(0, 0);
        
        for (i = 0; i < n; i++)
            cout<<a[i]<<" ";
        
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
    public static ArrayList <Integer> [] adj = new ArrayList[100000];
    public static int a[] = new int[100000];
    
    public static void dfs(int node, int parent) {
        // The function subtracts subtree sum of all
        // children of the node
        for (int i = 0; i < adj[node].size(); i++) 
            if (adj[node].get(i) != parent) {
                a[node] -= a[adj[node].get(i)];
                dfs(adj[node].get(i), node);
            }
    }

    public static void main(String args[]) {
        Scanner scan = new Scanner(System.in);
        
        int t, n, m, i, j, x, y;
        t = scan.nextInt();

        while (t-- > 0) {
            n = scan.nextInt();

            for (i = 0; i < n; i++) {
                a[i] = scan.nextInt();
                adj[i] = new ArrayList <Integer>();
            }

            for (i = 1; i < n; i++) {
                x = scan.nextInt();
                y = scan.nextInt();

                adj[x-1].add(y-1);
                adj[y-1].add(x-1);
            }

            dfs(0, 0);

            for (i = 0; i < n; i++)
                System.out.print(a[i]+" ");

            System.out.println();
        } 
    }
}
```

$$$$

# Implementation in Python

```python
a = []
adj = []

def dfs(node, parent):
    # The function subtracts subtree sum of all
    # children of the node
    for i in range(0, len(adj[node])):
        if adj[node][i] != parent:
            a[node] -= a[adj[node][i]]
            dfs(adj[node][i], node)
            
for i in range(0, 100000):
    adj.append([])
    
t = int(input())
for _ in range(t):
    n = int(input())
    a = list(map(int, input().split()))
    
    for i in range(0, n):
        adj[i] = []
        
    for i in range(1, n):
        x, y = map(int, input().split())
        
        adj[x-1].append(y-1)
        adj[y-1].append(x-1)
        
    dfs(0, 0)
    
    print(*a)
```

$$$$

# Contest Material

- [Youtube - Representation of graphs and trees using Adjacency Matrix and Adjacency Lists (Jenny's Lectures)](https://www.youtube.com/watch?v=5hPfm_uqXmw)
- [Youtube - BFS and DFS (Abdul Bari)](https://www.youtube.com/watch?v=pcKY4hjDrxk)
- [CP Handbook](https://cses.fi/book/book.pdf)
- [GeeksForGeeks - Level of each node of tree using BFS](https://www.geeksforgeeks.org/level-node-tree-source-node-using-bfs/)
- [GeeksForGeeks - Parent of each node of tree](https://www.geeksforgeeks.org/find-parent-of-each-node-in-a-tree-for-multiple-queries/)
