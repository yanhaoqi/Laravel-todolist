<template>
    <div class="main">
        <ul class="main-ul">
            <todo-item v-for="todo in todos" :todo="todo" :deleteTodo="deleteTodo"></todo-item>
        </ul>
    </div>
</template>
<script>
    import todoItem from './todoItem.vue'
    export default{
        props:['todos','deleteTodo'],
        components:{todoItem}
    }
</script>
<style>
    .main{
        width:500px;
        margin:0 auto;
    }
</style>