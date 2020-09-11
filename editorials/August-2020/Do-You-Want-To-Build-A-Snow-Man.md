---
layout: default-editorial
title: August 2020
problem: Do you want to build a snowman?
link: https://www.hackerrank.com/contests/uvce-ncode-august-2020/challenges/do-you-want-to-build-a-snowman-1
---

## Solution

* This problem is similar to that of a range sum query with updation. Here, we need to print the snapshots of the sum.
* For this, both Fenwick as well as Segmented trees can be used.
* Here, since we need to print the sum in snapshots which depicts a Fenwick tree, it's easier to use Fenwick trees and print the sum at each point when the sum is calculated.

## Implementation

```cpp

#include <bits/stdc++.h>
#include <iostream>
using namespace std;
vector<int>fw;
long long  getSum(long long  i)
{
   long long sum = 0;
   i++;

   while(i > 0)
   {
      sum += fw[i];
      cout<<fw[i]<<" ";
      i -= i & (-i);
   }
   return sum;
}

void updateFW(long long n, long long i, long long newVal)
{
   i++;
   while (i <= n)
   {
      fw[i] += newVal;
      i += i & (-i);
   }
}

void constructFenwick(vector<long long>a, long long n)
{
  for (int i = 0; i <= n; i++)
    fw.push_back(0);

  for (int i=0; i<n; i++)
   updateFW( n, i, a[i]);

}


int main()
{
    long long int n,i,j,k,t;
    cin>>n;
    vector<long long>a(n);
    for(i=0;i<n;i++)
    cin>>a[i];
    constructFenwick(a, n);
    cin>>j;
    k=getSum(j-1);
    cout<<endl;
    cin>>t;
   while(t--)
   {
        cin>>j>>k;
        updateFW( n, j-1, k);
        cin>>j;
        k=getSum(j-1);
        cout<<endl;

   }
   return 0;
}

```

<br>

[back](./index.html)
