<template>
    <div class="container">
        <input class="input" type="text" v-model="todosomething"><br>
        <p>{{todosomething}}</p>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                todosomething: null
            }
        }
    }
</script>
<style>
    .container{
        margin:0 auto;
    }
    .input{
        width: 230px;
        height: 30px;
    }
</style>