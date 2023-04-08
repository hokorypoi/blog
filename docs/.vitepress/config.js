export default {
  title: "H",
  description: "H",
  head: [
    ['link', { rel: 'icon', type: 'image/ico', href: 'favicon.ico' }]
  ],
  base: '/blog/',
  themeConfig: {
    siteTitle: "H",
    logo: "/static/images/avatar/rikka-takanashi.gif",
    layout: 'home',
    nav: [
      { text: "Home", link: "/" },
      { text: "Start", link: "/blog/" },
      { text: "Funny", link: "/funny/paygo-wifi-calling" },
      {
        text: "Record",
        items: [
          {
            // Title for the section.
            text: "For myself",
            items: [
              { text: "Blog", link: "/blog/" },
              { text: "Record", link: "/record/" },
            ],
          },
        ],
      },
      {
        text: "Dev",
        items: [
          {
            // You may also omit the title.
            items: [
              { text: "Dev", link: "/dev/" },
            ],
          },
        ],
      },
      { text: "Team", link: "/team" },
    ],
    sidebar: {
      '/blog/': [
        {
          text: '记录',
          items: [
            { text: 'Start', link: '/blog/' },
            { text: '创建', link: '/blog/create' },
          ]
        }
      ],

      // This sidebar gets displayed when user is
      // under `config` directory.
      '/dev/': [
        {
          text: '开发',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Start', link: '/dev/' },
            { text: 'OpenSteetMap to MapService', link: '/dev/osm-to-map-service' },
            { text: 'Three', link: '/dev/three' },
            { text: 'Four', link: '/dev/four' }
          ]
        }
      ],
      '/record/': [
        {
          text: '写给自己',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '开始', link: '/record/' },
            { text: '长久以来的噩梦', link: '/record/long-time-nightmare' },
            { text: '几个转折点', link: '/record/a-few-turning-points' },

          ]
        }
      ]
    },
    footer: {
      message: '爆ぜろリアル！ 弾けろシナプス！ バニッシュメント・ディス・ワールド！',
      copyright: 'Copyright © 2022-present <a href="https://github.com/">H</a>'
    }
  },
};
