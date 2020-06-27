<template>
  <div>
    <!-- 进度条 -->
    <van-progress v-if="false" :percentage="50" />

    <!-- 幻灯片 -->
    <van-swipe :autoplay="3000" class="my-swipe" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!-- 通知 -->

    <van-notice-bar :scrollable="false" left-icon="volume-o">
      <van-swipe :autoplay="3000" :show-indicators="false" vertical class="notice-swipe">
        <van-swipe-item>内容 1</van-swipe-item>
        <van-swipe-item>内容 2</van-swipe-item>
        <van-swipe-item>内容 3</van-swipe-item>
      </van-swipe>
    </van-notice-bar>

    <!-- 热门品类 -->
    <van-panel>
      <template #header>
        <span class="van-panel-span">热门品类</span>
      </template>
      <van-grid :column-num="3">
        <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
      </van-grid>
    </van-panel>

    <!-- 店长推荐 -->
    <van-panel>
      <template #header>
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">店长推荐</van-divider>
      </template>
      <van-grid :border="false" :column-num="2">
        <van-grid-item>
          <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        </van-grid-item>
      </van-grid>
      <van-grid :border="false" :column-num="2">
        <van-grid-item>
          <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        </van-grid-item>
      </van-grid>
      <van-grid :border="false" :column-num="2">
        <van-grid-item>
          <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
        </van-grid-item>
      </van-grid>
    </van-panel>

    <!-- 联系方法 -->
    <van-contact-card
      :editable="false"
      style="width:100%;"
      type="edit"
      name="张三"
      tel="13000000000"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.notice-swipe {
  height: 20px;
  line-height: 20px;
}
.van-notice-bar {
  height: 20px;
  line-height: 20px;
}
.van-panel-span {
  display: inline-block;
  line-height: 60px;
  height: 60px;
  text-align: center;
  width: 100vw;
  font-size: 20px;
  font-weight: 600;
  color: #1989fa;
}
</style>
