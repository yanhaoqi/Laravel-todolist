<template>
    <div id="app">
        <!--<router-view></router-view>-->
        <todo-header></todo-header>
        <todo-main></todo-main>
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

            }
        },
        components:{
            todoHeader,todoMain,todoFooter
        },
        methods:{

        }
    }
</script>



