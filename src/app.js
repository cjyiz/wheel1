import Vue from 'vue'
import button from './button'
import Icon from './icon'
// Vue.config.productionTip = false
Vue.component('g-button',button)
Vue.component('g-icon',Icon)
new Vue({
  el:'#app',
  data:{
    loading1:false
  }
})
