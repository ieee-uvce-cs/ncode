---
layout: default-editorial
title: July 2021
problem: D - Hawkeye's Conundrum
link: https://www.hackerrank.com/contests/uvce-ncode-july-2021/challenges/c-hawkeyes-conundrum
---
# Solution

- The problem can be solved by various methods but one efficient method is to use two     pointers
- An array is required of size 26 (as the number of lower case letters are 26), to store the number of occurences of the letter
- Initialize variables $i$ and $j$ starting from 0
- At each iteration we need to check if the substring is possible by checking the occurence array and see if the last entered letter does not exceed does more than $A_{s[j]-'a'}$ times in the substring.
- If the substring condition satisfies then we increment $j$ and increment the occurence of the last occured letter in occurence array
- If substring condition doesnt satisfy then increment $i$ and decrement the occurence of the last occured character as it will not appear in the next iterations
- So at each iteration if the substring is possible then we keep check on length of the substring  ($j$-$i$+1) and find the maximum possible among all
- The above process continues until $j$  reaches $N$ , in other words $j$ reaches at the end of the string and no more iterations are possible 
- $Time Complexity: O(n)$

$$$$

# Implementation

```cpp
#include<bits/stdc++.h>
#define ll long long
using namespace std;

int main()
    {
      int t;
      cin>>t;
      
      while(t--)
      {
         ll n;
         cin>>n;
         
         string s;
         cin>>s;
         
         vector<ll> A(26);
         for(ll &i:A)
            cin>>i;
            
         vector<ll> b(26,0);
         // An array to count the no.of occurences of each lowercase letters in the string
         
         ll i=0,j=0,pos,maxm=-1;

         while(j<n) {
         // the loop continues until j reaches end of the string
         
            if(b[s[j]-'a']<A[s[j]-'a']) {
                // checks if no. of occurence of letters at position j doesn't exceed A[s[j]-'a']
        
                b[s[j]-'a']++; 
                
                if((j-i+1)>maxm) {
                    maxm=j-i+1;
                    pos=i;
                }
                
                /*      
                checks whether the formed substring is the maximum 
                possible among all checked substrings until now and
                updates the maximum length and the substring
                */

                j++;
            }
            
            else {
                b[s[i]-'a']--;
                i++;
            }
            
            /*
            as the substring length is decresed as we increased i so we
            decrement the occurence by one as it is later not appeared in any
            next iterations
            */
         }

         cout<<maxm<<endl;
         cout<<s.substr(pos,maxm)<<endl;
      }
}
```

$$$$

# Additional Material

- [Video editorial](https://www.youtube.com/watch?v=8mKVx7wgOxU&list=PLMk3wkBiPDIEQS59Ox7il1QH-w6TqCZY8&index=4)
- [Mock Placement - How do you exist in me](https://www.hackerrank.com/contests/mock-placement-coding-round/challenges/do-you-exist-in-me)
- [Two pointer problems in codeforces](https://codeforces.com/problemset?tags=two%20pointers,500-1300)
