<template>
  <div class="home" id="top">
    <div class="head">
      <nav class="nav-1 my-header-nav" id="nav-1">
        <div class="nav-wrap">
          <ul>
            <li>
              <a href="#project">项目</a>
            </li>
            <li>
              <a href="#works">作品</a>
            </li>
            <li>
              <a href="#about">关于我</a>
            </li>
          </ul>
        </div>
        <div class="lang" @click="langSwitch()">
          <div class="lang_now">
            <div class="lang_inner">
              <i :class="{langSwitch: isActive}"></i>
            </div>
          </div>
        </div>
      </nav>
      <nav class="nav-2 nav-1 my-header-nav" id="nav-2">
        <div class="nav-wrap">
          <ul>
            <li>
              <a href="#project">项目</a>
            </li>
            <li>
              <a href="#works">作品</a>
            </li>
            <li>
              <a href="#about">关于我</a>
            </li>
          </ul>
        </div>
        <div class="lang" @click="langSwitch()">
          <div class="lang_now">
            <div class="lang_inner">
              <i :class="{langSwitch: isActive}"></i>
            </div>
          </div>
        </div>
      </nav>
      <div class="head_container">
        <img src="../assets/index/logo_banner.svg" alt class="logo" />
        <div class="motion">
          <img src="../assets/index/name_logo.svg" alt class="motion_logo" />
        </div>
      </div>
    </div>
    <div class="container">
      <card
        :title="cardMe.title"
        :des="cardMe.des"
        :cardColor="cardMe.cardColor"
        :tag="cardMe.tag"
        :isTitle="cardMe.isTitle"
        :isButton="cardMe.isButton"
        :isDes="cardMe.isDes"
        :isBlack="cardMe.isBlack"
        :isWhiteBotton="cardMe.isWhiteBotton"
        :isTag="cardMe.isTag"
        :bgImg="cardMe.bgImg"
        id="cardMe"
      >
        <h1>你好, 我是设计师 YorKun</h1>
        <p class="mb-40">在互联网公司担任设计负责人，我喜欢尝试不同的形式：UI、图形、动效……</p>
        <h1>欢迎来到我的个人站点</h1>
        <p>你可以通过这个网站来了解我。😊</p>
      </card>
      <span id="project"></span>
      <card
        v-for="(item, i) in cards"
        :key="i"
        :title="cards[i].title"
        :cardLogo="cards[i].cardLogo"
        :des="cards[i].des"
        :cardColor="cards[i].cardColor"
        :tag="cards[i].tag"
        :isTagWhite="cards[i].isTagWhite"
        :tagColor="cards[i].tagColor"
        :isTitle="cards[i].isTitle"
        :isButton="cards[i].isButton"
        :isDes="cards[i].isDes"
        :isBlack="cards[i].isBlack"
        :isWhiteBotton="cards[i].isWhiteBotton"
        :isTag="cards[i].isTag"
        :bgImg="cards[i].bgImg"
        :isGhostButton="cards[i].isGhostButton"
        :btnIconD="cards[i].btnIconD"
        :btnIconG="cards[i].btnIconG"
        :buttonTextD="cards[i].buttonTextD"
        :buttonTextG="cards[i].buttonTextG"
        :hrefD="cards[i].hrefD"
        :hrefG="cards[i].hrefG"
      />
      <card
        v-for="(item, i) in banana"
        :key="i + '-label'"
        :title="banana[i].title"
        :cardLogo="banana[i].cardLogo"
        :des="banana[i].des"
        :cardColor="banana[i].cardColor"
        :tag="banana[i].tag"
        :isTagWhite="banana[i].isTagWhite"
        :tagColor="banana[i].tagColor"
        :isTitle="banana[i].isTitle"
        :isButton="banana[i].isButton"
        :isDes="banana[i].isDes"
        :isBlack="banana[i].isBlack"
        :isWhiteBotton="banana[i].isWhiteBotton"
        :isTag="banana[i].isTag"
        :bgImg="banana[i].bgImg"
        :isGhostButton="banana[i].isGhostButton"
        :btnIconD="banana[i].btnIconD"
        :btnIconG="banana[i].btnIconG"
        :buttonTextD="banana[i].buttonTextD"
        :buttonTextG="banana[i].buttonTextG"
        :hrefD="banana[i].hrefD"
        :hrefG="banana[i].hrefG"
        id="banana"
      />
      <span id="works"></span>

      <div class="smallCards">
        <smallCard
          v-for="(item, i) in smallCards"
          :key="i"
          :title="smallCards[i].title"
          :cardColor="smallCards[i].cardColor"
          :footer="smallCards[i].footer"
          :tag="smallCards[i].tag"
          :isTag="smallCards[i].isTag"
          :logo="smallCards[i].logo"
          :isLogo="smallCards[i].isLogo"
          :bgImg="smallCards[i].bgImg"
          :tagColor="smallCards[i].tagColor"
          :isCenterImg="smallCards[i].isCenterImg"
        />
      </div>

      <span class="break-line"></span>

      <motionCard
        :title="motionCard.title"
        :des="motionCard.des"
        :cardColor="motionCard.cardColor"
        :btnColor="motionCard.btnColor"
        :btnIcon="motionCard.btnIcon"
        :tag="motionCard.tag"
        :isTitle="motionCard.isTitle"
        :isButton="motionCard.isButton"
        :isDes="motionCard.isDes"
        :isBlack="motionCard.isBlack"
        :isWhiteBotton="motionCard.isWhiteBotton"
        :isTag="motionCard.isTag"
        :hrefD="motionCard.hrefD"
      />

      <div class="xsCards">
        <xsCard
          v-for="(item, i) in xsCards"
          :key="i"
          :title="xsCards[i].title"
          :bgImg="xsCards[i].bgImg"
          :cardColor="xsCards[i].cardColor"
          :isCenterImg="xsCards[i].isCenterImg"
          :link="xsCards[i].link"
        />
      </div>
      <div class="info" id="about">
        <div class="info_about">
          <h1>{{info.about.title}}</h1>
          <div class="des" v-html="info.about.des"></div>
        </div>
        <div class="info_contact">
          <h1>{{info.contact.title}}</h1>
          <div class="social">
            <div class="links">
              <a href="https://weibo.com/chengyork" target="_blank"></a>
              <a href="https://www.instagram.com/yorkun_cheng/" target="_blank"></a>
              <a href="https://github.com/Yorkun" target="_blank"></a>
              <a href="https://unsplash.com/@yorkun" target="_blank"></a>
              <a href="https://codepen.io/YorKun/" target="_blank"></a>
            </div>
            <div class="contact-wrap">
              <div class="mail">
                <i></i>
                <p>yorkuncheng@gmail.com</p>
              </div>
              <div class="wechat">
                <i></i>
                <p>chengyork</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <globalFooter />
    </div>
    <a class="top" href="#top"></a>
  </div>
</template>

<script>
import defaultButton from "../components/defaultButton.vue";
import ghostButton from "../components/ghostButton.vue";
import card from "../components/card.vue";
import motionCard from "../components/motionCard.vue";
import smallCard from "../components/smallCard.vue";
import xsCard from "../components/xsCard.vue";
import globalFooter from "../components/globalFooter.vue";
import link from "../assets/index/button-icon/link_icon.svg";
import geetestweb from "../assets/index/geetestweb.png";
import ui_captcha from "../assets/index/ui_captcha.gif";
import app_onelogin from "../assets/index/app_onelogin.png";
import Portrait from "../assets/index/IMG_3045.png";
import gmake_logo from "../assets/index/gmake_logo.png";
import banana from "../assets/index/banana_banner.gif";
import myDribbble from "../assets/index/mydribbble.png";
import teamDribbble from "../assets/index/teamdribbble.png";
import link_icon_w from "../assets/index/link_icon_w.svg";
import link_icon_b from "../assets/index/link_icon_b.svg";
import reweima_icon from "../assets/index/reweima_icon.svg";
import geetestweb_logo from "../assets/index/geetestweb_logo.svg";
import captcha_logo from "../assets/index/captcha_logo.svg";
import wangguan_logo from "../assets/index/wangguan_logo.svg";
import banana_logo from "../assets/index/banana_logo.svg";
import animation from "../assets/index/animation.png";
import cnDate from "../data/cn.js";
import enDate from "../data/en.js";
import enInfo from "../data/enInfo.js";
import cnInfo from "../data/cnInfo.js";

export default {
  name: "home",
  props: ["buttonIcon"],
  components: {
    defaultButton,
    ghostButton,
    card,
    motionCard,
    smallCard,
    xsCard,
    globalFooter
  },
  methods: {
    langSwitch() {
      this.isActive = !this.isActive;

      if (this.isActive) {
        this.cards = this.enDate;
        this.info = this.enInfo;
      }

      if (this.isActive === false) {
        this.cards = this.cnDate;
        this.info = this.cnInfo;
      }
    }
  },
  created() {
    window.onscroll = function() {
      const backTop = document.querySelector(".top");
      if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
        backTop.style.display = "block";
      } else {
        backTop.style.display = "none";
      }
    };
  },
  mounted() {
    this.langSwitch() 
    const nav = document.getElementById("nav-1");
    const mobileNav = document.getElementById("nav-2");
    const headerOffset = nav.offsetTop + nav.offsetHeight;
    const mobileHeaderOffset =
      mobileNav.offsetTop + mobileNav.offsetHeight + 100;

    window.addEventListener("scroll", e => {
      if (window.scrollY >= headerOffset) {
        nav.classList.add("nav-move");
      } else {
        nav.classList.remove("nav-move");
      }

      if (window.scrollY >= mobileHeaderOffset) {
        mobileNav.classList.add("nav-move", "m-nav-move");
      } else {
        mobileNav.classList.remove("nav-move", "m-nav-move");
      }
    });
  },
  data() {
    return {
      cnDate: cnDate,
      enDate: enDate,
      enInfo: enInfo,
      cnInfo: cnInfo,
      isActive: false,
      cardMe: {
        title: " ",
        des: " ",
        cardColor: "#141516",
        tag: "tag",
        isButton: false,
        isTitle: false,
        isDes: false,
        isBlack: true,
        isWhiteBotton: false,
        isTag: false,
        bgImg: Portrait
      },
      cards: cnDate,
      banana: [
        {
          title: "小蕉 BANANA",
          cardLogo: banana_logo,
          des: "生活如此多蕉，听听小香蕉的故事，自己设计的第一个卡通形象。",
          cardColor: " #FC85A1",
          tag: "主题/表情设计",
          buttonTextD: "Bananaaa~",
          buttonTextG: "表情包下载",
          isTagWhite: true,
          tagColor: "rgba(0,0,0,0.08)",
          isButton: true,
          btnIconD: "",
          btnIconG: reweima_icon,
          isGhostButton: true,
          isTitle: true,
          isDes: true,
          isBlack: true,
          isWhiteBotton: true,
          isTag: true,
          bgImg: banana
        }
      ],
      smallCards: [
        {
          title: "动效作品集",
          tag: "动效设计",
          cardColor: " #FFA51D",
          footer: "",
          isTag: true,
          tagColor: "rgba(0,0,0,0.08)",
          bgImg: animation,
          isCenterImg: false
        },
        {
          title: " ",
          tag: "平面设计",
          cardColor: " #222",
          footer: "© 2019 GEETEST. Design by G-MAKE.",
          isTag: true,
          tagColor: "rgba(0,0,0,0.4)",
          bgImg: gmake_logo,
          isCenterImg: true
        }
      ],
      xsCards: [
        {
          title: "我的\nDribbble",
          bgImg: myDribbble,
          cardColor: "#2BC6DB ",
          isCenterImg: false,
          link: "https://dribbble.com/yorkun"
        },
        {
          title: "团队\nDribbble",
          bgImg: teamDribbble,
          cardColor: "#3873FF",
          isCenterImg: false,
          link: "https://dribbble.com/geetest"
        },
        {
          title: " ",
          bgImg: "",
          cardColor: "#E5E7EB",
          isCenterImg: true,
          link: "https://design.geetest.com/"
        }
      ],
      motionCard: {
        title: "YorKun 的设计博客",
        des: "里面上传了我不同时期的作品，并且更新频繁。",
        cardColor: "#141516 ",
        btnColor: "#40454B",
        tag: " ",
        isButton: true,
        isTitle: true,
        isDes: true,
        isBlack: true,
        isWhiteBotton: false,
        isTag: false,
        btnIcon: link_icon_w,
        hrefD: "http://yorkun.lofter.com"
      },
      buttons: {
        href: {
          href1: "https://baidu.com"
        },
        buttonIcon: link
      },
      info: cnInfo,
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./src/style/global.scss";
@import "./src/style/mobile.scss";

.langSwitch {
  background-image: url("../assets/index/language_cn.svg") !important;
}

.nav-2 {
  transform: translateY(-110%);
  opacity: 0;

  .nav-wrap {
    &::before {
      left: -24px !important;
    }
  }
}

.m-nav-move {
  transform: translateY(0);
  opacity: 1;
}

.nav-move {
  z-index: 99999;
  padding: 24px 24px;
  background-color: $black;
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100vw - 48px) !important;
  max-width: none !important;
  border-bottom: 1px solid rgba(76, 79, 84, 0.6);

  .nav-wrap {
    justify-content: flex-end !important;

    &::before {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  }

  /****/

  ul {
    animation: ulMove 0.8s cubic-bezier(0.4, 0, 0, 1) forwards;

    li {
      margin: 20px !important;
    }
  }

  @keyframes ulMove {
    0% {
      opacity: 0;
    }
    100% {
      transform: translateX(-40px);
    }
  }
}

.home {
  width: 100%;
  background-color: $gray;
  @include flex-column;

  .head {
    width: 100%;
    height: 680px;
    background-color: $black;
    overflow: hidden;
    @include flex-column;
    @include font(14px, $font-color-white-3, 400);

    .nav-1 {
      z-index: 99999;
      position: fixed;
      width: 100%;
      padding-top: 24px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0, 1);
      @include flex-all-center;

      .nav-wrap {
        z-index: 999;
        position: relative;
        max-width: 1200px;
        width: 90%;

        &::before {
          opacity: 0;
          content: "";
          position: absolute;
          left: 0;
          display: block;
          width: 34px;
          height: 22px;
          background-image: url("../assets/index/small_logo.svg");
          background-size: cover;
          transition: all 0.3s cubic-bezier(0.4, 0, 0, 1);
          transform: translateY(-200%);
        }

        > ul {
          transition: all 0.6s cubic-bezier(0.4, 0, 0, 1);

          li {
            display: inline;
            margin: 0 40px;

            a {
              transition: all 0.3s ease;

              &:hover {
                color: white;
              }
            }

            &:first-child {
              margin-left: 53px;
            }
          }
        }

        @include flex-all-center;
      }
    }

    &_container {
      @include flex-column;
      margin-top: 120px;

      .logo {
        position: absolute;
        opacity: 0;
        animation: showLogo2 2.5s linear forwards;
        animation-delay: 1s;
        width: 160px;
        top: 148px;

        @keyframes showLogo2 {
          to {
            opacity: 1;
          }
        }
      }

      .motion {
        position: relative;
        bottom: -158px;
        &::before {
          content: "";
          z-index: 100;
          position: absolute;
          display: block;
          width: 385px;
          height: 500px;
          border-radius: 0 0 8px 8px;
          top: 46px;
          background-color: $black;
          transform: scaleY(1);
          transform-origin: top;
          will-change: transform;
          animation: showLogo1 1.4s cubic-bezier(0.77, 0, 0.175, 1) forwards;

          @keyframes showLogo1 {
            to {
              transform: scaleY(0);
            }
          }
        }
        &_logo {
          position: relative;
          margin-top: 60px;
          bottom: -2px;
        }
      }
    }

    .lang {
      width: 100vw;
      position: absolute;
      right: 0;
      height: 15px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
      @include flex-all-center;

      &_now {
        width: 90%;
        height: 20px;
        max-width: 1200px;
        position: relative;
        right: 0;
        @include flex-all-center;
        @include font(14px, rgba(255, 255, 255, 0.6), 400);

        .lang_inner {
          z-index: 1000;
          position: absolute;
          right: 0;
        }

        i {
          cursor: pointer;
          position: relative;
          top: 1px;
          margin-left: 4px;
          display: inline-block;
          width: 23px;
          height: 20px;
          background-image: url("../assets/index/language_icon.svg");
          background-repeat: no-repeat;
          transition: all 0.3s ease;

          &:hover {
            filter: contrast(2);
          }
        }
      }
    }
  }

  .container {
    width: 90%;
    padding-top: 10px;
    @include flex-column;

    .mb-40 {
      margin-bottom: 40px;
    }

    /*********** card btn hover  **************/
    ::v-deep .card {
      &:nth-of-type(2) {
        .defaultButton {
          &:hover {
            background-color: $white;
            color: $blue;
            border: 1px solid $blue;
          }
        }

        .ghostButton {
          &:hover {
            filter: invert(1);
            border-color: white;
          }
        }
      }
      &:nth-of-type(3) {
        .defaultButton {
          &:hover {
            color: $blue;
            border: 1px solid white;
            background-color: $blue !important;
            color: white !important;
          }
        }
      }
      &:nth-of-type(4) {
        .defaultButton {
          &:hover {
            background-color: $white;
            color: $blue;
            border: 1px solid $blue;
          }
        }
      }
      &:nth-of-type(5) {
        .defaultButton {
          &:hover {
            background-color: #edf0f2 !important;
            color: #ffde4a !important;
            border: 1px solid #ffde4a !important;
          }
        }
      }
    }

    .card {
      &:nth-of-type(2) {
        &::v-deep .des {
          span {
            /* width: auto; */
          }
          img {
            height: 40px;
          }
        }
      }
      &:nth-of-type(3) {
        &::v-deep .defaultButton {
          img {
            display: none;
          }
        }
      }
      &:nth-of-type(4) {
        &::v-deep .defaultButton {
          img {
            display: none;
          }
        }
      }

      &:nth-of-type(5) {
        &::v-deep .des {
          img {
            height: 60px;
          }

          span {
            color: rgba(255, 255, 255, 0.9) !important;
          }

          .defaultButton {
            background-color: #ffde4a !important;
            color: #af6e13 !important;
          }

          .ghostButton {
            background-color: rgb(252, 133, 161);
            border-color: white;
            color: white;

            .ghostButton-icon {
              margin-left: 8px;
              width: 14px !important;
              height: 14px !important;
            }
          }
        }
      }
    }

    .smallCards {
      margin-top: 10px;
      max-width: 1200px;
      width: 100%;

      ::v-deep .smallCard {
        &:first-child {
          &:hover {
            .bgImg {
              transform: scale(1.04);
            }
          }
        }
      }

      .smallCard {
        margin-right: 20px;

        &:first-child {
          &::v-deep .smallCard_text {
            position: absolute;
            top: 90px;
          }
          &::v-deep img {
            position: absolute;
            bottom: 80px;
            width: 100%;
            height: auto;
          }
        }

        &:last-child {
          margin-right: 0;
        }
      }
      @include flex-all-center {
        justify-content: space-between;
      }
    }

    .motionCard {
      ::v-deep .motionCard_wrap {
        .defaultButton {
          &:hover {
            background-color: #141516 !important;
            border-color: rgb(64, 69, 75);
          }
        }
      }
    }

    .xsCards {
      max-width: 1200px;
      width: 100%;
      margin-top: 10px;

      .xsCard {
        margin-right: 20px;
        &:last-child {
          margin-right: 0;
        }
      }

      @include flex-all-center {
        justify-content: space-between;
      }
    }

    .info {
      width: 100%;
      margin-top: 150px;
      margin-bottom: 120px;
      &_about {
        @include flex-all-center {
          align-items: flex-start;
        }
        h1 {
          margin-right: 110px;
          @include font(30px, $font-color-white-1, 700);
        }

        .des {
          max-width: 760px;
          @include font(14px, $font-color-white-3, 400) {
            line-height: 20px;
          }
        }
      }
      &_contact {
        width: 100%;
        margin-top: 80px;
        @include flex-all-center {
          align-items: flex-start;
        }
        h1 {
          margin-right: 110px;
          @include font(30px, $font-color-white-1, 700);
        }

        .social {
          width: 100%;
          max-width: 760px;

          .links {
            a {
              display: inline-block;
              width: 22px;
              height: 22px;
              margin-right: 20px;
              background-position: center center;
              background-size: 22px 22px;
              transition: all 0.3s ease;

              &:hover {
                filter: contrast(2);
              }

              &:nth-of-type(1) {
                background-image: url("../assets/index/links/weibo_icon.svg");
              }
              &:nth-of-type(2) {
                background-image: url("../assets/index/links/ig_icon.svg");
              }
              &:nth-of-type(3) {
                background-image: url("../assets/index/links/github_icon.svg");
              }
              &:nth-of-type(4) {
                background-image: url("../assets/index/links/unsplash_icon.svg");
              }
              &:nth-of-type(5) {
                background-image: url("../assets/index/links/codepen_icon.svg");
              }
            }
          }

          .contact-wrap {
            margin-top: 30px;
            @include flex-all-center {
              justify-content: flex-start;
            }

            div {
              padding: 12px 16px;
              background-color: #40454b;
              border-radius: 8px;
              @include font(12px, $font-color-white-3, 400);
              @include flex-all-center {
                justify-content: flex-start;
              }

              &:first-child {
                margin-right: 20px;
              }
            }

            .mail {
              transition: all 0.3s ease;
              /* &:hover {
                filter: brightness(1.05);
                i {
                  filter: contrast(2);
                }
              } */
              i {
                width: 16px;
                height: 16px;
                display: inline-block;
                margin-right: 8px;
                background-image: url("../assets/index/links/mail_icon.svg");
                background-position: center center;
                background-size: 16px 16px;
                transition: all 0.3s ease;
              }
            }
            .wechat {
              position: relative;
              transition: all 0.3s ease;
              /* &:hover {
                filter: brightness(1.1);
                &::before {
                  opacity: 1;
                }

                i {
                  filter: contrast(2);
                }
              } */
              i {
                width: 16px;
                height: 16px;
                display: inline-block;
                margin-right: 8px;
                background-image: url("../assets/index/links/wechat_icon.svg");
                background-position: center center;
                background-size: 16px 16px;
                transition: all 0.3s ease;
              }
            }
          }
        }
      }
    }
  }

  .top {
    position: fixed;
    right: 50px;
    bottom: 50px;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    background-color: #141516;
    background-image: url("../assets/index/up_icon.png");
    background-repeat: no-repeat;
    background-size: 21px 12px;
    background-position: center center;

    &:hover {
      background-color: #1a1b1d;
    }
  }

  .break-line {
    height: 1px;
    width: 100%;
    max-width: 1200px;
    opacity: 0.1;
    background-color: #ffffff;
    margin: 60px 0;
  }

  #banana {
    ::v-deep .card_wrap {
      .des {
        span {
          width: 420px;
        }
      }
      .defaultButton {
        img {
          display: none;
        }
        &:hover {
          color: #fc85a1 !important;
          background: #ffffff !important;
          border-color: white !important;
        }
      }
      .ghostButton {
        position: relative;
        &:hover {
          background-color: white;
          color: #fb85a1 !important;

          img {
            opacity: 0;
          }
          &::before {
            opacity: 1;
          }
          &::after {
            opacity: 1;
          }
        }
        &::after {
          content: "";
          opacity: 0;
          position: absolute;
          display: block;
          width: 14px;
          height: 14px;
          right: 22px;
          background-image: url("../assets/index/reweima_icon-2.svg");
          background-size: cover;
          transition: all 0.3s ease;
        }
        &::before {
          content: "";
          opacity: 0;
          position: absolute;
          top: -145px;
          left: 0px;
          top: -148px;
          display: block;
          width: 136px;
          height: 141px;
          background-image: url("../assets/index/reweima_hover.png");
          background-size: 100% 100%;
          transition: all 0.3s ease;
          transition-delay: 0.15s;
        }
      }
    }
  }

  /* #cardMe {
    ::v-deep .card_wrap {
      .img-area {
        img {
          opacity: 0;
          transform: translateX(80px);
          animation: showMe 1s ease forwards;

          @keyframes showMe {
            to {
              opacity: 1;
          transform: translateX(0);

            }
          }
        }
      }
    }
  } */

  #project {
    opacity: 0;
    position: absolute;
    bottom: -90px;
  }

  #works {
    opacity: 0;
    position: absolute;
    bottom: -1850px;
  }
}
</style>
