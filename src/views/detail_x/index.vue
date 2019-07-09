<template>
  <div>
    <p>
    详情页
    </p>
  </div>
</template>

<script>

import axios from "axios"
export default {
  name:"detail",


created(){
        axios({
            method:"get",
            url:"/abc/motor/m/article/detail?group_id=6678096763141751300",

        }).then(data=>{
            console.log(data);
            
        })
}}
  
</script>


<style>
</style>
