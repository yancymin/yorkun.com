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
  width: 132px;
  height: 42px;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: $blue;
  transition: all 0.3s ease;
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
