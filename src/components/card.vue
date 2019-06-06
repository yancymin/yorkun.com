<template>
  <div class="card" :style="'background-color:' + cardColor">
    <div class="tag">{{tag}}</div>
    <div class="card_wrap">
      <div class="des">
        <h1>{{h1}}</h1>
        <span>{{des}}</span>
        <defaultButton buttonText="查看详情"/>
      </div>
      <div class="img-area">
        <img src="../assets/index/geetestweb.png" alt>
      </div>
    </div>
  </div>
</template>

<script>
import defaultButton from "../components/defaultButton.vue";
import ghostButton from "../components/ghostButton.vue";

export default {
  name: "card",
  props: ["h1", "des", "cardColor", "tag"],
  components: {
    defaultButton,
    ghostButton
  }
};
</script>

<style lang="scss" scoped>
@import "../style/global.scss";

.card {
  position: relative;
  max-width: 1200px;
  width: 100%;
  height: 420px;
  margin: 10px 0;
  border-radius: 8px;
  background-color: $white;
  overflow: hidden;
  @include flex-all-center;

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

  &_wrap {
    position: relative;
    width: 100%;
    @include flex-all-center {
      justify-content: space-between;
    }
    .des {
      z-index: 1;
      position: absolute;
      left: 120px;
      h1 {
        word-break: keep-all;
        margin-bottom: 10px;
        @include font(40px, $font-color-black-1, 600) {
          line-height: 56px;
        }
      }
      span {
        display: inline-block;
        min-width: 600px;
        margin-bottom: 50px;
        @include font(14px, $font-color-black-2, 400) {
          line-height: 20px;
        }
      }
    }
  }

  .img-area {
    z-index: 0;
    position: absolute;
    right: 0;
    img {
      height: 420px;
    }
  }
}
</style>
