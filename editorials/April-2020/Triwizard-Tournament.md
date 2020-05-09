---
layout: default-editorial
title: April 2020
problem: Triwizard Tournament
link:https://www.hackerrank.com/contests/uvce-ncode-april-2020/challenges/triwizard-tournament-1
---

~~~cpp
#include<bits/stdc++.h>
#define MOD(ll)(1e9+7)
using namespace std;
/* 
  - As the given graph contains multiple edges just see whether another 
  edge between the same
  vertices is present or not.
  - If present, neglect the edge with greater weight.
  - Find the all pair shortest path of the given graph using Floyd 
  algorithm.
  - If at least one vertex is not reachable print $-1$
  - Else find the maximum power among all shortest paths and print.

*/
int main()
{
ll t,n,i,j,k,m,l;
cin>>t;
while(t--)
{
cin>>n>>m;
vector<int>a(n,-1);
vector<vector<int> >p(n,a);
for(i=0;i<m;i++)
{
cin>>j>>k>>l;
if(p[j-1][k-1]==-1||(l<p[j-1][k-1]))
{
p[j-1][k-1]=l;
p[k-1][j-1]=l;
}
}
for(i=0;i<n;i++)
{
p[i][i]=0;
}
for (k = 0; k < n; k++)
{
for (i = 0; i <n; i++)
{
for (j = 0; j < n; j++)
{
if(p[i][k]!=-1&&p[k][j]!=-1)
if (p[i][k] + p[k][j] < p[i][j]||p[i][j]==-1)
p[i][j] = p[i][k] + p[k][j];
}
}
}
k=p[0][0];
for(i=0;i<n;i++)
{
for(j=0;j<n;j++)
{
if(p[i][j]==-1)
{
k=-1;
break;
}
else if(p[i][j]>k)
k=p[i][j];
}
if(k==-1)
break;
}
cout<<k<<endl;
}
}
~~~


