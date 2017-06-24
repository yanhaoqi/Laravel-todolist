<template>
    <div class="footer">
        <button @click="remove" class="foot-btn">删除所有选中的任务</button>
    </div>
</template>
<script>
    export default{
        props:['rmTodos'],
        methods:{
            remove(){
                console.log('点击了')
                this.rmTodos()
            }
        }
    }
</script>
<style>
    .foot-btn{
        background-color: #d00;
        display: block;
        border:0;
        width: 500px;
        height:34px;
        color: #fff;
        font:20px '微软雅黑';
        line-height: 32px;
        text-align: center;
        border-radius: 5px;
        margin:45px auto 0;
        text-shadow: none;
        text-decoration: none;
        outline:none;
        box-shadow: none;
    }
</style>