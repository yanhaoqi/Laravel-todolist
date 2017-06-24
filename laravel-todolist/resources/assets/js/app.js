
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
import VueResource from 'vue-resource'
import Vue from 'vue'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
    routes: [
        { path: '/', component: require('./components/home.vue') },
        { path:'/author',component: require('./components/author.vue')}
    ]
});

const app = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});






