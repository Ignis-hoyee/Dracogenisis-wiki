import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/Dracogenisis-wiki/",
  title: "Dracogenesis Unofficial Wiki",
  description: "非官方规则与卡牌数据库",
    themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '快速规则', link: '/rules/quickstart' },
      { text: '完整规则', link: '/rules/full/' },
      { text: '卡牌查询', link: '/cards/' },
      { text: '更新日志', link: '/changelog/' }
    ],
    vite: {
    build: {
      rollupOptions: {
        external: [
          /^\/images\/.*/
        ]
      }
    }
  },

    sidebar: {
      // 快速规则页：不显示侧边栏（单页即可）
      '/rules/quickstart': [],
      
      // 完整规则：显示子页面导航
      '/rules/full/': [
        {
          text: '完整规则',
          items: [
            { text: '总览', link: '/rules/full/' },
            { text: '游戏设置', link: '/rules/full/setup' },
            { text: '回合流程', link: '/rules/full/turn-flow' },
            { text: '胜利条件', link: '/rules/full/victory' }
          ]
        }
      ],
      
      // 卡牌查询：技能牌 + 建筑牌 + FAQ
      '/cards/': [
        {
          text: '卡牌总览',
          link: '/cards/'
        },
        {
          text: '技能牌',
          items: [
            { text: '技能牌列表', link: '/cards/skills/' },
            { text: '采集', link: '/cards/skills/collecting' },
            { text: '捕猎', link: '/cards/skills/hunting' },
            { text: '采集龙果树', link: '/cards/skills/havesting'}
            // 以后每加一张卡，在这里加一行
          ]
        },
        {
          text: '奇观牌',
          items: [
            { text: '奇观牌总览', link: '/cards/wonders/' }
          ]
        },
        {
          text: '效果调整 / FAQ',
          items: [
            { text: '通用调整', link: '/cards/faq/general' },
            { text: '占位符1', link: '/cards/faq/fire-strike' }
          ]
        }
      ]
    },

    search: {
      provider: 'local'
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
