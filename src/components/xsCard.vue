<template>
  <div class="xsCard" :style="'background-color:' + cardColor">
    <a :href="link" target="_blank">
      <h2>{{title}}</h2>
      <div :style="'background-image: url('+ bgImg+')'" class="bg"></div>
      <img src="../assets/index/gdesign_logo.svg" alt v-if="isCenterImg" class="centerImg" />
    </a>
  </div>
</template>

<script>
export default {
  name: "xsCard",
  props: ["title", "bgImg", "cardColor", "isCenterImg", "link"]
};
</script>

<style lang="scss" scoped>
@import "../style/global.scss";

.xsCard {
  position: relative;
  width: 100%;
  max-width: 387px;
  height: 120px;
  border-radius: 10px;
  background-color: #ffffff;
  overflow: hidden;
  padding-left: 30px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;

  @include flex-all-center {
    justify-content: flex-start;
  }

  &:hover {
    .bg {
      transform: scale(1.02) translateX(4px);
      border-radius: 18px;
    }
    img {
      transform: scale(1.02);
    }
  }

  h2 {
    position: absolute;
    top: 25px;
    z-index: 1;
    width: 40%;
    white-space: pre;
    
    @include font(30px, $font-color-white-1, 700) {
      line-height: 34px;
    }
  }

  img {
    transition: all 0.3s ease;
  }

  .bg {
    z-index: 0;
    position: absolute;
    top: 0;
    right: 0;
    width: 201px;
    height: 120px;
    transition: all 0.2s ease;
    border-radius: 10px;
    overflow: hidden;
    transform-origin: right center;
    background-position: center right;
    background-size: cover;
    background-repeat: no-repeat;
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
