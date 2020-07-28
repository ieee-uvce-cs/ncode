---
layout: default-editorial
title: July 2020
problem: Boredom and aliens
link: https://www.hackerrank.com/contests/uvce-ncode-july-2020/challenges/ability
---
# Solution

* This can be solved similar to LCS but here weights of the characters are given.
* In LCS all characters have equal weight i.e; $1$ but here the weights of every character is given as a input.
* So whenever the character matches insted of increasing that position by 1 we increase with the weight of the matched character.

# Implementation
~~~
#include<bits/stdc++.h>  
using namespace std; 
int sol( string X, string Y, int m, int n,map<char,int>f )  
{  
    int Matrix[m + 1][n + 1];  
    int i, j;  
  
    for (i = 0; i <= m; i++)  
    {  
        for (j = 0; j <= n; j++)  
        {  
        if (i == 0 || j == 0)  
            Matrix[i][j] = 0;  
      
        else if (X[i - 1] == Y[j - 1])  
        {Matrix[i][j] = Matrix[i - 1][j - 1] + f[X[i-1]];}  
      
        else
            Matrix[i][j] = max(Matrix[i - 1][j], Matrix[i][j - 1]);  
        }  
    }  
          
   
    return Matrix[m][n];  
}  
  
int main()  
{  
   long long int i,t;
    cin>>t;
    while(t--)
    {
        string s1,s2;
        cin>>s1>>s2;
        map<char,int>scores;
        for(i=0;i<26;i++)
        {
            cin>>scores[(char)('a'+i)];
        }
        cout<<sol(s1,s2,s1.size(),s2.size(),scores)<<endl;
    }
      
    return 0;  
}  
~~~
