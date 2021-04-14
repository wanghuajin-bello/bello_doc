<!-- 暂无数据 -->
<template>
  <div v-show="visible" class="no-data-wrap">
    <img :src="bgImg" />
    <p v-html="text || '暂无数据'"></p>
    <bl-button
      v-if="showOperate"
      class="mt-8"
      type="primary"
      size="small"
      @click="handleOperate"
      >{{ operateText }}</bl-button
    >
  </div>
</template>

<script>
import noDataSrc from '../../assets/images/icon_nodata.svg'

export default {
  name: 'NoData',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    },
    imgSrc: {
      type: String,
      default: noDataSrc
    },
    showOperate: {
      type: Boolean,
      default: false
    },
    operateText: {
      type: String,
      default: '操作'
    }
  },
  create() {
    this.initComp()
  },
  data() {
    return {
      bgImg: this.imgSrc
    }
  },
  watch: {
    imgSrc(val) {
      this.bgImg = val
    }
  },
  methods: {
    handleOperate() {
      this.$emit('operate')
    }
  }
}
</script>

<style scoped lang="scss">
.no-data-wrap {
  width: 100%;
  margin: 48px auto 32px;
  text-align: center;
  img {
    width: 128px;
    height: 128px;
  }
  p {
    margin-top: 8px;
    font-size: getsize(f4);
    color: getcolor(c1_2);
  }
}
</style>
