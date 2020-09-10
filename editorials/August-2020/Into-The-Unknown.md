---
layout: default-editorial
title: August 2020
problem: Into the Unknown
link: https://www.hackerrank.com/contests/uvce-ncode-august-2020/challenges/to-the-unknown
---

## Solution 

* $Key$ $Points$:
    * Fix the sequence $s$, for all folding methods of $s$, as long as the results of them don't have any available folds, then the number of folding marks of them must be equal, and their results must be the same (or simply reverse sequence)
    
    * Intuitively, we will fold s from left to right. Let's maintain another string $a$. Each time:
    Push $s_i$ to the end of $a$ and check if a contains new X-Y-X substring. If it does, then fold it.
    Calculate the number of folds of a. Note that this step won't actually change a. After that you get the answer of $[s_1,s_2...s_i]$.
    
    *  After pushing $s_i$ to the end of $a$, $a$ contains at most one $X-Y-X$ substring and it must be a suffix if exists.
     
     * For a string $s$ which doesn't contain $X-Y-X$ substring, after pushing an element to the end of $a$ , it has at most O(log2|a|) even palindromic suffixes.
  

## Implementation

```cpp

#include<bits/stdc++.h>
using namespace std;

const int N=1e3+5;
int n,a[N],xyx,q[N],c[N],p[N];
vector<int> v[N];

int pos;

void get_v(int pos)
{
     int x;
    v[pos].clear();
    if(pos==1)return;
    if(a[pos]==a[pos-1])
    {
        v[pos].push_back(2);
    }
       
    for(int i=0;i<v[pos-1].size();i++)
    {
        x=v[pos-1][i];
        if(a[pos]==a[pos-x-1])
            v[pos].push_back(x+2);
    }
}

bool check_even_pal(int L,int R)
{
    assert(R<=pos);
    int x;
    for(int i=0;i<v[R].size();i++)
    {
        x=v[R][i];
    if(x==R-L+1)
    {
        return 1;
    }
}
    return 0;
}

int qry(){
    int res=xyx+c[pos];
    int cur=pos;
    while(p[cur] && q[pos]<=cur-p[cur]/2)
    {
        cur-=p[cur]/2;
        ++res;
    }
    return res;
}

int main(){
 
    long long int t;
    cin>>t;
    while(t--)
    {
    q[0]=1;
    string s;
    cin>>s;
    n=s.size();
        xyx=0;
        pos=0;
    for(int i=1;i<=n;i++)
    {
        ++pos;
       a[pos]=s[i-1];
        get_v(pos);
        int x;
        if(v[pos].size() && (x=v[pos][0], check_even_pal(pos-x/2-x+1,pos-x/2)))
        {
            pos-=x;
            xyx+=2;
        }
        else 
        {
            
            
            p[pos]=v[pos].size()? v[pos][0]:0;
            q[pos]=q[pos-1],c[pos]=c[pos-1];
            
            
            if(check_even_pal(q[pos],pos)){
                q[pos]+=(pos-q[pos]+1)/2;
                c[pos]++;
            }
        }
      cout<<qry()<<" ";
    }
        cout<<endl;
    }
    return 0;
}

```

<br>


[back](./index.html)

