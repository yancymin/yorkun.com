<template>
  <div class="article-nav">
    <div class="nav-wrap">
      <img src="../assets/index/small_logo.svg" alt />
      <a href="/">
        <img src="../assets/index/small_logo.svg" alt />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "articleNav"
};
</script>

<style lang="scss" scoped>
@import "../style/global.scss";

.article-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 68px;
  background-color: $black;
  box-shadow: 0 2px 20px 0 rgba(19, 22, 27, 0.6);
  @include flex-all-center;

  .nav-wrap {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 16px;
    @include flex-all-center {
      justify-content: space-between;
    }

    img {
      width: 34px;
      height: 22px;
    }
  }
}
</style>


