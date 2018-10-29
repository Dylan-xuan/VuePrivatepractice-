<template>
    <div>
        <h5>父组件</h5>
        <!-- <span @click="updataMSage">点我传数据</span> -->
        
        <son :message="name" @get-msg2="updataMSage" ></son>
        <P>{{xingbie}}</P>
    </div>
</template>
<script>
import son from "./son"
export default {
     components:{
         son
     },
    data(){
        return {
            name:"linxin",
            xingbie:""
        }
    },
    methods:{
         updataMSage(data){
            this.xingbie=data
        }
    }
}
</script>
