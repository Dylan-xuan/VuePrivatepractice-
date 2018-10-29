<template>
    <div>
        <h5>子组件</h5>
        <!-- <span>hello {{message}}</span> -->
    </div>
</template>
<script>

export default {
    data(){
        return {
            xingbie:"男"
        }
    },
     mounted(){
        // this.$emit(事件名,携带数据)  注意事件名不支持小驼峰
        this.$emit('get-msg2',this.xingbie)
     
      },
    props:["message"],
    methods:{
      
    }
}
</script>
