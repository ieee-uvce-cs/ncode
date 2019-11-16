---
layout: default-editorial
title: October 2019
problem: Joker And The Bank
link: https://www.hackerrank.com/contests/uvce-ncode-october-2019/challenges/the-joker-and-the-bank
---
# Solution

* We know one thing for sure after all banks are destroyed, the maximum net worth is always $0$.

* So let's restore banks one by one from the end. We restore the last bank that was destroyed and then find the maximum net worth if only this bank remained.

* Then we restore the second last bank that was destroyed and then find the maximum net worth if this bank wasn't destroyed.

* In this manner we proceed till the end.

* We compute the partial sum, till the bank that was restored

* After restoring a bank, we check to the left and right of that bank and see if there exists a segment such that there aren't any destroyed banks which also includes the current restored bank.

* We also keep track of the ends till where the segment is restored. This is to facilitate the above.


 
## Implementation 

~~~cpp

#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
typedef long long int ll;
using namespace std;
int A[100005], P[100005];
 
int other_end[100005];
ll ans[100005], seg[100005];
 
int main()
{
    int n;
    cin>>n;
    for(int i=1; i<=n; ++i)
        cin>>A[i];
    for(int i=1; i<=n; ++i)
        cin>>P[i];
    ll res = 0; // initially all banks are destroyed
    for(int i=n; i>=1; --i)
    {
        ans[i] = res;
        int pos = P[i];
 
        ll sum = A[pos];
        int l = pos, r = pos;
        if(other_end[pos-1]!=0) // check to the left of the restored bank
        {
            l = other_end[pos-1]; // exisiting left of the current segment
            sum += seg[l];  // add segment with restored bank to the current bank
        }
        if(other_end[pos+1]!=0) // check to the right of the restored bank
        {
            sum += seg[pos+1]; // exisiting right of the current segment
            r = other_end[pos+1]; // add segment with restored bank to the current bank
        }
        other_end[l] =  r;
        other_end[r] = l;
        seg[l] = sum; // compute partial sum for current bank
        res = max(res,sum); // max net-worth segment with restored banks
    }
 
    for(int i=1; i<=n; ++i)
        cout<<ans[i]<<endl;
    return 0;
}

~~~
* Time Complexity : $O$$(n)$ 
* Space Complexity : $O(1)$
