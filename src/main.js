// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import toastrSetup from './setup/toastrSetup'

// bootstrap
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/js/bootstrap'

// setup
toastrSetup();


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
