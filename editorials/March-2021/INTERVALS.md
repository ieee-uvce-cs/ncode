---
layout: default-editorial
title: March 2021
problem: INTERVALS
link: https://www.hackerrank.com/contests/uvce-ncode-march-2021/challenges/q3-15-1
---
# Solution
* We assume that the intervals are sorted, and in the end we will multiply the answer by n!, We can do so, as all segments are different.

* Consider two cases n > m and n ≤ m. It would seem that you need to write different dynamics for them, but not difficult to show that in the first case the answer is always 0 . The second case is the following dynamics : dpi, l, r, i — how many numbers we have considered , l, r — only in this interval will be present number i. Also, we will need an additional dynamic si, l, i — how many numbers are considered , l — how many segments are already closed , and i does not belong to any segment . There will be 4 transfers, since every number we can not begin and end with more than one segment.

* Now we should add x to our solution, it is quite simple: just add another parameter 0 / 1 in our dynamics, if we had such a element in the beginning of some interval or not. With out dynamics, it is not difficult.

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
