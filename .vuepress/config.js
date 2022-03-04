const hljs = require('highlight.js/lib/core');
// .vuepress/config.ts
// const Waline = require('@waline/client');
module.exports = {
  "title": "Kilzo",
  "description": "",
  "dest": "public",
  "head": [
    // ["script", { src: "//cdn.jsdelivr.net/npm/@waline/client/dist/Waline.min.js" }],
    ["link",{
        "rel": "icon",
        "href": "/favicon.ico"
      }],
    // ['link',{
    //   rel: 'stylesheet',
    //   href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'
    // }],
    ['link', {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"
    }],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "configureWebpack": {
    "resolve": {
      "alias": {
        '@pos': '../picture'
      }
    }
  },
  "theme": "reco",
  plugins: [
  [
    'vuepress-plugin-comment-plus',
    {
     choosen: 'waline', 
       // options选项中的所有参数，会传给Waline的配置
       options: {
         el: '#valine-vuepress-comment',
         avatar: 'wavatar',
         serverURL: 'https://blog-comment-bj1eaxh34-j911402070-gmailcom.vercel.app/', //  例如 "https://***.vercel.app/"
        //  path: '<%- frontmatter.commentid || frontmatter.permalink %>',
         emoji: [
          'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili',
          'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tieba',
          'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/alus',
          'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/qq',
          'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-emoji',
         ],
         dark: 'auto',
         meta: ['nick', 'mail', 'link'],
         requiredMeta: ['nick', 'mail'],
       }
    }
  ]
  ],
  "themeConfig": {
    "nav": require("./nav.js"),
    // "sidebar": require("./sidebar.js"),
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Kilzo",
    "authorAvatar": "/avatar.png",
    // "record": "xxxx",//备案
    "startYear": "2021",
    "codeTheme": 'okaidia', //代码块主题
    "subSidebar": 'auto',      //文章标题栏
    // 密钥
    "keyPage": {
      // "keys": ['7b409461742575ae26050a17c961561d'], // 1.3.0 版本后需要设置为密文
      "color": '#42b983', // 登录页动画球的颜色
      "lineColor": '#42b983' // 登录页动画线的颜色
    }
  },
  "markdown": {
    "lineNumbers": true,
    extendMarkdown: md => {
      md.set({
          html: true
      })
      // md.use(require('markdown-it-katex'));
      md.use(require('markdown-it-mathjax3'));
  },
  },
}