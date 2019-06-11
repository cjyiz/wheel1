import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Col from './col'
import Row from './row'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
// import Toast from './toast's
import plugin from './plugin'
import { callbackify } from 'util';
Vue.config.productionTip = false
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-col',Col)
Vue.component('g-row',Row)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-sideer',Sider)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)
// Vue.component('g-toast',Toast)
Vue.use(plugin)
new Vue({
  el:'#app',
  data:{
    loading1:false,
    loading2:true,
    loading3:false,
    message:'hi'
  },
  created(){

  },
  methods:{
    showToast(){
      this.$toast('你的智商需要充值',{
        position:'bottom',
        enableHtml:false,
        closeButton:{
          text:'已充值',
          callbackify(){
            console.log('已经充值了')
          }
        },
        autoClose:false,
        autoCloseDelay:3
      })
    }
  }
})

// // 单元测试,用{}作用域隔离 ，然后断言expect
// import  chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)
// const expect=chai.expect
// // 一个单元测试用例
// {
//   const Constructor = Vue.extend(Button)
//   const button=new Constructor(
//     {
//       propsData:{
//         icon:'shezhi',
//       }
//     }
//   )
//   button.$mount('#test')
//   let useElement =button.$el.querySelector('use')
//   let href=useElement.getAttribute('xlink:href')
//   // 测试语法，固定的
//   expect(href).to.eq('#i-shezhi')
//   button.$el.remove()
//   button.$destroy()
// }
// // 第二个单元测试用例
// {
//   const Constructor = Vue.extend(Button)
//   const button=new Constructor(
//     {
//       propsData:{
//         icon:'shezhi',
//         loading:true
//       }
//     }
//   )
//   button.$mount('#test2')
//   let useElement =button.$el.querySelector('use')
//   let href=useElement.getAttribute('xlink:href')
//   expect(href).to.eq('#i-loading')
//   button.$el.remove()
//   button.$destroy()
// }

// {
//   const div=document.createElement('div')
//   document.body.appendChild(div)
//   const Constructor = Vue.extend(Button)
//   const button=new Constructor(
//     {
//       propsData:{
//         icon:'shezhi',
//         loading:true
//       }
//     }
//   )
//   button.$mount(div)
//   let svg =button.$el.querySelector('svg')
//   let {order}=window.getComputedStyle(svg)
//   expect(order).to.eq('1')
//   // 结束后把用例删除,r如果没有成功，则后面不执行
//   button.$el.remove()
//   button.$destroy()
// }

// {
//   const div=document.createElement('div')
//   document.body.appendChild(div)
//   const Constructor = Vue.extend(Button)
//   const button=new Constructor(
//     {
//       propsData:{
//         icon:'shezhi',
//         iconPosition:'right'
//       }
//     }
//   )
//   button.$mount(div)
//   let svg =button.$el.querySelector('svg')
//   let {order}=window.getComputedStyle(svg)
//   expect(order).to.eq('2')
//   button.$el.remove()
//   button.$destroy()
// }

// {
//   // mock测试用例
//   // 使用chai-spies监听函数
//   const div=document.createElement('div')
//   document.body.appendChild(div)
//   const Constructor = Vue.extend(Button)
//   const vm=new Constructor(
//     {
//       propsData:{
//         icon:'shezhi'
//       }
//     }
//   )
//   vm.$mount(div)
//   let spy=chai.spy(function(){})
//   vm.$on('click',spy)
//   // 希望这个函数被执行
//   let button =vm.$el
//   button.click()
//   expect(spy).to.have.been.called()
// }