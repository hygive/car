<template>
<div>
     <div class="kuang">
        <i class="iconfont icon-sousuo pic"></i>
        <input type="text" placeholder="请输入搜索内容" v-model="userinfo">
        <div class="right"> <i class="shu"></i> <span @click="call()">取消</span></div>
    </div>

    <div class="main">
        <p class="world">猜你想搜的</p>
        <div class="search">
            <ul>
                <router-link class="search_l" v-for="(item,index) in sugList" :key="index"  to="/search_detail" tag="li"  @click.native="changeVal(index)">
                    <span>{{item.word}}</span>
                </router-link>
               
            </ul>
        </div>
    </div>
    <div class="mask" v-if="flag">
            <ul>
                <li v-for="(items,index) in list_cont" :key="index">
                    <i class="iconfont icon-sousuo"></i>
                    <span>{{items.keyword}}</span>
                    <img src="//s3a.pstatp.com/toutiao/resource/tt_search_m/images/search-item-tip@3x.70e201f2.png" alt="">
                </li>
                
            </ul>
      </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
data(){
return{
  sugList:[],
  recommend_reason:"",
  flag:false,
  userinfo:"",
  list_cont:[]
}
},
methods:{
     call(){
         this.flag=!this.flag
        },
     changeVal(index){
        
           this.userinfo=this.sugList[index].word
             console.log(this.userinfo)
             this.bus.$emit('updata',this.userinfo)
             

   
        }

},

    created(){
         axios({
           method:"get",
           url:"/abc/search/suggest/initial_page/"
    }).then(data=>{
        //   var list=data.data.data.service_list;
        //   var list=data.data.data
            // console.log(data.data.data.suggest_word_list);
            var list=data.data.data.suggest_word_list
            this.sugList=list;
        })
    },
    watch:{
          userinfo(val){
              if(val.length>0){
                  this.flag=!this.flag
                   axios({
                    method:"get",
                     url:"/abc/2/article/search_sug/",
                     params:{
                        keyword:this.userinfo
                     }
                }).then(data=>{
          
          var list_list=data.data.data
            console.log(data.data.data);
            console.log(data.data.data[0].keyword);
            this.list_cont =list_list ;
        })
              }

          }
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
    
    .main {
        width: 94%;
        margin: 3% auto;
    }
    
    .world {
        font-size: 0.42rem;
        color: #999
    }
    
    .search {
        margin-top: 3%;
       
    }
    
    .search>ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    
    .search>ul>li {
        width: 46%;
        height: 1rem;     
        font-size: 0.4rem;
        line-height: 1rem;
        color: #000;
        position: relative;
        padding: 0 1%;
        overflow: hidden;
        display: flex;
        justify-content:space-between;

        align-items: center;

    }
        .search>ul>li>img{
            width: 0.42rem;
            height: 0.42rem;
        } 
        .shu1 {}
    
    .search>ul>li:nth-child(2n-1):after {
        width: 0.01rem;
          height: 0.4rem;
        display: inline-block;
        background: #707070;
        content: "";
        position: absolute;
        top: 0.35rem;
        right: 0rem;
    }
    .pic{
     font-size: 0.5rem;
    line-height: 1.2rem;
    margin-left: 6%;}

.mask{
    width: 100%;
    background: #fff;
    height: 100%;
    position: fixed;
    top: 1.7rem;
    left: 0;
}
.mask>ul{
width: 100%;
}
.mask>ul>li{
    border-bottom: 1px solid #e8e8e8;
    padding: 0.4rem 0;
    position: relative;
}
.mask>ul>li>i{
    font-size: 0.5rem;
    padding-left: 0.8rem;


}
.mask>ul>li>span{
  font-size: 0.43rem;
  color: #222;
      padding-left: 0.2rem;
}
.mask>ul>li>img{
    width: 0.6rem;
    height: 0.6rem;
    position: absolute;
    right: 0.6rem;
        top: 0.32rem;
}
</style>

