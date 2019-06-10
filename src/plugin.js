import Toast from  './toast'
export default{
    install(Vue,options){
        // 下面代码的作用生成一个toast组件，放进body里面
        Vue.prototype.$toast=function(message,toastOptions){
           let Constructor =Vue.extend(Toast)
           let toast=new Constructor({
               propsData: toastOptions
           })
           toast.$slots.default=[message]
           toast.$mount()
           document.body.appendChild(toast.$el)
        }
}
}
