module.exports = {
  title: 'Bello前端文档',
  base: '/bello-ui/',
  description: 'another lightweight ui toolkit for Vue.js 2.X',
  port: 8083, 
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '组件', link: '/component/guide/introduction' },
      { text: '工具函数', link: '/utils/guide/guide' },
      // { text: '接口规范', link: '/theme/' },
      // { text: '知识库', link: '/theme/' },
      // { text: 'External', link: 'https://google.com' },
    ],
    sidebar: {
      '/component/': [
        {
          title: '开发指南',
          collapsable: false,
          children: [
            'guide/introduction',
            'guide/guide'
          ]
        },
        {
          title: '基础组件',
          collapsable: false,
          children: [
            'basic/button',
            'basic/form',
            'basic/no-data',
          ]
        },
        {
          title: '业务组件',
          collapsable: false,
          children: [
            'basic/button',
            'basic/form',
            'basic/no-data',
          ]
        }
      ],
      '/utils/': [
        {
          title: '通用方法',
          collapsable: false,
          children: [
            'common/common'
          ]
        },
        {
          title: '请求封装',
          collapsable: false,
          children: [
            'request/request'
          ]
        }
      ]
    }
  }
}