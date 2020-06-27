<template>
  <van-tree-select
    :items="items"
    :active-id.sync="activeId"
    :main-active-index.sync="activeIndex"
    height="86vh"
  />
</template>

<script>
export default {
  name: 'Select',
  data() {
    return {
      items: [{
        // 导航名称
        text: '所有城市',
        // 导航名称右上角徽标，2.5.6 版本开始支持
        badge: 3,
        // 是否在导航名称右上角显示小红点
        dot: true,
        // 导航节点额外类名
        className: 'my-class',
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '温州',
            // id，作为匹配选中状态的标识符
            id: 1,
            // 禁用选项
            disabled: true
          },
          {
            text: '杭州',
            id: 2
          },
          {
            text: '台州',
            id: 3
          },
          {
            text: '丽水',
            id: 4
          },
          {
            text: '金华',
            id: 5
          }
        ]
      }
      ],
      // [{
      //   text: '浙江',
      //   children: [
      //     { text: '杭州', dot: true },
      //     { text: '温州', dot: true },
      //     { text: '台州', dot: true },
      //     { text: '丽水', dot: true },
      //     { text: '金华', dot: true }
      //   ],
      //   dot: true
      // }, {
      //   text: '江苏',
      //   children: [
      //     { text: '南京', dot: true },
      //     { text: '无锡', dot: true },
      //     { text: '徐州', dot: true },
      //     { text: '苏州', dot: true }
      //   ],
      //   dot: true
      // }],
      activeId: 1,
      activeIndex: 0
    }
  }
}
</script>

<style>
.select {
  height: 100vh;
}
</style>
