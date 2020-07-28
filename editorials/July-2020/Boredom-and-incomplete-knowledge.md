---
layout: default-editorial
title: July 2020
problem: Boredom and incomplete knowledge
link: https://www.hackerrank.com/contests/uvce-ncode-july-2020/challenges/left-out-words
---
# Solution

* Key observation :
    * The given sequence is a fibonacci.
    * When fibonacci numbers are divided by 3 it forms a periodic sequence of 01120221 and has length 8.

# Implementation 

~~~
#include <bits/stdc++.h>
using namespace std;


int main() 
{
    long long int t,n,i,j,k,s;
    cin>>t;
    int a[]={0,1,1,2,0,2,2,1};
    s=0;
    for(i=0;i<8;i++)
    {
        s+=a[i];
    }
    
    while(t--)
    {
        cin>>n;
        j=((n/8)*s);
       n=n%8;
        for(i=0;i<=n;i++)
            j+=a[i];
        cout<<j<<endl;
    }
    return 0;
}

~~~
* Time Complexity: $O$ $(t)$