---
title: 有关Typora激活
date: 2022-02-11
cover: https://kilzo.coding.net/p/Kilzo/d/Blog-data/git/raw/master/Picture-md/picture_13_.webp
categories:
 - Typora
tags:
 - Typora
---

# 有关Typora激活

之前在放假前就听说Typora推出正式版了，不过要付费使用。身为一个白嫖党，肯定要贯彻到底白嫖的原则。

:::warning

仅供个人使用，非商业用途。

:::

正好朋友给我推了一篇文章是讲解如何破解Typora的付费序列号。可惜，我那天研究到凌晨3点也没弄明白。他是通过IDA pro等一系列软件破解序列号的。可是，我不会用。。。。

但是呢，这个新版Typora实在是太香了，我又bing了一系列方法，最后找到这种。我感觉这个是比较靠谱的。我在配置这种的时候又遇到了一系列问题。于是乎，我整到了凌晨4点，心态崩了，就没管过。直到最近几天，我想起要更博客，打开Typora卡了一下，我又提起精神去搞这个。

:::warning

废话不说，开始了。我会在本文适当的地方表明我遇到的问题。

:::

首先是配置`Python3 + virtualenv`。`virtualenv`是虚拟环境。你说不用虚拟环境行不行，应该也可以，我没试过，本文是通过虚拟环境来的。

另外还需要用到 `Git` 

:::warning

这里就不写怎么搭建环境了，自行百度。

:::

我们只是为了破解Typora，所以随便在桌面开个文件夹。右键打开`Git bash`

### 创建虚拟环境

输入

```shell
# 创建文件夹
mkdir tmp

# 设置 python 虚拟环境
virtualenv tmp 

# 进入目标文件夹
cd tmp //进入文件夹

# 激活虚拟环境
source ./Scripts/activate
```

tmp是文件名称，随便你用什么，只是后面调用都得一一对应好文件名

### 克隆需要用到的仓库

在`Git`中输入

```shell
git clone https://github.com/Mas0nShi/typoraCracker.git
```

### 安装依赖包

```shell
# 进入文件夹
cd typoraCracker

# 安装依赖
pip install -r requirements.txt
```

### 生成破解程序

```shell
python typora.py "{}\resources\app.asar" . //{}填写你的Typora安装路径
```

### 复制仓库里的License.js许可证

```shell
cp ./example/patch/License.js ./dec_app/
```

### 重新生成app.asar

```shell
python typora.py -u ./dec_app/ .
```

### 替换app.asar

若命令提示权限不足，可以手动移动

```shell
# 备份
mv "{填写你的Typora安装地址,不包括"{}"符号}\resources\app.asar" "{填写你的Typora安装地址,不包括"{}"符号}\resources\app.asar.bak"

# 替换
mv ./app.asar "{填写你的Typora安装地址,不包括"{}"符号}\resources\app.asar"
```

### 最后生成序列号并激活

```shell
node ./example/keygen.js
```

这里问题来了，我电脑上的Typora打开一片空白。上一次也是这样，但是我们右键用管理员身份运行，他就马上跳出来了。

![22-02-11-1](~@pos/22-02-11-1.png)

![22-02-11-2](~@pos/22-02-11-2.png)

但是之后还是有这个问题，我暂时没找到解决方法。

### 完