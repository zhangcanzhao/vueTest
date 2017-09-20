<template>
  <div class="hello">
    <el-table :data="data" border>
      <el-table-column v-for = "value in orderList" :prop=value.prop :label=value.label :width=value.width  :fixed = value.fixed></el-table-column>
    </el-table>
  </div>
</template>

<script>
  import axios from 'axios';
  import qs from 'qs'
export default {
  name: 'hello',
  data () {
    return {
      data:[],
      orderList:[
        {
          prop:"city",
          label:"省市",
          width:"300",
          fixed:false
        },
        {
          prop:"county",
          label:"县郡",
          width:'',
          fixed:false
        },
        {
          prop:"id",
          label:"id",
          width:'',
          fixed:false
        }
      ]
    }
  },
  mounted(){
    var _that = this;
    axios.get("http://localhost:3000/address")
            .then(function(response) {
              _that.data = response.data;
              console.log(response.data);
            })
            .catch(function(error) {
              console.log(error);
            });
  },
  methods:{

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
