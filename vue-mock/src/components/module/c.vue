<template>
  <div>
    获取state：{{ $store.state.count }} {{ getState }}
    <br>
    获取getter:{{ $store.getters.done }} {{ getGetter }}
    <br>
    提交mutations increment：
    <button @click="increment">+1</button>
    <br>
    提交mutations add:
    <button @click="add(5)">+5</button>
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
      computed:{
        getState(){
          return this.$store.state.count
        },
        getGetter () {
          return this.$store.getters.done
        }
    },
        methods: {
          increment () {
            // 逻辑为 state.count++
            this.$store.commit('increment')
          },
          add (num) {
            // 逻辑为 state.count += n
            this.$store.commit('add', num)
          }
        }
    }

</script>
