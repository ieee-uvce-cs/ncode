---
layout: default-editorial
title: August 2020
problem: Let It Go!
link: https://www.hackerrank.com/contests/uvce-ncode-august-2020/challenges/let-it-go-let-it-go-
---

## Solution 

* The solution was to find first $x$ such that $x!$ mod $k = 2$ or $(x!-2)$ mod $k = 0$ and $x > 2$, only then Elsa can give all the children an equal number of gifts after keeping one for Anna and herself.

* There are only $2$ exceptional cases i,e; when $k = 1$ or $k = 2$ the answer is $3$.


* Key Observation :
    *  $x$ will always be less than $k$ because any factorial above $k-1$ will definately be divisible by $k$. Hence there is no chance of getting that number mod $k$ as $2$ .
    * So if we don't get  $x$ such that $x!$ mod $k = 2$ below $k$ then such number doesn't exist and we have to print $Let$ $it$ $Go!$
    * Given that $k$ lies between $1$ to $10^3$ while $Q$ is from $1$ to $2* 10^5$, we need to pre-calculate and store all possible answers in order to avoid _TLE_



## Implementation

```cpp

#include <bits/stdc++.h>
using namespace std;
int main() {
    long long int n,i,j,k,t;
    vector<long long int>a(1001,0);
    a[1]=3;
    a[2]=3;
    for(i=3;i<1001;i++)
    {
        k=2;
        for(j=3;j<i;j++)
        {
            k=(k*j)%i;
            if(k==0)
            {
                    a[i]=-1;
                break;
            }
           else if(k==2)
           {
                a[i]=j;
                break;               
            }    
        }
    }
    cin>>t;
    while(t--)
    {
        cin>>n;
        if(a[n]>0)
        cout<<a[n]<<endl;
        else
        cout<<"Let it go!"<<endl;
    }
}

```

<br>

[back](./index.html)

