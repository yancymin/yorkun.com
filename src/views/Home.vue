<template>
  <div class="home">
    <!-- <defaultButton buttonText="fffff" :href="buttons.href.href1"/>
    <ghostButton buttonText="fffff" :buttonIcon="buttons.buttonIcon" :href="buttons.href.href1"/>-->
    <div class="head">
      <div class="nav-1">
        <ul>
          <li>
            <a href>项目</a>
          </li>
          <li>
            <a href>作品</a>
          </li>
          <li>
            <a href>关于我</a>
          </li>
        </ul>
        <div class="lang">
          <span>CN</span>
          <ul>
            <li>CN</li>
            <li>EN</li>
          </ul>
        </div>
      </div>
      <div class="head_container">
        <img src="../assets/index/logo_banner.svg" alt class="logo">
        <div class="motion">
          <img src="../assets/index/name_logo.svg" alt class="motion_logo">
        </div>
      </div>
    </div>
    <div class="container">
      <card h1="我是个设计师" tag="网页设计" des="今天天气真好阿"/>
      <card h1="我是个设计师" tag="网页设计" des="2018 年网站改版，配合极验的品牌形象，采用了全新的视觉风格。"/>
    </div>
  </div>
</template>

<script>
import defaultButton from "../components/defaultButton.vue";
import ghostButton from "../components/ghostButton.vue";
import card from "../components/card.vue";
import link from "../assets/index/button-icon/link_icon.svg";

export default {
  name: "home",
  props: ["buttonIcon"],
  components: {
    defaultButton,
    ghostButton,
    card
  },
  data() {
    return {
      buttons: {
        href: {
          href1: "https://baidu.com"
        },
        buttonIcon: link
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./src/style/global.scss";

.home {
  width: 100%;
  background-color: $gray;
    @include flex-column;


  .head {
    width: 100%;
    height: 680px;
    background-color: $black;
    overflow: hidden;
    @include flex-column;
    @include font(14px, $font-color-white-3, 500);

    .nav-1 {
      width: 90%;
      padding-top: 24px;
      @include flex-all-center {
        justify-content: space-between;
      }

      > ul {
        margin: 0 auto;
        li {
          display: inline;
          margin: 0 40px;
        }
      }
    }

    &_container {
      @include flex-column;
      margin-top: 120px;

      .motion {
        &_logo {
          position: relative;
        margin-top: 60px;
          }
      }
    }
  }

    .container {
      width: 90%;
    }
}
</style>

