<template>
  <div class="onelogin article">
    <articleNav />
    <div class="article-wrap">
      <section>
        <div class="video-wrap" id="videoWrap">
          <img
            id="video-loading"
            :class="{loadingMotion: isLoading}"
            src="../assets/article/onelogin/loading.svg"
          />
          <video
            poster="../assets/article/onelogin/OL-01-pic.png"
            id="video"
            @click="clickPlay()"
            webkit-playsinline="true"
            playsinline="true"
          >
            <!-- <source src="https://assets.mixkit.co/videos/867/867-720.mp4" type="video/mp4" /> -->
            <source src="../assets/article/onelogin/OL-01_video.mp4" type="video/mp4" />
          </video>
          <img src="../assets/article/onelogin/play_button.svg" alt="playBtn" id="playBtn" />
        </div>
        <img :src="item.src" alt v-for="(item, index) in imgSrc" :key="index" />
      </section>
    </div>
      <articleInfo :links="links" date="更新于 2019.8.4" />
      <globalFooter />
      <top />
  </div>
</template>

<script>
import articleNav from "../components/articleNav.vue";
import globalFooter from "../components/globalFooter.vue";
import top from "../components/top.vue";
import articleInfo from "../components/articleInfo.vue";

export default {
  name: "geetestCaptcha",
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
        this.isLoading = false;
      }
    }
  },
  mounted() {
    let _this = this;
    video.addEventListener("playing", function() {
      console.log("playing");
      return (_this.isLoading = false);
      console.log(this.isLoading);
    });

    video.addEventListener("waiting", function() {
      console.log("loading....");
      return (_this.isLoading = true);
      console.log(this.isLoading);
    });

    // video.addEventListener("canplay", function() {
    //   let videoWrap = document.getElementById("videoWrap");
    //   videoWrap.style.height = video.videoHeight;
    //   console.log(video.videoHeight)
    // });
  },
  data() {
    return {
      isPlay: false,
      isLoading: false,
      links: [
        {
          title: "OneLogin 产品详情",
          href: "https://www.geetest.com/Gateway"
        }
      ],
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
          src: require("../assets/article/onelogin/OL-05.png")
        },
        {
          src: require("../assets/article/onelogin/OL-06.png")
        },
        {
          src: require("../assets/article/onelogin/OL-07.png")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
video {
  width: 100%;
  height: auto;
  max-width: 1200px;
  transition: all 0.3s ease;
  object-fit: cover;
  cursor: pointer;
}

#video-loading {
  opacity: 0;
  position: absolute;
  z-index: 100;
  left: 20px;
  bottom: 20px;
  width: 40px;
  height: 40px;
  transition: all 0.3s ease-in-out;
  transform: rotate(0);
}

.loadingMotion {
  opacity: 0.2 !important;
  animation: spin 0.6s infinite ease-in-out;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
}

@media screen and (max-width: 600px) {
  .video-wrap {
    height: calc((100vw / 16) * 9) !important;
  }
}
@media screen and (min-width: 1200px) {
  video {
    height: 675px;
  }
}

.video-wrap {
  position: relative;
  display: inline-flex;
  width: 100vw;
  height: auto;
  max-width: 1200px;
  overflow: hidden;

  &:hover {
    #playBtn {
      transform: scale(1.1);
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

.globalFooter {
  margin-top: 160px;
  width: calc(100% - 32px);
  padding: 24px 0 40px 0;
}
</style>
