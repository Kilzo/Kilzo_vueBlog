---
title: 一些基本数学知识
date: 2021-11-10
cover: https://kilzo.coding.net/p/Kilzo/d/Blog-data/git/raw/master/Picture-md/picture_7_.webp
categories: 
 - ACM算法竞赛
tags: 
 - 数学
---

> 记录一些基本数学知识，自己稍微整理推导也能得出结论。

## 首先是数学公式

$$
\sum_{i=0}^{N} A^{i}=\frac{A^{N+1}-1}{A-1}
$$


$$
\sum_{i=0}^{N} A^{i} \leq \frac{1}{1-A}, \quad \text { 若 } 0<A<1
$$

$$
\sum_{i=1}^{N} i=\frac{N(N+1)}{2}
$$

$$
\sum_{i=1}^{N} i^{2}=\frac{N(N+1)(2 N+1)}{6}
$$

$$
\sum_{i=1}^{N} i^{k} \approx \frac{N^{k+1}}{|k+1|}, \quad k \neq-1
$$
调和级数 $H_{N}=\sum_{i=1}^{N} \frac{1}{i} \approx \log _{e} N$​
其中近似值的误差趋于 $\gamma \approx 0.57721566$​,该值称为欧拉常数



## 模运算

[取模运算_百度百科 (baidu.com)](https://baike.baidu.com/item/取模运算#:~:text=模运算与基本四则运算有些相似，但是除法例外。. 其规则如下：. (a %2B b) % p %3D,b)

模运算与基本四则运算有些相似，但是除法例外。其规则如下:
1. $(a+b) \% p=(a \% p+b \% p) \% p$
2. $(a-b) \% p=(a \% p-b \% p) \% p$
3. $\left(a^{*} b\right) \% p=\left(a \% p^{*} b \% p\right) \% p$
4. $a^{\wedge} b \% p=\left((a \% p)^{\wedge} b\right) \% p$
- 结合律: $((a+b) \% p+c) \% p=(a+(b+c) \% p) \% p \quad(5)$
$$
\left(\left(a^{*} b\right) \% p^{*} c\right) \% p=\left(a^{*}\left(b^{*} c\right) \% p\right) \% p \quad
$$
- 交换律: $(a+b) \% p=(b+a) \% p \quad(7)$​​  $\left(a^{*} b\right) \% p=\left(b^{*} a\right) \% p$    （8）​​​
- 分配律: $(a+b) \% p=(a \% p+b \% p) \% p(9)$
- $\left((a+b) \% p^{*} c\right) \% p=\left(\left(a^{*} c\right) \% p+\left(b^{*} c\right) \% p\right) \% p$
  重要穴埋
- 若 $\mathrm{a} \equiv \mathrm{b}(\% \mathrm{p})$ ， 则对于任意的 $\mathrm{c}$ ， 都有 $(\mathrm{a}+\mathrm{c}) / \equiv(\mathrm{b}+\mathrm{c})(\% \mathrm{p}) ;$
  $(11)$
- 若 $a \equiv b(\% p)$ ，则对于任意的c，都有 $\left(a^{*} c\right) \equiv\left(b^{*} c\right)(\% p)$ ； (12)
- 若 $a \equiv b(\% p), c \equiv d(\% p)$ ，则 $(a+c) \equiv(b+d)(\% p) ，(a-c) \equiv(b-d)(\% p) ，\left(a^{*} c\right) \equiv\left(b^{*} d\right)(\% p)$ ；

