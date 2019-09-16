<template>
  <div>
    <a class="top" href="#top"></a>
  </div>
</template>

<script>
export default {
  name: 'top',
  created() {
    window.onscroll = function () {
      const backTop = document.querySelector('.top');
      if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
        backTop.style.display = 'block';
      } else {
        backTop.style.display = 'none';
      }
    };
  },
};
</script>


<style lang="scss" scoped>
.top {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #141516;
  background-image: url("../assets/index/up_icon.png");
  background-repeat: no-repeat;
  background-size: 21px 12px;
  background-position: center center;

  &:hover {
    background-color: #1a1b1d;
  }
}

@media screen and (max-width: 1380px) {
  .top {
    display: none !important;
  }
}
</style>
