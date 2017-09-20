<template>
  <div>
    多页面显示同一个state数据：{{ $store.state.count }}
    <button @click="increment">异步+5</button>
  </div>
</template>
<style>

</style>
<script>
    export default{
        data(){
            return {}
        },
        mounted(){

        },
        methods: {
          increment () {
            // 使用actions异步提交mutations来修改state
            // this.$store.dispatch('incrementAsync')
            this.$store.dispatch('incrementAsyncWithValue', 5)
          }
        }
    }

</script>
