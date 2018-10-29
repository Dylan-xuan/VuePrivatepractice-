<template lang="html">
<div>
  <transition name="el-fade-in-linear">
    <div draggable="true" @drag="mouseDrag" @dragend="mouseDragend" :style="dialogStyle" class="g-dialog-wrapper" v-show="myVisible">
      <div class="g-dialog-header">
        <div class="left">
          模态框
        </div>
        <div class="right">
          <i class="g-times-icon fa fa-times" @click="myVisible=false" aria-hidden="true"></i>
        </div>
      </div>
      <div class="g-dialog-container">

      </div>
    </div>
  </transition>
  </div>
</template>

<script>
  export default {
    props: {
      visible: Boolean
    },
    created() {
    },
    data() {
      return {
        myVisible: this.visible,
    },
    computed:{},
    methods:{
        
    },
    components: {},
    watch: {
      myVisible: function (val) {
        this.$emit('update:visible', val)
      },
      visible: function (val) {
        this.myVisible = val
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
