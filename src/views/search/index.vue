<template>
<div>
    <div class="kong"></div>
    <div class="cont">
        <div class="pic_k"><img src="../img/logo.png" alt="" srcset=""></div>
        <router-link class="kuang" to="/search_x">
         <span>搜你想搜的</span>
          <i class="iconfont icon-sousuo"></i>
        </router-link>
    </div>

</div>
</template>
<script>
export default {
    data(){
        return{
            // imgurl:"../img/logo.png"
        }
    }
}
</script>
 <style scoped>

  .kong {
        height:53vw;
    }
    
    .cont {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center
    }
    
    .pic_k {
        width: 2.58rem;
        height: 1.08rem;
        margin: 0 auto
    }
    
    .cont img {
        width: 100%;
        height: 100%;
    }
    
    .kuang {
        position: relative;
        width: 94%;
        margin-left: 3%;
        height: 1.2rem;
        background-color: #f1f3f5;
        border-radius: 0.2rem;
        padding: 0 0.5rem;
        color: #9b9b9b;
        box-sizing: border-box;
        margin-top: 0.54rem
    }
    
    .kuang span {
        font-size: 0.42rem;
        line-height: 1.2rem;
    }
    .kuang>i{
        position: absolute;
        top: 0.4rem;
        right:0.5rem;
        font-size: 0.4rem;
        color: #000;
            }
</style>
