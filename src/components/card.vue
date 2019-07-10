<template>
  <div
    class="card"
    :style="'background-color:' + cardColor"
    :class="{fontBlack: isBlack, whiteBotton: isWhiteBotton}"
  >
    <div
      class="tag"
      v-if="isTag"
      :class="{whiteTag: isTagWhite}"
      :style="'background-color:' + tagColor"
    >{{tag}}</div>
    <div class="card_wrap">
      <div class="des">
        <img v-if="isTitle" :src="cardLogo" />
        <span v-if="isDes">{{des}}</span>
        <div class="btn-wrap">
          <defaultButton
            :buttonText="buttonTextD"
            v-if="isButton"
            :btnIcon="btnIconD"
            :href="hrefD"
          />
          <ghostButton
            :buttonText="buttonTextG"
            v-if="isGhostButton"
            :buttonIcon="btnIconG"
            :href="hrefG"
          />
        </div>
        <slot></slot>
      </div>
      <div class="img-area">
        <img :src="bgImg" alt />
      </div>
    </div>
  </div>
</template>

<script>
import defaultButton from './defaultButton.vue';
import ghostButton from './ghostButton.vue';

export default {
  name: 'card',
  props: {
    title: String,
    cardLogo: String,
    des: String,
    cardColor: String,
    tag: String,
    isButton: Boolean,
    isTitle: Boolean,
    isDes: Boolean,
    isBlack: Boolean,
    isWhiteBotton: Boolean,
    isTag: Boolean,
    isTagWhite: Boolean,
    isGhostButton: Boolean,
    tagColor: String,
    bgImg: String,
    btnIconD: String,
    btnIconG: String,
    buttonTextG: String,
    buttonTextD: String,
    hrefD: String,
    hrefG: String,
  },
  components: {
    defaultButton,
    ghostButton,
  },
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

.whiteTag {
  color: white !important;
}

.whiteBotton {
  .defaultButton {
    background-color: $white !important;
    color: $font-color-black-1 !important;
  }
}

.card {
  opacity: 0;
  position: relative;
  max-width: 1200px;
  width: 100%;
  height: 420px;
  margin: 10px 0;
  border-radius: 8px;
  background-color: $white;
  overflow: hidden;
  animation-delay: 1s;
  animation: showCard 1s ease forwards;
  transform: translateY(10%);
  @include flex-all-center;

  @keyframes showCard {
    to {
      opacity: 1;
      transform: translateY(0);
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
      @include flex-column {
        align-items: flex-start;
      }

      .btn-wrap {
        .defaultButton {
          margin-right: 20px;
        }
        @include flex-all-center {
          align-items: flex-start;
        }
      }

      h1 {
        word-break: keep-all;
        margin-bottom: 10px;
        @include font(40px, $font-color-black-1, 700) {
          line-height: 56px;
        }
      }

      img {
        height: 30px;
        margin-bottom: 24px;
      }
      span {
        display: inline-block;
        width: 410px;
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
    opacity: 1;
    /* animation: showMe 2s ease forwards;

    @keyframes showMe {
      to {
        opacity: 1;
        transform: scale(1);
      }
    } */
    img {
      height: 422px;
    }
  }
}
</style>
