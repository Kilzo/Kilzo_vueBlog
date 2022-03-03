---
title: 第七章 查找
date: 2022-02-09
cover: https://kilzo.coding.net/p/Kilzo/d/Blog-data/git/raw/master/Picture-md/picture_3_.webp
categories: 
 - ACM算法竞赛
tags: 
 - 算法
 - 数据结构
---

#  第七章 查找

---

第八章 ： 排序 >待会做 `别忘记实现代码`

#### 1.查找的基本概念

**查找表**是由同一类型的数据元素（或记录）构成的集合。由于“集合”中的数据元素之间存在着**松散的关系**，因此查找表是一种应用灵便的结构。

**查找**：根据给定的某个值，在查找表中确定一个其关键字等于给定值的数据元素或（记录）

- **关键字**：用来标识一个数据元素（或记录）的某个数据项的值
  - **主关键字**：可唯一地标识一个记录的关键字是主关键字；
  - **次关键字**：反之，用以识别若干记录的关键字是次关键字。

1. 查找的目的：
   - 查询某个“特定的"数据元素是否在查找表中；
   - 检索某个“特定的“数据元素的各种属性；
   - 在查找表中插入一个数据元素；
   - 删除查找表中的某个数据元素。
2. 查找的分类
   - **静态查找表**：仅作“查询”（检索）操作的查找表
   - **动态查找表**：作“插入”和“删除”操作的查找表
3. 如何评价查找算法
   - 查找算法的评价指标“：关键字的平均比较次数，也称为**平均查找长度**，（ASL, Average Search Length）。

#### 2.线性表的查找

```cpp
typedef struct{
    KeyType key;
    InfoType otherinfo;
}ElemType; //KeyType 和 InfoType 均是定义类型，如：int

typedef struct{
    ElemType *R;
    int length;
}SSTable;
```

以下代码都是从以上定义而出发的。

##### (1)顺序查找

其实就是普通的暴力for。

```cpp
int Search_Seq(SSTable ST,KeyType key){
    for(int i = ST.length; i >= 1;i--){
        if(ST.R[i].key == key) return i;
    }
    return 0;
}
```

这个算法还能改进，使它时间复杂度几乎缩短到原来的一半。

加个哨兵。即`ST.R[0] = key`.

```cpp
int Search_Seq(SSTable ST,KeyType key){
    ST.R[0].key = key;
    for(int i = ST.length;ST.R[i].key != key;i--);
    return i;
}
```

时间复杂度： O(n)

空间复杂度： O(1)

平均时间查找长度为：ASL：(1+2+3+···+n)/n = (n+1)/2

##### (2)二分查找

又叫折半查找。

直接上代码：

```cpp
int Search_Bin(SSTable ST, KeyType key){
    int low = 1,high = ST.length;
    while(low <= high){
        int mid = (low + high)/2;
        if(ST.R[mid].key == key) return i;
        if(ST.R[mid].key < key) low = mid + 1;
        else high = mid -1;
    }
    return 0;
}
```

时间复杂度： O(logn)

二分查找的时间复杂度可以通过画判定树来计算。

每一个中点为树的结点，遵循 `左结点 < 根 < 右结点`。有一个结点就说明比较一次.

##### (3)分块查找

将数组分成好几块，每一块的最大数大于前面一块的最大数。后一块的所有点大于前一块的最大点。

以块的最大值为索引。

查找： 先确定待查找记录所在，顺序查找或者二分查找所在分块，再对分块内部顺序查找。内部如果是已经排序好的，可以进行二分查找。

查找效率为：ASL = lb + lw = log2(n/s`(块数)` + 1) + s/2.

>优点：插入和删除较容易，无需进行大量移动
>
>缺点：要增加一个索引表的存储空间并对初始索引表进行排序运算
>
>适用情况：如果线性表既要**快速查找**又经常**动态变化**，则可采用分块查找。

#### 3.树表的查找

##### (1) 二叉排序树

**二叉排序树**（Binary Sort Tree）又称为二叉搜索树、二叉查找树。

1. 二叉排序树定义：

   二叉排序树或是空树，或是满足如下性质的二叉树：

   1. 若其左子树非空，则左子树上所有结点的值均小于根结点的值；
   2. 若其右子树非空，则右子树上所有结点的值均大于等于根结点的值；
   3. 其左右子树本身又各是一棵二叉排序树

2. 二叉排序树的性质：

   中序遍历非空的二叉排序树所得到的数据元素序列是一个按关键字排列的**递增有序**序列。

3. 二叉排序树的操作——查找

   - 若查找的关键字等于根节点，成功。
   - 否则：
     - 若小于根节点，查其左子树
     - 若大于根节点，查找右子树
   - 在左右子树上的操作类似

以下是二叉树：

```cpp
typedef struct{
    KeyType key;
    InfoType otherinfo;
}ElemType;

typedef struct BSTNode{
    ElemType data;
    struct BSTNode *lchild, *rchild;
}BSTNode,*BSTree;
```

其实，整个二叉排序树都是围绕着` 左子树< 根节点 < 右子树`结构的。

下面是二叉排序树的查找：

##### (1)二叉排序树的查找

```cpp
BSTree SearchBST(BSTree T,KeyType key){
    if(!T || Key == T -> data.key) return T;
    else if(Key < T -> data.key) return SearchBST(BSTree T->lchild,key);
    else return SearchBST(BSTree T -> rchild);
}
```

对于含有n个结点的二叉排序树的平均查找长度和树的形状有关。

ASL = 深度*几个结点数相加/n。

>- 最好情况：与折半查找中的判定树相同，O(log2n)；
>
> - 最坏情况：退化为单支树（类似于线性列表），树深度为n，ASL = (n+1)/2，O(n)；

##### (2)二叉排序树的插入

- 若二叉排序树为空，则插入结点作为根结点插入到空树中
- 否则，继续在其左、右子树上查找
  - 树中已有，不再插入
  - 树中没有
    - 查找直至某个叶子结点的左子树或右子树为空为止，则插入结点应为该叶子结点的左孩子或右孩子

**插入的元素一定是叶子节点**。

```cpp
void InsertBST(BSTree &T，ELemType e){
    if(!T){
        S = new BSTNode;
        S -> data = e;
        S -> lchild = S -> rchild = NULL;
        T = S;
    }
    else if(e.key < T -> data.key) InsertBST(T -> lchild,e);
    else if(e.key > T -> ddata.key) InsertBST(T -> rchild,e);
}
```

##### (3)二叉排序树的创建

一个无序序列可通过构造二叉排序树而变成一个有序序列。构造树的过程就是对无序序列进行排序的过程。

插入的结点均为叶子结点，故无需移动其他结点。相当于在有序序列上插入记录而无需移动其他记录。但是，**关键字的输入顺序不同，建立的二叉排序树也不同**。

```cpp
void CreatBST(BSTree &T){
    T = NULL;
    cin >> e;
    while(e.key != ENDFLAG){ //这玩意是判断输入结束的
        InsertBST(T,e);
        cin >> e;
    }
}
```

##### (5)二叉排序树的删除

删除时，**还应保证删除后所得的二叉树仍然满足二叉排序树的性质不变**。

> 1.如果删除的结点是叶子结点：直接删除该结点。
>
> 2.被删除的结点只有左子树或者只有右子树，用其左子树或者右子树替换它（结点替换）。
>
> 3.本删除的结点既有左子树，也有右子树：可以用其中序的前驱结点替换，然后删除该前驱结点（前驱结点是左子树中最大的结点）；也可以用中序的后继结点，然后删除该后继结点（后继是右子树中最小的结点）。

#### 4.散列表的查找



### 总结

