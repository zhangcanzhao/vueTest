<template>
	<section>
		<el-col :span="24" class = "titleVue">
		</el-col>
	</section>
</template>

<script>
	import axios from 'axios';
	import qs from 'qs';
	export default {
  	name: 'headerTop',

  data() {
    return {

    }
  },
  methods: {

  }

}
</script>

<style scoped>
	.titleVue{
		height:50px;
		background:#666666;
	}
</style>
