---
layout: default-editorial
title: January 2020
problem: You take my house when you do that the prop...
link: https://www.hackerrank.com/contests/uvce-ncode-january-2020/challenges/you-take-my-house-when-you-do-that-the-prop-
---
# Solution

* This problem basically boils down to finding the number of distinct trees that fit a given [Euler Sequence](https://cp-algorithms.com/graph/euler_path.html).
* Let the input sequence be $S$ and $d(i,j)$ be the number of trees corresponding to subsequences $S_{i-j}$.
* We know the base case that if the length of $S$ is $1$ then the answer is $1$.
* Therefore $d(i,i)$ $=$ $1$
* In other cases, suppose the first branch of the tree returns to the root $S_k$, which means $S_i$=$S_k$
* From this we know that the sequence corresponding to this branch is $S_{i+1}$ to $S_{k-1}$, and therefore the number of sub-trees is $d(i+1,k-1)$.
* The above branches are connected to branches $S_k$ to $S_j$, therefore the number of sub-trees is  $d(k,j)$.
* This gives us the recurrence: $d(i,j)$ = $\Sigma$ $($  $d(i+1,k-1)$ $*$ $d(k,j)$ $)$

~~~cpp
#include<bits/stdc++.h>
#define mod (ll)(1e9+7)
using namespace std;
typedef long long int ll;

ll dp[310][310];
string s;

ll countEuler(int i, int j)
{
    if(i==j)
        return 1;
    if(i>j)
        return 0;
    if(dp[i][j]!=-1)
        return dp[i][j];
    ll ans =0;
    for(int k =i+1;k<=j;k++)
    {
        if(s[k]==s[i])
            ans += ( (countEuler(i+1,k-1)%mod) * (countEuler(k,j) %mod) )%mod;

    }

    return dp[i][j]= ans%mod;

}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    //ifstream fin("input(janC2).txt");
    //ofstream fout("output(janC2).txt");
    int t;
    cin>>t;

    while(t-- && cin>>s)
    {
        memset(dp,-1,sizeof dp);
        cout<<countEuler(0,s.length()-1)%mod<<endl;
    }



    return 0;
}


~~~

* Time Complexity : $O(n^2)$, per testcase
