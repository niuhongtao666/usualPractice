<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="color">111</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  #app{
    .color{
      color:$color;
    }
  }
</style>
