---
layout: default-editorial
title: January 2020
problem: In sooth I know not why I am so sad...
link: https://www.hackerrank.com/contests/uvce-ncode-january-2020/challenges/antonio-is-melancholic
---
# Solution

* Now, notice one thing if the length if $n$ is in the range of $10^5$, then $n$ is in the range of $10^{10^5}$
* Since $n$ is very very big you can really store in any integer data types like int, long long.
* Therefore, first accept $n$ as a string
* Also notice that $x$ is in the range of $10^8$, so you can store it in any normal integer data type.
* Also any number mod $x$ will also remain in integer range since $a%x$ $<$ $x$
* Now how do we check if there is some $k$ for which the first $x$ digits of $n$ as a number is divisible by $x$ ?
  * For every $k$, where $1$ $\le$ $k$ $\le$ |$n$|, we check for remainder with $x$
   * If the remainder is $0$ it is "Aye", and you have your answer.
   * Say you have some remainder at for some number whose last digit is the $k^{th}$ digit of $n$, then we can count remainder in $k+1$, which is
     $rem[k+1]$ = $(rem[k]*10+ n[k+1])$ % $x$ 
   * Check if $rem[k+1]$ is $0$, if there is some $k$ for which $rem[k+1]$ is $0$ then "Aye", else "Nay"  
   


~~~cpp

#include<bits/stdc++.h>
#define MOD(ll)(1e9+7)
using namespace std;
typedef long long int ll;

int main()
{
        ios_base::sync_with_stdio(false);cin.tie(NULL);
        
        int t;
        cin>>t;
        while(t--)
        {
            string n;
            ll x;
            cin>>n>>x;
            
            int l = n.length();
            ll rem[l];
            rem[0] = (n[0]-'0')%x;
            int flag=0;
            for(int k=0;k<l-1;k++)
            {
                rem[k+1] = (rem[k]*10+ (n[k+1]-'0'))%x;
                if(rem[k+1]==0)
                {
                    
                    flag=1;
                    break;
                }
            }
            
            if(flag)
             cout<<"Aye"<<endl;
            else
                cout<<"Nay"<<endl;

        }

        return 0;
}


~~~

* Time Complexity : $O(length of n_i)$ , per test case.
