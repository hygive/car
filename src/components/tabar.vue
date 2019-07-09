<template>
    <div>
        <ul>
            <router-link v-for="(item,index) in tabars" :to='item.path' :key="index" tag="li">
               <i class="iconfont" v-html="item.icon"></i>
               <span>{{item.title}}</span>

            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name:"tabar",
    data(){
        return{
            activeId:0,
            tabars:[
                {
                    icon:"&#xe638;",
                    title:"首页",
                     path:"/home"
                },
                {
                    icon:"&#xe607",
                    title:"西瓜视频",
                     path:"/video"
                },
                {
                    icon:"&#xe60d",
                    title:"微头条",
                     path:"/infor"
                },
                {
                    icon:"&#xe600",
                    title:"我的",
                     path:"/mine"

                },
            ]
        }
    }


}
</script>
<style scoped>
ul{
    border-top:1px solid #c8c8c8;
  height: 1.2rem;
  /* font-size: 0.6rem; */
  display:flex;
  justify-content: space-around;
  align-content: center;
  position: fixed;
  text-align: center;
  bottom: 0;
  left: 0;
  width: 100%;

}
ul>li{
    display: flex;
    flex-direction: column;

}
ul>li>i{
    margin-top: 0.12rem;
    display: block;
    font-size: 0.5rem !important
}
ul>li>span{
    display: block;
    margin-top: 0.1rem;
    font-size: 0.32rem
}
.router-link-active{
 color: #f85959;
}

</style>
