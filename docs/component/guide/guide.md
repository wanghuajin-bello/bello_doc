---
title: 开发指南
---
# 开始

输入下列命令可以安装bello-ui
```
npm install bello-ui  --save
```
# 组件规范

如果带有非常鲜明的业务特性的请使用 `Bello` 前序，对`Element`组件做二次封装的使用对应组件命名后面加`Component`，通用型非常强的自行命名。

每个组件都要有一个独立的文件夹，建议里面带有 `README.md` 文件，对组件有修改同步维护一下`README.md` （大伙的方便，在你每一次的留个心）

组件命名统一大驼峰，尽可能把逻辑抽离到 `util` 中，通过函数编程的思想方便单测的覆盖

关于业务组件，建议提供默认的业务行为，提供通过参数把整个行为替换，而不是在组件内容通过多个条件判断

一些需要跨组件触发的行为建议使用以下两个方法实现

1. 使用 Vuex 的 Store 来做
2. 通过 command 来逐层上报，可以在组件内通过 `this.$emit('command', { type: 'xxx', value: '' })` 的方式上报，在调用该组件时，通过 `@command="command"` , 提供 `command` 方法接收，这里主要 `type` 的冲突问题，建议在 [enums](../enums/index.ts) 的 `CommandEnum` 定义好再使用， `command` 方法的实现建议

```js
command(command){
  const { type, value } = command
  if (type === 'xx') {
    this.xx(value)
    return // 这个是根据具体的业务判断来决定是否 return 也可以让它继续上报
  }
  this.$emit('command', command)
}
```

- [] 目前是手动维护，后面提供自动检查的方式生成

## 组件推荐

- [如何写一个弹窗](./DialogComponent/README.md)
- [显示用户相关信息（名字/头像）](./BelloUser/README.md)
- [怎样定义权限控制](./Auth/README.md)
- [如何写一个数据实体编辑动态表单](./EditForm/README.md)
- [数据展示的需求用 Ta 非常快](./ViewComponent/README.md)

## 通用组件介绍

- [Auth 自动生成权限 JSON 的组件](./Auth/README.md)
- [AlertComponent 顶部提示内容](./AlertComponent/README.md)
- [AuthLink 简便的权限跳转请用 ta](./AuthLink/README.md)
- [GetCodeFrom 获取个码，倒个时，确认一下](./GetCodeFrom/README.md)
- [Calendar 日程选择组件](./Calendar/README.md)
- [Clipboard 点击复制内容到剪切板](./Clipboard/README.md)
- [CountDown 倒计时](./CountDown/README.md)
- [CountTabs 统一样式带数字的 tabs](./CountTabs/README.md)
- [DialogComponent 二次封装，没有多层弹窗的情景下，使用 ta 保持只有一个弹窗](./DialogComponent/README.md)
- [DrawerComponent 二次封装](./DrawerComponent/README.md)
- [EditForm 据实体编辑动态表单](./EditForm/README.md)
- [Icon iconfont 的组件，设计给的图标都是用这个](./Icon/README.md)
- [SchemaForm 用 json 定义一个表单](./SchemaForm/README.md)
- [SchemaField 表单项](./SchemaField/README.md)
- [ViewComponent 用 json 定义一个规则的数据展示](./ViewComponent/README.md)

## 业务组件介绍

- [BelloBindEmail 发邮件验证码，倒个时，绑定一下](./BelloBindEmail/README.md)
- [BelloBindPhone 发手机验证码，倒个时，绑定一下](./BelloBindPhone/README.md)
- [BelloBindWechat 绑定用户微信的二维图片](./BelloBindWechat/README.md)
- [BelloIconTitle 编辑页面的项目类别标题，用它秒开发](./BelloIconTitle/README.md)
- [BelloImgUpload 图片剪切上传](./BelloImgUpload/README.md)
- [BelloSelectJob 切换职位加载相应数据](./BelloSelectJob/README.md)
- [BelloServiceQrCode 获取客服二维码，没你想那么简单](./BelloServiceQrCode/README.md)
- [BelloTopupBtn 去充值的按钮](./BelloTopupBtn/README.md)
- [BelloUser 用户相关的所有组件，图像，名字，卡片...](./BelloUser/README.md)

- [Card 卡片式样式的展示组件](./Card/README.md)
- [EducationInfo 教育经历列表展示组件](./EducationInfo/README.md)
- [EmploymentInfo 工作经历列表展示组件](./EmploymentInfo/README.md)
- [EntryShow 对象简单展示](./EntryShow/README.md)
- [FilterPanel 搜索条件组件](./FilterPanel/README.md)
- [MainLayout 全局布局组件，不用怎么管](./MainLayout/README.md)
- [MultBtns 批量操作按钮交互](./MultBtns/README.md)
- [MultOperate 批量操作 业务实现](./MultOperate/README.md)
- [ResumeDetail 简历详情](./ResumeDetail/README.md)
- [ResumeListComp 简历列表（列表样式）](./ResumeListComp/README.md)
- [ResumeList 简历列表+简历详情弹窗（强烈推荐）](./ResumeList/README.md)
- [ResumeEditForm 简历编辑](./ResumeEditForm/README.md)
- [ResumeMapTree 人才地图](./ResumeMapTree/README.md)
- [VirtualFolder 动态文件夹](./VirtualFolder/README.md)

## 待重构

- SchemaShow 重构到 EntryShow
- SelectJobDialog 重构到 DialogComponent
