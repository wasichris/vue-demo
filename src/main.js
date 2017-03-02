// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import toastrSetup from './setup/toastrSetup'
import jquerySetup from './setup/jquerySetup'
import eventBus from './setup/eventBus'

// bootstrap
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/js/bootstrap'

// font-awesome
import 'font-awesome/scss/font-awesome.scss'

// app style
import './assets/css/app.scss'

// setup
toastrSetup()
jquerySetup()

/* eslint-disable no-new */
new Vue({
    el: '#app',
    data() {
        return {
            // Bind our event bus to our $root Vue model.
            bus: eventBus
        }
    },
    router, // 表示 router: router (ES6屬性簡寫語法糖)
    template: '<App/>',
    components: { App }
})