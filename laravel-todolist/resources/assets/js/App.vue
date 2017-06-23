<template>
    <div id="app">
        <!--<router-view></router-view>-->
        <todo-header :addTodo="addTodo"></todo-header>
        <todo-main :todos="todos"></todo-main>
        <todo-footer></todo-footer>
    </div>
</template>
<script>
    import todoHeader from './components/todoHeader.vue'
    import todoMain from './components/todoMain.vue'
    import todoFooter from './components/todoFooter.vue'

    export default{
        data(){
            return {
                todos:[
                    {
                        title:'example：世界那么大，我想去看看',
                        isDone:'true'
                    }
                ]
            }
        },
        components:{
            todoHeader,todoMain,todoFooter
        },
        methods:{
            addTodo(todo){
                this.todos.unshift(todo)
                console.log(this.todos)
            }
        }
    }
</script>



