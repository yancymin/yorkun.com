<template>
  <div class="gmake article">
    <articleNav />
    <div class="article-wrap">
      <section>
        <img :src="item.src" alt v-for="(item, index) in imgSrc" :key="index" />
      </section>
    </div>
    <articleInfo :links="links" date="更新于 2019.7.12" />
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
  name: "Article-1",
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
          title: "「行为验证」在线体验",
          href: "https://www.geetest.com/show"
        },
        {
          title: "《滑动拼图验证背后的故事》",
          href:
            "https://geetest.design/#/article/2019-05-23?time=2019-05-23%20%E5%8F%91%E5%B8%83&tags=%E5%8E%9F%E5%88%9B%E5%86%85%E5%AE%B9&tags=UI&view=1023"
        }
      ],

      imgSrc: [
        {
          src: require("../assets/article/gmake/GM-01.gif")
        },
        {
          src: require("../assets/article/gmake/GM-02.png")
        },
        {
          src: require("../assets/article/gmake/GM-03.png")
        },
        {
          src: require("../assets/article/gmake/GM-04.png")
        },
        {
          src: require("../assets/article/gmake/GM-05.png")
        },
        {
          src: require("../assets/article/gmake/GM-06.png")
        },
        {
          src: require("../assets/article/gmake/GM-07.png")
        },
        {
          src: require("../assets/article/gmake/GM-08.png")
        },
        {
          src: require("../assets/article/gmake/GM-09.png")
        },
        {
          src: require("../assets/article/gmake/GM-10.png")
        },
        {
          src: require("../assets/article/gmake/GM-11.png")
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
</style>
