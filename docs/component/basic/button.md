---
title: Button
---

# 按钮
<script>
export default {
  data() {
    return {
      button: '默认'
    }
  }
}
</script>

<template>
  <bl-button>{{button}}</bl-button>
  <bl-button type="primary">主色</bl-button>
  <bl-button type="success">成功</bl-button>
  <bl-button type="info">提示</bl-button>
  <bl-no-data :visible="true" text="无数据页面"></bl-no-data>
</template>


### 使用
```html
<bl-button>默认</bl-button>
<bl-button type="primary">主色</bl-button>
<bl-button type="success">成功</bl-button>
<bl-button type="info">提示</bl-button>
```