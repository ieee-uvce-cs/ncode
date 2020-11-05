---
layout: default-editorial
title: October 2020
problem: The Comic-Con Conundrum
link: https://www.hackerrank.com/contests/uvce-ncode-october-2020/challenges/q2-13
---

# Solution

- The problem statement can be diveded into two parts
  - First part is to find the number of co-primes of n from 1-n also called as [Euler’s Totient function](https://en.wikipedia.org/wiki/Euler%27s_totient_function) .
  - Other part of the function is to find number of subsequences. It can be observed that the number of subsequences for n websites is the (n/2)th catalan number.
- Since the number of testecases is more this problem require pre-calculation.

## Implementation

```cpp
#include <bits/stdc++.h>
using namespace std;

#define ll long long
ll m = 1000007;
const int MAX = 100001;
vector<ll> p;
void sieve()
{
    ll isPrime[MAX+1];

    for (ll i = 2; i<= MAX; i++)
    {
        if (isPrime[i] == 0)
        {
            p.push_back(i);
            for (ll j = 2; i * j<= MAX; j++)
                isPrime[i * j]= 1;
        }
    }
}
ll phi(ll n)
{
    ll res = n;
    for (ll i=0; p[i]*p[i] <= n; i++)
    {
        if (n % p[i]== 0)
        {
            res -= (res / p[i]);
            while (n % p[i]== 0)
               n /= p[i];
        }
    }
    if (n > 1)
       res -= (res / n);

    return res;
}
unsigned long int binomialCoeff(unsigned int n, unsigned int k)
{
    unsigned long int res = 1;
    if (k > n - k)
        k = n - k;
    for (int i = 0; i < k; ++i)
    {
        res *= (n - i);
        res /= (i + 1);
    }

    return res;
}
unsigned long int catalan(unsigned int n)
{
    unsigned long int c = binomialCoeff(2*n, n);
    return c/(n+1);
}
int main()
{

    sieve();
    unsigned long long int t,n,j,k,i;
    vector<int>ans1(51,0);
    vector<int>ans2(51,0);
    for(i=1;i<=50;i++)
    {
         n= phi(i);
        j=n/2;
       ans1[i]=n;
        ans2[i] = catalan(j);
         if(ans1[i]==1)
            ans2[i]=0;
    }
    cin>>t;
    while(t--)
    {
            cin>>n;
            cout<<ans1[n]<<" "<<ans2[n]<<endl;
    }
    return 0;
}
```
