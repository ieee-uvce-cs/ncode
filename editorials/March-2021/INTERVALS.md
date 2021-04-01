---
layout: default-editorial
title: March 2021
problem: INTERVALS
link: https://www.hackerrank.com/contests/uvce-ncode-februray-2021/challenges/q2-18
---
# Solution

~~~cpp
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;
#define add(x, y) (x + y >= MOD ? x + y - MOD : x + y)
 
typedef long long ll;
 
const long long  int MOD = 1e9 + 7;
 

 
int main() {
    long long int n, m, x,t;
    cin>>t;
    while(t--)
    {
        long long int dp[340][340]={0};
   cin >> n >> m >> x;
    swap(n, m);
    if(n < m) {
        cout << "0\n";
       continue;
    }
    x = n - x + 1;
    dp[0][0] = 1;
    for(int i = 1; i <= n; i++) {
        for(int j = m; j >= 0; j--) {
            for(int k = m; k >= 0; k--) {
                if(i == x) {
                    if(j) {
                        dp[j][k] = add(dp[j - 1][k], dp[j - 1][k + 1]);
                    } else {
                        dp[j][k] = 0;
                    }
                } else {
                    if(j) {
                        dp[j][k] = add(dp[j][k], dp[j - 1][k]);
                        dp[j][k] = add(dp[j][k], dp[j - 1][k + 1]);
                    }
                    if(k) {
                        dp[j][k] = add(dp[j][k], dp[j][k - 1]);
                    }
                }
            }
        }
    }
    ll ans = dp[m][0];
    for(int i = 1; i <= m; i++) {
        ans = ans * i % MOD;
    }
   cout << ans << '\n';
    }
   
}
~~~
