---
layout: default-editorial
title: February 2021
problem: The One Where Chandler Falls Asleep
link: https://www.hackerrank.com/contests/uvce-ncode-februray-2021/challenges/q1-60
---
# Solution

* This problem can be solved by brute-force approach as the constraints are small.
* First Check if the string b is present after string a in s.
* Then Check if the string a is present after string b in s.
* If both the above checks are true then print both.
* Else if only first check is true then print forward.
* Else if only second check is true then print backward.
* If none is true then print Tusla!

~~~cpp

#include <bits/stdc++.h>
using namespace std;
 
int main()
{
    long long int t,i,j,k,w,l,x,n,f,ba;
 cin>>t;
    while(t--)
    {
         string s,a,b;
        cin>>s>>a>>b;
       
  f=0;
        ba=0;
        for(i=0;i<s.size();i++)
        {
            if(f==0&&s[i]==a[0])
            {
                j=0;
                while(j<a.size()&&s[j+i]==a[j])
                    j++;
                if(j==a.size())
                {
                    f=1;
                    i=i+j;
                }
            }
            if(f&&s[i]==b[0])
            {
                j=0;
                while(j<b.size()&&s[j+i]==b[j])
                    j++;
                if(j==b.size())
                {
                    f++;
                    break;
                }
            }
        }
        reverse(s.begin(),s.end());
        for(i=0;i<s.size();i++)
        {
            if(ba==0&&s[i]==a[0])
            {
                j=0;
                while(j<a.size()&&s[j+i]==a[j])
                    j++;
                if(j==a.size())
                {
                    ba=1;
                    i=i+j;
                }
            }
            if(ba&&s[i]==b[0])
            {
                j=0;
                while(j<b.size()&&s[j+i]==b[j])
                    j++;
                if(j==b.size())
                {
                    ba++;
                    break;
                }
            }
        }
        
        if(ba==2&&f==2)
            cout<<"both"<<endl;
        else if(f==2)
            cout<<"forward"<<endl;
        else if(ba==2)
            cout<<"backward"<<endl;
        else
            cout<<"Tulsa!"<<endl;
    }
       
 
}
~~~
