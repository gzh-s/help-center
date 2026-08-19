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
        text: '新手指南',
        items: [
           { text: 'YJOJ 操作指南', link: '/guide' },
           { text: '常见问题', link: '/faq' }
        ]
      },
     {
        text: '社区规则',
        items: [
           { text: '社区规则', link: '/rules' },
          { text: '题目规范', link: '/topic-problem' },
          { text: '题解规范', link: '/topic-problem-solution' }
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/gzh-s/help-center/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    }
  }
}
