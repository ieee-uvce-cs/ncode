---
layout: default-editorial
title: March 2021
problem: SHOES?
link: https://www.hackerrank.com/contests/uvce-ncode-march-2021/challenges/q2-18-2
---
# Solution
* This is LCS(Longest common Subsequence) problem.
* It was to find the longest common subsequence of x and reverse(y)
* To know about LCS click [this](https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/)

~~~cpp
#include<bits/stdc++.h>

using namespace std;
int main() {
    int t;
    cin>>t;
    while(t--)
    {
    int n,i=0,l=0,r=0,h=0,a=0,b[1000100]={0},c[1000100]={0},res=0;
    scanf("%d",&n);
  for (i=0; i<n; i++) 
  { 
      scanf("%d",&a); c[a]=i+1; 
  }
  b[0]=100000000;
  for (i=0; i<n; i++) 
  {
    scanf("%d",&a);
    a=c[a]; l=0; r=i+1;
    while (l<r) 
    {
      h=(l+r)/2;
      if (b[h]>a) l=h+1; else r=h;
    }
    b[r]=a;
    if (r>res) res=r;
  }
  printf("%d\n",res);
    }
  
  return 0;
}
~~~
