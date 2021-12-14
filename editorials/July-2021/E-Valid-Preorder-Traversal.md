---
layout: default-editorial
title: July 2021
problem: E - Valid Preorder Traversal?
link: https://www.hackerrank.com/contests/uvce-ncode-july-2021/challenges/impetus-xor
---
# Solution

- Notice the fact that, for any node $V$ in a tree, the nodes in the subtree of $V$ appear exaclty after $V$ in the preorder traversal of the tree.
- Once, all the nodes in the subtree of $V$ have appeared in the preorder traversal, the next node in the preorder traversal is a child of any of the ancestors of $V$.
- Using the second fact, we can check whether the node in consideration is a child of any of the ancestors starting from $V$.
- Assume that the node $V$ is present in $i^{th}$ position of the array and $U$ is present in the $i+1^{th}$ position of the array.
- If $U$ is a child of $V$, then $U$ can be traversed.
- If $U$ is not a child of $V$ and a node is found such that it is an ancestor of $V$ and is a parent of $U$, then $U$ can be traversed.
- If $U$ is not a child of $V$ and there does not exist any ancestor of $V$ which is not a parent of $U$, we can conclude that the given array is not a preorder traversal of the graph.
- $Time Complexity: O(n)$

$$$$

# Implementation

```cpp
#include <cstdio>
#include <vector>

using namespace std;

vector <int> adj[10000];

int p[10000];

//Recursive function to find the parent of each node
void find_parent(int node, int parent) {
    p[node] = parent;
    
    for (int i = 0; i < adj[node].size(); i++)
        if (adj[node][i] != parent)
            find_parent(adj[node][i], node);
}

int main() {
    int t, n, i, j, x, y, top;
    scanf("%d", &t);
    
    int a[10000];
    
    int stack[10000];
    
    while (t--) {
        scanf("%d", &n);
        
        for (i = 0; i < n; i++) {
            scanf("%d", &a[i]);
            a[i]--;
        }
        
        for (i = 0; i < n; i++)
            adj[i].clear();
        
        for (i = 1; i < n; i++) {
            scanf("%d%d", &x, &y);
            
            adj[x-1].push_back(y-1);
            adj[y-1].push_back(x-1);
        }
        
        // Find the parent node of all the nodes, with a[0] as root node
        find_parent(a[0], -1);
        
        top = -1;
        
        // Push the a[0] onto the stack
        stack[++top] = a[0];
        
        i = 1;
        
        while (i < n && top > -1) {
            // Pop nodes which are not parent of node a[i]
            while (top > -1 && stack[top] != p[a[i]])
                top--;
            
            // Push node if its parent is present in stack
            if (i < n && top > -1) {
                stack[++top] = a[i];
                
                i++;
            }
            else
                break;
        }
        
        /*
            If the stack is not empty, all the nodes have 
            been traversed. Hence, the given array is a
            valid preorder traversal of the tree
        */
        
        if (top != -1)
            printf("YES\n");
        else
            printf("NO\n");
    }
    
    return 0;
}
```

$$$$

# Contest Material

- [Video editorial](https://www.youtube.com/watch?v=2BkH9QqharY&list=PLMk3wkBiPDIEQS59Ox7il1QH-w6TqCZY8&index=5)
- [Representation of graphs and trees using Adjacency Matrix and Adjacency Lists](https://www.youtube.com/watch?v=5hPfm_uqXmw)
- [BFS and DFS](https://www.youtube.com/watch?v=pcKY4hjDrxk)
- [Codeforces - Valid BFS?](https://codeforces.com/problemset/problem/1037/D)
- [Hackerrank - Is This a Binary Search Tree?](https://www.hackerrank.com/challenges/is-binary-search-tree/problem)
