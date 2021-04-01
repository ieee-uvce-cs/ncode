---
layout: default-editorial
title: March 2021
problem: FRACTIONS
link: https://www.hackerrank.com/contests/uvce-ncode-march-2021/challenges/q1-64
---
# Solution

* 

~~~cpp

#include <bits/stdc++.h>

using namespace std;
int main()
{
    unsigned long long int t,n,i,j,k,l,m,lcm,hcf;
    cin>>t;
    while(t--)
    {
        cin>>n;
        vector<unsigned long long int>numerator(n);
        vector<unsigned long long int>denominator(n);
        string s;
        for(i=0;i<n;i++)
        {
            cin>>s;
            l=0;
            for(j=0;s[j]!='/';j++)
            {
               l = (l*10)+(s[j]-'0');
            }
            numerator[i]=l;
            l=0;
            for(++j;j<s.size();j++)
                l = (l*10)+(s[j]-'0');
            denominator[i]=l;
        }
      lcm = numerator[0];
      hcf = denominator[0];
      for(i=0;i<n;i++)
      {
          hcf=__gcd(denominator[i],hcf);
          lcm = ((lcm*numerator[i])/(__gcd(numerator[i],lcm)));
          l = __gcd(lcm,hcf);
          cout<<(lcm/l)<<"/"<<(hcf/l)<<" ";
      }
      cout<<endl;
      hcf = numerator[0];
      lcm = denominator[0];
      for(i=0;i<n;i++)
      {
          hcf=__gcd(numerator[i],hcf);
          lcm = ((lcm*denominator[i])/(__gcd(denominator[i],lcm)));
          l = __gcd(lcm,hcf);
          cout<<(hcf/l)<<"/"<<(lcm/l)<<" ";
      }
      cout<<endl;

    }
    return 0;
}

~~~
