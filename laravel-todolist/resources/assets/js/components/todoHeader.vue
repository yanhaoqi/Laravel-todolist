<template>
    <div class="container">
        <span class="con-header">White Sdmething You May Forget</span>
        <input class="con-input" type="text" v-model="title" @keyup.enter="addItem" placeholder="   记录你想做的的事情！按enter键确认"><br>
        <span class="con-repeat">{{title}}</span>
    </div>
</template>

<script>
    export default{
        props:['addTodo'],
        data(){
            return {
                title: null
            }
        },
        methods:{
            addItem(){
                const todo = {
                    title:this.title,
                    isDone:false
                };
                this.addTodo(todo);
                this.title = null;
            }
        }
    }
</script>
<style>
    .container{
        margin:0 auto;
        width: 500px;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
    }
    .con-header{
        font:22px '微软雅黑';
        display:inline-block;
        margin:15px 0;
    }
    .con-repeat{
        white-space:nowrap;
        display:inline-block;
        margin:15px 0;
    }
    .con-input{
        width: 500px;
        height: 40px;
        outline:none;
        border-radius: 5px;
    }
</style>