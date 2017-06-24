<template>
    <div class="auCon">
        <span class="auCon-km">北京 . 中科科猫</span><br>
        <span class="auCon-more" @click="more">ajax测试？点我！</span><br>
        <span class="auCon-back" @click="back">返回 ToDoList</span>
    </div>
</template>
<script>

    import Vue from 'vue'
    import VueResource from 'vue-resource'
    Vue.use(VueResource);
    export default{
        methods:{
            more(){
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

</style>