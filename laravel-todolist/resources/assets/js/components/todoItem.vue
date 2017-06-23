<template>
    <div>
        <input type="checkbox" v-model="todo.isDone">
        <span>{{todo.title}}</span>
    </div>
</template>
<script>
    export default{
        props:['todo'],
        data(){
            return {

            }
        },
        computed:{

        }
    }
</script>
<style>

</style>