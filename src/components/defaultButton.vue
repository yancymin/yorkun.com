<template>
  <div class="defaultButton">
    <a :href="href">{{buttonText}}</a>
  </div>
</template>

<script>
export default {
  name: "defaultButton",
  props: ["buttonText", "href"]
};
</script>

<style lang="scss" scoped>
@import "../style/global.scss";

.defaultButton {
  width: 136px;
  height: 46px;
  border-radius: 6px;
  background-color: $blue;
  @include font(14px, $font-color-white-1, 500);

  a {
      width: 100%;
      height: 100%;
      @include flex-all-center;
  }
}
</style>
