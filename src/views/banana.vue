<template>
  <div class="banana article">
    <articleNav />
    <div class="article-wrap">
      <section>
        <img :src="item.src" alt v-for="(item, index) in imgSrc" :key="index" />
      </section>
    </div>
    <articleInfo :links='links' date='更新于 2019.8.27'/>
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
  name: 'banana',
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
        }
      ],

      imgSrc: [
        {
          src: require('../assets/article/banana/Banana-01.png'),
        }
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
