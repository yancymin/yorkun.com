<template>
  <div class="banana article">
    <articleNav />
    <div class="article-wrap">
      <section>
        <span v-for="(item, index) in imgSrc" :key="index">
          <img :src="item.src" alt />
        </span>
      </section>
    </div>
    <articleInfo :links="links" date="更新于 2019.8.27" />
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
  name: "banana",
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
          title: "行为验证 在线体验",
          href: "https://www.geetest.com/show"
        }
      ],

      imgSrc: [
        {
          src: require("../assets/article/banana/Banana-01.png")
        },
        {
          src: require("../assets/article/banana/Banana-02.png")
        },
        {
          src: require("../assets/article/banana/Banana-03.jpg")
        },
        {
          src: require("../assets/article/banana/Banana-04.jpg")
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
@import "./src/style/global.scss";
@import "./src/style/mobile.scss";

section {
  span {
    display: inherit;
    &:nth-of-type(4) {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      &::before {
        position: absolute;
        left: 15.78%;
        top: 6.45%;
        content: "";
        display: block;
        width: 68.8%;
        height: 58.67%;
        background: url("../assets/article/banana/Banana-04.gif") no-repeat;
        background-size: cover;
        transform: rotate(-1deg);
        border-radius: 4px;
        box-shadow: 0 5px 13px -6px rgba(93, 57, 44, 0.71),
          0 8px 23px 0 rgba(96, 58, 46, 0.24);
      }
    }
  }
}

.globalFooter {
  margin-top: 160px;
  width: calc(100% - 32px);
  padding: 24px 0 40px 0;
}
</style>
