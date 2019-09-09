<template>
  <div class="geetestWebsite article">
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
  name: 'geetestWebsite',
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
          src: require('../assets/article/geetestWebsite/web-01.png'),
        },
        {
          src: require('../assets/article/geetestWebsite/web-02.gif'),
        },
        {
          src: require('../assets/article/geetestWebsite/web-03.png'),
        },
        {
          src: require('../assets/article/geetestWebsite/web-04.png'),
        },
        {
          src: require('../assets/article/geetestWebsite/web-05.gif'),
        },
        {
          src: require('../assets/article/geetestWebsite/web-06.png'),
        },
        {
          src: require('../assets/article/geetestWebsite/web-07.png'),
        },
        {
          src: require('../assets/article/geetestWebsite/web-08.gif'),
        },
        {
          src: require('../assets/article/geetestWebsite/web-09.png'),
        },
        {
          src: require('../assets/article/geetestWebsite/web-10.png'),
        },
        {
          src: require('../assets/article/geetestWebsite/web-11.gif'),
        },
        {
          src: require('../assets/article/geetestWebsite/web-12.png'),
        },
        {
          src: require('../assets/article/geetestWebsite/web-13.png'),
        },
        {
          src: require('../assets/article/geetestWebsite/web-14.png'),
        },
        {
          src: require('../assets/article/geetestWebsite/web-15.gif'),
        },
        {
          src: require('../assets/article/geetestWebsite/web-16.gif'),
        },
        {
          src: require('../assets/article/geetestWebsite/web-17.gif'),
        },
        {
          src: require('../assets/article/geetestWebsite/web-18.gif'),
        },
        {
          src: require('../assets/article/geetestWebsite/web-19.png'),
        },
        {
          src: require('../assets/article/geetestWebsite/web-20.png'),
        },
        {
          src: require('../assets/article/geetestWebsite/web-21.png'),
        },
        {
          src: require('../assets/article/geetestWebsite/web-22.png'),
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
