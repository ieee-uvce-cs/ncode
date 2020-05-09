---
layout: default-editorial
title: April 2020
problem: Quidditch Match
link:https://www.hackerrank.com/contests/uvce-ncode-april-2020/challenges/quiddith-match
---

~~~cpp

#include<bits/stdc++.h>
#define MOD(ll)(1e9+7)

/* 
   - Remove the non-circular minimum sum sequence from the given sequence 
   and we get the
   maximum circular sum.
   - For Example: 1,-2,-3,4,5
   + In this the minimum sum is -2+-3=-5.
   + So subtract this from the entire sum of the array (i,e; 
   1+-2+-3+4+5=5)
   + Ans = Sum-(Min sum)i.e; 5-(-5)=10.
   - But if the sequence is -1,2,3,4,-5. This will result in 3-(-5)=8.But 
   maximum sum possible is
   2+3+4=9.
   - So find the non circular maximum sum as well the above mentioned 
   maximum circular sum
   and print the maximum of these two.


*/

using namespace std;
int maximum(vector<int>arr, int n)
{
vector<int>a(n);
int i,j,k,mx=0,mn=0;
for(i=0;i<n;i++)
{
if(i)
{
a[i]=arr[i]+a[i-1];
if(a[i]>k)
k=a[i];
if(a[i]<j)
j=a[i];
if(a[i]>mx)
mx=a[i];
if(a[i]-j>mx)
mx=a[i]-j;
if(a[i]-k<mn)
mn=a[i]-k;
if(a[i]<mn)
mn=a[i];
}
else
{
a[i]=arr[i];
k=a[i];
j=a[i];
mn=a[i];
mx=a[i];
}
}
return max(mx,a[n-1]-mn);
}
int main()
{
long long int n,t;
cin>>t;
while(t--)
{
cin>>n;
vector<int>arr(n);
for(int i = 0; i<n; i++)
cin>>arr[i];
cout << maximum(arr, n) << endl;
}
}


~~~

* Time Complexity : $O(n)$ , per test case.
