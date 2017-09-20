<template>
    <div>
        多页面显示一个state数据：{{$store.state.count}}
      <button @click = "increment">+1</button>
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
          // 使用mutations同步修改state
          this.$store.commit('increment')
        }
      }
    }

</script>
