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
import gmake_logo from '../assets/index/gmake_logo.png';
import banana from '../assets/index/banana_banner.gif';
import myDribbble from '../assets/index/mydribbble.png';
import teamDribbble from '../assets/index/teamdribbble.png';
import link_icon_w from '../assets/index/link_icon_w.svg';
import link_icon_b from '../assets/index/link_icon_b.svg';
import reweima_icon from '../assets/index/reweima_icon.svg';
import geetestweb_logo from '../assets/index/geetestweb_logo.svg';
import geetestweb_logo_en from '../assets/index/geetestweb_logo_en.svg';
import captcha_logo from '../assets/index/captcha_logo.svg';
import captcha_logo_en from '../assets/index/captcha_logo_en.svg';
import wangguan_logo from '../assets/index/wangguan_logo.svg';
import banana_logo from '../assets/index/banana_logo.svg';
import animation from '../assets/index/animation.png';

export default [
  {
    title: 'GEETEST 网站',
    cardLogo: geetestweb_logo_en,
    des:
      'A revision of the security service enterprise website, taking over the expansion of the business line and the new brand vision.',
    cardColor: ' ',
    tag: 'Web Design',
    buttonTextD: 'Detail',
    buttonTextG: 'See the live',
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
    hrefD: '/article-1',
  },
  {
    title: '行为验证产品',
    cardLogo: captcha_logo_en,
    des:
      'Based on the behavioral characteristics of biology and AI, help websites and APP distinguish between human and machine.',
    cardColor: '#3973FF ',
    tag: 'Web UI Design',
    buttonTextD: 'Detail',
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
    hrefD: '/article-1',
  },
  {
    title: 'APP 一键登录',
    cardLogo: wangguan_logo,
    des:
      "Accurately identify the user's mobile phone number, Help companies optimize the verification process and let their users enjoy a better experience. ",
    cardColor: '#F4F6F9',
    tag: 'App UI Design',
    buttonTextD: 'Detail',
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
    hrefD: '/onelogin',
  },
];
