<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "../src/style/global.scss";
@import "../src/style/reset.css";

#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  width: 100vw;
  background-color: $gray;
}
</style>
