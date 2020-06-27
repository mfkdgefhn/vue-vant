<template>
  <div>
    <van-nav-bar
      title="标题"
      left-text="返回"
      left-arrow
      fixed
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  data() {
    return {

    }
  },
  methods: {
    onClickLeft() {
      Toast('返回')
    },
    onClickRight() {
      Toast('搜索')
    }
  }
}
</script>
