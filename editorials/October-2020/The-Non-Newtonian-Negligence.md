---
layout: default-editorial
title: October 2020
problem: The Non-Newtonian Negligence
link: https://www.hackerrank.com/contests/uvce-ncode-october-2020/challenges/q1-49
---
# Solution



 
## Implementation 

~~~cpp
#include <bits/stdc++.h>
 
using namespace std;
 
int main()
{
    long long int n,i,j,k,t;
    cin>>t;
    while(t--)
    {
        cin>>n;
        string s = "";
        while(n)
        {
            if(n%2)
                s+='1';
            else
                s+='0';
                n=n/2;    
        }
        reverse(s.begin(),s.end());
        j=s.size();
        for(i=0;i<s.size();i++,j--)
        {
        if(s[i]=='1')
        cout<<j<<" ";
        }
        cout<<endl;    
    } 
}
~~~
