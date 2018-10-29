<template>
    <div>
        <!-- v-if -->
      <!-- <div v-if="Math.random() > 0.5">
            Sorry
        </div>
        <div v-else>
            Not sorry
        </div> -->
        <div v-for="(item,index) in items" :key="index">
            {{item.mesge}}
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            items:[{mesge:"abc"},{mesge:"abc"}]
        }
    }
}
</script>

