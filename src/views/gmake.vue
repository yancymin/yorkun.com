<template>
  <div class="gmake article">
    <articleNav />
    <div class="article-wrap">
      <section>
        <div class="img" v-for="(item, index) in imgSrc" :key="index">
          <img :src="item.src" alt />
        </div>
      </section>
    </div>
    <articleInfo :links="links" date="更新于 2019.8.20" />
    <globalFooter></globalFooter>
    <top />
  </div>
</template>


<script>
import articleNav from "../components/articleNav.vue";
import globalFooter from "../components/globalFooter.vue";
import top from "../components/top.vue";
import articleInfo from "../components/articleInfo.vue";

export default {
  name: "geetestCaptcha",
  components: {
    articleNav,
    globalFooter,
    top,
    articleInfo
  },
  data() {
    return {
      links: [
        {
          title: "更多设计作品",
          href: "http://yorkun.lofter.com"
        }
      ],

      imgSrc: [
        {
          src: require("../assets/article/gmake/GM-01.gif")
        },
        {
          src: require("../assets/article/gmake/GM-02.jpg")
        },
        {
          src: require("../assets/article/gmake/GM-03.jpg")
        },
        {
          src: require("../assets/article/gmake/GM-04.jpg")
        },
        {
          src: require("../assets/article/gmake/GM-05-bg.png")
        },
        {
          src: require("../assets/article/gmake/GM-06.jpg")
        },
        {
          src: require("../assets/article/gmake/GM-07.jpg")
        },
        {
          src: require("../assets/article/gmake/GM-08.png")
        },
        {
          src: require("../assets/article/gmake/GM-09.png")
        },
        {
          src: require("../assets/article/gmake/GM-10.jpg")
        },
        {
          src: require("../assets/article/gmake/GM-11.jpg")
        },

        {
          src: require("../assets/article/gmake/GM-13.jpg")
        },
        {
          src: require("../assets/article/gmake/GM-14.jpg")
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
@import "./src/style/global.scss";
@import "./src/style/mobile.scss";

.globalFooter {
  margin-top: 160px;
  width: calc(100% - 32px);
  padding: 24px 0 40px 0;
}

section {
  .img {
    &:nth-of-type(5) {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      &::before {
        content: "";
        position: absolute;
        display: block;
        width: 20%;
        height: 23%;
        background-image: url("../assets/article/gmake/GM-05-gif.gif");
        background-repeat: no-repeat;
        background-size: cover;
        top: 51%;
      }
    }
  }
  img {
    display: inherit;
  }
}
</style>
