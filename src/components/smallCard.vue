<template>
  <div class="smallCard" :style="'background-color:' + cardColor">
    <div class="tag" v-if="isTag">{{tag}}</div>
    <img :src="bgImg">
    <div class="smallCard_text">
      <h1>{{title}}</h1>
      <span>{{footer}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "smallCard",
  props: {
    title: String,
    cardColor: String,
    footer: String,
    bgImg: String,
    tag: String,
    isTag: Boolean
  }
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
  @include flex-all-center;

  &_text {
    z-index: 1;
  @include flex-all-center;


    h1 {
      @include font(40px, $font-color-white-1, 600);
    }
    span {
        position: absolute;
        bottom: 24px;
      @include font(14px, $font-color-white-1, 400);
    }
  }

  .tag {
    z-index: 100;
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 8px 16px;
    background-color: #d9dbdf;
    border-radius: 50px;
    @include font(12px, $font-color-black-2, 400);
  }

  img {
    z-index: 0;
    position: absolute;
    width: 100%;
  }
}
</style>
