<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item :to="{path:'/'}" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item :to="{path:'/product'}" icon="shop-o">商品</van-tabbar-item>
      <van-tabbar-item :to="{path:'/select'}" icon="search" dot>分类</van-tabbar-item>
      <van-tabbar-item :to="{path:'/cart'}" icon="friends-o" badge="5">购物车</van-tabbar-item>
      <van-tabbar-item :to="{path:'/user'}" icon="setting-o" badge="20">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>
