<template>
    <el-col :span = "3" class = "fl flMenu">
        <el-col>
            <el-menu default-active="2" class="el-menu-vertical-demo"theme="dark" :default-active="$route.path" router>
                <el-submenu index="1">
                    <template slot="title">导航一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                    <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="/userManage">导航二</el-menu-item>
                <el-menu-item index="3">导航三</el-menu-item>
            </el-menu>
        </el-col>
    </el-col>
</template>
<script>
    export default{
        data(){
            return {}
        },
        mounted(){

        },
        methods: {
        }
    }

</script>
<style scoped>
    .flMenu{
        height:100%;
        background:#324157;
    }
    .el-submenu{
        width:100%;
    }
    .el-menu-item{
        width:100%;
    }
</style>
