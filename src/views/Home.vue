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
          <h1>{{info.about.title}}</h1>
          <div class="des" v-html="info.about.des"></div>
        </div>
        <div class="info_contact">
          <h1>{{info.contact.title}}</h1>
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
              <div class="mail">
                <i class="fas fa-envelope"></i>
                <p>yorkun@gmail.com</p>
              </div>
              <div class="wechat">
                <i class="fab fa-weixin"></i>
                <p>chengyorkun</p>
              </div>
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
          title: "关于我",
          des: `我的姓名有点复杂，以至于输入法里要翻很多页才能找到。为了自己和他人的方便，索性以首字母和谐音取了 “YorKun” 这个别名。<br/><br/>
                因为从小对画画感兴趣，我读小学时周末通常是在绘画兴趣班度过的，随后高中开始系统的学习美术，大学于湖北美术学院动画系就读。可能是在学习环境中接触「实验性」和「纯艺」比较多，我更向往紧贴生活的表现形式，想要利用所学知识来解决实际问题，加上自己热衷于数码产品，对带有显示屏的东西情有独钟，所以大三决定学习 UI 设计，毕业后也进入了这一行业。<br/><br/>
                无论是坚定信念做「好」事，还是在大海中探寻「活」法，希望自己能一直热爱设计，持谦逊之心、尽进取之力。`
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
          @include font(14px, $font-color-white-2, 400) {
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
          width: 760px;
          .links {
            i {
              font-size: 22px;
              margin-right: 20px;
              color: $font-color-white-2;
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
              @include font(12px, $font-color-white-1, 400);
              @include flex-all-center {
                justify-content: flex-start;
              }

              i {
                font-size: 14px;
                margin-right: 8px;
                color: $font-color-white-2;
              }

              &:first-child {
                margin-right: 20px;
              }
            }
          }
        }
      }
    }
  }
}
</style>

