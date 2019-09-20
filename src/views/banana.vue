<template>
  <div class="banana article">
    <articleNav />
    <div class="article-wrap">
      <section>
        <div v-for="(item, index) in imgSrc" :key="index">
          <img :src="item.src" alt />
        </div>
      </section>
    </div>
    <articleInfo :links="links" date="更新于 2019.9.20" />
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
          title: "更多设计作品",
          href: "http://yorkun.lofter.com"
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
          src: require("../assets/article/banana/Banana-04.gif")
        },
        {
          src: require("../assets/article/banana/Banana-05.png")
        },
        {
          src: require("../assets/article/banana/Banana-06.png")
        },
        {
          src: require("../assets/article/banana/Banana-07.png")
        },
        {
          src: require("../assets/article/banana/Banana-08.png")
        },
        {
          src: require("../assets/article/banana/Banana-09.gif")
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
  div {
    &:nth-of-type(4) {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      video {
        width: 68.8%;
        height: 57.3%;
        position: absolute;
        top: 6.45%;
        transform: rotate(-1deg);
        border-radius: 4px;
        box-shadow: 0 5px 13px -6px rgba(93, 57, 44, 0.71),
          0 8px 23px 0 rgba(96, 58, 46, 0.24);
        object-position: 100% 100%;
      }

      /* &::before {
        position: absolute;
        left: 15.78%;
        top: 6.45%;
        content: "";
        display: block;
        width: 68.8%;
        height: 58.67%;
        background-image: url("https://api.zeit.co/now/files/b9f9653621d9eb2b624b47e8c25faf051e27a8fe/Banana-04.gif");
        background-repeat: no-repeat;
        background-size: cover;
        transform: rotate(-1deg);
        border-radius: 4px;
        box-shadow: 0 5px 13px -6px rgba(93, 57, 44, 0.71),
          0 8px 23px 0 rgba(96, 58, 46, 0.24);
      } */
    }

    img {
      display: inherit;
    }
  }
}

.globalFooter {
  margin-top: 160px;
  width: calc(100% - 32px);
  padding: 24px 0 40px 0;
}
</style>
