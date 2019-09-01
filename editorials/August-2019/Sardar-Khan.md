---
layout: default-editorial
title: August 2019
problem: Sardar Khan
link: https://www.hackerrank.com/contests/uvce-ncode-august-2019/challenges/sardar-khan
---
# Solution

* If $n$>$m$, then the probability is $0$, as at some point, Khan will run out of change.

* If $n$ $=$ $0$, then Khan will never run out of change and therfore the probability is $1$.

* Now for $n$ $\le$ $m$, there is an order in which clients should approach so that, Khan will have change, we need to find this order!
  
  
  * The probability of zero deaths is : $($ $m$ $-$ $n$ $+$ $1$ $)$ $/$ $($ $m$ $+$ $1$ $)$

* Please read the following: [Bertrand's Ballot Theorem](https://en.wikipedia.org/wiki/Bertrand%27s_ballot_theorem#Variant:_ties_allowed)

  ## Proof by induction

     * Suppose $n$ is $1$, then we put $m$ clients in any order, and the client with $100$ rupee note, anywhere in the line except in the front. Here the total number of places we have is $m+1$, and the number of correct ways to arrange the clients is $m+1-1$, since we can't put him in front of the queue. So the probability is : $($ $m$ $-$ $1$ $+$ $1$ $)$ $/$ $($ $m$ $+$ $1$ $)$

    * Lets use induction for $n+m$, assume $n+m=1$, since $m$ $\ge$ n, it means that $m=1$ and $n=0$. Therefore $P($ zero deaths $)$ = 1  = $\frac{1-0+1}{1+1}$ = $\frac{1}{1}$, which is true.

    * Let $P_{m,n}$ = $P($ zero deaths $)$ for $m$ $50$ rupee note and $n$ $100$ rupee note.
    
    *  Assume formula holds good for $n+m$ = $k-1$

    *  We should prove that formula is true for $n+m=k$

    *  The last client to approach Khan has either $100$ rupee note or $50$ rupee note. 
    *  Probability that the last person has $100$ rupee note is $\frac{n}{n+m}$
    *  Probability that the last person has $50$ rupee note is $\frac{m}{n+m}$

    * $P_{m,n}$ = $P_{m-1, n}$ $\frac{m}{m+n}$ $+$  $P_{m, n-1}$ $\frac{n}{m+n}$ = $\frac{(m-1)-n+1}{(m-1)+1}$ $\frac{m}{n+m}$ $+$  $\frac{m-(n-1)+1}{m+1}$ $\frac{n}{n+m}$ = $\frac{m-n+1}{m+1}$
      


   
     
 


~~~cpp

#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
    int a,b;
    cin>>a>>b;
    if(a>b || b==0)
        printf("%.6f",(0.0));
    else if(a==0)
        printf("%.6f",(1.0));
    else
    {
        double n = b-a+1;
        double d = b+1;
        double ans = n/d;
        printf("%0.6f",(ans));
    }
        
    return 0;
}


~~~
* Time Complexity : $O$ $(1)$ 
* Space Complexity : $O(1)$
