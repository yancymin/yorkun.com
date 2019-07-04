<template>
  <div class="smallCard" :style="'background-color:' + cardColor">
    <div class="tag" v-if="isTag" :style="'background-color:' + tagColor">{{tag}}</div>
    <img :src="bgImg" class="bgImg">
    <div class="smallCard_text">
      <h1>{{title}}</h1>
      <span>{{footer}}</span>
      <img src="../assets/index/gmake_logo_w.svg" alt v-if="isCenterImg" class="centerImg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'smallCard',
  props: {
    title: String,
    cardColor: String,
    footer: String,
    bgImg: String,
    tag: String,
    tagColor: String,
    isTag: Boolean,
    isCenterImg: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@import "../style/global.scss";

.smallCard {
  position: relative;
  width: 590px;
  height: 400px;
  border-radius: 10px;
  background-color: #ffa51d;
  overflow: hidden;
  margin-bottom: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
  @include flex-all-center;

  &:hover {
    .bgImg {
      transform: scale(1.02);
    }
  }

  &_text {
    z-index: 1;
    @include flex-all-center;

    h1 {
      @include font(40px, $font-color-white-1, 600);
    }
    span {
      position: absolute;
      bottom: 24px;
      @include font(14px, $font-color-white-2, 400);
    }
  }

  .tag {
    z-index: 100;
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 8px 16px;
    // color: white !important;
    background-color: #d9dbdf;
    border-radius: 50px;
    @include font(12px, $font-color-white-2, 400);
  }

  img {
    z-index: 0;
    position: absolute;
    height: 100%;
    transition: all 0.3s ease;
  }
  .centerImg {
    height: 90px;
    position: absolute;
    left: 0;
    right: 0;
    top:35%;
    bottom: 0;
    margin: 0 auto;
  }
}
</style>
