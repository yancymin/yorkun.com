<template>
  <div class="ghostButton">
    <a :href="href" target="_blank">
      <div class="wrap">
        {{buttonText}}
        <div id="ghostButton-icon" class="ghostButton-icon" :style="'background-image:' + 'url(' + buttonIcon +')'"></div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ghostButton',
  props: ['buttonText', 'buttonIcon', 'href'],
  mounted() {
    const icon = document.getElementById('ghostButton-icon');

    if (this.buttonIcon === undefined) {
      icon.style.display = 'none';
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../style/global.scss";

.ghostButton {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 136px;
  height: 43px;
  border-radius: 6px;
  border: 1px solid #3a4151;
  background-color: $white;
  transition: all 0.3s ease;
  @include font(14px, $font-color-black-1, 400);

  a {
    width: 100%;
    height: 100%;
    @include flex-all-center;

    .wrap {
      display: flex;
      align-items: center;

      .ghostButton-icon {
        width: 10px;
        height: 10px;
        margin-left: 5px;
        position: relative;
        top: 1px;
      }
    }
  }
}
</style>
