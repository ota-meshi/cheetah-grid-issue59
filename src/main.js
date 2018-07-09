
import Vue from 'vue'
import CGrid from 'vue-cheetah-grid'
import App from './App.vue'

Vue.use(CGrid)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
