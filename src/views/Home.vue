<template>
  <div class="home" id="top" v-show="ok" :class="{en: isEn}">
    <div class="head">
      <nav class="nav-1 my-header-nav" id="nav-1">
        <div class="nav-wrap">
          <ul>
            <li>
              <a href="#project">{{nav1[0]}}</a>
            </li>
            <li>
              <a href="#works">{{nav1[1]}}</a>
            </li>
            <li>
              <a href="#about">{{nav1[2]}}</a>
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
              <a href="#project">{{nav1[0]}}</a>
            </li>
            <li>
              <a href="#works">{{nav1[1]}}</a>
            </li>
            <li>
              <a href="#about">{{nav1[2]}}</a>
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
        <img src="../assets/index/logo_banner.png" alt class="logo" />
        <div class="motion">
          <img src="../assets/index/mask.svg" alt class="motion_mask" />
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
        <h1>{{cnMeDes[0]}}</h1>
        <p class="mb-40">{{cnMeDes[1]}}</p>
        <h1>{{cnMeDes[2]}}</h1>
        <p>{{cnMeDes[3]}}</p>
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
        :title="cnBanana.title"
        :cardLogo="cnBanana.cardLogo"
        :des="cnBanana.des"
        :cardColor="cnBanana.cardColor"
        :tag="cnBanana.tag"
        :isTagWhite="cnBanana.isTagWhite"
        :tagColor="cnBanana.tagColor"
        :isTitle="cnBanana.isTitle"
        :isButton="cnBanana.isButton"
        :isDes="cnBanana.isDes"
        :isBlack="cnBanana.isBlack"
        :isWhiteBotton="cnBanana.isWhiteBotton"
        :isTag="cnBanana.isTag"
        :bgImg="cnBanana.bgImg"
        :isGhostButton="cnBanana.isGhostButton"
        :btnIconD="cnBanana.btnIconD"
        :btnIconG="cnBanana.btnIconG"
        :buttonTextD="cnBanana.buttonTextD"
        :buttonTextG="cnBanana.buttonTextG"
        :hrefD="cnBanana.hrefD"
        :hrefG="cnBanana.hrefG"
        id="banana"
      />
      <span id="works"></span>

      <div class="smallCards">
        <smallCard
          v-for="(item, i) in cnSmallCard"
          :key="i"
          :title="cnSmallCard[i].title"
          :cardColor="cnSmallCard[i].cardColor"
          :footer="cnSmallCard[i].footer"
          :tag="cnSmallCard[i].tag"
          :isTag="cnSmallCard[i].isTag"
          :logo="cnSmallCard[i].logo"
          :isLogo="cnSmallCard[i].isLogo"
          :bgImg="cnSmallCard[i].bgImg"
          :tagColor="cnSmallCard[i].tagColor"
          :isCenterImg="cnSmallCard[i].isCenterImg"
          :link="cnSmallCard[i].link"
        />
      </div>

      <span class="break-line"></span>

      <motionCard
        :title="cnMotionCardData.title"
        :des="cnMotionCardData.des"
        :cardColor="cnMotionCardData.cardColor"
        :btnColor="cnMotionCardData.btnColor"
        :btnIcon="cnMotionCardData.btnIcon"
        :tag="cnMotionCardData.tag"
        :isTitle="cnMotionCardData.isTitle"
        :isButton="cnMotionCardData.isButton"
        :isDes="cnMotionCardData.isDes"
        :isBlack="cnMotionCardData.isBlack"
        :isWhiteBotton="cnMotionCardData.isWhiteBotton"
        :isTag="cnMotionCardData.isTag"
        :hrefD="cnMotionCardData.hrefD"
        :buttonText="cnMotionCardData.buttonText"
      />

      <div class="xsCards">
        <xsCard
          v-for="(item, i) in cnXsCardData"
          :key="i"
          :title="cnXsCardData[i].title"
          :bgImg="cnXsCardData[i].bgImg"
          :cardColor="cnXsCardData[i].cardColor"
          :isCenterImg="cnXsCardData[i].isCenterImg"
          :link="cnXsCardData[i].link"
        />
      </div>
      <div class="info" id="about">
        <div class="info_about">
          <h1>{{cnInfo.about[0]}}</h1>
          <div class="des" v-html="cnInfo.about[1]"></div>
        </div>
        <div class="info_contact">
          <h1>{{cnInfo.contact.title}}</h1>
          <div class="social">
            <div class="links">
              <a href="https://weibo.com/chengyork" target="_blank"></a>
              <a href="https://www.instagram.com/yorkun_cheng/" target="_blank"></a>
              <a href="https://github.com/Yorkun" target="_blank"></a>
              <a href="https://unsplash.com/@yorkun" target="_blank"></a>
              <a href="https://www.behance.net/yorkun" target="_blank"></a>
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
    <top />
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
import top from "../components/top.vue";
import link from "../assets/index/button-icon/link_icon.svg";
import geetestweb from "../assets/index/geetestweb.png";
import ui_captcha from "../assets/index/ui_captcha.gif";
import app_onelogin from "../assets/index/app_onelogin.png";
import Portrait from "../assets/index/IMG_3045.png";
import link_icon_b from "../assets/index/link_icon_b.svg";
import geetestweb_logo from "../assets/index/geetestweb_logo.svg";
import captcha_logo from "../assets/index/captcha_logo.svg";
import wangguan_logo from "../assets/index/wangguan_logo.svg";
import cnDate from "../data/cn.js";
import enDate from "../data/en.js";
import info from "../data/info.js";
import nav from "../data/nav.js";
import meDes from "../data/cardMe.js";
import banana from "../data/banana.js";
import smallCardData from "../data/smallCard.js";
import motionCardData from "../data/motionCard.js";
import xsCardData from "../data/xsCard.js";
import footerTextData from "../data/footerText.js";

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
    globalFooter,
    top
  },
  methods: {
    langSwitch() {
      this.isActive = !this.isActive;

      if (this.isActive) {
        this.cnMeDes = this.meDes.en;
        this.cards = this.enDate;
        this.cnInfo = this.info.en;
        this.nav1 = this.nav.en;
        this.cnBanana = this.banana.en;
        this.cnSmallCard = this.smallCardData.en;
        this.cnMotionCardData = this.motionCardData.en;
        this.cnXsCardData = this.xsCardData.en;
        this.cnFooterLinkText = this.footerTextData.en;
        this.isEn = true;
      }

      if (this.isActive === false) {
        this.cnMeDes = this.meDes.cn;
        this.cards = this.cnDate;
        this.cnInfo = this.info.cn;
        this.nav1 = this.nav.cn;
        this.cnBanana = this.banana.cn;
        this.cnSmallCard = this.smallCardData.cn;
        this.cnMotionCardData = motionCardData.cn;
        this.cnXsCardData = this.xsCardData.cn;
        this.cnFooterLinkText = this.footerTextData.cn;
        this.isEn = false;
      }
    }
  },
  watch: {
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        this.timer = true;
        const that = this;
        setTimeout(() => {
          // 打印screenWidth变化的值
          // console.log(that.screenWidth);

          that.timer = false;
        }, 400);
      }
    }
  },
  mounted() {
    this.ok = true;
    this.langSwitch();
    const nav = document.getElementById("nav-1");
    const mobileNav = document.getElementById("nav-2");
    const headerOffset = nav.offsetTop + nav.offsetHeight + 20;
    const mobileHeaderOffset =
      mobileNav.offsetTop + mobileNav.offsetHeight + 100;
    const project = document.getElementById("project");
    const works = document.getElementById("works");

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

      if (window.scrollY === project.offsetTop) {
        nav.classList.add("anchorOn");
      } else {
        nav.classList.remove("anchorOn");
      }
      if (window.scrollY === works.offsetTop) {
        nav.classList.add("anchorOn2");
      } else {
        nav.classList.remove("anchorOn2");
      }
      if (window.scrollY === 3828 || window.scrollY === 3768) {
        nav.classList.add("anchorOn3");
      } else {
        nav.classList.remove("anchorOn3");
      }
    });

    function tag(val) {
      const tags = document.querySelectorAll(".tag");

      if (val < "600" || document.body.clientWidth < "600") {
        [].forEach.call(tags, tag => {
          tag.style.display = "none";
        });
      } else {
        [].forEach.call(tags, tag => {
          tag.style.display = "block";
        });
      }
    }

    tag();

    const that = this;
    window.onresize = () =>
      (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;

        tag(that.screenWidth);
      })();
  },
  data() {
    return {
      screenWidth: document.body.clientWidth,
      isEn: true,
      ok: false,
      cnDate,
      enDate,
      info,
      cnInfo: info.cn,
      nav,
      nav1: nav.cn,
      meDes,
      cnMeDes: meDes.cn,
      banana,
      cnBanana: banana.cn,
      cnSmallCard: smallCardData.cn,
      smallCardData,
      motionCardData,
      cnMotionCardData: motionCardData.cn,
      cnXsCardData: xsCardData.cn,
      xsCardData,
      isActive: false,
      footerTextData,
      cnFooterLinkText: footerTextData.cn,
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
      buttons: {
        href: {
          href1: "https://baidu.com"
        },
        buttonIcon: link
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./src/style/global.scss";
@import "./src/style/mobile.scss";
@import "./src/style/en.scss";

.langSwitch {
  background-image: url("../assets/index/language_cn.svg") !important;
}

.anchorOn {
  ul {
    li {
      &:nth-of-type(1) {
        a {
          color: white !important;
        }
      }
    }
  }
}

.anchorOn2 {
  ul {
    li {
      &:nth-of-type(2) {
        a {
          color: white !important;
        }
      }
    }
  }
}
.anchorOn3 {
  ul {
    li {
      &:nth-of-type(3) {
        a {
          color: white !important;
        }
      }
    }
  }
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
      transform: translateX(-51px);
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
      background-color: rgba(20, 21, 22, 0.85);
      backdrop-filter: blur(20px);
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
              @include font(14px, $font-color-white-3, 400);
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
        z-index: 111;
        position: absolute;
        opacity: 0;
        animation: showLogo2 2.5s linear forwards;
        animation-delay: 0.6s;
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
        overflow: hidden;

        .motion_mask {
          z-index: 100;
          position: absolute;
          display: block;
          width: 100%;
          height: auto;
          top: 46px;
          background: url("../assets/index/mask.svg") no-repeat;
          background-size: cover;
          transform-origin: top;
          will-change: transform;
          animation: showLogo1 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards;

          @keyframes showLogo1 {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-510px);
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
        span {
          color: rgba(255, 255, 255, 0.76) !important;
        }

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
            width: auto;
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
          .tag {
            color: white;
          }
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
          filter: brightness(1.2) hue-rotate(1deg) saturate(1.2);

          &::v-deep span {
            font-size: 12px;
          }

          &::v-deep .tag {
            opacity: 0.8;
          }
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

          ::v-deep h2 {
            letter-spacing: -0.7px;
            color: #403825;
          }
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
          max-width: 720px;
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
          max-width: 720px;

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
                background-image: url("../assets/index/links/behance_icon.svg");
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
          color: #ffffff !important;
          background: #fc85a1 !important;
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
            visibility: visible;
            transform: translateY(0);
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
          visibility: hidden;
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
          transition: all 0.3s ease-in-out;
          transform: translateY(-6px);
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
    position: relative;
    bottom: 70px;
  }

  #works {
    opacity: 0;
    position: relative;
    bottom: 70px;
  }
}
</style>
