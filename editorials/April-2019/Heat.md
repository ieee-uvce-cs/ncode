---
layout: default-editorial
title: April 2019
problem: Heat
link: https://www.hackerrank.com/contests/uvce-ncode-april/challenges/clean-up-go-home
---
# Heat

##### Editorial
Solution:
	We have to divide a tree (having $N$ nodes) into some number of trees, each of them having exactly $K$ node present in them.
	This follows that number of trees we have in the end should be $N / K$ and for that to happen $N$ should be a multiple of $K$.
	Let $X = N / K$, we root the tree at any node of our choice then we do a DFS from that each subtree returning numbre of nodes
	it has and if it is divisible by $K$ we increse a count variable say $c$ and after the DFS is over we check whether or not $c == X - 1$ (as $X - 1$ number of edges needs to be cut in order to make $X$ partitions).
	If true we print Yes, No otherwise.
	This greedy works because we can't cut any edges in a subtee with number of nodes less than $K$ because the atleast on tree will have less $K$ number of nodes, and when we find a subtree with number of node equal to $K$ we have to cut it other wise we will have atleast one tree with number of nodes greater that $K$.

##### Solution (C++)

```cpp
#include <bits/stdc++.h>
#define MAX (ll)(1e5+3)

using namespace std;

vector <int> gr[MAX];
int n, k, cc = 0;
int subtree (int node, int par) {
    int ss = 1;
    for (int x : gr[node]) {
        if (x != par) {
            int xx = subtree (x, node);
            cc += xx % k == 0;
			ss += xx;
        }   
    }
    return ss; 
}
                 
int main () {
    bool fl = 1;
    cin >> n >> k;
    set <int> se; 
    for (int i = 0; i < n - 1; i++) {
        int a, b;
        cin >> a >> b;
        gr[a].push_back (b);
        gr[b].push_back (a);
    }   
    if (n % k) {
        fl = 0;
    }   
    if (fl) {
        subtree (1, -1);
    }   
    if (fl && (cc == n / k)) {
        cout << "Yes\n";
    }   
    else {
        cout << "No\n";
    }   
}

```
##### Time complexity: O (N)
##### Space complexity:	O (N)