import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
Vue.config.productionTip = false
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
new Vue({
  el:'#app',
  data:{
    loading1:false,
    loading2:true,
    loading3:false,
    message:'hi'
  },
  created(){
    setTimeout(()=>{
      let event=new Event('change')
      let inputElement=this.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      console.log('hi')
    },3000)
  },
  methods:{
    inputChange(x,y){
      console.log(x)
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