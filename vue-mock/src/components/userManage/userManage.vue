<template>
  <div>
    <am></am>
    <bm></bm>
    <cm></cm>
  </div>
</template>
<style>

</style>
<script>
  import am from '../module/a'
  import bm from '../module/b'
  import cm from '../module/c'
    export default{
      name:'userManage',
        data(){
            return {}
        },
      components:{
        am,
        bm,
        cm

      },
        mounted(){

        },
        methods: {
        }
    }

</script>
