---
layout: default-editorial
title: February 2022
problem: D - Single Tree
link: https://www.hackerrank.com/contests/ncode-february-2022/challenges/d-single-tree
---
# Solution

- The problem can be solved using binary lifting to find the $k^{th}$ ancestor of a tree.
- First we find the parent of each node.
- We calculate the ancestor of each node in powers of 2.
- Since $K$ is small, we can perform binary lifting $K$ times and print the result.
- Time Complexity: $O(nlogn)$
- Space Complexity: $O(nlogn)$

$$$$

# Implementation in C++

```cpp
#include <cstdio>
#include <vector>
#include <deque>

using namespace std;

#define MAX 100000

vector <int> adj[MAX];

int a[MAX], b[MAX];

// p stores parent of each node
int p[MAX];

// 2D array to precompute ancestors in powers of 2
int state[30][MAX];

// Use binary lifting to find the kth parent
int kth_parent(int node, int k) {
    for (int i = 0; i < 30; i++) {
        if (k&1)
            node = state[i][node];
        
        k /= 2;
    }
    
    return node;
}

int main() {
    int t, n, m, q, i, j, k, x, y;
    scanf("%d", &t);
    
    deque <int> que;
    
    while (t--) {
        scanf("%d%d%d", &n, &m, &q);
        
        for (i = 0; i < n; i++) {
            adj[i].clear();
            p[i] = -1;
        }
        
        for (i = 0; i < n; i++)
            scanf("%d", &a[i]);
        
        for (i = 0; i < m; i++)
            scanf("%d", &b[i]);
        
        for (i = 0; i < n-1; i++) {
            scanf("%d%d", &x, &y);
            
            adj[x-1].push_back(y-1);
            adj[y-1].push_back(x-1);
        }
        
        que = {0};
        p[0] = 0;
        
        // Perform BFS to find the parent and
        // depth of each node
        while (que.empty() == false) {
            x = que.front();
            que.pop_front();
            
            for (i = 0; i < adj[x].size(); i++)
                if (p[adj[x][i]] == -1) {
                    p[adj[x][i]] = x;
                    que.push_back(adj[x][i]);
                }
        }
        
        // Precompute the ancestors in powers of 2
        for (i = 0; i < n; i++)
            state[0][i] = p[i];
        
        for (i = 1; i < 30; i++)
            for (j = 0; j < n; j++)
                state[i][j] = state[i-1][state[i-1][j]];
        
        while (q--) {
            scanf("%d", &k);
            
            // Since k is small, we can jump
            // to ancestors in O(logn) k times
            for (i = 0; i < m; i++) {
                x = k;
                y = b[i]-1;
                
                while (x--)
                    y = kth_parent(y, a[y]);

                printf("%d ", y+1);
            }
            
            printf("\n");
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
    public static int MAX = 100000;

    public static int a[] = new int[MAX];
    public static int b[] = new int[MAX];

    // p stores parent of each node
    public static int p[] = new int[MAX];

    // 2D array to precompute ancestors in powers of 2
    public static int state[][] = new int[30][MAX];
    
    public static Queue <Integer> que = new LinkedList<>();

    public static ArrayList <Integer> adj[] = new ArrayList[MAX];

    // Use binary lifting to find the kth parent
    public static int kth_parent(int node, int k) {
        for (int i = 0; i < 30; i++) {
            if (k%2 == 1)
                node = state[i][node];

            k /= 2;
        }

        return node;
    }
    
    public static void main(String[] args) {
        try { 
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));    
            int t, n, m, q, i, j, k, x, y;

            String s[];
            
            s = br.readLine().split(" ");
            t = Integer.parseInt(s[0]);

            while (t-- > 0) {
                s = br.readLine().split(" ");
                
                n = Integer.parseInt(s[0]);
                m = Integer.parseInt(s[1]);
                q = Integer.parseInt(s[2]);

                for (i = 0; i < n; i++) {
                    adj[i] = new ArrayList();
                    p[i] = -1;
                }

                s = br.readLine().split(" ");

                for (i = 0; i < n; i++)
                    a[i] = Integer.parseInt(s[i]);

                s = br.readLine().split(" ");

                for (i = 0; i < m; i++)
                    b[i] = Integer.parseInt(s[i]);

                for (i = 0; i < n-1; i++){
                    s = br.readLine().split(" ");
                    
                    x = Integer.parseInt(s[0]);
                    y = Integer.parseInt(s[1]);

                    adj[x-1].add(y-1);
                    adj[y-1].add(x-1);
                }

                que.add(0);
                p[0] = 0;

                //Perform BFS and find distance between K and other nodes
                while(que.size() > 0){
                    int size = que.size();

                    while(size-->0){
                        int u = que.poll();
                        for(int it : adj[u]){
                            if(p[it] == -1){
                                que.add(it);
                                p[it] = u;
                            }
                        }
                    }
                }

                // Precompute the ancestors in powers of 2
                for (i = 0; i < n; i++)
                    state[0][i] = p[i];

                for (i = 1; i < 30; i++)
                    for (j = 0; j < n; j++)
                        state[i][j] = state[i-1][state[i-1][j]];

                while (q-- > 0) {
                    s = br.readLine().split(" ");
                    k = Integer.parseInt(s[0]);

                    // Since k is small, we can jump
                    // to ancestors in O(logn) k times
                    for (i = 0; i < m; i++) {
                        x = k;
                        y = b[i]-1;

                        while (x-- > 0)
                            y = kth_parent(y, a[y]);

                        System.out.print((y+1)+" ");
                    }

                    System.out.println();
                }
            }
        }
        catch(Exception e) {
            System.out.println(e);
        }
    }
}
```

$$$$

# Implementation in Python

```python
adj = []

# p stores parent of each node
p = []

# 2D array to precompute ancestors in powers of 2
state = []

# Use binary lifting to find the kth parent
def kth_parent(node, k):
    for i in range(0, 30):
        if k % 2 == 1:
            node = state[i][node]

        k //= 2

    return node

t = int(input())
for _ in range(t):
    n, m, q = map(int, input().split())
    a = list(map(int, input().split()))
    b = list(map(int, input().split()))
    
    p = []

    adj = []

    for i in range(0, n):
        p.append(-1)

        adj.append([])

    for i in range(1, n):
        x, y = map(int, input().split())
        
        adj[x-1].append(y-1)
        adj[y-1].append(x-1)

    que = [0]
    p[0] = 0

    # Perform BFS to find the parent and
    # depth of each node
    while len(que) > 0:
        node = que[0]
        que.pop(0)

        for i in range(0, len(adj[node])):
            if p[adj[node][i]] == -1:
                p[adj[node][i]] = node
                que.append(adj[node][i])

    state = []
    temp = []

    # Precompute the ancestors in powers of 2
    for i in range(0, n):
        temp.append(p[i])

    state.append(temp)

    for i in range(1, 30):
        temp = []

        for j in range(0, n):
            temp.append(state[i-1][state[i-1][j]])

        state.append(temp)

    # Since k is small, we can jump
    # to ancestors in O(logn) k times
    for i in range(0, q):
        k = int(input())

        for j in range(0, m):
            x = k
            node = b[j]-1

            while x > 0:
                x -= 1
                node = kth_parent(node, a[node])

            print(node+1, end = ' ')

        print()
        
```

$$$$

# Contest Material

- [Codeforces blog - Kth Ancestor of All Nodes](https://codeforces.com/blog/entry/52062)
- [Leetcode - Kth Ancestor of a tree node](https://leetcode.com/problems/kth-ancestor-of-a-tree-node/)
- [Lowest Common Ancestor using Binary Lifting](https://cp-algorithms.com/graph/lca_binary_lifting.html)
- [Youtube - Binary Lifting by Errichto](https://www.youtube.com/watch?v=oib-XsjFa-M)



