---
layout: default-editorial
title: February 2021
problem: The One With Emma's Birthday
link: https://www.hackerrank.com/contests/uvce-ncode-februray-2021/challenges/q2-18
---
# Solution

~~~cpp
# include<bits/stdc++.h>
using namespace std;
int a[20][20];
int n,k,m,t;
inline void ans(int x)
{
    if (x)
        cout<<"Joey\n";
    else
        cout<<"Phoebe\n";
}
inline int solve(int n,int m,int k)
{
    if (n==0||m==0)
            return (n+m)%2;
        if (n%k==k-1&&m>=n)
            return 1;
        if (m%k==k-1&&n>=m)
            return 1;
        if (k==2)
            return (n+m)%2;
        return (n+m+min(n/k,m/k))%2;
}
int main()
{
    int testcase;
    cin>>testcase;
    while(testcase--)
    {
        cin>>t>>k;
    ++k;
   for(int i=0;i<t;++i)
    {
        cin>>n>>m;
        --n;--m;
        ans(solve(n,m,k));
    }
    }
    
}
~~~
