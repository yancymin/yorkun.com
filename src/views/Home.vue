<template>
  <div class="home" id="top">
    <!-- <defaultButton buttonText="fffff" :href="buttons.href.href1"/>
    <ghostButton buttonText="fffff" :buttonIcon="buttons.buttonIcon" :href="buttons.href.href1"/>-->
    <div class="head">
      <nav class="nav-1" id="nav-1">
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
        <div class="lang">
          <div class="lang_now">
            <div class="lang_inner">
              <span>CN</span>
              <i></i>
            </div>
          </div>
          <!-- <ul>
            <li>CN</li>
            <li>EN</li>
          </ul>-->
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
      >
        <h1>你好, 我叫 YorKun, 是一名设计师</h1>
        <p class="mb-40">目前在互联网公司担任设计负责人一职，我喜欢尝试不同的形式：UI、网页、图形、动效……</p>
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

      <div class="smallCards" id="works">
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
  created() {
    window.onscroll = function() {
      var backTop = document.querySelector(".top");
      if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
        backTop.style.display = "block";
      } else {
        backTop.style.display = "none";
      }
    };
  },
  mounted() {
    const nav = document.getElementById("nav-1");
    const headerOffset = nav.offsetTop + nav.offsetHeight;

    window.addEventListener("scroll", e => {
      if (window.scrollY >= headerOffset) {
        nav.classList.add("nav-move");
      } else {
        nav.classList.remove("nav-move");
      }
    });
  },
  data() {
    return {
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
      cards: [
        {
          title: "GEETEST 网站",
          cardLogo: geetestweb_logo,
          des:
            "安全服务类企业网站的一次改版，承接起业务线的扩充和品牌视觉的升级。",
          cardColor: " ",
          tag: "网页设计",
          buttonTextD: "项目详情",
          buttonTextG: "网站地址",
          isTagWhite: false,
          tagColor: "#DEE1E7",
          isButton: true,
          isGhostButton: true,
          btnIconD: "",
          btnIconG: link_icon_b,
          isTitle: true,
          isDes: true,
          isBlack: false,
          isWhiteBotton: false,
          isTag: true,
          bgImg: geetestweb,
          hrefG: "http://www.geetest.com"
        },
        {
          title: "行为验证产品",
          cardLogo: captcha_logo,
          des:
            "基于生物的行为特征，结合人工智能技术，帮助网站和 APP 区分人机，一个拥有全球 26 万家客户的革命性安全产品。 ",
          cardColor: "#3973FF ",
          tag: "Web UI 设计",
          buttonTextD: "项目详情",
          buttonTextG: " ",

          isTagWhite: true,
          tagColor: "rgba(0,0,0,0.08)",
          isButton: true,
          btnIconD: "",
          btnIconG: "",
          isGhostButton: false,
          isTitle: true,
          isDes: true,
          isBlack: true,
          isWhiteBotton: true,
          isTag: true,
          bgImg: ui_captcha
        },
        {
          title: "APP 一键登录",
          cardLogo: wangguan_logo,
          des:
            "准确识别用户手机号码，实现 App 的登录注册等环节一键通过，帮助企业优化验证流程，让其用户享受更好的体验。",
          cardColor: " ",
          tag: "App UI 设计",
          buttonTextD: "项目详情",
          buttonTextG: " ",

          isTagWhite: false,
          tagColor: "rgba(0,0,0,0.08)",
          isButton: true,
          btnIconD: "",
          btnIconG: "",
          isGhostButton: false,
          isTitle: true,
          isDes: true,
          isBlack: false,
          isWhiteBotton: false,
          isTag: true,
          bgImg: app_onelogin
        },
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
          title: `我的\nDribbble`,
          bgImg: myDribbble,
          cardColor: "#2BC6DB ",
          isCenterImg: false,
          link: "https://dribbble.com/yorkun"
        },
        {
          title: `团队\nDribbble`,
          bgImg: teamDribbble,
          cardColor: "#3873FF",
          isCenterImg: false,
          link: "https://dribbble.com/geetest"
        },
        {
          title: ` `,
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
      info: {
        about: {
          title: "关于我",
          des: `大家好，我是设计师 YorKun。事实上我姓名的字有点儿复杂，以至于输入法里要翻很多页才能找到。为了自己和他人的方便，索性以首字母和谐音取了现在的这个别名，大家更习惯叫我 「右可」。<br/><br/>
                因为从小对画画感兴趣，我小学时周末通常是在绘画兴趣班度过的，随后高中开始系统的学习美术，大学于湖北美术学院动画系就读。可能是在学习环境中接触「实验性」和「纯艺」比较多，我更向往贴近生活的视觉表现形式，希望利用所学知识来解决周身的实际问题，再加上自己热衷于数码产品，对带有显示屏的东西情有独钟，所以大三决定「转行」学习 UI 设计，毕业后也顺其自然进入到这个行业。<br/><br/>
                无论是坚定信念做「好」事，还是在大海中寻「活」法，我希望自己能一直热爱设计，持谦逊之心、尽拼搏之力。`
        },
        contact: {
          title: "联系我"
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./src/style/global.scss";
@import "./src/style/mobile.scss";

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
    animation: ulMove 0.6s cubic-bezier(0.4, 0, 0, 1) forwards;

    li {
      margin: 20px !important;
    }
  }

  @keyframes ulMove {
    0% {
      opacity: 0;
    }
    100% {
      transform: translateX(-66px);
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
    @include font(14px, $font-color-white-3, 500);

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
          top: 46px;
          background-color: $black;
          transform: scaleY(1);
          transform-origin: top;
          will-change: transform;
          animation: showLogo1 3s cubic-bezier(0.77, 0, 0.175, 1) forwards;

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
        @include font(14px, rgba(255, 255, 255, 0.6), 500);

        .lang_inner {
          z-index: 1000;
          position: absolute;
          right: 0;
        }

        i {
          position: relative;
          top: 1px;
          margin-left: 4px;
          display: inline-block;
          width: 12px;
          height: 12px;
          background-image: url("../assets/index/language_icon.svg");
          background-repeat: no-repeat;
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
            background-color: white;
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
            background-color: white;
            color: $blue;
            border: 1px solid $blue;
          }
        }
      }
      &:nth-of-type(5) {
        .defaultButton {
          &:hover {
            background-color: white !important;
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

      .smallCard {
        margin-right: 20px;

        &:first-child {
          &::v-deep .smallCard_text {
            position: absolute;
            top: 70px;
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

    .xsCards {
      max-width: 1200px;
      width: 100%;
      margin-top: 10px;

      .xsCard {
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
          @include font(30px, $font-color-white-1, 500);
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
          @include font(30px, $font-color-white-1, 500);
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
              &::before {
                content: "";
                opacity: 0;
                position: absolute;
                top: -145px;
                left: -13px;
                display: block;
                width: 136px;
                height: 141px;
                background-image: url("../assets/index/reweima_hover.png");
                background-size: 100% 100%;
                transition: all 0.3s ease;
              }
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
    width: 1200px;
    opacity: 0.1;
    background-color: #ffffff;
    margin: 60px 0;
  }
}
</style>

