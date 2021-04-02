---
layout: default-editorial
title: March 2021
problem: SHOES?
link: https://www.hackerrank.com/contests/uvce-ncode-march-2021/challenges/q2-18-2
---
# Solution
* This is LCS(Longest common Subsequence) problem.
* It was to find the longest common subsequence of x and reverse(y)
* To know about LCS click [this](https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/)

~~~cpp
#include <bits/stdc++.h>
using namespace std;

int longestCommonSubsequence(vector<int> vec, vector<int> rev) {
    int dp[vec.size() + 1][rev.size() + 1];
    memset(dp, 0, sizeof(dp));
    dp[0][0] = 0;
    for (int i = 1; i < (int)vec.size() + 1; i++) {
        for (int j = 1; j < (int)rev.size() + 1; j++) {
            if (vec[i - 1] == rev[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[vec.size()][rev.size()];
}
int main() {
    int t;
    cin >> t;
    while (t--) 
   {
	int n;
    	cin >> n;
    	vector<int> top(n);
    	vector<int> bottom(n);
    	for (int i = 0; i < n; i++)
		cin >> top[i];
    	for (int i = 0; i < n; i++) 
		cin >> bottom[i];
    	reverse(bottom.begin(), bottom.end());
    	int ans = longestCommonSubsequence(top, bottom);
    	cout << ans << endl;
    }
}
~~~
