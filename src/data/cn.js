import defaultButton from '../components/defaultButton.vue';
import ghostButton from '../components/ghostButton.vue';
import card from '../components/card.vue';
import motionCard from '../components/motionCard.vue';
import smallCard from '../components/smallCard.vue';
import xsCard from '../components/xsCard.vue';
import globalFooter from '../components/globalFooter.vue';
import link from '../assets/index/button-icon/link_icon.svg';
import geetestweb from '../assets/index/geetestweb.png';
import ui_captcha from '../assets/index/ui_captcha.gif';
import app_onelogin from '../assets/index/app_onelogin.png';
import Portrait from '../assets/index/IMG_3045.png';
import gmake_logo from '../assets/index/gmake_logo2.png';
import banana from '../assets/index/banana_banner.gif';
import myDribbble from '../assets/index/mydribbble.png';
import teamDribbble from '../assets/index/teamdribbble.png';
import link_icon_w from '../assets/index/link_icon_w.svg';
import link_icon_b from '../assets/index/link_icon_b.svg';
import reweima_icon from '../assets/index/reweima_icon.svg';
import geetestweb_logo from '../assets/index/geetestweb_logo.svg';
import captcha_logo from '../assets/index/captcha_logo.svg';
import wangguan_logo from '../assets/index/wangguan_logo.svg';
import banana_logo from '../assets/index/banana_logo.svg';
import animation from '../assets/index/animation.png';

export default [
  {
    title: 'GEETEST 网站',
    cardLogo: geetestweb_logo,
    des: '安全服务类企业网站的一次设计改版，承接起业务线的扩充和视觉的升级。',
    cardColor: ' ',
    tag: '网页设计',
    buttonTextD: '项目详情',
    buttonTextG: '前往网站',
    isTagWhite: false,
    tagColor: '#DEE1E7',
    isButton: true,
    isGhostButton: true,
    btnIconD: '',
    btnIconG: link_icon_b,
    isTitle: true,
    isDes: true,
    isBlack: false,
    isWhiteBotton: false,
    isTag: true,
    bgImg: geetestweb,
    hrefG: 'http://www.geetest.com',
    hrefD: '/geetestWebsite',
  },
  {
    title: '行为验证产品',
    cardLogo: captcha_logo,
    des:
      '基于生物的行为特征，结合人工智能技术，帮助网站和 APP 区分人机，每日在用户察觉不到的地方抵挡上亿机器脚本攻击。',
    cardColor: '#3973FF ',
    tag: 'Web UI 设计',
    buttonTextD: '项目详情',
    buttonTextG: ' ',

    isTagWhite: true,
    tagColor: 'rgba(0,0,0,0.08)',
    isButton: true,
    btnIconD: '',
    btnIconG: '',
    isGhostButton: false,
    isTitle: true,
    isDes: true,
    isBlack: true,
    isWhiteBotton: true,
    isTag: true,
    bgImg: ui_captcha,
    hrefD: '/geetestCaptcha',
  },
  {
    title: 'APP 一键登录',
    cardLogo: wangguan_logo,
    des:
      '准确识别用户手机号码，实现 App 的登录注册等环节一键通过，帮助企业优化验证流程，让其用户享受更好的体验。',
    cardColor: ' ',
    tag: 'App UI 设计',
    buttonTextD: '项目详情',
    buttonTextG: ' ',

    isTagWhite: false,
    tagColor: 'rgba(0,0,0,0.08)',
    isButton: true,
    btnIconD: '',
    btnIconG: '',
    isGhostButton: false,
    isTitle: true,
    isDes: true,
    isBlack: false,
    isWhiteBotton: false,
    isTag: true,
    bgImg: app_onelogin,
    hrefD: '/onelongin',
  },
];
