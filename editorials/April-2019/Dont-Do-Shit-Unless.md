---
layout: default-editorial
title: April 2019
problem: Don't Do Shit Unless
link: https://www.hackerrank.com/contests/uvce-ncode-april/challenges/dont-do-shit-unless
---

# Solution

* Sort the array and find the sum of the first $m$ elements of the array. If the sum turns out to be even. Then we have already found our answer.

- If the sum happens to be odd, to make it even and keep it $minimum$, we have to:-
 * either remove the $largest$ $odd$ $number$ from the first $m$ elements 
of the array and then add the $smallest$ $even$ $number$ occurring after the first $m$ elements.        
 * remove the $largest$ $even$ $number$ from the first $m$ elements and 
then add the $smallest$ $odd$ $number$ occurring after the first $m$ 
elements.

   Choose one among the above such that the sum is $minimal$.

* If none of the above condition exists then, we can never make the sum even, so print $-1$.

* Otherwise we have found the $minimim$ sum!

# Implementation

~~~cpp

#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() 
{
   
    int n,m;
    cin>>n>>m;
    int notes[n];
    long odd_m=-1,even_m=-1,sum=0;
    for(int i=0;i<n;i++)
        cin>>notes[i];
    // sort the array as we need minimum sum
    sort(notes,notes+n);
//find the sum of first m elements in the array.Find the largest odd and even elements in the first m elements int the //array
    
    for(int i=0;i<m;i++)
    {
        sum+=notes[i];
        if(notes[i]%2==1)
            odd_m = notes[i];
        else
            even_m = notes[i];
        
    }
    
    if(sum%2==0) // if sum is even, then we have already found the correct answer, print it and exit
    {
        cout<<sum<<endl;
        exit(0);
    }
    
    int odd_next=-1,even_next=-1; // find the smallest even and odd elements AFTER the first m elements in the array
    
    for(int i=m;i<n;i++)
    {
        if(notes[i]%2==1 && odd_next==-1)
            odd_next = notes[i];
        else if(notes[i]%2==0 && even_next==-1)
            even_next = notes[i];
        
    }
    long diff = 0; // mini difference of even element and odd element to be added to the sum to make it even
    
    if(odd_m!=-1 && even_next!=-1) 
        diff = even_next - odd_m;
    
    if(even_m!=-1 && odd_next!=-1)
    {
        if(diff!=0)
            diff = min(diff,odd_next-even_m);
        else
            diff = odd_next-even_m;
    }
    
    sum = sum+diff;
    
    if(sum%2==1)
        cout<<-1;
    else
        cout<<sum;
    
    
    
    
    return 0;
}


~~~

$Time$ $complexity$: $O(n)$
$Space$ $Complexity$ : $O(n)$