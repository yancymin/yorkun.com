<template>
  <div
    class="motionCard"
    :style="'background-color:' + cardColor"
    :class="{fontBlack: isBlack, whiteBotton: isWhiteBotton}"
  >
    <div class="tag" v-if="isTag">{{tag}}</div>
    <div class="motionCard_wrap">
      <div class="des">
        <h1 v-if="isTitle">{{title}}</h1>
        <span v-if="isDes">{{des}}</span>
        <defaultButton buttonText="查看详情" v-if="isButton" :btnColor="btnColor" :btnIcon="btnIcon"/>
        <slot></slot>
      </div>
      <div class="motion-group">
        <div class="img-area img-area-1">
          <div class="left">
            <img src="../assets/index/scroll/Slide_01.png" alt>
            <img src="../assets/index/scroll/Slide_02.png" alt>
            <img src="../assets/index/scroll/Slide_03.png" alt>
            <img src="../assets/index/scroll/Slide_04.png" alt>
            <img src="../assets/index/scroll/Slide_05.png" alt>
            <img src="../assets/index/scroll/Slide_06.png" alt>
            <img src="../assets/index/scroll/Slide_01.png" alt>
            <img src="../assets/index/scroll/Slide_02.png" alt>
            <img src="../assets/index/scroll/Slide_03.png" alt>
            <img src="../assets/index/scroll/Slide_04.png" alt>
            <img src="../assets/index/scroll/Slide_05.png" alt>
            <img src="../assets/index/scroll/Slide_06.png" alt>
          </div>
          <div class="right">
            <img src="../assets/index/scroll/Slide_07.png" alt>
            <img src="../assets/index/scroll/Slide_08.png" alt>
            <img src="../assets/index/scroll/Slide_09.png" alt>
            <img src="../assets/index/scroll/Slide_10.png" alt>
            <img src="../assets/index/scroll/Slide_11.png" alt>
            <img src="../assets/index/scroll/Slide_12.png" alt>
            <img src="../assets/index/scroll/Slide_07.png" alt>
            <img src="../assets/index/scroll/Slide_08.png" alt>
            <img src="../assets/index/scroll/Slide_09.png" alt>
            <img src="../assets/index/scroll/Slide_10.png" alt>
            <img src="../assets/index/scroll/Slide_11.png" alt>
            <img src="../assets/index/scroll/Slide_12.png" alt>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import defaultButton from "../components/defaultButton.vue";
import ghostButton from "../components/ghostButton.vue";

export default {
  name: "motionCard",
  //   props: ["title", "des", "cardColor", "tag", "isButton", "isTitle", "isDes" ,"isBlack", "isTag"],
  props: {
    title: String,
    des: String,
    cardColor: String,
    btnColor: String,
    btnIcon: String,
    tag: String,
    isButton: Boolean,
    isTitle: Boolean,
    isDes: Boolean,
    isBlack: Boolean,
    isWhiteBotton: Boolean,
    isTag: Boolean
  },
  components: {
    defaultButton,
    ghostButton
  }
};
</script>

<style lang="scss" scoped>
@import "../style/global.scss";

.fontBlack {
  h1 {
    color: $font-color-white-1 !important;
  }
  span,
  p {
    color: $font-color-white-3 !important;
  }
}

// .whiteBotton {
//   .defaultButton {
//     background-color: $white !important;
//     color: $font-color-black-1 !important;
//   }
// }

.motionCard {
  position: relative;
  max-width: 1200px;
  width: 100%;
  height: 420px;
  margin: 10px 0;
  border-radius: 8px;
  background-color: $white;
  overflow: hidden;
  @include flex-all-center;

  &:before {
    content: "";
    z-index: 999;
    position: absolute;
    right: 60px;
    bottom: 0;
    display: block;
    height: 210px;
    width: 500px;
    background: linear-gradient(0deg, #141516 0%, rgba(20, 21, 22, 0) 100%);
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

  &_wrap {
    position: relative;
    width: 100%;
    height: 100%;
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

  .motion-group {
    position: absolute;
    right: 120px;
    width: 420px;
    top: 0;
    bottom: 0;
  }

  .img-area {
    z-index: 0;
    opacity: 0.6;
    position: relative;
    bottom: 1233px;
    @include flex-all-center {
      align-items: flex-start;
    }

    .left,
    .right {
      animation: scroll 60s infinite linear;

      img {
        width: 200px;
        border-radius: 4px;
        margin: 10px;
      }
    }

    .left {
      position: relative;
      top: 0px;
    }

    .right {
      animation: scroll 65s infinite linear;
    }
  }

  @keyframes scroll {
    0% {
      transform: translate3d(0, 0, 0);
    }

    100% {
      transform: translate3d(0, 50%, 0);
    }
  }
}
</style>
