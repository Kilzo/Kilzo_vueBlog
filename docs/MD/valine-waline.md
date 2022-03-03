---
title: Valine和Waline
date: 2022-02-15
cover: https://kilzo.coding.net/p/Kilzo/d/Blog-data/git/raw/master/Picture-md/picture_17_.webp
categories:
 - vuepress
tags:
 - vuepress
---

# Valine和Waline

昨天从校友处得知Valine炸了，我试了一下确实是这样。半夜随便搜了一下Valine的替代品。本来是先用Github那种的，但校友提醒我要登录那就算了。bing了一下发现了Waline。但由于时间太晚了，就放到今天才整。

## 为什么要用Waline

### Valine的相关问题

根据我bing的结果，Valine可能存在着隐私泄露的问题。

[基于 Serverless 的 Valine 可能并没有那么香 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/295264916)

根据以上链接:

:::warning

Valine支持的阅读统计修改能够在控制台修改。

:::

似乎不是很严重

:::danger

XSS安全问题

:::

[什么是XSS攻击？如何防御XSS攻击？ - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/98938342#:~:text=XSS攻击全称跨,户使用的页面中。)

似乎已经被修复

最为严重的

:::danger

隐私泄露

:::

这里不展开写，有兴趣就点开链接有人已经详细的写好。

---

还有一点就是，校友告诉我的Valine不能用的问题，我进入leancloud国际版，由于我太久没用，它把我仓库封了。解开，重新在`config.js`输入`appID`,`appKey`,发现没用。

看看公告，说是`leancloud域名`有更改。bing求证，也有人遇到这种情况。

但是，我这么懒的一个人不可能定期上去查看验证的。

### Waline的优势

Waline 与 Valine 最大的不同就是增加了服务端中间层，解决 Valine 暴露出来的安全问题。同时基于服务端的特性，提供了**邮件通知**、**微信通知**、**评论后台管理**、LeanCloud, MySQL, MongoDB, SQLite, PostgreSQL **多存储服务支持**等诸多特性。

同时也支持是否选择登录，存在后台删除评论。简直不要太完美！

又有着自定义样式！喜欢折腾的人又可以好好折腾了!

于是乎

我本着一颗一劳永逸的心开始换成`Waline`。

---

## 配置Waline过程中遇到的问题

吸取了上次的经验教训，我直接打开文档学习安装。遗憾的是我用的主题`vuepress-theme-reco`没有安装的指南，似乎作者已经很久没更新了。

`Waline`和`Valine`的配置差不多，这是给我的第一感觉。

按照文档，通过前面的`leancloud`这个早已经配置好，`Vercel`配置，文档写的很详细。

最后一步，引入客户端。

我翻遍了文档，有2种方式，一种是`cdn`,另一种是`npm`。

由于我不会用`cdn`引入。就先采取了`npm`本地安装的形式。

但是，我的目录结构一直给我报错，无论我放在`.vuepress/config.js`还是`.vuepress/theme/index.js`。

我尝试了很久，什么在`plugin`引入，在`.vuepress/config.js`新建一个`plugin`引入，

`.vuepress/theme/index.js`的`plugin`引入都没用。

最后bing到有点用处的是`vuepress-hope`主题的用法。但是它又不报错也不显示。

---

## 通过第三方引用Waline

最后，我通过在`vuepress-hope`主题文档找的一句话

:::tip

从 `@mr-hope/vuepress-plugin-comment` 重命名为 `vuepress-plugin-comment2`

:::

在`npm`搜索并安装`vuepress-plugin-comment`,按照提示修改，没用。。

在搜索过程中又发现了`vuepress-plugin-comment2`，也没用。

最后在`Github`中发现了`vuepress-plugin-comment-plus`它集成了`Waline`、`Valine`和`Gittalk`,Readme.md也有详细的使用说明，就差直接帮你做好了。

[SivanLaai/vuepress-plugin-comment-plus: Vuepress评论插件，当前支持Waline（推荐）、Gitalk、Valine，后续会增加更多，请关注。 (github.com)](https://github.com/SivanLaai/vuepress-plugin-comment-plus)

---

## 最后

结合`Waline`文档，自己配置了相关的`options`设置。发现头像似乎不能更改，但是应该是可以用登录头像代替默认头像显示的。



