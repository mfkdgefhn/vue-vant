<template>
  <div class="flex-box">
    <!-- 顶部 -->
    <div class="variable">
      <top />
    </div>

    <!-- 内容 -->
    <div class="content">
      <router-view />
    </div>

    <!-- 底部 -->
    <div class="bottom">
      <bottom />
    </div>
  </div>
</template>

<script>
import top from '@/components/top'
import bottom from '@/components/bottom'

export default {
  name: 'Index',
  components: {
    top, bottom
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style  scoped>
.flex-box {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.variable {
  width: 100%;
  align-self: flex-start;
}
.content {
  width: 100vw;
  flex: 1;
  margin-top: 48px;
  margin-bottom: 48px;
  background: #f4f4f4;
}
.bottom {
  align-self: flex-end;
  width: 100%;
}
</style>
