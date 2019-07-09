<template>
 <div>
    <div class="kuang">
        <i class="iconfont icon-sousuo pic"></i>
        <input type="text" placeholder="请输入搜索内容" v-model="bandval">
        <div class="right"> <i class="shu"></i> <span @click="callback()">取消</span></div>
    </div>
      <div class="cont">
          <ul>
              <li v-for="(item,index) in cont_list" :key="index">
                  <div class="title">{{item.goodsAuthor}}</div>
                  <div class="cent"><span>{{item.goodsCenter}}</span></div>
                  <div class="author">{{item.goodsTitle}}</div>
              </li>
          </ul>
      </div>
    </div>
</template>
<script>

import axios from "axios";
export default {
    data(){
        return {
            cont_list:[],
            bandval:'' 
        }
    },
    methods:{
        callback(){
                this.$router.back()
        }
    },
    created(){
        this.bus.$on("updata",getval=>{
            console.log(getval)
            this.bandval=getval
        })
        axios({
         method:"get",
         url:"/search/searchDetail"
     }).then(data=>{
          
          var list=data.data.data
            console.log(data.data.data);

            this.cont_list =list ;
        })
    }
}
</script>
<style scoped>

.kuang {
        display: flex;
        flex-direction: row;
        width: 94%;
        margin: 3% auto;
        background-color: #f1f3f5;
        position: relative;
        height: 1.2rem;
    }
    
    .kuang input {
        width: 70%;
        background: #f1f3f5;
        font-size:  0.42rem;;
        /* height: 1rem; */
        /* margin-left: 0.8rem; */
        outline: none;
        border: 0;
        padding-left: 0.2rem;
        padding-right: 0.2rem
    }
    
    .right {
        line-height: 1.2rem;
        display: flex;
        flex-direction: row;
    }
    
    .right span {
        color: #707070;
        margin-left: 0.2rem;
        font-size: 0.45rem;
        display: block
    }
    .shu {
    width: 0.01rem;
    height: 0.45rem;
    display: block;
    background: #707070;
    margin-top: 0.39rem;
    }
        .pic{
     font-size: 0.5rem;
    line-height: 1.2rem;
    margin-left: 6%;}
.cont{
    margin-top: 2%;
  
}

.cont>ul>li{
    padding: 0 3%;

    border-bottom: 10px solid #e8e8e8
    
}

.title{
    font-size: 0.5rem;
    padding: 0.2rem 0;
    
}
.cent{
 text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 0.1rem;
  line-height: 0.5rem;
}
.cent>span{
font-size: 0.4rem;

color:#666;
}
.author{
    padding: 0 0 0.2rem 0; 
    font-size: 0.2rem;
}
</style>
