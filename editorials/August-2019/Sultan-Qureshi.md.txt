---
layout: default-editorial
title: August 2019
problem: Sultan Qureshi
link: https://www.hackerrank.com/contests/uvce-ncode-august-2019/challenges/sultan-qureshi
---
# Solution

* Key Observations:
  * odd + odd = even
  * even + even = even
  * even + odd  = odd
  * all even numbers except $2$ are composite
  * factors of any number $a$, other than $1$ and $a$ stays in the range of $[$ $2$ $,$ $\sqrt{a}$ $]$ 
  * Therefore if a number is composite, it will have a factor in that range, if it is not composite, then the factors are not present in this range since it's only factors are $1$ and $a$.

* Therefore the sum of every 2 pairs of odd prime number gives us a composite number.
  * Let $o$ be the number of odd numbers in the given array, so the total number of composite numbers that can be formed using only odd numbers is:
     * $($ $o$ $*$ $($ $o$ $-$ $1$ $)$ $)$ $/$ $2$ 
  * Let $e$ be the number of even numbers in the array, therefore the number of even composite numbers that can be formed from only even primes are:
     * $($ $e$ $*$ $($ $e$ $-$ $1$ $)$ $)$ $/$ $2$
  * Now we need to check for all odd numbers that are composite since odd composite can be only formed using the sum of an even and an odd number.
  * Now for every odd number $p$, add $p$ with $2$ and check if this sum has a factor in the range $[$ $2$ $,$ $\sqrt{p+2}$ $]$, if a factor is present the number is composite, increment your count. 
 * Checking for composite can be done using [Seive of Eratosthenes](https://www.geeksforgeeks.org/sieve-of-eratosthenes/)
 * Remember to check if an even prime number is present or not!
 * Since $n$ is small, brute force works as well :)

~~~cpp

#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
    int n;
    cin>>n;
    int odd =0, even =0, oddcomp=0;
    for(int i =0;i<n;i++)
    {
        int p;
        cin>>p;
        if(p%2==1)
        {
            odd++;
            for(int j = 2;j<=int(sqrt(p+2));j++)
            {
                if((p+2)%j==0)
                {
                   oddcomp++;
                    break;
                } 
                    
            }
        }
        else
            even++;
    
    }
    int ans = (odd*(odd-1))/2;
    ans+= (even*(even-1))/2;
    if(even>0)
        ans+=oddcomp;
    cout<<ans;
    return 0;
}


~~~

* Time Complexity : $O$$($$n$ $+$ $m$ $\times$ $\sqrt{p}$ $)$, where $m$ is the number of odd numbers and $p$ is the odd number.
* Space Complexity : $O(1)$


# Alternate Solution using Seive 



~~~cpp

#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int primes[200001];

void seive()
{
    fill(primes,primes+200001,1);
    for(int i =2;i*i<200001;i++)
    {
        if(primes[i]==1)
            
        {
         
            int p = i+i;
            for(;p<200001;p=p+i)
                primes[p]=0;
        }
    }
    primes[0]=0;
    primes[1]=0;
}


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */ 
    seive();
    int n;
    cin>>n;
    int odd = 0,even=0;
    long long int arr[n];
    for(int i =0;i<n;i++)
    {
        cin>>arr[i];
        if(arr[i]%2)
            odd++;
        else
            even++;
    }
    
    long long int ans = (odd*(odd-1))/2 + (even*(even-1)/2);
    long long int c =0;
    for(int i =0;i<n;i++)
    {
        if(arr[i]%2==1)
        {
            int v = arr[i]+2;
            if(!primes[v])
                c++;
        }
    }
    c=c*even;
    ans += c;
    cout<<ans;
    return 0;
}


~~~
* Time Complexity : $O$ $($ $200000$ $\times$ $log(log(200000))$ $+$ $n$ $)$
* Space Complexity : $O(1)$

