<template>
  <div class="cart">
    <!-- 优惠券单元格 -->
    <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
    <!-- 优惠券列表 -->
    <van-popup v-model="showList" round position="bottom" style="height: 90%; padding-top: 4px;">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>

    <!-- 商品列表 -->
    <van-row v-for="(i,index) in 8" :key="index" class="productlist">
      <van-col class="productlist-col lineheight" span="2">
        <van-icon v-if="select" name="circle" />
        <van-icon v-else name="passed" />
      </van-col>
      <van-col class="productlist-col lineheight" span="6">
        <van-image
          class="productlist-col-img"
          fit="cover"
          width="80"
          height="80"
          round
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </van-col>
      <van-col class="productlist-col" span="11">
        <span class="product-span">截圾圾会截别</span>
        <span class="product-span">截圾圾会截别</span>
        <span class="product-colorsize">颜色：</span>
        <span class="product-colorsize">{{ color }}</span>
        <span class="product-colorsize">尺码：</span>
        <span class="product-colorsize">{{ size }}</span>
        <span class="product-span">
          <van-stepper v-model="value" theme="round" button-size="22" min="0" disable-input />
        </span>
      </van-col>
      <van-col class="productlist-col" span="5">
        <span class="price">￥299.00</span>
        <van-icon class="icon" name="delete" />
      </van-col>
    </van-row>

    <van-submit-bar :price="3050" class="cart-submit-bar" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送,
        <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
import { Toast } from 'vant'

const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元'
}

export default {
  name: 'Cart',
  data() {
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: false,
      checked: true,
      select: true,
      color: '红',
      size: 12,
      value: 0
    }
  },
  methods: {
    onChange(index) {
      this.showList = false
      this.chosenCoupon = index
    },
    onExchange(code) {
      this.coupons.push(coupon)
    },
    onClickIcon() {
      Toast('点击图标')
    },
    onClickButton() {
      Toast('点击按钮')
    },
    onSubmit() {
      console.log('提交订单')
    },
    onClickEditAddress() {
      console.log('修改地址')
    }
  }
}
</script>

<style>
.cart {
  height: 100%;
}
.product-list {
  margin: 5px;
  border-radius: 5px;
  background: #ffffff;
}
.cart-submit-bar {
  position: fixed;
  bottom: 50px;
  border-bottom: 2px solid #f4f4f4;
}
.van-submit-bar__button {
  width: 90px;
  height: 30px;
}
.productlist {
  margin: 5px;
  border-radius: 5px;
  background: #fff;
}
.lineheight {
  text-align: center;
  line-height: 125px;
}
.productlist-col-img {
  vertical-align: middle;
}
.product-span {
  display: block;
  margin-top: 5px;
  font-size: 16px;
}
.product-colorsize {
  line-height: 20px;
  font-size: 14px;
  color: grey;
}
.van-icon {
  font-size: 25px;
}
.price,
.icon {
  display: inline-block;
  margin-top: 20px;
}
</style>
