<template>
    <div class="header">
         <span class="">今日头条</span>
        <i class="iconfont icon-sousuo" @click="handleChange()"></i>
    </div>
</template>
<script>
export default {
    // name:'header',
    data(){
        return{

        }
    },
    methods:{
        handleChange(){
              this.$router.push({ path:'/search'})
        }
    }
}
</script>

<style>
.header{
    width: 100%;
    background: #d43d3d;
    position: fixed;
    top:0;
    left: 0;
    height:1rem;
    position: relative;
}
.header span{
    font-size: 0.5rem;
    color: #fff;
    line-height: 1rem;
    text-align: center;
    display: block
}
.header>i{
  display:block;
  font-size: 0.4rem;
  color: #fff;
  position: absolute;
  right: 0.6rem;
  top: 0.33rem;
}
</style>






