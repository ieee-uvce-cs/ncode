---
layout: default-editorial
title: August 2019
problem: Nagma Khatoon
link: https://www.hackerrank.com/contests/uvce-ncode-august-2019/challenges/nagma-khatoon
---
# Solution

* Key Observations:
   
   * If you shift very last digit $Q$ times, consecutively then you end up with the initial number $n$ itself,
   * If you add $1$ to each digit $10$ times, you again end up with the original number.
   * Order in which the above operations are done does not matter.

* From the above observations, there are basically $10Q$ option.

* Generate these $10Q$ options and print the smallest number. 

* Since $n$ is large, accept it as a string!
 


~~~cpp

#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int main()
{
    int n;
    cin>>n;
    string s;
    cin>>s;
    vector<string>ret;
    for(int i=0;i<10;i++)
    {
        ret.push_back(s);
        for(int j=1;j<s.length();j++)
        {
            ret.push_back(s.substr(j)+s.substr(0,j));
        }
        for(int j=0;j<s.length();j++)
        {
            if(s[j]=='9') s[j]='0';
            else s[j]++;
        }
    }
    cout<<*min_element(ret.begin(),ret.end());
    return 0;
 
}

~~~
* Time Complexity : $O$ $(10n)$ 
* Space Complexity : $O(1)$
