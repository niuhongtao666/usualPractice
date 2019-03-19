<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="num">12345</div>
    <div>
      <a v-on:click.stop.prevent="doThat" href='https://www.baidu.com'>点击</a>
      <span>.stop.prevent阻止冒泡，阻止页面跳转</span>
    </div>
    <div @click.once='hasOnce'>Once</div>
    <div>
      <div id="obj1" @click.capture='writeId'>
        obj1
        <div id="obj2" @click.capture='writeId'>
          obj2
          <div id="obj3" @click='writeId'>
            obj3
            <div id="obj4" @click='writeId'>
              obj4
              <div id="obj5" @click.self='writeId'>
                obj5
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      id:null,
    }
  },
  methods:{
    doThat(){
      console.log('click dothat')
    },
    hasOnce(){
      console.log('hasOnce');
    },
    writeId(e){
      console.log(e.currentTarget.id);
      /*
      obj1
      obj2
      obj4
      obj3
      */
      // this.id=
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/style.styl"
  #app
    .num
      color: $fontColor;
</style>
