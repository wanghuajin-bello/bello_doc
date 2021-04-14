---
title: 通用方法
---
# 判断浏览器环境是否是IE以及IE9
<script>
export default {
  data() {
    return {
      // button: that.$isIE9
    }
  },
  created() {
    console.log('that.$IE111', window.that.$IE)
  }
}
</script>

<template>
  <div>{{ $isIE9 }}</div>
</template>
