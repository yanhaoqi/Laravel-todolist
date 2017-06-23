
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import Vue from 'vue'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueResource)

const router = new VueRouter({
    routes: [
        { path: '/', component: require('./App.vue') }
    ]
})


const app = new Vue({
    el: '#app',
    data(){
        return {

        }
    },
    methods: {
        // test(){
        //     console.log('要发ajax了')
        //     this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        //         headers: {
        //
        //         },
        //         emulateJSON: true
        //     }).then(function(response) {
        //         // 这里是处理正确的回调
        //         console.log(response)
        //     }, function(response) {
        //         // 这里是处理错误的回调
        //         console.log(response)
        //     });
        // }
    },
    router,
    template: '<App/>',
    components: { App }
});






