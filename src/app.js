import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
// Vue.config.productionTip = false
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
new Vue({
  el:'#app',
  data:{
    loading1:false,
    loading2:true,
    loading3:false
  }
})

// 单元测试
import  chai from 'chai'
const expect=chai.expect
// 一个单元测试用例
{
  const Constructor = Vue.extend(Button)
  const button=new Constructor(
    {
      propsData:{
        icon:'shezhi',
      }
    }
  )
  button.$mount('#test')
  let useElement =button.$el.querySelector('use')
  let href=useElement.getAttribute('xlink:href')
  // 测试语法，固定的
  expect(href).to.eq('#i-shezhi')
  button.$el.remove()
  button.$destroy()
}
// 第二个单元测试用例
{
  const Constructor = Vue.extend(Button)
  const button=new Constructor(
    {
      propsData:{
        icon:'shezhi',
        loading:true
      }
    }
  )
  button.$mount('#test2')
  let useElement =button.$el.querySelector('use')
  let href=useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  button.$el.remove()
  button.$destroy()
}

{
  const div=document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button=new Constructor(
    {
      propsData:{
        icon:'shezhi',
        loading:true
      }
    }
  )
  button.$mount(div)
  let svg =button.$el.querySelector('svg')
  let {order}=window.getComputedStyle(svg)
  expect(order).to.eq('1')
  // 结束后把用例删除,r如果没有成功，则后面不执行
  button.$el.remove()
  button.$destroy()
}

{
  const div=document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button=new Constructor(
    {
      propsData:{
        icon:'shezhi',
        iconPosition:'right'
      }
    }
  )
  button.$mount(div)
  let svg =button.$el.querySelector('svg')
  let {order}=window.getComputedStyle(svg)
  expect(order).to.eq('2')
  button.$el.remove()
  button.$destroy()
}

{
  // mock测试用例
  const div=document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const gButton=new Constructor(
    {
      propsData:{
        icon:'shezhi',
        iconPosition:'right'
      }
    }
  )
  gButton.$mount(div)
  gButton.$on('click',function(){
    console.log(1)
  })
  let button =gButton.$el
 
  button.click()
  button.$el.remove()
  button.$destroy()
}