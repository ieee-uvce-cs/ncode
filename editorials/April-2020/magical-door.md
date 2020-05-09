---
layout: default-editorial
title: April 2020
problem: Magical Door
link:https://www.hackerrank.com/contests/uvce-ncode-april-2020/challenges/magical-door
---

~~~cpp

#include<bits/stdc++.h>
#define MOD(ll)(1e9+7)
using namespace std;
typedef long long int ll;
/* 

  - Since all the key packets with less number of keys has to be placed 
  towards left and all the
  packets with more keys has to be placed towards right of the main key 
  packet.
  - Just construct the binary search tree with first key packet as a root 
  and find the levels of all the
  nodes.
  - Then the number of elements in even level is the number of green 
  threads required
  - The number of elements in odd level is the number of red threads 
  required.


*/
struct lst
{
int num;
struct lst* right,*left;
};
int main()
{
long long int t,n,i,j,k,r,g;
cin>>t;
while(t--)
{
lst *root=NULL;
r=0;
g=0;
cin>>n;
for(i=0;i<n;i++)
{
cin>>j;
k=0;
lst *newnode=new lst();
newnode->num=j;
newnode->right=NULL;
newnode->left=NULL;
lst *temp=root,*prev=NULL;
if(root==NULL)
{
root=newnode;
continue;
}
while(temp!=NULL)
{
if(temp->num>=j)
{
prev=temp;
temp=temp->left;
}
else
{
prev=temp;
temp=temp->right;
}
k++;
}
if(prev->num>=j)
prev->left=newnode;
else
prev->right=newnode;
if(k%2)
r++;
else
g++;
}
cout<<r<<" "<<g<<endl;
}
return 0;
}


~~~


