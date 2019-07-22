<template>
  <div id="app">
    <router-view />
    <loading />
  </div>
</template>

<script>
import loading from "./components/loading.vue";

export default {
  name: "app",
  components: { loading }
};
</script>


<style lang="scss">
@import "../src/style/global.scss";
@import "../src/style/reset.css";

#app {
  font-family: source-han-sans-simplified-c, sans-serif;
  font-style: normal;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  width: 100vw;
  background-color: $gray;
}

body {
  width: 100vw;
  overflow-x: hidden;
}
</style>
