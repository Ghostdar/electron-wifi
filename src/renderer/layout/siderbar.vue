<template>
    <el-aside>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">菜单1</div>
            </el-col>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">菜单1</div>
            </el-col>
        </el-row>
    </el-aside>
</template>

<script>
  export default {
    name: 'siderbar',
    data (){
        return {
            home: '',
        }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>

</style>
