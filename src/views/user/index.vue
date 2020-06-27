<template>
  <div class="user">
    <!-- 会员信息 -->
    <div class="userInfo">
      <van-row style="height:100%;">
        <!-- 图片 -->
        <van-col span="8" class="div-vanimage">
          <van-image round width="60px" height="60px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </van-col>
        <van-col class="userinfo-text" span="14">
          <!-- 用户名 -->
          <span>{{ username }}</span>
          <!-- 会员等级 -->
          <span>{{ vipLevel }}</span>
        </van-col>
        <van-col span="1" class="userinfo-config">
          <!-- 设置 -->
          <van-icon name="setting-o" />
        </van-col>
      </van-row>
    </div>
    <!-- 类目 -->
    <div>2</div>
    <!-- 我的订单 -->
    <div>3</div>
    <!-- 我的资产 -->
    <div>4</div>
    <!-- 会员福利 -->
    <div>5</div>
    <!-- 版权信息 -->
    <div>6</div>
  </div>
</template>

<script>
export default {
  name: 'Name',
  data() {
    return {
      srcUrl: 'https://img.yzcdn.cn/vant/cat.jpeg',
      username: '安安',
      vipLevel: '普通会员'

    }
  }
}
</script>

<style>
.name {
  background-color: cornflowerblue;
  height: 100vh;
}
.userInfo {
  height: 15vh;
  margin: 5px;
  border-radius: 5px;
  /* display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center; */
  /* 浙进式颜色 */
  background: linear-gradient(to bottom, #409eff, #8ac4ff);
}
.div-vanimage {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.userinfo-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.userinfo-config {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
