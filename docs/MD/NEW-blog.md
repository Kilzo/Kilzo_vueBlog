---
title: 有关我帮朋友搭建libra-blog而遇到的bug
date: 2022-02-09
cover: https://kilzo.coding.net/p/Kilzo/d/Blog-data/git/raw/master/Picture-md/picture_4_.webp
categories: 
 - vue
tags: 
 - vue
---

# 有关我帮朋友改搭建libra-blog而遇到的bug

:::warning

本文是我帮助朋友搭建libra-blog所遇到的一些bug，我与设计的博客主人并不认识。（搭建不是设计）

:::

## 正文开始

### 首先肯定是安装libra-blog

解压文件并打开，首先打开终端或者git执行`vuepress dev`发现缺少环境。终端(git以下都是终端代指git，其实都一样)提示运行：`npm i -g @vuepress/core`. 跑完以上安装流程后，我再次运行`vuepress dev`弹出网页并显示的是文件夹中的`README.md`中的文件，说明环境配置成功。

接着，按照网页或者`README.md`的内容执行安装`libra-blog`。

:::tip

默认已安装yarn并换源，<不懂的请百度>

:::

接着执行`yarn install`安装博客文件到本文件夹

根据网页或者`README.md`提示，`yarn serve`是动态调整。`yarn build` 是打包成静态文件方便push到`Github`，至于最后一个应该是还原文件用的。

我们执行`yarn serve` 测试是否配置完成。

至此，就安装完了。

### 然后就开始踩坑了

大概是第二天晚上，我的朋友找到我，告诉我上传上去GitHub之后网页一片空白。啥内容都没有。

#### push到GitHub遇到的问题

然后我动手测试，首先`F12`调到控制台发现一堆报错。其中有

`Mixed Content: The page at 'xxx' was loaded over HTTPS, but requested an insecure resource 'xxx'. This request has been blocked; the content must be served over HTTPS.`这类错误。我们把它称为HTTPS错误。

还有个

`We‘re sorry but XX doesn‘t work properly without JavaScript enabled. Please enable it to continue`这个是在build后的dist文件夹中的`index.html`发现的。

还有一串的`404`.具体描述我这没有。`我已经修复了这个bug，这些都是后话。`

---

也就是有3个问题。

##### 我们首先来排除第一个，也就是HTTPS错误

我百度了一下，发现：这类问题一般都是因为我们的网站是HTTPS的，而对方的链接是HTTP协议的，因此在Ajax或者javascript请求时，就会报错。

**解决方案**：

在`build`后的`index.html`的`<head>`中添加以下内容：

```html
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
```

它会自动将HTTP请求升级成安全的HTTPS请求。

至此，第一个问题解决。我从Github的仓库更新了`index.html`，但还是网页一片空白。说明不是这个引起的。

##### 然后我们解决404问题

由于我太久没有改网页bug，于是我采用了对照法测试是否是404导致网页一片白色。

由于网页已经渲染，而我们刚才已经build过了，因为build生成了静态文件，理论上这个文件夹(生成的`dist`)是可以**直接通过yarn serve的**。

我执行一遍`yarn serve`发现渲染没有错误！。

:::warning

注意这里是在`dist`文件夹打开终端执行的命令。

:::

404是找不到这类意思，我在Github仓库创建`404.md`，白色没有消除。排除缺少404页面。

那么很容易猜测到组件都404了，也就是没找到。而本地是可以跑的。说明是文件路径出了问题。

百度一下。发现确实是**相对路径或者绝对路径**能够引起404问题。

[( 【vue】npm run build打包路径问题_Y.Cheng的博客-CSDN博客_npm 打包到指定目录](https://blog.csdn.net/qq_33744228/article/details/80621580)

这篇文章也证明了我猜的没错。

然后我将`dist`中的`index.html`中有关引用组件地址前都加上了.。然后双击打开。成功显示背景和动态效果。但是没有主页等按钮。但是，总不能每次渲染完都主动打开手动修改把，万一后面加的东西多了，那就非常麻烦了。

从渲染出发。我们只需要让build的时候加上这个.就可以了。

还是那句：百度一下。

发现大多数说的都是改`build` 目录下的，`webpack.base.config.jswebpack.dev.config.js 、webpack.prod.config.js` 等配置文件.但是根本找不到。

突然，我想起根目录下的`package.json`存储了`yarn build`运行时的指令，发现该指令其实时运行`vue-cli-service build`这条指令。那么问题就转变为`vue-cli`的build修改。

我百度了好几种方法，最后我找到了这一种。

改变根目录下的`vue.config.js`.

刚开始我改变的是.set中的问题，发现根本不管用。

然后我找到了这一种。在`module.exports`添加。

```javascript
module.exports = {
  publicPath:'./',//默认是绝对路径，改成项目所需要的路径，在项目在同一域名多项目的需求下
  outputDir:'index',//修改项目打包文件名称
};
```

参考：

[ vue 如何配置@绝对路径_who_become_gods的博客-CSDN博客_vue绝对路径](https://blog.csdn.net/who_become_gods/article/details/114067136)

[vue-cli build路径问题 - 简书 (jianshu.com)](https://www.jianshu.com/p/fa9b85f2ffb8)

[Vue中引用文件配置绝对路径，不在担心文件层级关系 - 简书 (jianshu.com)](https://www.jianshu.com/p/a84aac4bf0d0)

[vue/cli3.0打包后html文件引入的是绝对路径修改成相对路径问题 - 简书 (jianshu.com)](https://www.jianshu.com/p/63e7bb72f47b)

重新`yarn build`后果然就能显示了，不过只有动态背景和背景。

##### 接下来处理最后一个问题

就是:`We‘re sorry but XX doesn‘t work properly without JavaScript enabled. Please enable it to continue`这个是在build后的dist文件夹中的`index.html`发现的。

根据这个文章：

[We‘re sorry but XX doesn‘t work properly without JavaScript enabled. Please enable it to continue_hsc的博客-CSDN博客](https://blog.csdn.net/heshuncheng/article/details/107927727)

我们打开`src`目录下`router`的`index.js`,修改了`mode: 'history'` 为 `mode: 'hash'`.

重写`yarn build`push 到 Github.问题解决。

### 至此，目前遇到的所有bug解决了。