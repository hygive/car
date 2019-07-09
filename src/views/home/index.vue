<template>
  <div>
    <p>
      首页
    </p>
  </div>
</template>

<script>

import axios from "axios"
export default {
  name:"home",

created(){
        axios({
            method:"get",
            url:"/abc/motor/m/article/detail?group_id=6678096763141751300",

        }).then(data=>{
            console.log(data);
            
        })
}

};

</script>


<style>
</style>
