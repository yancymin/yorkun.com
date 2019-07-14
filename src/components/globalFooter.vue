<template>
  <div class="globalFooter">
    <div class="globalFooter_links">
      <span>Links:</span>
      <a href="https://yancymin.design" target="_blank">Yancy Min</a>
      <a href="http://yorkunpic.lofter.com" target="_blank">{{footerLinkText}}</a>
    </div>
    <div class="globalFooter_copyright">Designed by YorKun. © 2019 YORKUN. All rights reserved.</div>
  </div>
</template>

<script>
export default {
  name: 'globalFooter',
  props: ['footerLinkText'],
};
</script>

<style lang="scss" scoped>
@import "./src/style/global.scss";

.globalFooter {
  max-width: 1200px;
  width: 100%;
  padding: 24px 0 40px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  @include font(14px, $font-color-white-3, 400);
  @include flex-all-center {
    justify-content: space-between;
  }

  span {
    margin-right: 16px;
  }

  &_links {
    a {
      margin-right: 10px;
      transition: all 0.3s ease;

      &:hover {
        color: white;
      }

      &:last-child {
        display: inline-block;
        height: 16px;
        padding-left: 10px;
        border-left: 1px solid $font-color-white-3;
      }
    }
  }
  &_copyright {
  @include font(12px, rgba(255,255,255,0.3), 400);

  }
}
</style>
