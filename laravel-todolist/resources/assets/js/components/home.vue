<template>
    <div id="app">
        <todo-header :addTodo="addTodo"></todo-header>
        <todo-main :todos="todos" :deleteTodo="deleteTodo"></todo-main>
        <todo-footer :rmTodos="rmTodos"></todo-footer>
    </div>
</template>
<script>
    import todoHeader from './todoHeader.vue'
    import todoMain from './todoMain.vue'
    import todoFooter from './todoFooter.vue'

    export default{
        data(){
            return {
                todos:[
                    {
                        title:'example：世界那么大，我想去看看',
                        isDone:true
                    }
                ]
            }
        },
        components:{
            todoHeader,todoMain,todoFooter
        },
        methods:{
            addTodo(todo){
                this.todos.unshift(todo);
            },
            deleteTodo(todo){
                var num;
                this.todos.map(function(item,index){
                    if(item.title == todo.title){
                        num = index;
                    }
                });
                this.todos.splice(num,1);
            },
            rmTodos(){
                const me = this;
                this.todos.map(function(item,index){
                    if(item.isDone == true){
                        me.todos.splice(index,1)
                    }
                })
            }
        }
    }
</script>



