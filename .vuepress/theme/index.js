
const path = require('path')
const md = require("markdown-it")();  
md.use(require("markdown-it-disable-url-encode"), "./");

// md.use(require("markdown-it-disable-url-encode"), "*")
// md.use(require("markdown-it-disable-url-encode"), ".")
// md.use(require("markdown-it-disable-url-encode"), [...])
// md.use(require("markdown-it-disable-url-encode"), /.../)        

const html = md.render("![image.png](图片/image.png)")
// <p><img src="./图片/image.png" alt="image.png" /></p> 

// without markdown-it-disable-url-encode plugin :
// <p><img src="%E5%9B%BE%E7%89%87/image.png" alt="image.png" /></p>  

// Theme API.


module.exports = (options, ctx) => ({
  alias () {
    const { themeConfig, siteConfig } = ctx
    // resolve algolia
    const isAlgoliaSearch = (
      themeConfig.algolia ||
      Object.keys(siteConfig.locales && themeConfig.locales || {})
        .some(base => themeConfig.locales[base].algolia)
    )
    return {
      '@AlgoliaSearchBox': isAlgoliaSearch
        ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
        : path.resolve(__dirname, 'noopModule.js'),
      '@SearchBox': path.resolve(__dirname, 'components/SearchBox.vue')
    }
  },
  markdown: {
    // ......
    // anchor: { permalink: true },
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"));
      // md.use(require('markdown-it-katex')); //添加
      // md.use(require('highlight.js'));
    }
  },
  plugins: [
    // ['@vuepress/medium-zoom'],
    [
      'vuepress-plugin-mathjax',
      {
        macros: {
          '\\Z': '\\mathbb{Z}',
        },
      },
    ],
    ["sakura", {
      num: 20,  // 默认数量
      show: true, //  是否显示
      zIndex: -1,   // 层级
      img: {
        replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
        httpUrl: '...'     // 绝对路径
      }     
    }],
    [
      "vuepress-plugin-auto-sidebar",{}
    ],
    [
      'reading-progress'
    ],
    [
      //插件广场的流程图插件 先安装在配置 npm install vuepress-plugin-flowchart --save
        'flowchart'
    ],
    [
      //插件广场的sitemap插件 先安装在配置 npm install vuepress-plugin-sitemap --save
      'sitemap', {
        hostname: 'https://www.kilzo.net'
      }
    ],
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
          content: "复制成功!"
      }
    }],
    [
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "希望对你有所帮助  ||  ",
        hideIcon: "/failure.ico",
        hideText: "真的不再看两眼吗？",
        recoverTime: 2000
      }
    ],
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',{
        theme: [
          'whiteCat'
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
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",{
        audios: [
          // 本地文件示例
          // {
          //   name: '장가갈 수 있을까',
          //   artist: '咖啡少年',
          //   url: '/bgm/1.mp3',
          //   cover: '/bgm/1.jpg'
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
    [
      "vuepress-plugin-cursor-effects",
      {
        size: 12,                    // size of the particle, default: 2
        shape: 'circle',  // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
    ],
    '@vuepress-reco/back-to-top',
    '@vuepress-reco/loading-page',
    '@vuepress-reco/pagation',
    '@vuepress-reco/comments',
    '@vuepress/active-header-links',
    '@vuepress/plugin-nprogress',
    ['@vuepress/plugin-blog', {
      permalink: '/:regular',
      frontmatters: [
        {
          id: 'tags',
          keys: ['tags'],
          path: '/tag/',
          layout: 'Tags',
          scopeLayout: 'Tag'
        },
        {
          id: 'categories',
          keys: ['categories'],
          path: '/categories/',
          layout: 'Categories',
          scopeLayout: 'Category'
        },
        {
          id: 'timeline',
          keys: ['timeline'],
          path: '/timeline/',
          layout: 'TimeLines',
          scopeLayout: 'TimeLine'
        }
      ]
    }],
    'vuepress-plugin-smooth-scroll',
    ['container', {
      type: 'tip',
      before: info => `<div class="custom-block tip"><p class="title">${info}</p>`,
      after: '</div>',
      defaultTitle: ''
    }],
    ['container', {
      type: 'warning',
      before: info => `<div class="custom-block warning"><p class="title">${info}</p>`,
      after: '</div>',
      defaultTitle: ''
    }],
    ['container', {
      type: 'danger',
      before: info => `<div class="custom-block danger"><p class="title">${info}</p>`,
      after: '</div>',
      defaultTitle: ''
    }],
    ['container', {
      type: 'right',
      defaultTitle: ''
    }],
    ['container', {
      type: 'theorem',
      before: info => `<div class="custom-block theorem"><p class="title">${info}</p>`,
      after: '</div>',
      defaultTitle: ''
    }],
    ['container', {
      type: 'details',
      before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
      after: () => '</details>\n',
      defaultTitle: {
        '/': 'See More',
        '/zh/': '更多'
      }
    }],
  ]
})
