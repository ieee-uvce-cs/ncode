---
layout: default-editorial
title: November 2020
problem: A Level Deeper
link: https://www.hackerrank.com/contests/uvce-ncode-november-2020/challenges/q2-15
---
# Solution
* We were asked to find the maximal number of arrays we can fit into the memory. A small observation first, let the answer be k, then one of the optimal solutions fits the k smallest arrays into the memory. We can assume that we have arrays of size 1 and we want to arrange the memory for the maximal arrays as possible. Then if we have parts of memory of odd size, if we fit array of size 1 at this part we will obtain part of even size. From other hand, if we put arrays of bigger size we will not change the parity and if we don't fill it with arrays of size one and initially it's of odd size then in the end we will have at least one empty cell. So it's reasonable to put the arrays of size one into the memory of odd size. Let's do it until we can do it. We have three possible situations:

* We don't have memory parts of odd size anymore.

* We don't have arrays of size 1 anymore.

* We don't have neither arrays of size 1 neither memory parts of size 1.

* Let us start from the first case. Suppose that there are some arrays of size 1 left, but there are no memory parts of odd size. Easy to see then in such case we need to group arrays of size 1 in pairs and then consider them as the same array. So we can divide every number by two and reduce the problem to the initial one.

* In the second case if we divide every number by two we will obtain the same problem (and that cannot increase the answer).

* The third case is similar to the second one.

* When implementing this we need to remember that first we have to fill the memory with arrays which are build from the maximal numbers of initial arrays.

* The complexity of the given algorithm is O(n log(n)).
~~~cpp

~~~

