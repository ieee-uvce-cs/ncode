---
layout: default-editorial
title: March 2022
problem: B - How frequent is it?
link: https://www.hackerrank.com/contests/ncode-march-2022/challenges/b-how-frequent-is-it
---
# Solution

- Since the number of elements, $N$ is small, we can iterate through each pair of indices $i$, $j$ where $1 \le i \lt j \le N$.
- The bitwise XOR of each pair of elements of the array can be found and hence, the element with maximum frequency can be found.
- Time Complexity: $O(nlogn)$

$$$$

# Implementation in C++

```cpp
#include <iostream>
#include <map>

using namespace std;

int main() {
    int t, n, m, i, j, k, res;
    cin>>t;
    
    map <int, int> mm;
    
    int a[100];
    
    while (t--) {
        cin>>n;
        
        mm.clear();
        
        for (i = 0; i < n; i++)
            cin>>a[i];
        
        // Since n is small, the XOR of all pairs
        // can be calculated easily
        for (i = 0; i < n; i++)
            for (j = i+1; j < n; j++)
                mm[(a[i]^a[j])]++;
        
        res = -1;
        k = -1;
        
        // Find the element with the largest frequency
        for (auto it = mm.begin(); it != mm.end(); ++it)
            if (it->second > k) {
                res = it->first;
                k = it->second;
            }
        
        cout<<res<<"\n";
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
        
        int t, n, i, j, k, res;
        t = scan.nextInt();
        
        int [] a = new int[100];
        
        while (t-- > 0) {
            n = scan.nextInt();
            
            for (i = 0; i < n; i++)
                a[i] = scan.nextInt();
            
            HashMap <Integer, Integer> map = new HashMap<>();
            
            // Since n is small, the XOR of all pairs
            // can be calculated easily
            for (i = 0; i < n; i++)
                for (j = i+1; j < n; j++) {
                    if (!map.containsKey(a[i]^a[j]))
                        map.put(a[i]^a[j], 0);
                    
                    map.put(a[i]^a[j], map.get(a[i]^a[j])+1);
                }
            
            k = -1;
            res = -1;
            
            // Find the element with the largest frequency
            for (Map.Entry mapElement : map.entrySet()) {
                int key = (int)mapElement.getKey();
                int value = (int)mapElement.getValue();
                
                if (value > k) {
                    res = key;
                    k = value;
                }
                else if (value == k && key < res)
                    res = key;
            }
            
            System.out.println(res);
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
    
    d = {}
    
    # Since n is small, the XOR of all pairs
    # can be calculated easily
    for i in range(0, n):
        for j in range(i+1, n):
            if a[i]^a[j] not in d:
                d[a[i]^a[j]] = 0
                
            d[a[i]^a[j]] += 1
            
    k = -1
    res = -1
    
    # Find the element with the largest frequency
    for ele in d:
        if d[ele] > k:
            res = ele
            k = d[ele]
        elif d[ele] == k:
            res = min(res, ele)
            
    print(res)
```

$$$$

# Contest Material

- [GeeksForGeeks - Print all pairs with given sum](https://www.geeksforgeeks.org/print-all-pairs-with-given-sum/)
- [Codeforces - Pleasant Pairs](https://codeforces.com/problemset/problem/1541/B)

