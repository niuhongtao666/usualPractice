<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="num">12345</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/style.styl"
  #app
    .num
      color: $fontColor;
</style>
