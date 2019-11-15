---
layout: default-editorial
title: October 2019
problem: Arthur And The Number
link: https://www.hackerrank.com/contests/uvce-ncode-october-2019/challenges/arkham-childrens-hospital
---

# Solution

* If $number_i$ $\oplus$ $number_j$ = $x$, then $number_i$ $\oplus$ $x$ = $number_j$

* Since $number_i$ is in the range of $1$ $-$ $1000$, we can keep track of their frequency of each number in an array arr[1001], where the indexes represent the numbers themselves. All values of arr[] are initialised to $0$ at first. 

* For each $number_i$, add $arr$ $[$ $number_i$ $\oplus$ $x$ $]$, to your answer and update the frequency to $number_i$ in the $arr$.

* Print the answer.

* You can also brute your way through since $n$ is small xD.

~~~cpp

#include <bits/stdc++.h>
using namespace std;
int arr[1001];
int main() {
    int n, x;
    cin>>n>>x;
    long long ans = 0;
    for(int i = 0; i < n; ++i) {
        int num;
        cin>>num;
        ans += arr[num ^ x];
        arr[num]++;
    }
    cout<<ans;
}

~~~
* Time Complexity : $O$ $(n)$ 
* Space Complexity : $O(1)$
