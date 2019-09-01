---
layout: default-editorial
title: August 2019
problem: Danish Khan
link: https:https://www.hackerrank.com/contests/uvce-ncode-august-2019/challenges/danish-khan
---
# Solution

* The problem basically asks us to find $2$ $disjoint$ $subtrees$ that gives us a maximum profit.

* For each vertex $v$ let us calculate $sum_{v}$ - the sum of all the numbers in the subtree of vertex $v$, and $mx_{v}$ - maximum value from all $sum_{k}$ in subtree of vertex $v$, where $k$ belongs to the subtree of vertex $v$. This can be done using dynamic programming and [ dfs ] (https://www.geeksforgeeks.org/dfs-traversal-of-a-tree-using-recursion/)

* if the $mx_{v}$ is updated at some point during the dfs, then we can start calculating our answer. Our answer is $max$ $($ $ans$ $,$ $mx_{v}$ + $mx_{k}$ $)$, where $k$ is a subtree of $v$.

* If these disjoint trees aren't found then print Nagma.

 


~~~cpp

#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;
typedef long long int ll;
ll llinf = INT64_MAX;
int n;
ll ans = -llinf;
int a [10000];
vector<int> g[10000];
ll sum[10000], mx[10000];

void dfs(int v, int p) {
    sum[v] = a[v];
    mx[v] = -llinf;
    for (int i = 0; i < g[v].size(); i++) {
        int k = g[v][i];
        if (k == p)
            continue;
        dfs(k, v);
        sum[v] += sum[k];
        if(mx[v]!= -llinf)
            ans = max(ans, mx[v]+mx[k]);
        mx[v] = max(mx[v], mx[k]);
    }
    mx[v] = max(mx[v], sum[v]);
}
int main() 
{
    cin>>n;
    for(int i=0;i<n;i++)
        cin>>a[i];
    for (int i = 0; i + 1 < n; i++) 
    {
        int u, v;
        cin>>u>>v;
        u--, v--;
        g[u].push_back(v);
        g[v].push_back(u);
    }

    dfs(0, -1);
  
    if(ans == -llinf)
        cout<<"Nagma";
    else
        cout<<ans;
    return 0;
}

~~~
* Time Complexity : $O$ $(n)$ 
* Space Complexity : $O(1)$
