import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/images/tokens/gold-icon.png' }]
  ],
  base: "/Dracogenisis-wiki/",
  title: "Dracogenesis Unofficial Wiki",
  description: "非官方规则与卡牌数据库",
  themeConfig: {
    logo: '/images/tokens/gold-icon.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '快速规则', link: '/rules/quickstart' },
      { text: '完整规则', link: '/rules/full/' },
      { text: '卡牌查询', link: '/cards/skills/' },
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
        //{
          //text: '卡牌总览',
          //link: '/cards/'
        //},
        {
          text: '技能牌',
          collapsed: true,
          items: [
            { text: '技能牌列表', link: '/cards/skills/' },
            { text: '采集', link: '/cards/skills/classic_skill_01' },
            { text: '捕猎', link: '/cards/skills/classic_skill_06' },
            { text: '收获浆果丛', link: '/cards/skills/classic_skill_05'},
            { text: '收获蘑菇树桩', link: '/cards/skills/skill_01'},
            { text: '收获龙果树', link: '/cards/skills/skill_02'},
            { text: '高效捕猎', link: '/cards/skills/skill_03'},
            { text: '高效采集', link: '/cards/skills/skill_04'},
            { text: '掠夺商队', link: '/cards/skills/skill_05'},
            { text: '掠夺矿山', link: '/cards/skills/skill_06'},  
            { text: '传承技艺', link: '/cards/skills/skill_07'},
            { text: '传承财富', link: '/cards/skills/skill_08'},
            { text: '展翅翱翔', link: '/cards/skills/skill_09'},
            { text: '顺手掠夺', link: '/cards/skills/skill_10'},
            { text: '顺手采集', link: '/cards/skills/skill_11'},
            { text: '顺手捕猎', link: '/cards/skills/skill_12'},
            { text: '按需分配', link: '/cards/skills/skill_13'},
            { text: '采购物资', link: '/cards/skills/skill_14'},
            { text: '伐木动员', link: '/cards/skills/skill_15'},
            { text: '磨练技艺', link: '/cards/skills/skill_16'},
            { text: '一网打尽', link: '/cards/skills/skill_17'}
          ]
        },
        {
          text: '奇观牌',
          collapsed: true,
          items: [
            { text: '奇观牌总览', link: '/cards/wonders/' },
            { text: '巨石阵', link: '/cards/wonders/wonder_01' },
            { text: '博览会馆', link: '/cards/wonders/wonder_02' },
            { text: '黄金塔', link: '/cards/wonders/wonder_03' },
            { text: '大巴扎', link: '/cards/wonders/wonder_04' },
            { text: '扎实地基', link: '/cards/wonders/wonder_05' },
            { text: '大金字塔', link: '/cards/wonders/wonder_06' },
            { text: '智慧宫', link: '/cards/wonders/wonder_07' },
            { text: '猎手神庙', link: '/cards/wonders/wonder_08' },
            { text: '地热温泉', link: '/cards/wonders/wonder_09' },
            { text: '龙墓', link: '/cards/wonders/wonder_10' },
            { text: '芦苇棚屋', link: '/cards/wonders/wonder_11' },
            { text: '伐木小屋', link: '/cards/wonders/wonder_12' },
            { text: '琉璃宝塔', link: '/cards/wonders/wonder_13' },
            { text: '大浴场', link: '/cards/wonders/wonder_14' },
            { text: '城堡', link: '/cards/wonders/wonder_15' },
            { text: '水渠', link: '/cards/wonders/wonder_16' },
            { text: '兵马俑', link: '/cards/wonders/wonder_17' },
            { text: '地下水宫', link: '/cards/wonders/wonder_18' },
            { text: '天空学院', link: '/cards/wonders/wonder_19' },
            { text: '炼金实验室', link: '/cards/wonders/wonder_20' },
            { text: '空中花园', link: '/cards/wonders/wonder_21' },
            { text: '巨龙神庙', link: '/cards/wonders/wonder_22' },
            { text: '生命之树', link: '/cards/wonders/wonder_23' },
            { text: '巨龙雕像', link: '/cards/wonders/wonder_24' },
            { text: '大竞技场', link: '/cards/wonders/wonder_25' },
            { text: '熔岩火山', link: '/cards/wonders/wonder_26' },
            { text: '冰川残骸', link: '/cards/wonders/wonder_27' },
            { text: '水运浑天仪', link: '/cards/wonders/wonder_28' },
            { text: '特洛伊城', link: '/cards/wonders/wonder_29' },
            { text: '佩特拉城', link: '/cards/wonders/wonder_30' },
            { text: '大图书馆', link: '/cards/wonders/wonder_31' }
          ]
        },
        {
          text: '领袖迷你扩展',
          collapsed: true,
          items: [
            { text: '领袖技能', link: '/cards/faq/general' },
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
