---
layout: default-editorial
title: March 2022
problem: D - Scheduling Rallies
link: https://www.hackerrank.com/contests/ncode-march-2022/challenges/d-scheduling-rallies
---
# Solution

- The problem is an instance of Scheduling.
- The rallies are sorted according to the ending time.
- At the end of each rally the chief minister candidate would have addressed some number of voters.
- If it is decided to address the rally, the chief minister can address a maximum of $V$ and $U$, where $V$ is the number of voters being adressed in the current rally and $U$ is the number of voters addressed before the beginning of the current rally.
- For each rally, the maximum number of voters addressed before is known and the number of voters addressed after the rally can be calculated.
- The maximum number of voters can hence be found.
- Time Complexity: $O(nlogn)$

$$$$

# Implementation in C++

```cpp
#include <bits/stdc++.h>

using namespace std;

pair <pair <int, int>, int> p[100];

int main() {
    int t, n, i, j, k, res;
    cin>>t;
    
    map <int, int> mm;
    map <int, int>::iterator it;
    
    while (t--) {
        cin>>n;
        
        // p[i].first.first = r[i] (stop hour)
        // p[i].first.second = l[i] (start hour)
        // p[i].second = v[i] (number of voters)
        for (i = 0; i < n; i++)
            cin>>p[i].first.second>>p[i].first.first>>p[i].second;
        
        sort(p, p+n);
        
        res = 0;
        mm.clear();
        mm[0] = 0;
        
        // For each raly, find the maximum number of voters addressed
        // before that rally and add it with the number of voters in
        // the current rally
        for (i = 0; i < n; i++) {
            it = mm.lower_bound(p[i].first.second);
            it--;
            
            mm[p[i].first.first] = max(it->second+p[i].second, res);
            res = max(res, mm[p[i].first.first]);
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
    public static int max(int a, int b) {
        if (a > b)
            return a;
        
        return b;
    }
    
    public static void array_swap(int [] a, int [] b, int n) {
        // Simple method to swap two 1D arrays
        int i, temp;
        
        for (i = 0; i < n; i++) {
            temp = a[i];
            a[i] = b[i];
            b[i] = temp;
        }
    }
    
    public static void bubble_sort_2D_array(int [][] a, int n, int m) {
        // Bubble sort method to sort 2D array
        int i, j;
        
        for (i = 0; i < n; i++)
            for (j = 0; j < n-i-1; j++) {
                if (a[j][0] > a[j+1][0])
                    array_swap(a[j], a[j+1], 3);
                else if (a[j][0] == a[j+1][0] && a[j][1] > a[j+1][1])
                    array_swap(a[j], a[j+1], 3);
                else if (a[j][0] == a[j+1][0] && a[j][1] == a[j+1][1] && a[j][2] > a[j+1][2])
                    array_swap(a[j], a[j+1], 3);
            }
    }
    
    public static int lower_bound_val(HashMap <Integer, Integer> map, int val) {
        // Method to find the lower bound in a hashmap
        int res = 0;
        
        for (Map.Entry mapElement : map.entrySet()) {
            int key = (int)mapElement.getKey();
            
            if (key < val && map.get(key) > res)
                res = map.get(key);
        }
        
        return res;
    }
    
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        int t, n, i, j, l, r, v, res, max_before_rally;
        t = scan.nextInt();
        
        while (t-- > 0) {
            n = scan.nextInt();
        
            int [][] a = new int[n][3];
            
            // p[i].first.first = r[i] (stop hour)
            // p[i].first.second = l[i] (start hour)
            // p[i].second = v[i] (number of voters)
            for (i = 0; i < n; i++) {
                l = scan.nextInt();
                r = scan.nextInt();
                v = scan.nextInt();
                
                a[i][0] = r;
                a[i][1] = l;
                a[i][2] = v;
            }
            
            bubble_sort_2D_array(a, n, 3);
            
            HashMap <Integer, Integer> map = new HashMap<>();
            
            map.put(0, 0);
            res = 0;
            
            // For each raly, find the maximum number of voters addressed
            // before that rally and add it with the number of voters in
            // the current rally
            for (i = 0; i < n; i++) {
                max_before_rally = lower_bound_val(map, a[i][1]);
                
                map.put(a[i][0], max(max_before_rally+a[i][2], res));
                res = max(res, map.get(a[i][0]));     
            }
            
            System.out.println(res);
        }
    }
}
```

$$$$

# Implementation in Python

```python
def lower_bound_val(m, val):
    '''Method to find the lower bound in a dictionary'''
    res = 0
    
    for key in m:
        if key < val:
            res = max(res, m[key])
            
    return res

t = int(input())
for _ in range(t):
    n = int(input())
    a = []
    
    # a[i][0] = r[i] (stop hour)
    # a[i][1] = l[i] (start hour)
    # a[i][2] = v[i] (number of voters)
    for i in range(0, n):
        l, r, v = map(int, input().split())
        a.append([r, l, v])
        
    a.sort()
    
    m = {}
    m[0] = 0
    res = 0
    
    # For each raly, find the maximum number of voters addressed
    # before that rally and add it with the number of voters in
    # the current rally
    for i in range(0, n):
        max_before_rally = lower_bound_val(m, a[i][1])
        
        m[a[i][0]] = max(max_before_rally+a[i][2], res)
        res = max(res, m[a[i][0]])
        
    print(res)
```

$$$$

# Contest Material

- [Codeforces Blog - Job Scheduling Problem](https://codeforces.com/blog/entry/59424)
- [Tutorialspoint - Job Scheduling with Deadline](https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_job_sequencing_with_deadline.htm)
- [Leetcode - Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/)
- [Youtube - Weighted Job Scheduling Dynamic Programming](https://www.youtube.com/watch?v=cr6Ip0J9izc)
