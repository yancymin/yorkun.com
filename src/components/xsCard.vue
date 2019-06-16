<template>
  <div class="xsCard" :style="'background-color:' + cardColor">
    <h2>{{title}}</h2>
    <img :src="bgImg" alt class="bg">
    <img src="../assets/index/gdesign_logo.svg" alt v-if="isCenterImg" class="centerImg">
  </div>
</template>

<script>
export default {
  name: "xsCard",
  props: ["title", "bgImg", "cardColor", "isCenterImg"]
};
</script>

<style lang="scss" scoped>
@import "../style/global.scss";

.xsCard {
  position: relative;
  // width: calc(386px - 30px);
  width: 100%;
  height: 120px;
  border-radius: 10px;
  background-color: #2dc8dd;
  overflow: hidden;
  padding-left: 30px;
  margin-right: 20px;
  @include flex-all-center {
    justify-content: flex-start;
  }

  h2 {
    z-index: 1;
    width: 50%;
    @include font(30px, $font-color-white-1, 600) {
      line-height: 34px;
    }
  }

  .bg {
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .centerImg {
    width: 167px;
    height: 66px;
    position: absolute;
    left: 0;
    right: 0;
    top: 22%;
    bottom: 0;
    margin: 0 auto;
  }
}
</style>

