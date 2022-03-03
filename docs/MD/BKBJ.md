---
title: vuepress博客建造、优化和一些注意事项
date: 2021-10-25
cover: https://kilzo.coding.net/p/Kilzo/d/Blog-data/git/raw/master/Picture-md/picture_1_.webp
categories:
 - vuepress
tags:
 - 博客
---

# vuepress博客建造、优化和一些注意事项

上一周学校社团讲了博客怎么建设,心血来潮想到之前用的HEXO是不是该改一改了，刷知乎无意间刷到有关vuepress安装静态博客的介绍，而且搜索到目前HEXO好像挺多人用了，作为一个爱折腾fw，决定重新建造一个基于vuepress的静态博客。于是乎，花了一整周来学习和修改主题。(呜呜呜，我果然是fw)

>以上都是废话

::: warning

本文是基于vuepress-theme-reco主题下的修改，部分修改改了源码，但是也只是添加变量.修改透明度。并且修改后的网页不报错。

:::

## 正文开始

首先是先到[vuepress-theme-reco]([vuepress-theme-reco (recoluan.com)](https://vuepress-theme-reco.recoluan.com/))官方网站,这里也可以预览看看是不是你喜欢的主题。

然后进入你想要建设博客的文件夹，win+r输入cmd打开控制台(如果你是win11可以直接右键打开window终端)。

然后根据[vuepress-theme-reco]([vuepress-theme-reco (recoluan.com)](https://vuepress-theme-reco.recoluan.com/))官网上的教程初始化就可以了。

## 下面是优化

::: warning

以下默认你已经成功初始化并能通过本地预览到初始化后的博客。

你博客目录下的package.json

  "@vuepress-reco/vuepress-plugin-bgm-player": "^1.1.4",

  "@vuepress-reco/vuepress-plugin-kan-ban-niang": "^1.0.5",

  "vue-canvas-effect": "0.0.12",

  "vuepress-plugin-comment": "^0.7.3",

  "vuepress-plugin-cursor-effects": "^1.0.2",

  "vuepress-plugin-flowchart": "^1.4.3",

  "vuepress-plugin-reading-progress": "^1.0.10",

  "vuepress-plugin-sitemap": "^2.3.1"

  "markdown-it-disable-url-encode": "^1.0.1",

  "markdown-it-katex": "^2.0.3",

  "vuepress": "1.8.2",

  "vuepress-plugin-auto-sidebar": "^2.3.2",

  "vuepress-plugin-dynamic-title": "^1.0.0",

  "vuepress-plugin-nuggets-style-copy": "^1.0.3",

  "vuepress-plugin-sakura": "^1.1.0",

  "vuepress-theme-reco": "1.6.6"

theme下的package.json

  "@vue/composition-api": "^1.0.0-beta.20",

  "@vuepress-reco/core": "^1.6.2",

  "@vuepress-reco/vuepress-plugin-back-to-top": "^1.6.0",

  "@vuepress-reco/vuepress-plugin-comments": "^1.6.0",

  "@vuepress-reco/vuepress-plugin-loading-page": "^1.6.0",

  "@vuepress-reco/vuepress-plugin-pagation": "^1.6.0",

  "@vuepress/plugin-blog": "1.9.2",

  "@vuepress/plugin-medium-zoom": "1.5.0",

  "docsearch.js": "2.6.3",

  "md5": "2.2.1",

  "vue-click-outside": "1.1.0",

  "vue-demi": "^0.5.3",

  "vuepress-plugin-smooth-scroll": "^0.0.9"

:::

# 基础部分（Friend Link什么的基本设置）

## 首先是修改下载的博客路径

一般npm下载的文件都存放在`node_modules`中，找到文件`vuepress-theme-reco`并且把它放在你的`.vuepress`文件下面，并改名为`theme`。	

```shell
D:.
├─.vuepress
│  ├─public
│  ├─styles
│  └─theme
│      ├─components
│      │  ├─HomeBlog
│      │  └─Mode
│      ├─global-components
│      ├─helpers
│      ├─images
│      ├─layouts
│      ├─lib
│      ├─locales
│      ├─mixins
│      ├─node_modules
│      │  └─vuepress-plugin-smooth-scroll
│      │      ├─lib
│      │      └─styles
│      └─styles
├─docs
```

结构如图

## 修改头像、背景和左上角的logo

找到`(你的)博客目录下\.vuepress\public`将里面的`avatar.png`替换为你想要的头像并且更名为`avatar.png`

同样的`logo`也是如此。

在里面加入你想要作为背景的图片。并改名为`background.png`（这里图片的名字随你，格式也随意，但最好是png）然后我们回到博客根目录，打开 `README.md`

```markdown
---
#这里改为
home: true
heroText: Hello   				#首页背景标题显示
tagline: Welcome to my world     #跟着标题的下面哪一行小字
heroImageStyle: {                #还没研究出有什么用，233333.
  maxWidth: '600px',
  width: '100%',
  display: block,
  margin: '9rem auto 2rem',
  background: '#fff',
  borderRadius: '1rem',
}
bgImage: back_1.png
bgImageStyle: {					#设置背景图片的大小和范围
  height: '1250px',
  margin: '0',					#是否占据导航栏上方，这里是调导航栏透明时候要设置的
}
---
```



然后刷新一下`npm run dev`，看看效果

## 接着是Friend Link 等基本设置

打开在`.vuepress`下的`config.js`使用`Ctrl + F`搜索`friendLink`找到friendLink。(我搁着搁着呢)

```javascript
    "friendLink": [
      {
        "title": "午后南杂",   //目标的名字
        "desc": "Enjoy when you can, and endure when you must.",   //目标介绍
        "email": "1156743527@qq.com",	//目标的邮箱
        "link": "https://www.recoluan.com"		//目标的网站链接
      },  //如果有多个友链不要忘记加 ，
      {										//此部分同上
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
```

## 修改首页底部信息

```json
    "record": "xxxx",	 //忘了干嘛的 ，你百度一下 
    "startYear": "2021"  //博客开始时
```

## 导航栏设置（路由）

目前是有插件可以整个自动的。哪天我改好了会写一下。

```json
"vuepress-plugin-autobar": npm install -D boboidream/vuepress-bar
// 配置中添加插件
// .vuepress/config.js
// or
// .vuepress/theme/index.js
module.exports = {
  plugins: ['autobar']
}
```

## 然后基本就配置好了，接着是导入你之前写过的文章，介绍你将在哪里写博文

这里真的是弄的我痛不欲生，可能这就是vue小白的痛点。最后看B站大佬和其他人的文章给了我一丝启发，给我整出来了，但是我不满意，有空再改改。

首先是官方给的目录，我们需要参考一下. 然后官方貌似没有给出具体的实现方法。可能是我没找到....

根据目录结构，我推测出文档应该放在`docs`文件夹里，于是，我们进入`docs`文件夹，创建一个新的文件夹来保存你的文章。然后在`.vuepress`下的`config.js`找到nav，修改如下：

```javascript
module.exports = [
    {
      "text": "Docs",
      "icon": "reco-message",
      "items": [
        // {
        //   "text": "vuepress-reco",
        //   "link": "/docs/theme-reco/"
        // },
        {
          "text": "Read it now",
          "link": "/docs/MD/"     //这里是导航栏的存储路径，MD改为你存储文章的文件夹
        }
      ]
    },
```

这里不介绍怎么改导航栏了。

你写的文章有时候要用到图片，这个地方我卡了很久，最后根据大佬的文章和B站的视频给了我启发。我尝试build打包我的博客，最后发现public文件夹里面的文件是最后能够留存下来的文件之一。我尝试了一下，成功了。下面来讲讲怎么做。

在`.vuepress`下的`public`加入你所需导入的图片，以后都是这样。然后在你的文章里导入图片要这样导入（官方文档有介绍[静态资源 | VuePress (vuejs.org)](https://vuepress.vuejs.org/zh/guide/assets.html#相对路径)）

`<img :src="$withBase('/文件路径.图片类型')" alt="你的文件名">` 

::: danger

注意，这里文件路径前面的 / 不能少，还有‘ ’。

:::

以上是对于不变的图组所使用的。在markdown中插入图片更推荐相对路径

在你觉得合适的路径放置存放图片的文件夹。

`![名字](路径)`就能引用了

# 以下是添加插件部分

## 接着添加气泡效果，这个应该很多教程都有写

打开`(你的)博客目录\.vuepress\theme\components\HomeBlog`中的`index.vue`，

在第**27**行写入`<component v-if="bubbles" :is="bubbles"></component>`,

然后在下方`components`模块下面添加如下代码：

```css
  data () {
    return {
      recoShow: false,
      currentPage: 1,
      tags: [],
      bubbles: null
    }
  },
```

最后在下方的methods方法上面加入如下代码：

```css
  mounted (){
    import('vue-canvas-effect/src/components/bubbles').then(module => {
      this.bubbles=module.default
    })
    this.recoShow = true
    },
```

最终`index.vue`代码总体如下：

```vue
<template>
  <div class="home-blog">
    <div class="hero" :style="{ ...bgImageStyle }">
      <div>
        <ModuleTransition>
          <img
            class="hero-img"
            v-if="recoShowModule && $frontmatter.heroImage"
            :style="heroImageStyle || {}"
            :src="$withBase($frontmatter.heroImage)"
            alt="hero"
          />
        </ModuleTransition>

        <ModuleTransition delay="0.04">
          <h1 v-if="recoShowModule && $frontmatter.heroText !== null">
            {{ $frontmatter.heroText || $title || 'vuePress-theme-reco' }}
          </h1>
        </ModuleTransition>

        <ModuleTransition delay="0.08">
          <p v-if="recoShowModule && $frontmatter.tagline !== null" class="description">
            {{ $frontmatter.tagline || $description || 'Welcome to your vuePress-theme-reco site' }}
          </p>
        </ModuleTransition>
      </div>
      <component v-if="bubbles" :is="bubbles"></component>   		// 在这里添加
    </div>

    <ModuleTransition delay="0.16">
      <div v-show="recoShowModule" class="home-blog-wrapper">
        <div class="blog-list">
          <!-- 博客列表 -->
          <note-abstract :data="$recoPosts" @paginationChange="paginationChange" />
        </div>
        <div class="info-wrapper">
          <PersonalInfo/>
          <h4><reco-icon icon="reco-category" /> {{$recoLocales.category}}</h4>
          <ul class="category-wrapper">
            <li class="category-item" v-for="(item, index) in this.$categories.list" :key="index">
              <router-link :to="item.path">
                <span class="category-name">{{ item.name }}</span>
                <span class="post-num" :style="{ 'backgroundColor': getOneColor() }">{{ item.pages.length }}</span>
              </router-link>
            </li>
          </ul>
          <hr>
          <h4 v-if="$tags.list.length !== 0"><reco-icon icon="reco-tag" /> {{$recoLocales.tag}}</h4>
          <TagList @getCurrentTag="getPagesByTags" />
          <h4 v-if="$themeConfig.friendLink && $themeConfig.friendLink.length !== 0"><reco-icon icon="reco-friend" /> {{$recoLocales.friendLink}}</h4>
          <FriendLink />
        </div>
      </div>
    </ModuleTransition>

    <ModuleTransition delay="0.24">
      <Content v-show="recoShowModule" class="home-center" custom/>
    </ModuleTransition>
  </div>
</template>

<script>
import { defineComponent, toRefs, reactive, computed, getCurrentInstance, onMounted } from 'vue-demi'
import TagList from '@theme/components/TagList'
import FriendLink from '@theme/components/FriendLink'
import NoteAbstract from '@theme/components/NoteAbstract'
import { ModuleTransition, RecoIcon } from '@vuepress-reco/core/lib/components'
import PersonalInfo from '@theme/components/PersonalInfo'
import { getOneColor } from '@theme/helpers/other'

export default defineComponent({
  components: { NoteAbstract, TagList, FriendLink, ModuleTransition, PersonalInfo, RecoIcon },   	// 在这下面添加data方法
  data () {
    return {
      recoShow: false,
      currentPage: 1,
      tags: [],
      bubbles: null
    }
  },
  setup (props, ctx) {
    const instance = getCurrentInstance().proxy

    const state = reactive({
      recoShow: false,
      heroHeight: 0
    })

    const recoShowModule = computed(() => instance && instance.$parent.recoShowModule)

    const heroImageStyle = computed(() => instance.$frontmatter.heroImageStyle || {})

    const bgImageStyle = computed(() => {
      const url = instance.$frontmatter.bgImage
        ? instance.$withBase(instance.$frontmatter.bgImage)
        : require('../../images/bg.svg')

      const initBgImageStyle = {
        textAlign: 'center',
        overflow: 'hidden',
        background: `url(${url}) center/cover no-repeat`
      }

      const { bgImageStyle } = instance.$frontmatter

      return bgImageStyle ? { ...initBgImageStyle, ...bgImageStyle } : initBgImageStyle
    })

    onMounted(() => {
      state.heroHeight = document.querySelector('.hero').clientHeight
      state.recoShow = true
    })

    return { recoShowModule, heroImageStyle, bgImageStyle, ...toRefs(state), getOneColor }
  },
  mounted (){
    import('vue-canvas-effect/src/components/bubbles').then(module => {
      this.bubbles=module.default
    })
    this.recoShow = true
    },
  methods: {  //在这上面添加mounted方法
    paginationChange (page) {
      setTimeout(() => {
        window.scrollTo(0, this.heroHeight)
      }, 100)
    },
    getPagesByTags (tagInfo) {
      this.$router.push({ path: tagInfo.path })
    }
  }
})
</script>

<style lang="stylus">
.home-blog {
  padding: 0;
  margin: 0px auto;
  .hero {
    margin $navbarHeight auto 0
    position relative
    box-sizing border-box
    padding 0 20px
    height 100vh
    display flex
    align-items center
    justify-content center
    .hero-img {
      max-width: 300px;
      margin: 0 auto 1.5rem
    }

    h1 {
      display: block;
      margin:0 auto 1.8rem;
      font-size: 2.5rem;
    }

    .description {
      margin: 1.8rem auto;
      font-size: 1.6rem;
      line-height: 1.3;
    }
  }
  .home-blog-wrapper {
    display flex
    align-items: flex-start;
    margin 20px auto 0
    padding 0 20px
    max-width $homePageWidth
    .blog-list {
      flex auto
      width 0
      .abstract-wrapper {
        .abstract-item:last-child {
          margin-bottom: 0px;
        }
      }
    }
    .info-wrapper {
      position -webkit-sticky;
      position sticky;
      top 70px
      overflow hidden
      transition all .3s
      margin-left 15px
      flex 0 0 300px
      height auto
      box-shadow var(--box-shadow)
      border-radius $borderRadius
      box-sizing border-box
      padding 0 15px
      background var(--background-color)
      &:hover {
        box-shadow var(--box-shadow-hover)
      }
      h4 {
        color var(--text-color)
      }
      .category-wrapper {
        list-style none
        padding-left 0
        .category-item {
          margin-bottom .4rem
          padding: .4rem .8rem;
          transition: all .5s
          border-radius $borderRadius
          box-shadow var(--box-shadow)
          background-color var(--background-color)
          &:hover {
            transform scale(1.04)
            a {
              color $accentColor
            }
          }
          a {
            display flex
            justify-content: space-between
            align-items: center
            color var(--text-color)
            .post-num {
              width 1.6rem;
              height 1.6rem
              text-align center
              line-height 1.6rem
              border-radius $borderRadius
              background #eee
              font-size 13px
              color #fff
            }
          }
        }
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .home-blog {
    .hero {
      height 450px
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        margin: 0 auto 1.8rem ;
        font-size: 2rem;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }
    .home-blog-wrapper {
      display block!important
      .blog-list {
        width auto
      }
      .info-wrapper {
        // display none!important
        margin-left 0
        .personal-info-wrapper {
          display none
        }
      }
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home-blog {
    .hero {
      height 450px
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        margin: 0 auto 1.8rem ;
        font-size: 2rem;
      }

      h1, .description, .action {
        // margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .home-blog-wrapper {
      display block!important
      .blog-list {
        width auto
      }
      .info-wrapper {
        // display none!important
        margin-left 0
        .personal-info-wrapper {
          display none
        }
      }
    }
  }
}
</style>

```

## 背景樱花特效

```shell
npm install vuepress-plugin-sakura -D   
```

或者是下面这个

```shell
cnpm install vuepress-plugin-sakura -D   
```

 打开`.vuepress`下的`theme`的`index.js`,在`plugins`加入如下代码。

```js
 ["sakura", {
        num: 20,  // 默认数量
        show: true, //  是否显示
        zIndex: -1,   // 层级
        img: {
          replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
          httpUrl: '...'     // 绝对路径
        }     
    }],
```

## live 2D

```shell
npm i @vuepress-reco/vuepress-plugin-kan-ban-niang
```

 打开`.vuepress`下的`theme`的`index.js`,在`plugins`加入如下代码。

```javascript
plugins: [
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',{
        theme: [
          'miku', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'blackCat', 'z16'    //这里设置显示的live-2d,删除剩下你想要的那个就可以了
        ],
        clean: false,
        messages: { 
          welcome: '欢迎来到我的博客', home: '心里的花，我想要带你回家。', theme: '好吧，希望你能喜欢我的其他小伙伴。', close: '你不喜欢我了吗？痴痴地望着你。' 
        },
        messageStyle: { right: '68px', bottom: '290px' },
        width: 250,
        height: 320
      }
    ],
  ],
```

## 音乐播放器

```shell
npm i @vuepress-reco/vuepress-plugin-bgm-player
```

 打开`.vuepress`下的`theme`的`index.js`,在`plugins`加入如下代码。

```javascript
[
      "@vuepress-reco/vuepress-plugin-bgm-player",{
        audios: [     
          // 本地文件示例
          // {
          //   name: '장가갈 수 있을까',   //文件名字
          //   artist: '咖啡少年',        
          //   url: '/bgm/1.mp3',         //本地路径
          //   cover: '/bgm/1.jpg'        //显示图片
          // },
          // 网络文件示例
          {
            name: '강남역 4번 출구',
            artist: 'Plastic / Fallin` Dild',
            url: 'https://assets.smallsunnyfox.com/music/2.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
          },
          {
            name: '用胳膊当枕头',
            artist: '최낙타',
            url: 'https://assets.smallsunnyfox.com/music/3.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
          }
        ]  
      }
    ],
```

## 最顶上边文章进度条

```shell
yarn add vuepress-plugin-reading-progress
```

或者

```shell
npm i vuepress-plugin-reading-progress
```

同样的， 打开`.vuepress`下的`theme`的`index.js`,在`plugins`加入如下代码。

```json
['reading-progress']
```

## Valine评论系统

此处参看Valine官方[介绍 | Valine 一款快速、简洁且高效的无后端评论系统。](https://valine.js.org/)

如果使用 `npm`：

```shell
npm install --save vuepress-plugin-comment
```

如果使用 `yarn`:

```shell
yarn add vuepress-plugin-comment -D
```

```javascript
    [
      'vuepress-plugin-comment',
      {
        choosen: 'valine', 
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: '#valine-vuepress-comment',
          appId: 'Your own appId',
          appKey: 'Your own appKey'
        }
      }
    ]
```



# 最复杂的透明度设置和主题颜色设置

这玩意我整了好久，一开始是打算`F12`大法直接修改源码，但是后面我的博客调崩了，23333,虽然有官方调整文档。但是为了调透明度，然后就崩了。。。。最后采用了大佬的方法。[给 Vuepress 添加暗色夜间模式 - 掘金 (juejin.cn)](https://juejin.cn/post/6844904165257248775)详情在这，如果有人想要自己建造一个模式可以参考一下。

::: tip

这里我就写一下我的修改方法

:::

我们找到`.vuepress`下的`theme`下的`components`下的`Mode`,打开`modeOptions.js`，这里就是颜色变量存储的地方。

::: warning

为了尽量不改变源码，我们这里只添加变量和修改要改的地方。（已经尝试过，不会报错）

:::

我们分别在`light`和`dark`加上相同的变量名称如`--background-opacity`并按照上面给的格式赋值

总体修改如下：

```css
const modeOptions = {
  light: {
    '--default-color-10': 'rgba(255, 255, 255, 1)',
    '--default-color-9': 'rgba(255, 255, 255, .9)',
    '--default-color-8': 'rgba(255, 255, 255, .8)',
    '--default-color-7': 'rgba(255, 255, 255, .7)',
    '--default-color-6': 'rgba(255, 255, 255, .6)',
    '--default-color-5': 'rgba(255, 255, 255, .5)',
    '--default-color-4': 'rgba(255, 255, 255, .4)',
    '--default-color-3': 'rgba(255, 255, 255, .3)',
    '--default-color-2': 'rgba(255, 255, 255, .2)',
    '--default-color-1': 'rgba(255, 255, 255, .1)',
    '--background-color': '#fff',   
    '--background-opacity': 'rgba(255, 255, 255, 0)',    //这里修改亮色主题颜色背景透明度
    '--background-opacity-dropdown': 'rgba(255,255,255,0.4)',  //这里修改亮色主题下拉颜色背景透明度
    '--box-shadow': '0 1px 8px 0 rgba(0, 0, 0, 0.1)',
    '--box-shadow-hover': '0 2px 16px 0 rgba(0, 0, 0, 0.2)',
    '--text-color': '#242424',
    '--text-color-sub': '#7F7F7F',
    '--border-color': '#eaecef',
    '--code-color': 'rgba(27, 31, 35, 0.05)',
    '--mask-color': '#888'
  },
  dark: {
    '--default-color-10': 'rgba(0, 0, 0, 1)',
    '--default-color-9': 'rgba(0, 0, 0, .9)',
    '--default-color-8': 'rgba(0, 0, 0, .8)',
    '--default-color-7': 'rgba(0, 0, 0, .7)',
    '--default-color-6': 'rgba(0, 0, 0, .6)',
    '--default-color-5': 'rgba(0, 0, 0, .5)',
    '--default-color-4': 'rgba(0, 0, 0, .4)',
    '--default-color-3': 'rgba(0, 0, 0, .3)',
    '--default-color-2': 'rgba(0, 0, 0, .2)',
    '--default-color-1': 'rgba(0, 0, 0, .1)',
    '--background-color': '#181818',  
    '--background-opacity:': 'rgba(0, 0, 0, 0)',//这里修改暗色主题颜色背景
    '--background-opacity-dropdown': 'rgba(0,0,0,0.4)', //这里修改暗色主题下拉颜色背景
    '--box-shadow': '0 1px 8px 0 rgba(0, 0, 0, .6)',
    '--box-shadow-hover': '0 2px 16px 0 rgba(0, 0, 0, .7)',
    '--text-color': 'rgba(255, 255, 255, .8)',
    '--text-color-sub': '#8B8B8B',
    '--border-color': 'rgba(0, 0, 0, .3)',
    '--code-color': 'rgba(0, 0, 0, .3)',
    '--mask-color': '#000'
  }
}

export default modeOptions

```

到这里，变量就加完了，然后我们在终端或者控制台，`npm run dev`一下，进入博客页面。

使用`F12`打开开发人员工具，然后`Ctrl + Shift + c`选择你要修改透明度的区域。

找到**样式**，选择你要修改的区域的**洋文**，比如导航栏：

![21-10-27-1](~@pos/21-10-27-1.png)

这里是我修改后的，然后我们我们可以看到这个链接是文件名字和在哪一行开始找颜色代码。

![21-10-27-2](~@pos/21-10-27-2.png)

接着我们到`.vuepress`下的`theme`下的`components`找到并打开这个文件。在刚才记录的代码行，比如我这个图片显示的**95**行开始往下找(这里建议用`vscode`等够显示行数的打开)，找到第一个图显示的`background`,将括号里面的变量改为你添加的就可以了 。我修改如下

![21-10-27-3](~@pos/21-10-27-3.png)

保存

因为vuepress是动态渲染，我们马上就可以看到自己修改的区域变化。

::: tip

同样，主题字体颜色也是重复上述步骤的修改，目前貌似可以用styl文件修改，我有空研究一下。

:::

