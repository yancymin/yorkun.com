<template>
  <div class="loading" :class="{loadingMotion: isMotion}"></div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: "loading",
  // props: ["isMotion"],
  data() {
    return {
      isMotion: false
    };
  },
  watch: {
    $route: {
      handler: function(val, oldVal) {
        this.$nextTick(function() {
          //页面加载完成后执行
          this.loading();
        });
      },
      // 深度观察监听
      deep: true
    }
  },
  created() {
    return (this.isMotion = true);
  },
  mounted() {
      setTimeout(() => {
          this.isMotion = false;
      }, 2000);
  },
  methods: {
    loading() {
      this.isMotion = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.loading {
  z-index: 1000000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 4px;
  background-color: white;
  transform: scaleX(0);
  transform-origin: left;
  opacity: 0;
}

.loadingMotion {
  animation: loadingMotion 1s linear;

  @keyframes loadingMotion {
    to {
      opacity: 1;
      transform: scaleX(1);
    }
  }
}
</style>

