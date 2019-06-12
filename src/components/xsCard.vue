<template>
  <div class="xsCard">
    <h2>{{title}}</h2>
    <img :src="bgImg" alt>
  </div>
</template>

<script>
export default {
  name: "xsCard",
  props: ["title", "bgImg"]
};
</script>

<style lang="scss" scoped>
@import "../style/global.scss";

.xsCard {
  position: relative;
  width: calc(386px - 30px);
  height: 120px;
  border-radius: 10px;
  background-color: #2dc8dd;
  overflow: hidden;
  padding-left: 30px;
  @include flex-all-center {
    justify-content: flex-start;
  }

  h2 {
    z-index: 1;
    width: 50%;
    @include font(30px, $font-color-white-1, 600) {
      line-height: 34px;
    }
  }

  img {
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
}
</style>

