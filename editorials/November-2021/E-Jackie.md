---
layout: default-editorial
title: November 2021
problem: E - Jackie
link: https://www.hackerrank.com/contests/uvce-ncode-november-2021/challenges/e-jackie
---
# Solution

- Note that you can perform DFS on each node and find a route which reaches the farthest node, from an unvisited node.
- However, this approach is not optimal if there is a cycle in the graph
- Note that the maximum number of nodes which can be traversed in a cycle is the number of nodes in the cycle.
- Hence, the cycles in the graph are detected first and the number of nodes which can be visited from the nodes of the cycle is marked as the number of nodes in the cycle.
- DFS is performed on the remaining nodes and the maximum distance which can be traversed from those nodes is found.
- The DFS should be terminated upon reaching a node which has already been visited or upon reaching a dead end.
- Time Complexity: $O(n)$

$$$$

# Implementation in C++

```cpp
#include <cstdio>
#include <vector>

using namespace std;

int main() {
    int t, n, m, i, j, k, x, y, ans;
    scanf("%d", &t);

    /*
        Since each node has outdgree at most 1, the 
        outgoing edge can be stored in an array
    */
    int adj[100000];
    
    int a[100000];
    int c[100000];
    
    vector <int> v;
    
    while (t--) {
        scanf("%d%d", &n, &m);
        
        for (i = 0; i < n; i++) {
            a[i] = -1;
            c[i] = 0;
            adj[i] = -1;
        }
        
        for (i = 0; i < m; i++) {
            scanf("%d%d", &x, &y);
            
            adj[x-1] = y-1;
        }
        
        //Find cycles in the graph
        for (i = 0; i < n; i++)
            if (c[i] == 0) {
                v.push_back(i);

                k = 1;
                
                /*
                    Traverse the graph until we reach a dead end 
                    or a node which has already been visited
                */
                while (adj[v.back()] != -1 && c[adj[v.back()]] == 0) {
                    c[v.back()] = 1;
                    a[v.back()] = k++;
                    v.push_back(adj[v.back()]);
                }

                c[v.back()] = 1;
                a[v.back()] = k;
                
                //If we reach a dead end, keep the graph intact
                if (adj[v.back()] == -1 || c[adj[v.back()]] == 2)
                    while (v.empty() == false) {
                        c[v.back()] = 0;
                        a[v.back()] = -1;
                        v.pop_back();
                    }
                else {
                    //If we reach a node which was already visited, detect the cycle
                    x = adj[v.back()];
                    k -= a[adj[v.back()]];
                    k += 1;
                    
                    /*
                        The maximum number of nodes which can be visited
                        from a node in the cycle is the number of nodes in the cycle
                    */
                    while (v.empty() == false && v.back() != x) {
                        c[v.back()] = 2;
                        a[v.back()] = k;
                        v.pop_back();
                    }
                    
                    c[v.back()] = 2;
                    a[v.back()] = k;
                    v.pop_back();
                    
                    while (v.empty() == false) {
                        c[v.back()] = 0;
                        a[v.back()] = -1;
                        v.pop_back();
                    }
                }
            }
        
        for (i = 0; i < n; i++) 
            if (c[i] == 0) {
                v.push_back(i);
                
                while (adj[v.back()] != -1 && c[adj[v.back()]] == 0)
                    v.push_back(adj[v.back()]);
                
                if (adj[v.back()] == -1)
                    k = 0;
                else
                    k = a[adj[v.back()]];
                
                //Find the maximum number of nodes which can be visited from each node
                while (v.empty() == false) {
                    c[v.back()] = 2;
                    a[v.back()] = ++k;
                    v.pop_back();
                }
            }
        
        ans = a[0];
        
        for (i = 0; i < n; i++)
            if (a[i] > ans)
                ans = a[i];
        
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
        
        int t, n, m, i, j, k, x, y, ans, top;
        t = scan.nextInt();

        /*
            Since each node has outdgree at most 1, the 
            outgoing edge can be stored in an array
        */
        int adj[] = new int[100000];

        int a[] = new int[100000];
        int c[] = new int[100000];
        
        int v[] = new int[100000];

        while (t-- > 0) {
            n = scan.nextInt();
            m = scan.nextInt();

            for (i = 0; i < n; i++) {
                a[i] = -1;
                c[i] = 0;
                adj[i] = -1;
            }

            for (i = 0; i < m; i++) {
                x = scan.nextInt();
                y = scan.nextInt();

                adj[x-1] = y-1;
            }

            top = 0;
            
            //Find cycles in the graph
            for (i = 0; i < n; i++)
                if (c[i] == 0) {
                    v[top++] = i;

                    k = 1;

                    /*
                        Traverse the graph until we reach a dead end 
                        or a node which has already been visited
                    */
                    while (adj[v[top-1]] != -1 && c[adj[v[top-1]]] == 0) {
                        c[v[top-1]] = 1;
                        a[v[top-1]] = k++;
                        v[top] = adj[v[top-1]];
                        top++;
                    }

                    c[v[top-1]] = 1;
                    a[v[top-1]] = k;

                    //If we reach a dead end, keep the graph intact
                    if (adj[v[top-1]] == -1 || c[adj[v[top-1]]] == 2)
                        while (top > 0) {
                            c[v[top-1]] = 0;
                            a[v[top-1]] = -1;
                            top--;
                        }
                    else {
                        //If we reach a node which was already visited, detect the cycle
                        x = adj[v[top-1]];
                        k -= a[adj[v[top-1]]];
                        k++;

                        /*
                            The maximum number of nodes which can be visited
                            from a node in the cycle is the number of nodes in the cycle
                        */
                        while (top > 0 && v[top-1] != x) {
                            c[v[top-1]] = 2;
                            a[v[top-1]] = k;
                            top--;
                        }

                        c[v[top-1]] = 2;
                        a[v[top-1]] = k;
                        top--;

                        while (top > 0) {
                            c[v[top-1]] = 0;
                            a[v[top-1]] = -1;
                            top--;
                        }
                    }
                }

            for (i = 0; i < n; i++) 
                if (c[i] == 0) {
                    v[top++] = i;

                    while (adj[v[top-1]] != -1 && c[adj[v[top-1]]] == 0) {
                        v[top] = adj[v[top-1]];
                        top++;
                    }

                    if (adj[v[top-1]] == -1)
                        k = 0;
                    else
                        k = a[adj[v[top-1]]];

                    //Find the maximum number of nodes which can be visited from each node
                    while (top > 0) {
                        c[v[top-1]] = 2;
                        a[v[top-1]] = ++k;
                        top--;
                    }
                }

            ans = a[0];

            for (i = 0; i < n; i++)
                if (a[i] > ans)
                    ans = a[i];

            System.out.println(ans);
        }
    }
}
```

$$$$

# Implementation in Python

```python
t = int(input())
for _ in range(0, t):
    n, m = map(int, input().split())
    
    adj = []
    for i in range(0, n):
        adj.append(-1)

    for i in range(0, m):
        x, y = map(int, input().split())

        adj[x-1] = y-1

    a = []
    c = []

    for i in range(0, n):
        c.append(0)
        a.append(-1)

    # Find the cycles in the graph
    for i in range(0, n):
        if c[i] == 0:
            d = [i]

            k = 1

            '''
                Traverse the graph until we reach a dead end 
                or a node which has already been visited
            '''
            while adj[d[-1]] != -1 and c[adj[d[-1]]] == 0:
                c[d[-1]] = 1
                a[d[-1]] = k
                k += 1
                d.append(adj[d[-1]])

            c[d[-1]] = 1
            a[d[-1]] = k

            # If we reach a dead end, keep the graph intact
            if adj[d[-1]] == -1 or c[adj[d[-1]]] == 2:
                while len(d) > 0:
                    c[d[-1]] = 0
                    a[d[-1]] = -1
                    d.pop()
            else:
                # If we reach a node which was already visited, detect the cycle
                x = adj[d[-1]]
                k -= a[adj[d[-1]]]
                k += 1
                
                while len(d) > 0 and d[-1] != x:
                    c[d[-1]] = 2
                    a[d[-1]] = k
                    d.pop()

                    
                '''
                    The maximum number of nodes which can be visited
                    from a node in the cycle is the number of nodes in the cycle
                '''
                c[d[-1]] = 2
                a[d[-1]] = k
                d.pop()

                while len(d) > 0:
                    c[d[-1]] = 0
                    a[d[-1]] = -1
                    d.pop()

    for i in range(0, n):
        if c[i] == 0:
            d = [i]

            while adj[d[-1]] != -1 and c[adj[d[-1]]] == 0:
                d.append(adj[d[-1]])

            if adj[d[-1]] == -1:
                k = 0
            else:
                k = a[adj[d[-1]]]

            # Find the maximum number of nodes which can be visited from each node
            while len(d) > 0:
                c[d[-1]] = 2
                a[d[-1]] = k+1
                k += 1
                d.pop()
                
    print(max(a))
```

$$$$

# Contest Material

- [GeeksforGeeks - How to detect cycle in a directed graph](https://www.geeksforgeeks.org/detect-cycle-in-a-graph/)
- [Codeforces - Robot on the Board 2](https://codeforces.com/contest/1607/problem/F)



