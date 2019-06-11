<template>
  <div class="smallCard"  :style="'background-color:' + cardColor"
    :class="{fontBlack: isBlack, whiteBotton: isWhiteBotton}"></div>
</template>

<style lang="scss" scoped>
.smallCard {
  height: 400px;
  width: 590px;
  border-radius: 10px;
  background-color: #ffa51d;
}
</style>
