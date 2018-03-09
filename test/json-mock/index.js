exports.article = {
  title: 'Pagination 分页',
  description: 'PC端分页组件',
  content: `#### Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
pageSize | 每页显示条目个数 | Number | - | 20
curIndex | 当前页数 | Number | - | 1
totalPage | 总页数，total 和 pageSize 设置任意一个就可以达到显示页码的功能；| Number | - | 1
total | 总条目数 | Number | - | 1
align | 分页器对齐方式 | String | left, right | right
prefix | 组件样式前缀 | String | - | ''

#### Events

事件名称 | 说明 | 回调参数
---|----|---
onPageChange | curIndex改变时触发 | 当前页curIndex
`,
  commentCount: 10,
  pv: 100,
  date: 1300400444,
  author: 'joe.zhou',
  coverImg: '',
  tags: ['科技']
}