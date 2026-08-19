export default {
  title: 'YJOJ帮助中心',
  description: '为用户提供的操作指南',
  base: '/docs/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide' },
      { text: '常见问题', link: '/faq' }
    ],
    sidebar: [
      {
        text: '指南',
        items: [
           { text: '新手指南', link: '/guide' },
           { text: '常见问题', link: '/faq' }
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/gzh-s/help-center/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    }
  }
}
