---
layout: default-editorial
title: August 2021
problem: C - Coronavirus Tours The World
link: https://www.hackerrank.com/contests/uvce-ncode-august-2021/challenges/coronavirus-tours-the-world
---

# Solution 

- Using BFS, find the distance of each node from the node $K$.
- The number of days required for all cities to get infected, $D$, is equal to the distance of the node which is farthest to the node $K$.

$$$$

# Implementation using C++

```cpp
#include <cstdio>
#include <vector>
#include <queue>

using namespace std;

int main() {
    int t, n, m, k, i, j, x, y, ans;
    scanf("%d", &t);
    
    while (t--) {
        scanf("%d%d%d", &n, &m, &k);
        
        vector <int> v1, v2, res;
        vector <int> adj[n];
        
        //To check whether a node has been visited or not
        bool visited[n];
        
        //To store the distance of each node from node marked k
        int distance[n];
        for (i = 0; i < n; i++)
            visited[i] = false;
        
        for (i = 0; i < m; i++) {
            scanf("%d%d", &x, &y);
            
            adj[x-1].push_back(y-1);
            adj[y-1].push_back(x-1);
        }
        
        queue <int> q;
        
        q.push(k-1);
        
        //Distance of node k is 0 and is marked visited
        visited[k-1] = true;
        distance[k-1] = 0;
        
        //Perform BFS and find the distance of each node from k
        while (q.empty() == false) {
            x = q.front();
            q.pop();
            
            for (i = 0; i < adj[x].size(); i++)
                if (!visited[adj[x][i]]) {
                    distance[adj[x][i]] = distance[x]+1;
                    visited[adj[x][i]] = true;
                    
                    q.push(adj[x][i]);
                }
        }
        
        ans = distance[0];
        
        for (i = 0; i < n; i++)
            if (distance[i] > ans)
                ans = distance[i];
        
        //ans is the distance of the node farthest from k
        printf("%d\n", ans);
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

        int t, n, m, k, i, j, x, y, ans;

        t = scan.nextInt();
        scan.nextLine();

        while (t-- > 0) {
            n = scan.nextInt();
            m = scan.nextInt();
            k = scan.nextInt();
            scan.nextLine();

            ArrayList <ArrayList <Integer> > adj = new ArrayList<>();
            for (i = 0; i < n; i++)
                adj.add(new ArrayList <Integer>());

            for (i = 0; i < m; i++){
                x = scan.nextInt();
                y = scan.nextInt();
                    
                if (i < (m-1))
                    scan.nextLine();

                adj.get(x-1).add(y-1);
                adj.get(y-1).add(x-1);
            }

            boolean vis[] = new boolean[n];
            Queue <Integer> q = new LinkedList<>();
            int distance[] = new int[n];

            //Queue initially contains k
            q.add(k-1);
            vis[k-1] = true;

            //Perform BFS and find distance between K and other nodes
            while(q.size()>0){
                int size = q.size();

                while(size-->0){
                    int u = q.poll();

                    for(int it : adj.get(u)){
                        if(!vis[it]){
                            vis[it]=true;
                            q.add(it);
                            distance[it] = distance[u]+1;
                        }
                    }
                }
            }

            ans = distance[0];

            //ans is the distance of furthest node from K
            for (i = 0; i < n; i++)
                if (distance[i] > ans)
                    ans = distance[i];

            System.out.println(ans);
        }
    }
}
```

$$$$

# Implementation using Python

```python
for _ in range(int(input())):
    n, m, k = map(int, input().split())
    
    adj = []
    distance = []
    
    for i in range(0, n):
        adj.append([])
        distance.append(-1)
        
    for i in range(0, m):
        x, y = map(int, input().split())
        
        adj[x-1].append(y-1)
        adj[y-1].append(x-1)
        
    # Queue contains K initially
    que = [k-1]
    distance[k-1] = 0
    
    # Perform BFS and find the distance between K and other nodes
    while len(que) > 0:
        x = que[0]
        que.pop(0)
        
        for i in range(0, len(adj[x])):
            if distance[adj[x][i]] == -1:
                que.append(adj[x][i])
                distance[adj[x][i]] = distance[x]+1
    
    # Print distance of the furthest node from K
    print(max(distance))
```

$$$$

# Contest Material

- [Video Editorial](https://www.youtube.com/watch?v=5zLXVUlUPmw)
- [Youtube - Representation of graphs and trees using Adjacency Matrix and Adjacency Lists (Jenny's Lectures)](https://www.youtube.com/watch?v=5hPfm_uqXmw)
- [Youtube - BFS and DFS (Abdul Bari)](https://www.youtube.com/watch?v=pcKY4hjDrxk)
- [CP Handbook](https://cses.fi/book/book.pdf)
