---
layout: default-editorial
title: April 2019
problem: Connections
link: https://www.hackerrank.com/contests/uvce-ncode-april/challenges/connections-1
---

# Solution

* Create a 2D array $A$ of size $256$ and $2$ and fill it with $-1$, this will be used to store the location($x$, $y$), where the first column of $A$ represents the $x$ coordinate and the second column represents the $y$ coordinate, of each character.
* Store each character and its location in the 2D array whilst accepting the map using its $ASCII$ value.
* Accept query $Q_{i}$, where $1 \le i \le Q$, as characters : $ch_{1}$, $ch_{2}$.
  * Using its $ASCII$ values check if the $x$ coordinate of either or both is -1 , 
     * if so it means that either or both of the characters are not present in the map, thus the answer is $-1$.
     * else, 
answer = $|A[ch_{1}][1] - A[ch_{2}][1]|$ - $|A[ch_{1}][2] - A[ch_{2}][2]|$
* print the answer of each query.
  




# Implementation


```cpp
#include<iostream>
#include<cstdlib>
#include<bits/stdc++.h>
using namespace std;
int main()
{
    int A[256][2];
    memset(A,-1,sizeof(A[0][0])*256*2);
    int p,q,r,i,j,ans;
    char x[100];
    cin>>p>>q>>r;
    for(i=0;i<p;i++)
    {
        cin>>x;
        for(j=0;x[j]!='\0';j++)// store the each character and their location in the Array
        {    A[int(x[j])][0]=i;
            A[int(x[j])][1]=j;
        }    
    }
    for(i=0;i<r;i++)
    {
        cin>>x[0]>>x[1];
        if(A[x[0]][0]<0 || A[x[1]][0] < 0) //to check if the characters are present in the map.
        ans =-1;
        else ans = abs(A[x[0]][0]-A[x[1]][0])+abs(A[x[0]][1]-A[x[1]][1]);
        cout<<ans<<endl;
    }
}
```

* Time Complexity: $O(p \times q)$, where $p$ is the number of strings in the map and $q$ is the length of each of these strings. 
* Space Complexity : $O(1)$