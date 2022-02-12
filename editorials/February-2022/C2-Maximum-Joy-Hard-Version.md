---
layout: default-editorial
title: February 2022
problem: C2 - Maximum Joy (Hard Version)
link: https://www.hackerrank.com/contests/ncode-february-2022/challenges/c2-maximum-joy-hard-version
---
# Solution

- This is a prefix and suffix sum problem where you have to precompute sum for first index and and then accordingly the sum changes when we find for other indexes
- Firstly compute prefix sum ( sum of all elements from start to the required position ) and suffix sum ( sum of all elements from end to the required position ).
- Compute the sum of costs for starting index and store it in a variable
- Now keep two sum variables to store sum of costs to left of the position and sum of costs to right of the position initially left sum is $0$ and right sum is already precomputed
- Now at each iteration right sum gets reduced to its position's suffix sum and left sum gets decreased by its position's prefix sum except the last element which gets multiplied by the size of the array and we addd it to left sum.
- For each iteration you will get total sum as sum of left sum and right sum and the maximum sum among each iteration is the answer
- Time Complexity: $O(n)$

$$$$

# Implementation in C++

```cpp
#include <bits/stdc++.h>

#define ll long long

using namespace std;

int main() {
    int t, n, i;
    ll a[200001], prefix[200001], suffix[200001], sum, rsum, lsum, maxm;
    cin >> t;
    
    while(t--) {
        cin >> n;
        for(i = 0; i < n; ++i)
            cin >> a[i];
        
        //Calculate prefix sum of array a
        sum = 0;
        for(i = 0; i < n; ++i) {
            sum += a[i];
            prefix[i] = sum;
        }
        
        //Calculate suffix sum of array a
        sum = 0, rsum = 0;
        for(i = n-1; i >= 0; --i) {
            sum += a[i];
            suffix[i] = sum;
        }
        
        
        // Calculate the sum of costs for first position prehand
        for(i = 0; i < n; ++i)
           rsum += a[i]*(i+1);
           
           
        // Calculating two sums one from position to all elements 
        // to the right and another sum from start index till the 
        // position of element and finding the maximum among them
        lsum = 0, maxm = 0;
        for(i = 0; i < n; ++i) {
            if(maxm < lsum + rsum)
                maxm = lsum + rsum;
            rsum -= suffix[i];
            if(i != 0) {
                lsum -= prefix[i-1];
                lsum += a[i]*n;
            }
            else
                lsum += a[i]*n;
        }
        
        cout << maxm << "\n";
    }
    return 0;
}
```

$$$$

# Implementation in Java

```java
import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        int t, n, i;
        long a[] = new long[200001];
        long prefix[] = new long[200001];
        long suffix[] = new long[200001];
        long sum, rsum, lsum, maxm;
        
        t = scan.nextInt();

        while (t-- > 0) {
            n = scan.nextInt();
            for(i = 0; i < n; ++i)
                a[i] = scan.nextLong();

            //Calculate prefix sum of array a
            sum = 0;
            for(i = 0; i < n; ++i) {
                sum += a[i];
                prefix[i] = sum;
            }

            //Calculate suffix sum of array a
            sum = 0; rsum = 0;
            for(i = n-1; i >= 0; --i) {
                sum += a[i];
                suffix[i] = sum;
            }


            // Calculate the sum of costs for first position prehand
            for(i = 0; i < n; ++i)
               rsum += a[i]*(i+1);


            // Calculating two sums one from position to all elements 
            // to the right and another sum from start index till the 
            // position of element and finding the maximum among them
            lsum = 0; maxm = 0;
            for(i = 0; i < n; ++i) {
                if(maxm < lsum + rsum)
                    maxm = lsum + rsum;
                rsum -= suffix[i];
                if(i != 0) {
                    lsum -= prefix[i-1];
                    lsum += a[i]*n;
                }
                else
                    lsum += a[i]*n;
            }

            System.out.println(maxm);
        }
    }
}
```

$$$$

# Implementation in Python

```python
t = int(input())
for _ in range(t):
    n = int(input())
    a = list(map(int, input().split()))
    
    prefix = []
    suffix = []
    
    for i in range(0, n):
        prefix.append(a[i])
        suffix.append(a[i])
        
    # Calculate prefix sum of array a
    for i in range(1, n):
        prefix[i] += prefix[i-1]
        
    # Calculate suffix sum of array a
    for i in range(n-2, -1, -1):
        suffix[i] += suffix[i+1]
        
    rsum = 0
    
    # Calculate the sum of costs for first position prehand
    for i in range(0, n):
       rsum += a[i]*(i+1)

    # Calculating two sums one from position to all elements 
    # to the right and another sum from start index till the 
    # position of element and finding the maximum among them
    lsum = 0
    maxm = 0
    for i in range(0, n):
        if maxm < lsum + rsum:
            maxm = lsum + rsum
            
        rsum -= suffix[i]
        
        if i != 0:
            lsum -= prefix[i-1]
            lsum += a[i]*n
        else:
            lsum += a[i]*n

    print(maxm)
```

$$$$

# Contest Material

- [Codeforces - Monster and Spells](https://codeforces.com/contest/1626/problem/C)

