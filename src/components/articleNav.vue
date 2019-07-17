<template>
  <div class="article-nav">
    <div class="nav-wrap">
      <img src="../assets/index/small_logo.svg" alt />
      <a href="/">
        <img src="../assets/back.svg" alt />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'articleNav',
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
  border-bottom: 1px solid rgba(76, 79, 84, 0.6);
  @include flex-all-center;

  .nav-wrap {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 16px;
    @include flex-all-center {
      justify-content: space-between;
    }

    a {
      &:hover {
         img {
             filter: contrast(2);
         }
      }

      img {
        transition: all 0.3s ease;
      }
    }

    img {
      width: 34px;
      height: 22px;
    }
  }
}
</style>
