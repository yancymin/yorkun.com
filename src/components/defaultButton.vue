<template>
  <div class="defaultButton" :style="'background-color:' + btnColor">
    <a :href="href">{{buttonText}}
    <img :src="btnIcon" id="defaultButton-icon" alt>
    </a>
  </div>
</template>

<script>
export default {
  name: "defaultButton",
  props: ["buttonText", "href", "btnColor", "btnIcon"],
  mounted() {
    let icon = document.getElementById("defaultButton-icon");

    if (this.btnIcon === "") {
      icon.style.display = "none";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../style/global.scss";

.defaultButton {
  z-index: 1000;
  cursor: pointer;
  width: 136px;
  height: 46px;
  border-radius: 6px;
  background-color: $blue;
  @include font(14px, $font-color-white-1, 500);
  @include flex-all-center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    margin-left: 8px;
  }
}
</style>
