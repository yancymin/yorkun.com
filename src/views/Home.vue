<template>
  <div class="home">
    <!-- <defaultButton buttonText="fffff" :href="buttons.href.href1"/>
    <ghostButton buttonText="fffff" :buttonIcon="buttons.buttonIcon" :href="buttons.href.href1"/>-->
    <div class="head">
      <div class="nav-1">
        <ul>
          <li>
            <a href>项目</a>
          </li>
          <li>
            <a href>作品</a>
          </li>
          <li>
            <a href>关于我</a>
          </li>
        </ul>
        <div class="lang">
          <span>CN</span>
          <ul>
            <li>CN</li>
            <li>EN</li>
          </ul>
        </div>
      </div>
      <div class="head_container">
        <img src="../assets/index/logo_banner.svg" alt class="logo">
        <div class="motion">
          <img src="../assets/index/name_logo.svg" alt class="motion_logo">
        </div>
      </div>
    </div>
    <div class="container">
      <!-- <card :isButton="false" cardColor="#141516" :isBlack="true" :isTag="false">
        <h1>你好, 我叫 YorKun, 是一名设计师</h1>
        <p class="mb-40">在互联网公司担任设计负责人一职，喜欢尝试不同的设计：UI、网页、图形、动效……</p>
        <h1>欢迎来到我的个人站点</h1>
        <p>你可以通过我参与的项目以及设计作品来了解我。</p>
      </card>
      <card h1="我是个设计师" tag="网页设计" des="今天天气真好阿" :isH1="true" :isDes="true" :isButton="true"/>
      <card
        h1="我是个设计师"
        tag="网页设计"
        des="2018 年网站改版，配合极验的品牌形象，采用了全新的视觉风格。"
        :isH1="true"
        :isDes="true"
        :isButton="true"
      />-->

      <card
        v-for="(item, i) in cards"
        :key="i"
        :title="cards[i].title"
        :des="cards[i].des"
        :cardColor="cards[i].cardColor"
        :tag="cards[i].tag"
        :isTitle="cards[i].isTitle"
        :isButton="cards[i].isButton"
        :isDes="cards[i].isDes"
        :isBlack="cards[i].isBlack"
        :isWhiteBotton="cards[i].isWhiteBotton"
        :isTag="cards[i].isTag"
        :bgImg="cards[i].bgImg"
      />

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
        />
      </div>
      <div class="xsCards">
        <xsCard
          v-for="(item, i) in xsCards"
          :key="i"
          :title="xsCards[i].title"
          :bgImg="xsCards[i].bgImg"
        />
      </div>
      <div class="info">
        <div class="info_about">
          <div class="h1">{{info.about.title}}</div>
          <div class="h1">{{info.about.des}}</div>
        </div>
        <div class="info_contact">
          <div class="h1">{{info.contact.title}}</div>
          <div class="social">
            <div class="links">
              <a href>
                <i class="fab fa-weibo"></i>
              </a>
              <i class="fab fa-instagram"></i>
              <a href>
                <i class="fab fa-github"></i>
              </a>
              <a href>
                <i class="fab fa-codepen"></i>
              </a>
            </div>
            <div class="contact-wrap">
              <div class="mail"><i class="fas fa-envelope"></i><p>yorkun@gmail.com</p></div>
              <div class="wechat"><i class="fas fa-wechat"></i><p>chengyorkun</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import defaultButton from "../components/defaultButton.vue";
import ghostButton from "../components/ghostButton.vue";
import card from "../components/card.vue";
import smallCard from "../components/smallCard.vue";
import xsCard from "../components/xsCard.vue";
import link from "../assets/index/button-icon/link_icon.svg";
import geetestweb from "../assets/index/geetestweb.png";
import ui_captcha from "../assets/index/ui_captcha.png";
import app_onelogin from "../assets/index/app_onelogin.png";
import Portrait from "../assets/index/IMG_3045.png";
import gmake_logo from "../assets/index/gmake_logo.png";
import banana from "../assets/index/banana_banner.gif";

export default {
  name: "home",
  props: ["buttonIcon"],
  components: {
    defaultButton,
    ghostButton,
    card,
    smallCard,
    xsCard
  },
  data() {
    return {
      cards: [
        {
          title: "xxddd",
          des: "des",
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
        {
          title: "GEETEST 网站",
          des: "2018 年网站改版，配合极验的品牌形象，采用了全新的视觉风格。",
          cardColor: " ",
          tag: "网页设计",
          isButton: true,
          isTitle: true,
          isDes: true,
          isBlack: false,
          isWhiteBotton: false,
          isTag: true,
          bgImg: geetestweb
        },
        {
          title: "行为验证产品",
          des:
            "基于生物的行为特征，结合人工智能技术，帮助网站和 APP 区分人机。",
          cardColor: "#3973FF ",
          tag: "Web UI 设计",
          isButton: true,
          isTitle: true,
          isDes: true,
          isBlack: true,
          isWhiteBotton: true,
          isTag: true,
          bgImg: ui_captcha
        },
        {
          title: "APP 一键登录",
          des: "准确识别用户手机号码，实现 App 登录注册等环节一键通过。",
          cardColor: " ",
          tag: "App UI 设计",
          isButton: true,
          isTitle: true,
          isDes: true,
          isBlack: false,
          isWhiteBotton: false,
          isTag: true,
          bgImg: app_onelogin
        },
        {
          title: "小蕉 BANANA",
          des: "生活如此多蕉，一个原创的卡通形象。",
          cardColor: " #FC85A1",
          tag: "主题/表情设计",
          isButton: true,
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
          cardColor: " #222",
          footer: "“GIF LIFE” - My animation design.",
          isTag: true,
          bgImg: gmake_logo
        },
        {
          title: "动效作品集",
          tag: "动效设计",
          cardColor: " #222",
          footer: "“GIF LIFE” - My animation design.",
          isTag: true,
          bgImg: gmake_logo
        }
      ],
      xsCards: [
        {
          title: `我的\nDribbble`,
          bgImg: gmake_logo
        },
        {
          title: `团队\nDribbble`,
          bgImg: gmake_logo
        },
        {
          title: `我的\nDribbble`,
          bgImg: ""
        }
      ],
      buttons: {
        href: {
          href1: "https://baidu.com"
        },
        buttonIcon: link
      },
      info: {
        about: {
          title: "ddd",
          des: "dddddd"
        },
        contact: {
          title: "ff"
        },
        social: {
          weibo: `<i class="fab fa-instagram"></i>`,
          weibo: `<i class="fab fa-instagram"></i>`
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./src/style/global.scss";

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
      max-width: 1200px;
      width: 90%;
      padding-top: 24px;
      @include flex-all-center {
        justify-content: space-between;
      }

      > ul {
        margin: 0 auto;
        li {
          display: inline;
          margin: 0 40px;
        }
      }
    }

    &_container {
      @include flex-column;
      margin-top: 120px;

      .motion {
        &_logo {
          position: relative;
          margin-top: 60px;
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

    .smallCards {
      margin-top: 10px;
      max-width: 1200px;
      width: 100%;
      .smallCard {
        margin-right: 20px;

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

      @include flex-all-center {
        justify-content: space-between;
      }
    }
  }
}
</style>

