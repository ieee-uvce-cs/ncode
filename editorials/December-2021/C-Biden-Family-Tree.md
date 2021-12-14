---
layout: default-editorial
title: December 2021
problem: C - Biden's Family Tree
link: https://www.hackerrank.com/contests/ncode-december-2021/challenges/d-biden-family-tree
---
# Solution

- Since the nodes of the tree are visited in BFS order, we start with node $N$
- We can consider the next subarray whose elements are strictly decreasing as the children of the root node $N$
- Similarly, for the other nodes, we can pick the strictly decreasing subarray as the children and include them in tree.
- The above step is repeated until all nodes have been visited.

$$$$

# Implementation in C++

```cpp
#include <bits/stdc++.h>
 
using namespace std;
 
int main() {
    int t, n, i, j, k, temp, ans;
    cin>>t;
    
    deque <int> d;
    
    int a[200000];
    int depth[200000];
    
    while(t--) {
        cin>>n;
        
        for (i = 0; i < n; i++)
            cin>>a[i];
        
        //The depth of the root node is 0
        depth[n-1] = 0;
        
        //BFS is started from the node n
        d.clear();
        d.push_back(n-1);
            
        i = 1;
        
        while (i < n) {
            //Consider each decreasing continuous subarray to be the
            //children of the topmost node in deque d
            while (i < n-1 && a[i] > a[i+1]) {
                d.push_back(a[i]-1);
                depth[a[i]-1] = depth[d[0]]+1;
                i++;
            }
            
            depth[a[i]-1] = depth[d[0]]+1;
            d.push_back(a[i]-1);
            i++;
            
            d.pop_front();
        }
        
        cout<<*max_element(depth, depth+n)<<"\n";
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
        t = scan.nextInt();
        
        int [] a = new int[200000];
        int [] depth = new int[200000];
        
        while (t-- > 0) {
            n = scan.nextInt();
            
            for (i = 0; i < n; i++)
                a[i] = scan.nextInt();

            Queue <Integer> q = new LinkedList<>();
            
            //Start BFS from node n
            q.add(n-1);
            depth[n-1] = 0;
            
            i = 1;
            
            while (i < n) {
                int u = q.poll();
                
                //Consider each decreasing continuous subarray to be the
                //children of the topmost node in deque d
                while (i < n-1 && a[i] > a[i+1]) {
                    q.add(a[i]-1);
                    depth[a[i]-1] = depth[u]+1;
                    i++;
                }

                depth[a[i]-1] = depth[u]+1;
                q.add(a[i]-1);
                i++;
            }

            ans = depth[0];
            
            for (i = 1; i < n; i++)
                if (depth[i] > ans)
                    ans = depth[i];
            
            System.out.println(ans);
        }
    }
}
```

$$$$

# Implementation in Python

```python
for _ in range(int(input())):
    n = int(input())
    a = list(map(int, input().split()))
    
    depth = []
    for i in range(0, n):
        depth.append(0)
        
    #BFS is started from the node n
    d = []
    d.append(n-1)
    
    i = 1
    
    while i < n:
        #Consider each decreasing continuous subarray to be the
        #children of the topmost node in deque d
        while i < n-1 and a[i] > a[i+1]:
            d.append(a[i]-1)
            depth[a[i]-1] = depth[d[0]]+1
            i += 1
            
        d.append(a[i]-1)
        depth[a[i]-1] = depth[d[0]]+1
        i += 1
    
        d.pop(0)
        
    print(max(depth))

```

$$$$

# Contest Material

- [Codeforces - Minimal Height Tree](https://codeforces.com/contest/1437/problem/D)
- [GeeksForGeeks - Level of each node of tree using BFS](https://www.geeksforgeeks.org/level-node-tree-source-node-using-bfs/)
- [Youtube - Abdul Bari - DFS and BFS](https://www.youtube.com/watch?v=pcKY4hjDrxk&t=4s)

