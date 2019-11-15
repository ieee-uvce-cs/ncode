---
layout: default-editorial
title: October 2019
problem: Arthur And The Joker
link:https://www.hackerrank.com/contests/uvce-ncode-october-2019/challenges/arthur-and-the-joker/problem
---
# Solution

* At the end, the string should look like $K...KJ....J$, since there shouldn't be any $JK$s 

* We know that number of 'K's double on finding a 'J' before 'K'.

* Therefore for the $i$-th $'K'$, let there be $m_{i}$ $J$ before it.

* The final number of $K$s will be $\Sigma_{i}$ $2^{m_{i}}$

* $\Sigma_{i}$ $2^{m_{i}}$ = $1+2+4+8...$ = $2^{n}-1$

~~~cpp

#include<iostream>
#include<string>
#include<cmath>
using namespace std;
const long long mod=1e9+7;
int main()
{
    string s;
    cin>>s;
    long long sum=1,ans=0;
    for(int i=0;i<s.length();i++)
    {
        if(s[i]=='J')
        {
            sum*=2;
            sum%=mod;
        }
        else
        {
            ans+=sum-1;
            ans%=mod;
        }
    }
    cout<<ans<<endl;
    return 0;
} 

~~~
* Time Complexity : $O$ $(n)$ 
* Space Complexity : $O(1)$
