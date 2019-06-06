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
        <div class="logo"></div>
        <div class="motion"></div>
      </div>
    </div>
  </div>
</template>

<script>
import defaultButton from "../components/defaultButton.vue";
import ghostButton from "../components/ghostButton.vue";
import link from "../assets/index/button-icon/link_icon.svg";

export default {
  name: "home",
  props: ["buttonIcon"],
  components: {
    defaultButton,
    ghostButton
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
  @include flex-all-center {
    align-items: flex-start;
  }

  .head {
    width: 100%;
    height: 680px;
    background-color: $black;

    @include font(14px, $font-color-white-3, 500);
  }
}
</style>

