<template>
  <div class="globalFooter">
    <div class="globalFooter_links">
      <span>Links:</span>
      <a href="https://yancymin.design" target="_blank">Yancy Min</a>
      <a href="https://www.liuchangyi.com/" target="_blank">Charlie Liu</a>
      <a href="https://www.dribbbbble.com" target="_blank">Dark Mode for Dribbble</a>
      <!-- <a href="http://yorkunpic.lofter.com" target="_blank">
        {{footerLinkText}}
        <slot></slot>
      </a>-->
    </div>
    <div
      class="globalFooter_copyright"
    >Designed by YorKun and coded by Yancy Min. © 2019 YORKUN. All rights reserved.</div>
  </div>
</template>

<script>
export default {
  name: "globalFooter",
  props: ["footerLinkText"]
};
</script>

<style lang="scss" scoped>
@import "./src/style/global.scss";

.globalFooter {
  max-width: 1200px;
  width: calc(100% - 32px);
  padding: 24px 0 40px 0;
  margin: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  @include font(14px, $font-color-white-3, 400);
  @include flex-all-center {
    justify-content: space-between;
  }

  span {
    margin-right: 16px;
    @include font(14px, $font-color-white-3, 400);
  }

  &_links {
    a {
      margin-right: 16px;
      transition: all 0.3s ease;

      &:hover {
        color: white;
      }

      /* &:last-child {
        display: inline-block;
        height: 16px;
        padding-left: 10px;
        border-left: 1px solid $font-color-white-3;
      } */
    }
  }
  &_copyright {
    @include font(12px, rgba(255, 255, 255, 0.3), 400);
  }
}

@media screen and (max-width: 600px) {
  .globalFooter {
    width: 100%;
    padding: 24px 0px 40px 0px;

    flex-direction: column;
    align-items: flex-start;

    .globalFooter_links {
      display: flex;
      flex-direction: column;

      a {
        margin: 14px 0 0 0;

        &:last-child {
          border: none;
          padding-left: 0;
        }
      }
    }

    .globalFooter_copyright {
      max-width: 100%;
      text-align: left;
      line-height: 18px;
      margin-top: 16px;
    }
  }
}
</style>
