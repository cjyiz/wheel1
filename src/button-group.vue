<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>
<script>
import Icon from './icon.vue'
export default {
    name:'GuluButtonGroup',
    components:{
      'g-icon':Icon
    },
    mounted(){
        // console.log(this.$el.children)
        // 打印出div元素
        for(let node of this.$el.children){
            let name=node.nodeName.toLowerCase()
            if( name !=='button'){
                console.warn(`g-button-group的子元素应该全是button,但是你写的是${name}`)
            }
            // console.log(node)
        }
    }
};
</script>
<style lang='scss'>
.g-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .g-button {
    border-radius: 0;
    &:not(:first-child){
         margin-left:-1px;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover{
        position:relative;
        z-index: 1;
    }
  }
}
</style>
