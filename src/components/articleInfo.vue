<template>
  <div class="article-info">
    <div class="info-wrap">
      <div class="left">
        <p>{{date}}</p>
        <p>以上内容仅为视觉展示，可能与实际项目存在差异。</p>
      </div>
      <div class="right">
        <a
          :href="links[i].href"
          target="_blank"
          v-for="(item, i) in links"
          :key="i + 'label'"
        >{{links[i].title}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'articleInfo',
  props: ['links', 'date'],
};
</script>


<style lang="scss" scoped>
@import "./src/style/global.scss";
@import "./src/style/mobile.scss";

.article-info {
  width: calc(100% - 90px);
  max-width: calc(1200px - 64px);
  padding: 40px 32px;
  background-color: $black;
  border-radius: 10px;
  margin: 20px 20px 0 20px;
  @include flex-all-center;

  .info-wrap {
    width: 100%;
    margin: 0 16px;
    @include flex-all-center {
      justify-content: space-between;
    }

    .left {
      p {
        &:nth-of-type(1) {
          @include font(14px, white, 400);
          margin-bottom: 8px;
        }
        &:nth-of-type(2) {
          @include font(12px, white, 400);
          opacity: 0.4;
          line-height: 16px;
        }
      }
    }

    .right {
      display: flex;
      a {
        margin-left: 40px;
        transition: all .3s ease;
        @include flex-all-center;
        @include font(14px, $font-color-white-2, 400);

        &:hover {
          color: white;
        }

        &::after {
          content: "";
          display: inline-block;
          width: 10px;
          height: 10px;
          margin-left: 8px;
          background: url("../assets/index/link_icon_w.svg") no-repeat;
        }

        &:first-child {
          margin-right: 0;
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .info-wrap {
    flex-direction: column;
     align-items: flex-start !important;


    .right {
      flex-direction: column;
     align-items: flex-start !important;
     margin-top: 20px;

     a {
         margin: 4px 0 !important;
     }
    }
  }
}
</style>
