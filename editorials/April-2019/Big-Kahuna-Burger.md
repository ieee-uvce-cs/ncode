---
layout: default-editorial
title: April 2019
problem: Big Kahuna Burgers
link: https://www.hackerrank.com/contests/uvce-ncode-april/challenges/burgers-and-bullets
---
# Solution

* The sum of digits of any multiple of $9$ to a single digit is always $9$.
* Also on adding any number $r$, $0 < r \le 8$, to $9$ and summing its digits to a single digit gives us $k$ itself.
* So using the above properties we can write any number $n$ as: 
    * $n = 9q + r$, where $q \in \mathbb{Z^{+}}$ and $r \in $  \{0,1,2,3,4,5,6,7,8\}. Since $n$ can be written in such a manner, all we need to do to find the sum of digits of $n$ to a single digit is to find $r$.
$r$ can be easily found using $n$ \% $9$.However the problem statement asks us for $n^{m}$.
    * $n^{m} = (9q+r)^{m}$
    * $(9q+r)^{m}$ = $(9q)^{m} + (9q)^{m-1}.r+...+(9q).r^{m-1}+r^{m}$
    * all terms expect $r^{m}$ is a multiple of $9$, therefore to find the
sum of digits of $n^{m}$ we only need to find $r^{m}$, which is found by $n^{m}$ \% $9$.
    * Since, the values of $n$ and $m$ can go up to $10^{18}$, we cannot find $n^{m}$ first, and then find its remainder with $9$.
    * Therefore we use $modular exponentiation$, this operation calculates the remainder when an integer $n$ is raised to its $m^{th}$ power, $n^{m}$ , and is divided by a positive integer,  $a$, here $a=9$.
    * Using  exponential property, we can write, $n^{m}$ \% $9$ = $((n \$%$9)^{m})$ \% $9$.
    * To reduce the size of our terms and make our calculations faster, we divide $m$ into smaller parts by dividing it by $2$.
    * Eample: $5^{25}$ can be written as:  $5^{12}\times5^{12}\times5^{1}$
= $5^{6}\times5^{6}\times5^{6}\times5^{6}\times5$. And so on, till $5^{1}$.
    * We can see that for each of the above cases $m\div 2$ repeats twice for each $m$. So all we have to do is find $n^{m\div2}$ once and multiply the answer with itself once. And we will get our result.
    * Every time $m$ is odd multiply the result with $n$ once.

* In the above manner we can find $n^{m}$ in $O(log {} m)$ time.
        

# Implementation

~~~cpp
#include<bits/stdc++.h>
using namespace std;

long long int power(long long int a, long long int b) // modular exponentiation
{
    int res=1;
    while(b)
    {
        if(b&1)
            res=res*a%9;
        b>>=1;
        a = a *a % 9;
    }

    return res? res: 9; // if the remainder is 0, then the sum of digits is 9.
}

int main()
{
    

    int t;
    cin>>t;
    while(t-->0)
    {
        long long int a,n;
        cin>>a>>n;
        cout<< power(a%9,n)<< endl;
    }
    return 0;
}
~~~

* Time Complexity : $O(\log{}n)$ per testcase
* Space Complexity : $O(1)$




