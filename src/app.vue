<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
  </div>  
</template>

<script>
import Header from './todo/header.vue'
export default {
    data(){
      return{
        // test:'测试123'
      }
    },
    components:{
      Header
    }
}
</script>

<style>
  #app{
    position: absolute;
    left:0;
    right: 0;
    top:0;
    bottom:0;
  }
  #cover{
    position: absolute;
    left:0;
    top:0;
    right: 0;
    bottom: 0;
    background-color: #999;
    opacity: .9;
    z-index:-1;
  }
</style>