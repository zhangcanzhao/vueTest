<template>
  <div id="app">
    <!--头部-->
    <el-row>
      <header-top></header-top>
    </el-row>
    <el-row id = "content-wrapper">
      <!--左侧菜单-->
      <left-menu></left-menu>
      <!--右侧内容-->
      <el-col :span = "21" class = "fr frContent">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  import headerTop from './components/module/header';
  import leftMenu from './components/module/leftMenu';
export default {
  name: 'app',
  data(){
    return{
    };
  },
  mounted() {
  },
  components: {
    headerTop,
    leftMenu

  },
  methods: {

  }
}
</script>

<style scoped>
  @import "assets/css/common.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:100%;
  width:100%;
  display:block;
}

  .frContent{
    height:100%;
    background:#eee;
  }
  #content-wrapper{
    height:100%;
  }
</style>
