---
layout: default-editorial
title: August 2020
problem: Let It Go!
link: https://www.hackerrank.com/contests/uvce-ncode-august-2020/challenges/let-it-go-let-it-go-
---

## Solution 



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

