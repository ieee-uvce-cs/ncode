---
layout: default-editorial
title: October 2019
problem: Joker And The Colours
link: https://www.hackerrank.com/contests/uvce-ncode-october-2019/challenges/the-joker-and-colours
---
# Solution

* Find the group into which each colour belongs.
* For example, for the following input: n=5 and colour $1$ complements $2$, colour $3$ complements $4$ and colour $1$ complements $4$

* This will give us $2$ sets: ${1,2,3,4}$, ${5}$

* The above is basically finding the number of connected components in a graph, where the colours form the nodes of the graph.

* In this example there are $2$ connected components.

* Since insanity doubles, when colours complement each other, the answer is $2^{n-v}$, where v is the number of connected components.

* The number of connected components can be found using [dfs](https://www.hackerearth.com/practice/algorithms/graphs/depth-first-search/tutorial/),  or [dsu](https://cp-algorithms.com/data_structures/disjoint_set_union.html)
 
## Solution using DSU   

~~~cpp

#include <bits/stdc++.h>

using namespace std;
 
int uf[50];
 
int find(int a)
{
  return (a==uf[a])?a:(uf[a]=find(uf[a]));
}
 
void unite(int a,int b)
{
  uf[find(a)]=find(b);
}
 
int main()
{
  int N,M;
  cin>>N>>M;
  for(int i=0;i<N;i++)
  {
    uf[i]=i;
  }
  for(int i=0;i<M;i++)
  {
    int X,Y;
    std::cin>>X>>Y;
    X--,Y--;
    unite(X,Y);
  }
  set<int> components;
  for(int i=0;i<N;i++)
  {
    components.insert(find(i));
  }
  cout<<(1LL<<(N-components.size()))<<std::endl;
  return 0;
}


~~~
* Time Complexity : $O$$(n)$ 
* Space Complexity : $O(n)$
