<template>
    <el-container>
        <el-main>
            <el-input v-model="wifiname" placeholder="请输入wifi名称"></el-input>
            <el-input v-model="password" placeholder="请输入wifi密码" ></el-input>
            <el-button type="primary" round  :loading="isLoading" @click="startWifi">{{buttonText}}</el-button>
        </el-main>
    </el-container>
</template>

<script>
  import Wifi from '../lib/wifi'
  export default {
    name: 'home',
    data () {
        return {
            wifiname: 'admin',
            password: 123456 ,
            isLoading: false,
            buttonText: '启动wifi',
            status: false,
        }
    },
    methods: {
        startWifi () {
            let me = this;
            me.isLoading = true;
            me.buttonText = '启动中...';
            let process = Wifi.setWifi(me.wifiname,me.password);
            process.on('close',()=>{
                let child = Wifi.startWifi();
                if(child.code == 0) {
                    me.isLoading = false;
                    me.status = true
                    me.buttonText = "关闭wifi"
                } 
            })
        },

        stopWifi () {
            let process = Wifi.stopwifi();
            if(process.code) {
                me.status = false ;
                me.buttonText ='启动wifi'
                console.log('success~');
            }
        }
    }
  }
</script>

<style>
  /* CSS */
</style>
