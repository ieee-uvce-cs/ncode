---
layout: default-editorial
title: November 2019
problem: Arena
link: https://www.hackerrank.com/contests/uvce-ncode-november-2019/challenges/arena
---
# Solution

* To solve this problem you need to know this cute data structure: [trie] (https://www.topcoder.com/community/competitive-programming/tutorials/using-tries/)

* Now create a trie having all the mockwords.
* After this we shall make 2 DP arrays:
  * $win[v]$ - to check if Katniss or Peeta can win she/he makes a move now.
  * $lose[v]$ - to check if Katniss or Peeta will lose if she/he makes a move now.

* Now say $v$ is a leaf of the trie, then $win[v]$ = $false$, $lose[v]$=true

* If $v$ is not a leaf, then for every $i$, such that $i$ belongs to the children of $v$ (use dfs for this :'))
  * $win[v]$ $ =$  $($ $win[v]$ $or$ $($ $not$ $win[i]$ $)$ $)$
  * $lose[v]$ $ =$ $ ($ $lose[v]$ $or$ $($ $not$ $lose[i]$ $)$ $)$


~~~cpp

#include <iostream>
#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <vector>
#include <fstream>

using namespace std;

const int max_len = 100050, max_alpha = 26;

int t[max_len][max_alpha];
int szT;

int newT() {
    return ++szT;
}

int n, k, root;
char s[max_len];
bool win[max_len], lose[max_len];

void addTrie(char * s) {
    int len = strlen(s);
    int v = root;
    for (int i = 0; i < len; i++) {
        int c = s[i] - 'a';
        if (t[v][c] == 0) t[v][c] = newT();
        v = t[v][c];
    }
}

void dfs(int v) {
    win[v] = false;
    lose[v] = false;
    bool isLeaf = true; //
    for (int i = 0; i < max_alpha; i++) {
        if (t[v][i] != 0) {
            isLeaf = false;
            int to = t[v][i];
            dfs(to);
            win[v] |= !win[to];
            lose[v] |= !lose[to];
        }
    }
    if (isLeaf) {
        lose[v] = true;
    }
}

void answer(bool res) {
    cout<< (res ? "katniss" : "peeta")<<"\n";

    return ;
}

void init()

{
    t[max_len][max_alpha]={0};

}
int main()
{
    

    int test;
    cin>>test;

    while(test--)
        {
    cin>>n>>k;

    szT=0;
    memset(t,0,sizeof t);

    fill(win,win+max_len,0);
    fill(lose,lose+max_len,0);
    root = newT();
    for (int i = 1; i <= n; i++)
    {
        cin>>s;
        addTrie(s);
    }
    dfs(root);
    if (k == 1) answer(win[root]); 
    else if (!win[root]) answer(win[root]); 
    else if (lose[root]) answer(win[root]); 
    else if (k % 2 == 1) answer(win[root]); 
    else answer(!win[root]); 
    }
    return 0;
}

~~~
* Time Complexity : $O(\Sigma | M_i | )$, where $|M_i|$, is the length os mockword $i$
