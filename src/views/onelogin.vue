<template>
  <div class="onelogin article">
    <articleNav />
    <div class="article-wrap">
      <section>
        <div class="video-wrap">
          <video poster="../assets/article/onelogin/OL-01-pic.png" id="video" @click="clickPlay(e)">
            <source src="../assets/article/onelogin/OL-01_video.mp4" type="video/mp4" />
          </video>
          <img src="../assets/article/onelogin/play_button.png" alt="playBtn" id="playBtn" />
        </div>
        <img :src="item.src" alt v-for="(item, index) in imgSrc" :key="index" />
      </section>
      <articleInfo />
      <globalFooter />
    </div>
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
  methods: {
    clickPlay() {
      const video = document.getElementById("video");
      const playBtn = document.getElementById("playBtn");

      this.isPlay = !this.isPlay;
      if (this.isPlay === true) {
        video.play();
        video.volume = 0.5;
        playBtn.style.display = "none";
      } else {
        video.pause();
        playBtn.style.display = "block";
      }
    }
  },
  data() {
    return {
      isPlay: false,
      imgSrc: [
        {
          src: require("../assets/article/onelogin/OL-02.png")
        },
        {
          src: require("../assets/article/onelogin/OL-03.png")
        },
        {
          src: require("../assets/article/onelogin/OL-04.png")
        },
        {
          src: require("../assets/article/onelogin/OL-05.gif")
        },
        {
          src: require("../assets/article/onelogin/OL-06.png")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
video {
  width: 100%;
  max-width: 1200px;
  transition: all 0.3s ease;
}

.video-wrap {
  position: relative;
  display: inline-flex;

  &:hover {

    #playBtn {
      transform: scale(1.03);
    }
  }

  #playBtn {
    width: 90px;
    height: auto;
    position: absolute;
    left: 20px;
    bottom: 20px;
    transition: all 0.3s ease;
  }
}
</style>
