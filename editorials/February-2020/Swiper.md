---
layout: default-editorial
title: February 2020
problem: Swiper
link: https://www.hackerrank.com/contests/uvce-ncode-february-2020/challenges/im-the-map-im-the-map
---
# Solution

* This one was rather simple. You just needed to notice one thing.
* The probability of the child node, is the probability of the parent node divided by the total number of children the parent node has.
* So basically construct a graph, and do dfs.
* Find the probability of parent and the number of children it has.
* Sum up the probabilities and multiply with $h$
   


~~~cpp

#include<bits/stdc++.h>
typedef long long int ll;
using namespace std;
vector<int>g[100005];
int n,h,t;

double dfs(int c, int p)
{
    int co=0;
    double sum=0;
    for(int i:g[c])
    {
        if(i!=p)
        {
            co++;
            sum+=dfs(i,c);
        }
    }
    return 1+(co? (sum/co):0);
}
void clean()
{
   for(int i=0;i<n;i++)
     g[i].clear();
}
int main()
{
        //ofstream fout("output(FebC2).txt");
        //ifstream fin("input(FebC2).txt");

        cin>>t;
        while(t--)
        {
            cin>>n>>h;
            clean();

            for(int i=0;i<n-1;i++)
            {
                int u,v;
                cin>>u>>v;
                u--,v--;
                g[u].push_back(v);
                g[v].push_back(u);
            }

            cout<<fixed<<setprecision(4)<<(dfs(0,0)-1)*h<<endl;

        }

        return 0;
}


~~~

* Time Complexity : $O(n)$ , per test case.
