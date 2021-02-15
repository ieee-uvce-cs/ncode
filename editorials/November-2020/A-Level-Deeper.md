---
layout: default-editorial
title: November 2020
problem: A Level Deeper
link: https://www.hackerrank.com/contests/uvce-ncode-november-2020/challenges/q2-15
---
# Solution
* We were asked to find the maximal number of arrays we can fit into the memory. A small observation first, let the answer be k, then one of the optimal solutions fits the k smallest arrays into the memory. We can assume that we have arrays of size 1 and we want to arrange the memory for the maximal arrays as possible. Then if we have parts of memory of odd size, if we fit array of size 1 at this part we will obtain part of even size. From other hand, if we put arrays of bigger size we will not change the parity and if we don't fill it with arrays of size one and initially it's of odd size then in the end we will have at least one empty cell. So it's reasonable to put the arrays of size one into the memory of odd size. Let's do it until we can do it. We have three possible situations:

* We don't have memory parts of odd size anymore.

* We don't have arrays of size 1 anymore.

* We don't have neither arrays of size 1 neither memory parts of size 1.

* Let us start from the first case. Suppose that there are some arrays of size 1 left, but there are no memory parts of odd size. Easy to see then in such case we need to group arrays of size 1 in pairs and then consider them as the same array. So we can divide every number by two and reduce the problem to the initial one.

* In the second case if we divide every number by two we will obtain the same problem (and that cannot increase the answer).

* The third case is similar to the second one.

* When implementing this we need to remember that first we have to fill the memory with arrays which are build from the maximal numbers of initial arrays.

* The complexity of the given algorithm is O(n log(n)).
~~~cpp
#include <iostream>
#include <vector>
#include <cstdlib>
#include <algorithm>
#include <cstdio>
#include <cmath>
#include <ctime>
#include <cstring>
#include<bits/stdc++.h>
using namespace std;
#define VI vector<int>
#define L(s) ((int)(s).size())
#define pb push_back
#define pii pair<int, int>
#define x first
#define y second
#define all(s) (s).begin(), (s).end()
#define ll long long
#define mp make_pair
#define inf 1000000000
int n, m;
int have_perm[30], need[30], have[30], need_perm[30];
inline bool check(int t) {
    for(int i = 0; i < 30; ++i) {
        have[i] = have_perm[i];
        if (need_perm[i] <= t) {
            need[i] = need_perm[i];
            t -= need_perm[i];
        } else {
            need[i] = t;
            t = 0;
        }
    }

    for(int i = 29; i >= 0; --i) {
        if (have[i] > m) have[i] = m;
        if (need[i] > have[i]) return 0;
        have[i] -= need[i];
        if (i) {
            have[i - 1] += 2 * have[i];
        }
    }
    return 1;
}
int main() {
    
    long long t;
    cin>>t;
    while(t--)
    {
        cin>>n>>m;
        for(int i=0;i<30;i++)
        {
            have_perm[i]=0; need[i]=0; have[i]=0 ;need_perm[i]=0;
        }
    for(int i = 0; i < n; ++i) {
        int x;
        cin>>x;
        for(int bit = 0; bit < 30; ++bit) {
            if (x & (1 << bit)) {
                have_perm[bit]++;
            }
        }
    }
    for(int i = 0; i < m; ++i) {
        int x;
        cin>>x;
        need_perm[x]++;
    }
    if (check(m)) {
        printf("%d\n", m);
        continue;
    }
    int low = 0, high = m;
    while(high - low > 1) {
        int mid = (high + low) / 2;
        if (check(mid)) {
            low = mid;
        } else {
            high = mid;
        }
    }

    cout<<low<<endl;
        
    }
    
}

~~~

