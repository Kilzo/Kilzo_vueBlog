---
title: 很久之前都想搞定的代码高亮....
date: 2022-02-13
cover: https://kilzo.coding.net/p/Kilzo/d/Blog-data/git/raw/master/Picture-md/picture_11_.webp
categories: 
 - vuepress
tags: 
 - vuepress
---



---

# 很久之前都想搞定的代码高亮....

---

吐了，主题官方文档有代码主题更改的方式。果然还得看文档。。。。

![22-02-13-3](~@pos/22-02-13-3.png)

---

>很久之前都想搞定的代码高亮，今天终于告一段落了。虽然结果还是不能让我满意，但基本上是不耽误日常使用了。通过这几天的摸索(百度),我又有了些新的认识....

:::tip

本文虽然屁话可能多一点，但是代码高亮问题解决方式还在其中是有写的。

:::

## 对搜索技巧的新认识

大家应该都一样，搜索的时候是模糊搜索，也许就像我刚开始搜索那样：

> vuepress 代码高亮
>
> vuepress prism设置
>
> vuepress highlight设置
>
> ...

这个bing不行就换百度，结果到头来什么也没找到。(或许是想像Hexo那样保姆式部署的心思引起的)

嗯，等到我意识到要亲自动手的时候。时间已经不早了。。。。

点开刚才的搜索记录，发现有一句`markdown-it 已经自带高亮了`,还有在初步探索的时候发现一份`markdown-it的自带高亮语言表`。

于是我决定换一种思路搜索：

> markdown-it 代码高亮设置
>
> markdown-it prism 设置

## 接着就是对highlight.js的运行改bug

搜着我就发现一个博主写的，最后一张图，`有些人就是不去看文档`。

打开文档，将不想看洋文的心沉静下来，慢慢往下看，哟，果然，它上面有`highlight`的一些用法。又从搜索中得到markdown-it有很多插件，抱着试一试的心态在`npm`搜索了

`markdown-it-highlightjs`

果不其然，真有。研究了半天，发现在`.vuepress`下的`config.js`不会报错，但是没有用。突然发现，它的调用方式

```javascript
const hljs = require('highlight.js/lib/core')

hljs.registerLanguage(
  'javascript',
  require('highlight.js/lib/languages/javascript')
)
```

require里面是一个目录的存在，于是，我又装`highlight.js`,又去研究了`highlight.js`怎么用，最后跑是跑起来了，还是没用，但是我关注到了一句:`中文翻译是：找不到vue`

又通过目录，我突然想到：

> 会不会是我的语言用错了？以至于我没有正确启动markdown-it自带的高亮

我把我刚才设置的全部还原回初始状态，打开在`node_modules`的`highlight.js/lib/languages/`文件夹，找到c一直往下看，果然，只有`cpp`，我将我的一篇文章代码块改为`cpp`，立马就有高亮显示了。

:::warning

我在跑`highlight.js`的时候，遇到了个bug，没改出来。这里标记一下。

`Uncaught TypeError: Object(...) is not a function highlightjs-vue.esm.min.js?b056:1`

:::

## 下面是对不满意的高亮的修改

虽然有了高亮，也证明了我前面都"白干"了，但是它并不完整。只有个别语言个别词语有高亮，其他都是白的，非常难看。秉持着我要做好这个网站的决心，我又开始了魔改之旅。

首先我是确认这个高亮是`prism`还是`highlight`，bing了一下，发现是`prism`。

同时也搜索到怎么改代码块。bing搜索到Github上有人说在`.vuepress/index.styl`添加`@import "~prismjs/themes/prism-okaidia.css"`就可以。但是一开始我并没有成功。我也不知道为什么。又通过链接寻找看到

`找到/node-modules/prismjs/themes/prism-tomorrow.css文件，将其内容替换为想要的主题，名字保留不变。`

但是，我修改了没有用。

[关于Prism代码高亮主题的问题 · Issue #2318 · vuejs/vuepress (github.com)](https://github.com/vuejs/vuepress/issues/2318)

我想起,还有个`code.styl`文件，会不会根这个有关系，我将其中的color换了个，果不其然，根它有关。

[Change the code block background and text · Issue #2223 · vuejs/vuepress (github.com)](https://github.com/vuejs/vuepress/issues/2223)

:::warning

在这里，我犯了一个致命错误。将`css`文件直接复制到了`styl`文件里面。

:::

直接导致了代码块格式打乱，代码块变成乱七八糟的。

后来我意识到，并且在Github相关链接中得到`代码块默认主题是prismjs-tomorrow.css`就开始对照着这个主题和`code.styl`修改，当然了，恢复`code.styl`原来的样子花费了我很大力气，这里就不提了。

按照`styl`本来显示出没有`:`和`;`的格式，我慢慢修改。

![22-02-13-1](~@pos/22-02-13-1.png)

这里就放一张图。当然下面可能也有改。

[Would you mind add a light(white) code background? · Issue #1401 · vuejs/vuepress (github.com)](https://github.com/vuejs/vuepress/issues/1401)

[Is there any possibility to change the prism.js theme? · Issue #736 · vuejs/vuepress (github.com)](https://github.com/vuejs/vuepress/issues/736)

## 对搜索的新看法和学习新技术的看法

后面我又通过Github的链接找到了修改主题的方法。

在`index.styl`中加`@import "~prismjs/themes/prism-okaidia.css`。

最后我是修改为`prism-okaidia`主题的。这个主题不是完美，还有遗憾。而`prism-coy`主题出了问题。所以不能修改亮色主题，也是一种遗憾。未来某一天我可能还会再研究研究。

最终效果如下:

![22-02-13-2](~@pos/22-02-13-2.png)

:::tip

通过这次修改，我认识到了看文档的重要性，安装新软件的时候也是如此。搜索到其他优秀博主写的东西对你有用有时候会比看文档花费更长时间。同时，Github的讨论区也是摸索新技术的重要帮手。下次我一定不会这么狼狈了。

:::

这里贴上链接：

[feat(code): add a way to configure Prism theme by Kocal · Pull Request #38 · vuepress/vuepress-theme-blog (github.com)](https://github.com/vuepress/vuepress-theme-blog/pull/38)

[refactor(theme-default): import prism theme in stylesheets by kidonng · Pull Request #1707 · vuejs/vuepress (github.com)](https://github.com/vuejs/vuepress/pull/1707)

[feat(code): add a way to configure Prism theme by Kocal · Pull Request #38 · vuepress/vuepress-theme-blog (github.com)](https://github.com/vuepress/vuepress-theme-blog/pull/38)

[refactor: import prism theme in .style file directly by Kocal · Pull Request #39 · vuepress/vuepress-theme-blog (github.com)](https://github.com/vuepress/vuepress-theme-blog/pull/39)

> 链接可能有点乱...

## 完

