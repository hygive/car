<template>
  <div id="app">
     <Header  v-if="$route.meta.flag"/>
    <!-- <keep-alive> -->
      <router-view></router-view>
      <Tabar v-if="$route.meta.flag"/>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import Header from "./components/header.vue"
import Tabar from "./components/tabar.vue"
export default {
  name: "app",
  components:{
    Header,
    Tabar,

    }};
</script>

<style>

</style>
