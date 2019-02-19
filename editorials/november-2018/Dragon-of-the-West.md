---
layout: default-editorial
title: November 2018
problem: Dragon of the West
link: https://www.hackerrank.com/contests/uvce-ncode-november-2018/challenges/dragon-of-the-west-
---

## Solution 

The Dragon of the West is a classic graph theory problem of connecting different connected components with the least number of edges possible.   

Here we restrict the number of edges to 1, rendering the actual connection part of the problem a triviality.
The main challenge here is in efficiently scanning the graph data to find the sizes of the different connected components. 

Since the input data is given in the form of pairs of vertices which have an edge, an adjacency list representation of the graph is quite natural. 
Building the graph is quick with just accessing the particular list of one of the vertices that form the edge and updating it with the other vertex.
Next comes the formidable task of identifying the different labeled components and the size of each. 

A simple $\mathcal{O}(V^3)$ algorithm (where $V$ is the number of vertices) that does this job is Floyd's algorithm for creating a transitive matrix. 
One can then collapse each block of 1's in the resulting binary matrix (while keeping a count of the number of vertices that are connected) to find the different components. 
One can then use linear search to find the largest and second largest component and connect any vertex belonging to each, together. 
However, the use of an adjacency matrix is quite wasteful of memory.

We suggest the use of a depth first search algorithm [this](https://codeforces.com/blog/entry/16823) or [this](https://www.topcoder.com/community/competitive-programming/tutorials/introduction-to-graphs-and-their-data-structures-section-1/), 
where we keep track of the vertices seen by a prior dfs with another source node, keep a vector of sizes of each component by counting vertices visited in a dfs. 
We perform dfs for every previously unreached vertex. 

Finally we can find the largest and second largest in $\mathcal{O}(K)$ time where $K$ is the number of connected components(which is at max the number of vertices). 
The depth first search algorithm can be implemented in many ways and has the time complexity $\mathcal{O}(V+E)$ where $V$ is the number of vertices and $E$ is the number of edges in the graph.



## Implementation

```cpp
#include <bits/stdc++.h>

using namespace std;

int dfs(vector<int> *graph, int s, vector<bool> &seen) {
    seen[s] = true;
    int count = 1;

    for (int i = 0; i < graph[s].size(); ++i) {
        int v = graph[s][i];
        if (!seen[v]) {
            count += dfs(graph, v, seen);              
        }
    }

    return count;
}

int main() {
    int n, m;
    cin >> n >> m;

    vector<int> graph[n + 1];
    for (int i = 0; i < m; ++i) {
        int a, b;
        cin >> a >> b;

        graph[a].push_back(b);
        graph[b].push_back(a);
    }

    vector<bool> seen(n + 1, false);
    vector<int> conn_sz;
    for (int i = 1; i <= n; ++i) {
        if (!seen[i]) {
            int length = dfs(graph, i, seen);
            conn_sz.push_back(length);
        }
    }

    sort(conn_sz.begin(), conn_sz.end());

    int max_1 = conn_sz.back();
    int max_2 = (conn_sz.size() > 1 ? conn_sz[conn_sz.size() - 2] : 0);

    cout << max_1 + max_2 << '\n';
}
```

* _Time complexity_: $\mathcal{O}(V + E)$
* _Space complexity_: $\mathcal{O}(V + E)$

[back](./index.html)

