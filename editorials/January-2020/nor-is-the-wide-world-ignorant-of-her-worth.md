---
layout: default-editorial
title: January 2020
problem: In sooth I know not why I am so sad...
link: https://www.hackerrank.com/contests/uvce-ncode-january-2020/challenges/antonio-is-melancholic
---
# Solution

* First things first, lets store Bassanio's location and Portio's location into variables  $(s_i,s_j)$ and $(e_i,e_j)$ which accepting the inputs itself.
* Now let's keep a $dist[][]$ array, to keep track of the shortest dist to each cell from Bassanio's cell. 
* Let's assume that initially, all cell are inaccessible from Bassanio's cell so all values in $dist[][]$ is initialized to $\infty$ except Bassanio's and Portia's cells.
* After this perform a [Dijkstra's](https://cp-algorithms.com/graph/dijkstra.html) using Bassanio's cells as the source.
   


~~~cpp

#include<bits/stdc++.h>
#define mod (100000007)
using namespace std;
typedef long long int ll;
char arr[100][100];
int h,w,si,sj,ei,ej, dist[100][100];
//ifstream fin("input(janB2).txt");
//ofstream fout("output(janB2).txt");


void input()
{
    memset(dist,mod, sizeof dist);
    for(int i=0;i<h;i++)
        {

            for(int j= 0 ;j<w;j++)
            {

                cin>>arr[i][j];
                if(arr[i][j]=='B')
                    si=i,sj=j;
                else if(arr[i][j]=='P')
                    ei=i,ej=j,arr[i][j]='0';
                dist[i][j]=mod;

            }

        }

}

int check(int i, int j)
{
    if(i>=0 && j>=0 && i<h && j<w && arr[i][j]!='W')
    {
      return 1;
    }
    return 0;
}
void Dijkstra()
{
   queue<pair<int,int>>q;
   q.push(make_pair(si,sj));
   dist[si][sj]=0;
   pair<int,int>delta[4] ={{0,1},{1,0},{-1,0},{0,-1}  };
   while(!q.empty())
   {
       int x = q.front().first;
       int y = q.front().second;

       q.pop();
     

       for(int i=0;i<4;i++)
       {

           int x1 = x + delta[i].first;
           int y1 = y + delta[i].second;


           if(check(x1,y1) && (dist[x][y]+arr[x1][y1]-48) <dist[x1][y1])
           {
               dist[x1][y1]=dist[x][y]+arr[x1][y1]-48;
               q.push(make_pair(x1,y1));
           }
       }
   }
   if(dist[ei][ej]!=mod)
   cout<<dist[ei][ej]<<endl;
   else
    cout<<"Antonio"<<endl;
}
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int t;
    cin>>t;
    while(t--)
    {
        cin>>h>>w;
        input();
        Dijkstra();

    }



    return 0;
}


~~~

* Time Complexity : $O(n^2+m)$ 
