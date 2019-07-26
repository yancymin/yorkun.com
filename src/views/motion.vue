<template>
  <div class="motion article">
    <articleNav />
    <div class="article-wrap">
      <img :src="item.src" alt v-for="(item, index) in imgSrc" :key="index" />
    </div>
    <articleInfo :links="links" date="更新于 2019.7.26" />
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
  name: "motion",
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
          src: require("../assets/article/motion/01.gif")
        },
        {
          src: require("../assets/article/motion/02.gif")
        },
        {
          src: require("../assets/article/motion/03.gif")
        },
        {
          src: require("../assets/article/motion/04.gif")
        },
        {
          src: require("../assets/article/motion/05.gif")
        },
        {
          src: require("../assets/article/motion/06.gif")
        },
        {
          src: require("../assets/article/motion/07.gif")
        },
        {
          src: require("../assets/article/motion/08.gif")
        },
        {
          src: require("../assets/article/motion/09.gif")
        },
        {
          src: require("../assets/article/motion/10.gif")
        },
        {
          src: require("../assets/article/motion/11.gif")
        },
        {
          src: require("../assets/article/motion/12.gif")
        },
        {
          src: require("../assets/article/motion/13.gif")
        },
        {
          src: require("../assets/article/motion/14.gif")
        },
        {
          src: require("../assets/article/motion/15.gif")
        },
        {
          src: require("../assets/article/motion/16.gif")
        },
        {
          src: require("../assets/article/motion/17.gif")
        },
        {
          src: require("../assets/article/motion/18.gif")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./src/style/global.scss";
@import "./src/style/mobile.scss";

.article img {
  width: 100%;
  max-width: calc(100% / 2 - 10px);
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 12px;

  &:nth-child(2n) {
    margin-right: 0;
  }

  &:nth-last-child(2),
  &:nth-last-child(1) {
    margin-bottom: 0;
  }
}

.globalFooter {
  margin-top: 160px;
  width: calc(100% - 32px);
  padding: 24px 0 40px 0;
}

@media screen and (max-width: 600px) {
  .article-wrap {
    margin-top: 90px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .article img {
    max-width: 90%;
    margin-left: 0 !important;
    margin-right: 0 !important;

    &:nth-last-child(2) {
      margin-bottom: 20px;
    }
  }
}
</style>

