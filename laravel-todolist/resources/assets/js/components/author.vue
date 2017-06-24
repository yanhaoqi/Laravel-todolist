<template>
    <div class="auCon">
        <span class="auCon-km">北京 . 中科科猫  .  ajaxTest</span><br>
        <button class="auCon-more" @click="more">ajax测试？点我！</button>
        <div class="auCon-hint" v-if="isHint">ajax请求发送成功，请到控制台查看。{{time}}s后提示消失</div>
        <button class="auCon-back" @click="back">返回 ToDoList</button>
    </div>
</template>
<script>

    import Vue from 'vue'
    import VueResource from 'vue-resource'
    Vue.use(VueResource);
    export default{
        data(){
            return {
                isHint:false,
                time:5
            }
        },
        methods:{
            more(){
                 this.isHint = true;
                 const me = this
                 setTimeout(function(){
                     me.isHint = false;
                 },5000);
                 clearInterval(me.timeInterval);
                 me.timeInterval = setInterval(function(){
                     me.time--
                 },1000);
                 if(this.time <= 0){
                     this.time = 5
                 }
                 this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
                     emulateJSON: true
                 }).then(function(response) {
                     console.log(response);
                 }, function(response) {
                     console.log(response)
                 });
             },
            back(){
                window.location = "http://127.0.0.1:8000/#/"
            }
        }
    }
</script>
<style>
    .auCon-km{
        width: 500px;
        text-align: center;
        font:bold 28px '微软雅黑';
        display:block;
        margin:30px auto;
    }
    .auCon-more{
        margin:0 auto;
        display: block;
        width:500px;
        background-color: #d00;
        font:bold 18px '微软雅黑';
        color: #fff;
        border-radius: 6px;
        text-shadow: none;
        text-decoration: none;
        outline:none;
        box-shadow: none;
        border:none;
    }
    .auCon-hint{
        margin:30px auto;
        width: 500px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        font:bold 18px '微软雅黑';
    }
    .auCon-back{
        margin:50px auto;
        display: block;
        width:500px;
        background-color: #d00;
        font:bold 18px '微软雅黑';
        color: #fff;
        border-radius: 6px;
        text-shadow: none;
        text-decoration: none;
        outline:none;
        box-shadow: none;
        border:none;
    }
</style>