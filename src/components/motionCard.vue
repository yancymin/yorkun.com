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
        <a class="defaultButton" href="http://yorkun.lofter.com" target="_blank">
          {{buttonText}}
          <img src="../assets/index/link_icon_w.svg" />
        </a>
        <slot></slot>
      </div>
      <div class="motion-group">
        <div class="left">
          <img src="../assets/index/scroll/slide-1.png" alt />
          <img src="../assets/index/scroll/slide-1.png" alt />
        </div>
        <div class="right">
          <img src="../assets/index/scroll/slide-2.png" alt />
          <img src="../assets/index/scroll/slide-2.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import defaultButton from "./defaultButton.vue";
import ghostButton from "./ghostButton.vue";

export default {
  name: "motionCard",
  props: {
    title: String,
    des: String,
    cardColor: String,
    btnColor: String,
    btnIcon: String,
    hrefD: String,
    tag: String,
    isButton: Boolean,
    isTitle: Boolean,
    isDes: Boolean,
    isBlack: Boolean,
    isWhiteBotton: Boolean,
    isTag: Boolean,
    buttonText: String
  },
  components: {
    // defaultButton,
    ghostButton
  }
};
</script>

<style lang="scss" scoped>
@import "../style/global.scss";

.defaultButton {
  z-index: 1000;
  cursor: pointer;
  width: 132px;
  height: 42px;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: #40454b;
  transition: all 0.3s ease;
  @include font(14px, $font-color-white-1, 400);
  @include flex-all-center;

  a {
    width: 100%;
    height: 100%;
    @include flex-all-center;
  }

  img {
    margin-left: 8px;
  }
}

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
    z-index: 1;
    position: absolute;
    right: 60px;
    bottom: 0;
    display: block;
    height: 210px;
    width: 100%;
    border-radius: 8px;
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
        @include font(40px, $font-color-black-1, 700) {
          line-height: 56px;
        }
      }
      span {
        display: inline-block;
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
    height: 420px;
    top: 0;
    bottom: 0;
    z-index: 0;
    opacity: 0.6;
    // overflow: hidden;
    @include flex-all-center;
  }

  .left,
  .right {
    position: relative;
    top: -100%;
    animation: scroll 60s infinite linear;

    img {
      width: 210px;
    }
  }

  .left {
    margin-right: 20px;
    @include flex-column;
  }

  .right {
    top: -71%;
    animation: scroll 65s infinite linear;
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
