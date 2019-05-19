<template>
  <button class="button" :class="{[`icon-${iconPosition}`]: true}">
    <!-- <button class='button' :class="{undefined:true}"></button>
      <button class='button' :class="{left:true}"></button>
      <button class='button' :class="{right:true}"></button>
    等价于上面的一行代码-->
    <div class="content">
      <slot></slot>
    </div>
    <svg class="icon" v-if="icon">
      <!-- 使用v-bind绑定样式 -->
      <!-- 下面的写法绑定属性 -->
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
  </button>
</template>
<script>
export default {
  props: ["icon", "iconPosition"]
};
</script>
<style lang='scss'>
.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.3em 1em;
  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.3em;
      margin-right: 0;
    }
    > content {
      order: 1;
    }
  }
}
</style>

