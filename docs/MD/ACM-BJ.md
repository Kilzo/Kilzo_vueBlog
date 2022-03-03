---
title: ACM集训笔记和收录内容整理
date: 2021-11-10
cover: https://kilzo.coding.net/p/Kilzo/d/Blog-data/git/raw/master/Picture-md/picture_2_.webp
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
categories: 
 - ACM算法竞赛
tags: 
 - 算法
---

## 首先是基础：时间复杂度和空间复杂度

### 时间复杂度

程序运行的时间：时间复杂度

测试程序运行时间的变量:

`clock_t  start, end;//(放在要计算的函数上一行)`

`start  = clock(); //(承接上面)`

`end = clock(); //(放在要计算的函数结尾，ps:已经结束的下一行)`

`cout << (double)(end - start) / CLOCKS_PER_SEC << endl; // (承接上一行计算输出被计算函数运行时间)`

一般情况下，评测机的$1s$可做$k10^7~10^8$次运算，即题目时间限制为$1s$的条件下，我们要保证程序内循环次数$<=10^8$.

一般情况下，算法中基本操作重复执行的次数是问题规模n的某个函数f(n),算法的时间独立度量记作

T(n)=O(f(n))

 表示随问题规模n的增大，算法执行时间的增长率和f(n)的增长率相同，称作算法的渐进时间复杂度，简称时间复杂度。

而计算时间复杂度时，我们通常可以忽略低次幂和最高次幂的系数，这样可以简化运算。

常见时间复杂度:

>1. O(1) - 常数复杂度
>2. O( $\log \mathrm{n}$ ) 一 对数复杂度
>3. $O(n)$ - 线性复杂度
>4. O(n log n) - 对数线性复杂度
>5. O $\left(n^{k}\right)$ 一 多项式复杂度
>6. $O\left(k^{n}\right)$ 一指数复杂度
>7. O(n!) 一 阶乘复杂度

在竞赛中，一般算机一秒能运行$5 x 10^8$次汁算，如果题目給出的时间限制カ1s,那么你选择的算法执行的汁算次数最多应该在10^8量级オ有可能解决这个题目。一般 O(n)的算法能解决的数据范围在n < 10^8。

>    O(n logn)的算法能解决的数据范围在n <= 10^6。
>
>    O(nsqrt(n) )的算法能解决的数据范围在n < 10^5。
>
>    O(n^2)的算法能解决的数据范围在n<5000。
>
>    O(n^3)的算法能解决的数据范围在n <300。
>
>    O(2^n)的算法能解决的数据范围在n < 25。
>
>    O(n!)的算法能解决的数据范围在n < 11。
>
>    以上范围仅供参考，实际中还要考虑每种算法的常数。

### 空间复杂度

程序运行所占内存：空间复杂度

一个程序的空间复杂度是指运行完一个程序所需内存的大小。利用程序的空间复杂度，可以对程序的运行所需的内存有个预先估计。

程序执行时所需存储空间包括以下两部分：

(1)固定部分。这部分空间的大小与输入/输出的数据的个数多少、数值无关。主要包括指令空间（即代码空间）、数据空间（常量、简单变量）等所占的空间。这部分属于静态空间。

(2)可变空间。这部分空间主要包括动态分配的空间，以及递归栈所需的空间等。这部分的空间大小与算法有关。

由于空间复杂度一般要求都比较宽松，因此我们可以用空间来换取时间，比如字典树、哈希等都是这个原理。

常见的空间复杂度就是O(1)、O(n)、O(n^2)，像是O(logn)、O(nlogn)对数阶的复杂度平时都用不到，而且空间复杂度分析比时间复杂度分析要简单很多。

（1）常数空间复杂度O(1)

例： int t=1

（2）线性空间复杂度O(n)

例： int[] array = new int[n]

（3）  二维空间复杂度O(n2)

例：int[] [] matrix = new int [n] [n];     //这里两个[]没有空格，由于是md文档显示，需要加空格防止不能正确显示

## 最大子序列和问题

$T(N) = O(N^3)$

```cpp
int  MaxSubsequenceSum ( const int A[ ],  int  N ) {
    int ThisSum, MaxSum, i, j, k;
    MaxSum = 0;				/ initialize the maximum sum /
    for(i = 0;i < N;i ++){   / start from A[ i ] /
        for(j = i;j < N;j ++){  / end at A[ j ] /
            ThisSum = 0;
            for(k = i;k <= j;k ++){
                ThisSum += A[k];    / sum from A[ i ] to A[ j ] /
                if(ThisSum > MaxSum) MaxSum = ThisSum;  / update max sum /
            }
        }
    }   / end for-j and for-i /
    return MaxSum;
} 
```

$T(N) = O(N^2)$

```cpp
int MaxSubsequenceSum (const int[], int N) {
    int ThisSum, MaxSum, i, j;
    MaxSum = 0;               / initialize the maximum sum /
    for(i = 0;i < N;i ++){     / start from A[ i ] /
        ThisSum = 0;   
        for(j = i; j < N;j ++){   {   / end at A[ j ] /
           ThisSum += A[j];           / sum from A[ i ] to A[ j ] /
            if(ThisSum > MaxSum) MaxSum = ThisSum;   / update max sum /
        }    / end for-j /
    }    / end for-i /
    return MaxSum;
}
```

$T(N) = O(N)$

```cpp
int MaxSubsequenceSum (const int[], int N) {
    int ThisSum, MaxSum, i;
    MaxSum = 0;
    for(i = 0;i < N;i ++){
        ThisSum += A[i];
        if(ThisSum > MaxSum) MaxSum = ThisSum;
        else if(ThisSum < 0) ThiSum = 0;
    }
    return MaxSum;
}
```

## 查找和搜索

### 二分查找

$T(N) = O(logN)$

```cpp
int BinarySearch (const ElmenType A[], ElementType X, int N){   //非递归
    int Low = 0, Mid, High = N - 1;
    while(Low <= High){
        Mid = (Low + High) / 2;
        if(A[Mid] < X) Low = Mid + 1;
        else if(A[Mid] > X) High = Mid - 1;
        else return Mid;
    }
    return NotFound;
}
```

## 几种算法思维

### 贪心

•贪心算法分阶段工作，在每一阶段，选择局部最优解，在算法终止时，希望获得全局最优解。

直接上例题吧：

#### 最大兼容活动子集

•活动选择问题：在一系列给出的活动中选出一个最大兼容活动子集（数目最多）。

$$
$\begin{array}{cccccccccccc}
i & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 \\
\hline s_{i} & 1 & 3 & 0 & 5 & 3 & 5 & 6 & 8 & 8 & 2 & 12 \\
f_{i} & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 & 13 & 14
\end{array}​
$$
•子集{a3, a9, a11}是一个解，然而最优解是{a1, a4, a8, a11} ，或{a2, a4, a9, a11}，最优解的大小为4。

> 已经给结束时间进行了排序，那么我们只需要找到下一个开始时间大于上一个结束时间的活动就好了。

类似的例题还有很多，这里放2个leetcode的题，稍作复习。

`#452`[452. 用最少数量的箭引爆气球 - 力扣（LeetCode） (leetcode-cn.com)](https://leetcode-cn.com/problems/minimum-number-of-arrows-to-burst-balloons/) 

`#435`[435. 无重叠区间 - 力扣（LeetCode） (leetcode-cn.com)](https://leetcode-cn.com/problems/non-overlapping-intervals/)

#### 独立集问题

##### 独立集问题

设*G* = (*V*, *E*) 是一个简单无向图，*S*是*V*的子集，若*S*中的节点在图G中都无边相连，则称*S*是一个独立集。在普通图中要找出最大独立集是非常困难的。在下面两图中黄色点构成极大独立集，左图中的极大独立集为8，右图中的极大独立集为9。 

![21-11-07-1](~@pos/21-11-07-1.png)

![21-11-07-2](~@pos/21-11-07-2.png)

•在一些特殊图要快速找出最大独立集是可以做到的。在下图中标出你做的选择，并给出做出这些选择的理由。换句话说，你能否证明你选出的就是一个最大独立集。

![21-11-07-3](~@pos/21-11-07-3.png)

•贪心算法求解

•定理：如果T=(V, E)是一棵树，v是T的一片树叶，那么存在包含 v 的最大独立集。

•贪心算法：考虑一条边e=(u, v)，其中v是树叶，独立集S将包含节点v，而不包含节点u，做出这个决定后，则可以删除节点v和节点u，得到一棵小一些的树，继续在这棵剩下的树上重复前面的策略。

##### 树上的最大权独立集

•问题定义：设树T=(V, E)，每一个节点v关联一个正的权w，请在树T中找出一个独立集S，使得S中包含的节点的权之和最大。

![21-11-07-4](~@pos/21-11-07-4.png)

•问题的关键：对于节点u和与它相邻的树叶构成的子树，实际上只存在两种选择，即要么选择u，要么选择所有的树叶。

•考虑以节点u为根构成的子树，最终的独立集S要么包含u，则不能包含它的任何一个孩子节点；要么不包含u，则有包含或删去这些孩子节点的自由。

**递归式**
$$
\begin{aligned}
&{\mathrm{OPT}}_{\text {in }}(u)=w_{u}+\sum_{v \in \text { children }(u)} \operatorname{OPT}_{\text {out }}(v) \\
& \operatorname{OPT}_{\text {out }}(u)=\sum_{v \in \text { children }(u)} \max \left(\mathrm{OPT}_{\text {out }}(v), \mathrm{OPT}_{\text {in }}(v)\right) .
\end{aligned}
$$
**自底向上求解**

![21-11-07-5](~@pos/21-11-07-5.png)

### 分治算法

分治算法的运行时间

【定理 $10.6$ 】对于以下递归方程式
$$
T(N)=a T(N / b)+\Theta\left(N^{k}\right),
$$
其中 $a \geq 1, b>1$, 且 $p \geq 0$ 。该方程式的解为;
$$
T(N)= \begin{cases}O\left(N^{\log _{b} a}\right) & \text { if } a>b^{k} \\ O\left(N^{k} \log N\right) & \text { if } a=b^{k} \\ O\left(N^{k}\right) & \text { if } a<b^{k}\end{cases}
$$

#### 最近点对问题

[分治——最近点对问题_steven的博客-CSDN博客_最近点对](https://blog.csdn.net/sinat_35678407/article/details/82874216) 详情看这

[平面最近点对问题(分治) - 繁夜 - 博客园 (cnblogs.com)](https://www.cnblogs.com/zyxStar/p/4591897.html#:~:text=平面最近点对问题是指：在给出的同一个平面内的所有点的坐标，然后找出这些点中最近的两个点的距离. 利用两个for循环可实现所有点的配对%2C每次配对算出距离然后更新最短距离. %3F 3)   补充

#### 整数相乘问题

•两个N位数相乘，采用传统的竖式乘法，需要执行N^2次乘法。

改进：

•设X，Y是两个N位整数（为方便起见，设N=2^k），用XL表示X的前半部分，XR表示X的后半部分；用YL表示Y的前半部分，YR表示Y的后半部分；则：

•$XY= X_LY_L10^N + (X_LY_R + X_RY_L)10^{N/2} + X_RY_R$

•以上方程由四次乘法和三次加法构成，因此可得递归式： **T(N) =** **4T(N/2) +** **O(N)** 

$T(N) = O(N^2)$

•因此，关键是能否将以上递归式中的“4”变小。

•对此有：XLYR + XRYL= (XL-XR)(YR-YL) + XLYL + XRYR 而XLYL和XRYR是已经计算过的。

•因此，计算XY可以仅由三次一半规模的乘法和**O(N)**次加减法来完成。所以递归式变为**T(N) =** **3T(N/2) +** **O(N)** **。根据定理10.7可知，算法的时间复杂度为T(N) =** **O(N^log23** **) =** **O(N^1.59)。**

## 结构体重载与对拍

### 结构体

结构体是一个由程序员定义的数据类型，可以容纳许多不同的数据值。

```cpp
struct point{
    int elem, elem2;
    bool operator < (const point b) const{     //小于
        if(elem == b.elem) return elem2 < b.elem2;
        return elem < b.elem;
    }
    bool operator > (const point b) const{     //大于
        if(elem == b.elem) return elem2 > b.elem2;
        return elem > b.elem;
    }
    bool operator == (const point b) const{     //等于
        return elem > b.elem;
    }
}
```

### 对拍

总有人的代码有bug，那为什么不是我呢？ 这个时候就要写个对拍

**对拍是什么**

对拍，是一个比较实用的工具。它能够非常方便地对于两个程序的输出文件进行比较，可以帮助我们实现一些自动化的比较输出结果的问题。

众所周知，每一道编程题目，都会有某种正解能拿到满分；当我们想不出正解时，我们往往可以打暴力代码来获取部分分数。

但是，当我们觉得有思路写正解，但又担心自己正解写的不对，而恰好，我们又有一个能够暴力骗分的代码。这个时候就可以用到对拍。 暴力骗分代码必须保证正确性，最多只是超时，不能出现答案错误的情况。

这样，我们可以造多组数据，让暴力骗分的程序跑一遍，再让我们自己写的正解跑一遍，二者进行多次对比。如果多组数据都显示二者的输出结果一样，那么这个正解大概率没问题。相反地，如果两组数据不同，我们就找到了一组错误数据，方便调试，找到正解哪里出了问题。

[C++ 对拍详解 - EdisonBa - 博客园 (cnblogs.com)](https://www.cnblogs.com/EdisonBa/p/13509379.html#对拍是什么)   详情可见

## BFS和DFS

|      | 数据结构 |   空间   |                |
| :--: | :------: | :------: | :------------: |
| DFS  |  stack   |  $O(n)$  | 不具有最短性质 |
| BFS  |  queue   | $O(2^n)$ |   最短路性质   |

“最小、最短”等字眼，一般都是BFS

算法思路奇怪的或者空间要求高的一般都是DFS

### DFS

:::warning

1. 回溯 (记得要恢复状态)
2. 剪枝

:::

可以从搜索树角度考虑理解

:::warning

DFS最重要的是顺序

:::

#### 全排列

DFS相当于一棵树



#### n皇后问题

##### 全排列思路(注意剪枝)

关于坐标问题`n + i`和`n - u + i`，可以用函数问题解决+n是坐标不可能为负数。n为偏移量

时间复杂度$O(n\times n!)$

##### 另一种思路

时间复杂度$O(2^{n^2})$

---

第一种时间复杂度更好



### BFS

