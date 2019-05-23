---
layout: default-editorial
title: April 2019
problem: Zed's Dead Baby
link: https://www.hackerrank.com/contests/uvce-ncode-april/challenges/zeddead
---
# Solution

* for every subset of $t$, accept $M$ and $N$, now accept the next $M$ values into an array.
   
    * we have to find every combination of every length ($1$ to $M$ ) and see if they add up to $N$ after removing all the non-leaf nodes. This can be efficiently done using $bitmasks$. 

Read about bitmasks here :   https://codeforces.com/blog/entry/18169 
   * How to remove the non-leaf nodes ?:
       
       * Since we are attaching the trees by its leaf nodes, every time we attach a tree to another, each loses one of its leaf nodes.
       * For $n$ trees, the first tree is attached only to the second (therefore loses only $1$ of its leaf nodes), while the second tree is attached to both first and the third tree (therefore lose $2$ of its leaf nodes, one to the first tree and the second leaf node to the third tree) and so on. the $n^{th}$ tree loses only $1$ leaf node to ${n-1}^{th}$ tree.
      * Therefore the total number of leaf nodes lost after attaching $n$ trees by its leaf nodes =  $(n-2)\times 2 + 1 + 1$ =  $(n-1)\times 2$

* Remove the number of leaf nodes lost from the sum.
                       
* if any of the combinations add up to $N$ after subtracting the non-leaf nodes, then print $YES$.

* otherwise print "NO"

```cpp

#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() 
{
    
    int t;
    cin>>t;
    while(t-->0)
    {
        int m,n;
        string ans ="NO\n";
        cin>>m>>n;
        int keys[m];
        for(int i=0;i<m;i++)
            cin>>keys[i];
        for(int i=0;i<(1<<m);i++) // bitmask
        {
            int sum=0,c=0; 
            for(int j=0;j<m;j++)
            {
                if((i&(1<<j))) // check if bit is set
                { 
                  sum+=keys[j];
                 
                  c++;
                }
                    
            }
            
            if(c>1)
                sum-=(c-1)*2;// since 2 nodes are used to attack the trees, they won't be nodes anymore xD
            //so every time we add a new tree we need to subtract 2
           
            
            if(sum==n)
            {
                
                ans ="YES\n";
                break;
            }
            
        }
        cout<<ans;
        
    }
    return 0;
}
```

Time Complexity: $O(2^m * m)$ per testcase

Space Complexity: $O(m)$
