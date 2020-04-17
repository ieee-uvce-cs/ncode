---
layout: default-editorial
title: February 2020
problem: Dora
link: https://www.hackerrank.com/contests/uvce-ncode-february-2020/challenges/dora
---
# Solution

* If $n$ is divisible by some number $k$ then the quotient obtained from $n/k$ also divides $n$.
* So for $n$, one half of its factors will be present in the range $1$ to $\sqrt(n)$, the rest of its factors will be the quotients obtained form these factors
* So for each $n_i$ for $1\le i \le n$,  do the above and sum the factors.
* Check if the sum is even.
   


~~~cpp

#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int n;
        cin>>n;
        int c=0;
        for(int i=1;i<=n;i++)
        {
            long long int sum=0;
            int j;
            for(j=1;j*j<i;j++)
            {
                if(i%j==0)
                { 
                   
                    sum+=j;
                    if((i/j)!=j && i/j!=i)
                        sum+=(i/j);
                    
                }
            }
            if(j*j==i && j!=1)
                sum+=j;
            if(sum%2==0)
            {
                //cout<<i<<" "<<sum<<endl;
                c++;
            }
        }
        cout<<c<<endl;

    }
   
    return 0;
}


~~~

* Time Complexity : $O(n\sqrt(n))$ , per test case.
