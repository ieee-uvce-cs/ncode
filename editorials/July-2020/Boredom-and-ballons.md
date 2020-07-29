---
layout: default-editorial
title: July 2020
problem: Boredom and balloons
link: https://www.hackerrank.com/contests/uvce-ncode-july-2020/challenges/bunches-of-balloon
---
# Solution
* First find the number of sub-bunches can be formed from a single bunch by dfs.
* If x is the number of sub bunches formed then minimum number of packets needed will be $(n/x)$ if $n$ is divisible by x else it will be $((n/x)+1)$

# Implementation

~~~
#include <bits/stdc++.h>

using namespace std;
int ans=0;
int dfs(int u,vector<vector<int> >g,vector<int>v)
{
    v[u]=1;
    int nd=0;
    for(int j=0;j<g[u].size();j++)
    {
        if(v[g[u][j]]==0)
        {
            int n=dfs(g[u][j],g,v);
            if(n%2==0)
            ans++;
            else
            nd+=n;
        }
    }
    return nd+1;
}
int main()
{
    long long int t,n,m,i,j;
    cin>>t;
    while(t--)
    {
        int n,m,c;
        ans=0;
    cin>>c>>n;
    vector<vector<int> >a(n+1);
    vector<int>v(n+1,0);
    for(int i=0;i<n-1;i++)
    {
        int s,t;
        cin>>s>>t;
        a[s].push_back(t);
        a[t].push_back(s);
    }
    dfs(1,a,v);
    j=c/(1+ans);
    if(c%(ans+1))
    j++;
    cout<<j<<endl;
    }   
}
~~~
