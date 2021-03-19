---
layout: default-editorial
title: February 2021
problem: The One With All The Shopping
link: https://www.hackerrank.com/contests/uvce-ncode-februray-2021/challenges/q3-15
---
# Solution

~~~cpp
# include<bits/stdc++.h>

using namespace std;
#define LL long long
int main()
{
   int N,t;
   cin>>t;
   while(t--)
   {
   vector<int> E, D;
vector< pair<int, int> > P;
multiset<int> S;
LL ans;
    scanf("%d", &N);
    ans = 0LL;
    for (int i = 1, k; i <= N; i++)
    {
        scanf("%d", &k);
        E.push_back(k);
        ans += k;
    }
    sort(E.begin(), E.end(), greater<int>());
    for (int i = 0, k = -1, c; i < E.size(); i++)
    {
        if (i == 0 || E[i] != k)
        {
            if (k != -1) P.push_back(make_pair(k, c));
            k = E[i], c = 1;
        }
        else c++;
        if (i == E.size() - 1)
            P.push_back(make_pair(k, c));
    }
    int tot = 0;
    for (int i = 0; i < P.size(); i++)
    {
        int val = P[i].first, num = P[i].second;
        int cov;
        if (num >= tot) cov = tot;
        else
        {
            if (num - (tot - S.size() * 2) > 0) cov = (tot + num) / 2;
            else cov = S.size() + num;
        }
        int pos = max(0, cov - num);
        D.clear();
        for (int j = cov; j > pos; j--)
        {
            if (j <= S.size())
            {
                D.push_back(*S.begin());
                S.erase(S.begin());
            }
            else
            {
                D.push_back(0);
            }
        }
        reverse(D.begin(), D.end());
        for (int st = 0, en = D.size() + max(0, tot - pos - cov); st < en && st < D.size(); st++)
        {
            if (D[st] <= val) D[st] = val;
            else if (D[st] > val && --en < D.size())
                D[en] = max(0, 2 * val - D[st]);
        }
        S.insert(D.begin(), D.end());
        tot += num;
    }
    cout << ans - accumulate(S.begin(), S.end(), 0LL) << endl;
   }

    return 0;
}
~~~
