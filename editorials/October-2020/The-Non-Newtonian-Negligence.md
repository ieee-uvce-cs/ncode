---
layout: default-editorial
title: October 2020
problem: The Non-Newtonian Negligence
link: https://www.hackerrank.com/contests/uvce-ncode-october-2020/challenges/q1-49
---
# Solution

* There are many solutions for this problem. But since the number of testcases is more it requires faster solution to avoid TLE
* One of the best and fastest solution is It can be shown that the answer is simply the 1-based indices of the one bits in the binary representation of n. So, we can just do this in O(log n) time.


 
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
