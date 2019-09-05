<template>
  <div class="officialWebsite article">
    <articleNav />
    <div class="article-wrap">
      <section>
        <img :src="item.src" alt v-for="(item, index) in imgSrc" :key="index" />
      </section>
    </div>
    <articleInfo :links='links' date='更新于 2019.9.3'/>
    <globalFooter></globalFooter>
    <top />
  </div>
</template>


<script>
import articleNav from '../components/articleNav.vue';
import globalFooter from '../components/globalFooter.vue';
import top from '../components/top.vue';
import articleInfo from '../components/articleInfo.vue';

export default {
  name: 'Article-1',
  components: {
    articleNav,
    globalFooter,
    top,
    articleInfo,
  },
  data() {
    return {
      links: [
        {
          title: '极验交互安全网站',
          href: 'https://www.geetest.com',
        }
      ],

      imgSrc: [
        {
          src: require('../assets/article/officialWebsite/web-01.png'),
        },
        {
          src: require('../assets/article/officialWebsite/web-02.gif'),
        },
        {
          src: require('../assets/article/officialWebsite/web-03.png'),
        },
        {
          src: require('../assets/article/officialWebsite/web-04.png'),
        },
        {
          src: require('../assets/article/officialWebsite/web-05.gif'),
        },
        {
          src: require('../assets/article/officialWebsite/web-06.png'),
        },
        {
          src: require('../assets/article/officialWebsite/web-07.png'),
        },
        {
          src: require('../assets/article/officialWebsite/web-08.gif'),
        },
        {
          src: require('../assets/article/officialWebsite/web-09.png'),
        },
        {
          src: require('../assets/article/officialWebsite/web-10.png'),
        },
        {
          src: require('../assets/article/officialWebsite/web-11.gif'),
        },
        {
          src: require('../assets/article/officialWebsite/web-12.png'),
        },
        {
          src: require('../assets/article/officialWebsite/web-13.png'),
        },
      ],
    };
  },
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
