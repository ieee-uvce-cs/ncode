---
layout: default-editorial
title: November 2019
problem: Capitol
link: https://www.hackerrank.com/contests/uvce-ncode-november-2019/challenges/capitol
---
# Solution

* Let's first solve for only 1 day: 
  * Assume $S$ to be a time slot.
  * So assuming $2$ time slots $S_i$ $($ $Ex_i$ $,$ $Cam_i$) and $S_j$ $($ $Ex_j$ $,$ $Cam_j$ $)$ we can see that to achieve every $1$ unit of learning camouflage in $S_i$ slot we are losing $\frac {Cam_i} {Ex_i}$ unit of exercising, similarly for $S_j$ slot. 
  * Hence, we can observe that it's always a better choice to choose time slot $Si$ if $\frac{Ex_i} {Cam_i}$ $\le$ $\frac {Ex_j} {Cam_j}$. 
 

* For calculating minimum exercising requirement we can maintain prefix cumulative and suffix cumulative sum of maximum exercising and learning camouflage unit that can be achieved in a time slot. 
* Then using binary search on prefix cumulative sum array, we can find out which minimum indexed time slot will give us learning camouflage more than required and we can remove the excess fraction of time for use in exercising. 
* We can compute the maximum exercising unit achieved from unused time slots by using the suffix cumulative sum.  



~~~cpp

#include <bits/stdc++.h>
using namespace std;

typedef long double ld;
typedef long long ll;

int c[100009],e[100009];
ll gg1[100009],gg2[100009];
void solve()
{
    int d,s;
    cin>>d>>s;
    ll s1=0,s2=0;
    vector<pair<ld,int>> v1;
    for(int i=1;i<=s;i++) 
    {
        cin>>c[i]>>e[i];
        s1+=c[i],s2+=e[i];
        v1.push_back(make_pair(ld(e[i])/c[i],i));
    }
    sort(v1.begin(),v1.end());
    gg1[0] = 0,gg2[s+1]=0;
    for(int i=1;i<=s;i++) 
    {
        gg1[i]=gg1[i-1]+c[v1[i-1].second];
    }
    for(int i=s;i>=1;--i)
    {
        gg2[i] = gg2[i+1]+e[v1[i-1].second];
    }
  
    for(int q=0;q<d;q++)
    {
        int a,b;cin>>a>>b;
        if(a>s1||b>s2) {
            cout<<'N';
            continue;
        }
        if(a==0||b==0){
            cout<<'Y';
            continue;
        
        }
        int lo = 1,hi=s;
        while(lo<hi){
            int m = (lo+hi)/2;
            if(gg1[m]>=a){
                hi = m;
            }
            else lo = m+1;
        }
        if(gg2[lo+1]>=b){
            cout<<'Y';
            continue;
        }
        if(gg2[lo]<b){
            cout<<'N';
            continue;
        }
        ll x = a-gg1[lo-1],y=b-gg2[lo+1];
        int ix = v1[lo-1].second;
        if(x*e[ix]+y*c[ix]<=1ll*c[ix]*e[ix]){
            cout<<'Y';
            continue;
        }
        else{
            cout<<'N';
            continue;
        }
    }
}

int main() {
    cin.sync_with_stdio(0); cin.tie(0);
    cin.exceptions(cin.failbit);
    
    int n;cin>>n;
    for(int i=0;i<n;i++)solve(),cout<<'\n';    
    
    return 0;
}


 	    

~~~
* Time Complexity : $O(dlogS)$ for each test case, $d$ is number of days and $S$ is the time slots .
* Space Complexity : $O(s)$
