---
layout: default-editorial
title: July 2021
problem: A - Hulk Likes It His Way
link: https://www.hackerrank.com/contests/uvce-ncode-july-2021/challenges/a-hulk-likes-it-his-way
---
# Solution

- The problem is straightforward and it asks us to find the building for Hulk to climb upon such that the difference between the heights of the buildings on which Tesseract is present and on which Hulk is present is minimum, which indirectly means we have to find the second highest building in the town.
- This can be achieved in many ways and one of the simplest way is to sort the given array in decreasing order and print the number at second position in the sorted array.
- $Time Complexity: O(nlogn)$

$$$$

# Implementation

```cpp
#include<bits/stdc++.h>

using namespace std;

int main()
{
    int t;
    cin>>t;
    
    while(t--)
    {
        int n, i;
        cin>>n;
        
        int a[n];
        for(i = 0; i < n; i++)
            cin>>a[i];
            
        /*
            Sorting the array and reversing the same array will
            sort the array in decreasing order
        */
        sort(a, a+n);
        reverse(a, a+n);
        
        //Print the second element of the array
        cout<<a[1]<<"\n";
    }
}
```

$$$$

# Additional Material

- [Video Editorial](https://www.youtube.com/watch?v=e0hpya05vo8&list=PLMk3wkBiPDIEQS59Ox7il1QH-w6TqCZY8)
- [Leetcode - Find the kth largest element in the array](https://leetcode.com/problems/kth-largest-element-in-an-array/)
- [Leetcode - kth smallest element in a sorted matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)
