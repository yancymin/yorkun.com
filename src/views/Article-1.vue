<template>
  <div class="article-1 article">
    <articleNav />
    <div class="article-wrap">
      <section>
        <img src="../assets/article/1/1.jpg" alt />
      </section>
    </div>
    <articleInfo :links='links' date='更新于 2019.7.12'/>
    <globalFooter>右可的影像集</globalFooter>
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
          title: '「行为验证」在线体验',
          href: "https://SSS.COM"
        },
        {
          title: '《滑动拼图验证背后的故事》',
          href: "https://SSS.COM"
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
}
</style>
