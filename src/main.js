// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import abc from "./components/abc.vue"
import router from './router'
import father from "./components/father.vue"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    // template: '<App/>'
    render: h => h(father)
})