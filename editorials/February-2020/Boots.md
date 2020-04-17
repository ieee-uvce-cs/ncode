---
layout: default-editorial
title: February 2020
problem: Boots
link: https://www.hackerrank.com/contests/uvce-ncode-february-2020/challenges/boots-plants-bananas
---
# Solution

* Consider as a single segment between each initial banana plant.
* Eg - ...#...#...
* There are 3 sections for the above as so: AAA#BBB#CCC
* The are  $\frac{9!}{3!3!3!}$ unique ways to grow these sections.
* for sections A and C, the way to grow bananas are unique
* However section #BBB# we have 2 possible option each time until only 1 blank tile is left. So there are $2^{3-1}$ ways to do this.
* Therefore find each group of consecutively blank plots, and find the number of ways to combine them.
* Now for each group find the number of ways.
   


~~~cpp

#include<bits/stdc++.h>
#define mod ll(1e9+7)
typedef long long int ll;
using namespace std;
const int N=1005;
ll ncr[N][N],p[N];
void combinations()
{

   for(int i=0;i<N;i++)
    {
      ncr[i][0]=ncr[i][i]=1;
      for(int j=1;j<i;j++)
    ncr[i][j]=(ncr[i-1][j]+ncr[i-1][j-1])%mod;
    }
}
void pow2()
{
   p[0]=p[1]=1;
  for(int i=2;i<N-2;i++)
    p[i]=(p[i-1]*2ll)%mod;
}
int main()
{
      //  ofstream fout("output(FebB2).txt");
      //  ifstream fin("input(FebB2).txt");
        combinations();
        pow2();
        int t;
        cin>>t;
        while(t--)
        {
            int n,m;
            cin>>n>>m;
            int a[m];
            for(int i=0;i<m;i++)
                cin>>a[i];
            int s = n-m;
            sort(a,a+m);
            ll ans =1ll;
            for(int i=1;i<m;i++)
            {
               ans=((1ll*ans*ncr[s][a[i]-a[i-1]-1])%mod)*p[a[i]-a[i-1]-1]%mod;
               s-=a[i]-a[i-1]-1;

            }
            ans = 1ll*ans*ncr[s][ a[0]-1 ]%mod;
            cout<<ans<<endl;
        }

        return 0;
}


~~~

* Time Complexity : $O(m)$ , per test case.
