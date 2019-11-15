---
layout: default-editorial
title: October 2019
problem: Joker And The Creative Destruction
link: https://www.hackerrank.com/contests/uvce-ncode-october-2019/challenges/joker-and-the-creative-destruction
---
# Solution

* We can solve this using dynamic programming.
* let $dp_{n}$ - the number of ways to split Arthur glass so that the total amount of space taken is $n$.
* Consider the last glass, we either choose to split it or we don't.
* Which gives us the recurrence: $dp_{n}$ = $dp_{n-m}$ + $dp_{n-1}$
* However, small problem, $n$ is too big. Therefore we go for [matrix exponentiation] (https://www.geeksforgeeks.org/matrix-exponentiation/)


 
## Implementation 

~~~cpp
#include<bits/stdc++.h>
#define MOD 1000000007
typedef long long ll;
using namespace std;

ll bin[103][103];

void mult_mat(ll m, ll ans[][100], ll bin[][100])
{
    ll mult[m][m];
    for(int i=0;i<m;i++)
    {
         for(int j=0;j<m;j++)
         {
            mult[i][j]=0;
             for(int k=0;k<m;k++)
             {
                mult[i][j]+=ans[i][k]*bin[k][j];
                if(mult[i][j]>=MOD)
                {
                    mult[i][j]%=MOD;
                }
            }
        }
    }
     for(int i=0;i<m;i++)
     {
         for(int j=0;j<m;j++)
         {
            ans[i][j]=mult[i][j];
        }
    }
}

void pow_mat(ll n, ll fin[][100], ll m)
{
    ll ans[m][100];
    ll b[m][100];
     for(int i=0;i<m;i++)
    {
         for(int j=0;j<m;j++)
         {
            ans[i][j]=bin[i][j];
            b[i][j]=bin[i][j];
        }
    }
    n--;
    while(n>0){
        if(n%2==1){
            mult_mat(m,ans,b);
            n--;
        }else{
            n=n/2;
            mult_mat(m,b,b);
        }
    }
     for(int i=0;i<m;i++)
    {
         for(int j=0;j<m;j++)
        {
            fin[i][j]=ans[i][j];
        }
    }
}

int main(){
    
    ll n,m;
    cin>>n>>m;
    bin[0][0]=1;
    bin[0][m-1]=1;
    for(ll i=1;i<m;i++)
    {
        bin[i][i-1]=1;
    }
    if(n<m)
    {
        cout<<1<<"\n";
    }
    else
    {
        ll fin[m+1][100];
        pow_mat(n-m+1,fin,m);
        ll ans=0;
         for(int i=0;i<m;i++)
         {
            ans+=fin[0][i];
            if(ans>=MOD){
                ans-=MOD;
            }
        }
        cout<<ans<<"\n";
    }
    return 0;
}

~~~
* Time Complexity : $O$$(m^{3} \times log(n))$ 
* Space Complexity : $O(1)$
