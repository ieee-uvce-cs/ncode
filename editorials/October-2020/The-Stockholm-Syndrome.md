---
layout: default-editorial
title: October 2020
problem: The Stockholm Syndrome
link: https://www.hackerrank.com/contests/uvce-ncode-october-2020/challenges/q4-6
---
# Solution



 
## Implementation 

~~~cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    int n,k,t,p;
    cin>>t;
    while(t--)
    {
     cin>>n>>k;
        p=0;
    int a[500005];
    map<int,vector<int>> m;
    set<int> s;
    for(int i = 0;i<n;i++)
    s.insert(i);
    for(int i = 0;i<n;i++){
        scanf("%d",&a[i]);
        m[a[i]].push_back(i);
    }
    int llast=n+k;
    int last=n;
    int cnt=0;
    for(auto it:m){
        if(!cnt&&it.second[0]<last-k){
            auto it = s.lower_bound(llast-k);
            if(it!=s.end())
            last=*it;
            cnt=1;
        }
        if(it.second[0]<last-k&&p==0){
            cout<<"NO"<<endl;
            p=1;
        }
        for(auto it2:it.second){
            s.erase(it2);
        }
        llast = last;
        last=min(it.second[0],last);
    }
        if(p==0)
              cout<<"Bazzinga"<<endl;
    }
} 

~~~
