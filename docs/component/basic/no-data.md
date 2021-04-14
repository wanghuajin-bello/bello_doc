---
title: NoData
---

# 无数据页面
<script>
export default {
  data() {
    return {
      text: '无数据页面'
    }
  }
}
</script>

<template>
  <bl-no-data :visible="true" :text="text"></bl-no-data>
</template>


### 使用
```html
<bl-no-data :visible="true" :text="text"></bl-no-data>
```