<template>
    <div class="itemCon">
        <div class="item-text">
            <input type="checkbox" v-model="todo.isDone">
            <span class="item-todo">{{todo.title}}</span>
        </div>
        <button class="item-btn">已完成</button>
    </div>
</template>
<script>
    export default{
        props:['todo'],
        data(){
            return {

            }
        }
    }
</script>
<style>
    .itemCon{
        width:500px;
        height: 32px;
        margin:6px 0 0;
        position:relative;
    }
    .item-btn{
        /*float:right;*/
        position:absolute;
        right:40px;
        padding:5px 10px;
        background-color: #d00;
        border-radius: 3px;
        text-shadow: none;
        text-decoration: none;
        outline:none;
        box-shadow: none;
        border:none;
        color: #fff;
        font:16px '微软雅黑';
    }
    .item-todo{
        line-height: 32px;
    }
    .item-text{
        display: inline-block;
        margin-left:-40px;
    }
</style>