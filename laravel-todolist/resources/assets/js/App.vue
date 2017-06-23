<template>
    <div id="app">
        <!--<router-view></router-view>-->
        <todo-header :addTodo="addTodo"></todo-header>
        <todo-main :todos="todos" :deleteTodo="deleteTodo"></todo-main>
        <todo-footer :rmTodos="rmTodos"></todo-footer>
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
                console.log('调用了rmTodos')
                const me = this;
                this.todos.map(function(item,index){
                    console.log('进入了map中的函数')
                    if(item.isDone == true){
                        console.log('调用了map里的函数')
                        me.todos.splice(index,1)
                    }
                })
            }
        }
    }
</script>



