<template>
  <div class="geetestCaptcha article">
    <articleNav />
    <div class="article-wrap">
      <section>
        <img :src="item.src" alt v-for="(item, index) in imgSrc" :key="index" />
      </section>
    </div>
    <articleInfo :links='links' date='更新于 2019.7.12'/>
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
  name: 'geetestCaptcha',
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
          title: '行为验证 在线体验',
          href: 'https://www.geetest.com/show',
        },
        {
          title: '《滑动拼图验证背后的故事》',
          href: 'https://geetest.design/article/2019-05-23?time=2019-05-23%20%E5%8F%91%E5%B8%83&tags=%E5%8E%9F%E5%88%9B%E5%86%85%E5%AE%B9&tags=UI&view=1023',
        },
      ],

      imgSrc: [
        {
          src: require('../assets/article/geetestCaptcha/CAP-01.png'),
        },
        {
          src: require('../assets/article/geetestCaptcha/CAP-02.png'),
        },
        {
          src: require('../assets/article/geetestCaptcha/CAP-03.png'),
        },
        {
          src: require('../assets/article/geetestCaptcha/CAP-04.png'),
        },
        {
          src: require('../assets/article/geetestCaptcha/CAP-05.png'),
        },
        {
          src: require('../assets/article/geetestCaptcha/CAP-06.png'),
        },
        {
          src: require('../assets/article/geetestCaptcha/CAP-07.gif'),
        },
        {
          src: require('../assets/article/geetestCaptcha/CAP-08.png'),
        },
        {
          src: require('../assets/article/geetestCaptcha/CAP-09.gif'),
        },
        {
          src: require('../assets/article/geetestCaptcha/CAP-10.png'),
        },
        {
          src: require('../assets/article/geetestCaptcha/CAP-11.png'),
        },
        {
          src: require('../assets/article/geetestCaptcha/CAP-12.gif'),
        },
        {
          src: require('../assets/article/geetestCaptcha/CAP-13.png'),
        },
        {
          src: require('../assets/article/geetestCaptcha/CAP-14.gif'),
        },
        {
          src: require('../assets/article/geetestCaptcha/CAP-15.gif'),
        },
        {
          src: require('../assets/article/geetestCaptcha/CAP-16.png'),
        },
        {
          src: require('../assets/article/geetestCaptcha/CAP-17.png'),
        },
        {
          src: require('../assets/article/geetestCaptcha/CAP-18.png'),
        },
        {
          src: require('../assets/article/geetestCaptcha/CAP-19.png'),
        },
        {
          src: require('../assets/article/geetestCaptcha/CAP-20.png'),
        },
        {
          src: require('../assets/article/geetestCaptcha/CAP-21.png'),
        },
        {
          src: require('../assets/article/geetestCaptcha/CAP-22.jpg'),
        },
        {
          src: require('../assets/article/geetestCaptcha/CAP-23.png'),
        },
        {
          src: require('../assets/article/geetestCaptcha/CAP-24.png'),
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
