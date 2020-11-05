---
layout: default-editorial
title: October 2020
problem: The Stockholm Syndrome
link: https://www.hackerrank.com/contests/uvce-ncode-october-2020/challenges/q4-6
---
# Solution

- For every element of an array $h_i$ we can check x elements on its right. If there are no elements less than $h_i$ we will mark it as $-1$ and call it $bad$.
-  If there is exactly one element then make an edge from hi to this element. Otherwise swapping elements of the array will never make $h_i$ $bad$.
-  If there are no $bad$ elements in the array then the answer is $Bazzinga$. Otherwise we should find the leftmost "bad" element in the array bad. X elements after it are not less than itself.
- All elements before it are also not less than itself because otherwise an element less than bad would be $bad$ too.
- Swapping bad with an element in suffix also makes no sense because its place will be taken by lesser element and the position will remain $bad$. Thus, swapping bad with other element of the array makes no sense. 
- The only way to satisfy the conditions is to swap one of x elements after bad with other element in the remaining suffix without considering a segment with length x after bad.
- We will try to do it.Then the following conditions must be satisfied. 
- Consider choosing an element y in the remaining suffix. Then the swap can be the answer if $y < bad$. Also suffix after y and the segment between y and the segment with length x after bad must not contain $bad$ elements.
- An element, which we swap y with, from the segment with length x after bad must be less than any adress on y. Also we need to check that after the swap on the right side of y we can find an element less than itself no further than x.


 
## Implementation 

~~~cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    int n,k,t,p;
    cin>>t;
    while(t--)
    {
     cin>>n>>k;
        p=0;
    int a[500005];
    map<int,vector<int>> m;
    set<int> s;
    for(int i = 0;i<n;i++)
    s.insert(i);
    for(int i = 0;i<n;i++){
        scanf("%d",&a[i]);
        m[a[i]].push_back(i);
    }
    int llast=n+k;
    int last=n;
    int cnt=0;
    for(auto it:m){
        if(!cnt&&it.second[0]<last-k){
            auto it = s.lower_bound(llast-k);
            if(it!=s.end())
            last=*it;
            cnt=1;
        }
        if(it.second[0]<last-k&&p==0){
            cout<<"NO"<<endl;
            p=1;
        }
        for(auto it2:it.second){
            s.erase(it2);
        }
        llast = last;
        last=min(it.second[0],last);
    }
        if(p==0)
              cout<<"Bazzinga"<<endl;
    }
} 

~~~
