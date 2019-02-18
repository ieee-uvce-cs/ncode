---
layout: default-editorial
title: January 2019
problem: Wife Killing Banker
link: https://www.hackerrank.com/contests/uvce-ncode-january-2019/challenges/wife-killing-banker
---

## Solution 
Using given operation it is possible to change every element to a single element of array. 
Now we need to find elements in arrays which have minimum diffirence, as we know it has to be some element of array. 
To find the minimum difference we can do the following : 

Let us say two arrays are $A$ and $B$. Also we have variable $mi = 1018$. 
1. We sort array $B$.
2. For every element of $A$ we do a binary search on $B$ to find two closest element to it, then we update $mi$ incase this diff is smaller than $mi$.

#### Proof:

Here we prove that whole array can be changed to any element of array.

Suppose we have an array $A$ and we wanted to change all its elements to $A[x]$.

1. We can always make $A[0]$ equal to $A[1]$ as it is the only neighbour, can easily be shown :
   - if $A[1]$ > $A[0]$ then $A[0]$ in min and $A[1]$ is max hence we can change $A[0]$ to $A[1]$
   - if $A[1]$ < $A[0]$ non $A[0]$ is max ans $A[1]$ is min again we can change $A[0]$ to $A[1]$ else they are already equal

2. Same goes with $A[n - 1]$ and $A[n - 2]$, $A[n - 1]$ can always be made equal to $A[n - 2]$

3. When we make $A[0]$ = $A[1]$, then we can make $A[1]$ = $A[2]$ as $A[0]$ is equal to $A[1]$ it doesn't contribute to the comparision, 
and after we havev changed $A[1]$ we can again change $A[0]$ to $A[1]$.

4. Now if we keep doing it we can make 
$A[0]$ = $A[1]$ = $A[2]$ ... = $A[x - 1]$ = $A[x]$ and similarly 
$A[n - 1]$ = $A[n - 2]$ = $A[n - 3]$ ... = $A[x + 1]$ = $A[x]$, hence making all elements equal to $A[x]$.



## Implementation

```cpp
#include <bits/stdc++.h>

using namespace std;

int main () { 
    int n;
    cin >> n;
    int ar[n], br[n];
    for (int i = 0; i < n; i++) {
        cin >> ar[i];
    }   
    for (int i = 0; i < n; i++) {
        cin >> br[i];
    }
    sort (br, br + n);
    int mi = abs (br[0] - ar[0]);
    for (int xx : ar) {
        auto itr = upper_bound (br, br + n, xx);
        if (itr != br + n) {
            mi = min (abs (*itr - xx), mi);
        }
        if (itr != br) {
            mi = min (abs (*(--itr) - xx), mi);
        }
    }
    cout << mi << "\n";
}
```

* _Time complexity_: $\mathcal{O}(N * log(N))$
* _Space complexity_: $\mathcal{O}(N)$

[back](./index.html)

