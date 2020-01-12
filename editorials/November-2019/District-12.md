---
layout: default-editorial
title: November 2019
problem: District 12
link: https://www.hackerrank.com/contests/uvce-ncode-november-2019/challenges/district-12
---
# Solution

For every test-case:

  * For mine $k$, $1$ $\le$ $k$, we visit the mine at times $k$,$k+n$,$k+2n$,⋯ 
  * Therefore, the earliest Gayle could enter from mine $k$ is the time $k+tn$ such that $k+tn$ $\ge$ $ak$.
  * Now, for each $k$, compute the minimal integer $bk=k+tn$ such that $k+tn$ $\ge$ $ak$.
  * Now, find the integer $k$ with minimum $bk$ and print $k$ on new line.

~~~cpp

#include <iostream>
#include <algorithm>
using namespace std;
int main()
{
    int t;
    cin>>t;
    while(t--){
    int n;
    cin >> n;
    long long ans = 1e9 + 5;
    long long men;
    for(int i = 1; i <= n; i++)
    {
        long long a;
        cin >> a;
        long long b = a - i + n;
        if(ans >  b / n)
        {
            ans = b / n;
            men = i;
        }
    }
    cout << men << endl;
}
    return 0;
}
 	    

~~~
* Time Complexity : $O$ $(n)$ per testcase
* Space Complexity : $O(1)$
