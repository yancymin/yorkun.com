<template>
  <div class="defaultButton" :style="'background-color:' + btnColor">
    <router-link :to='href'>
      {{buttonText}}
      <img :src="btnIcon" id="defaultButton-icon" alt />
    </router-link>
    <!-- <loading :isMotion="isMotion"/> -->
  </div>
</template>

<script>
// import loading from '../components/loading.vue';

export default {
  name: 'defaultButton',
  props: ['buttonText', 'href', 'btnColor', 'btnIcon'],
  // components: {
  //   loading
  // },
  // data() {
  //   return {
  //     isMotion: false
  //   }},
  mounted() {
    const icon = document.getElementById('defaultButton-icon');

    if (this.btnIcon === '') {
      icon.style.display = 'none';
    }
  },
  methods: {
    // loading() {
    //   this.isMotion = true
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "../style/global.scss";

.defaultButton {
  z-index: 1000;
  cursor: pointer;
  width: 132px;
  height: 42px;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: $blue;
  transition: all 0.3s ease;
  @include font(14px, $font-color-white-1, 400);
  @include flex-all-center;

  a {
    width: 100%;
    height: 100%;
    @include flex-all-center;
  }

  img {
    margin-left: 8px;
  }
}
</style>
