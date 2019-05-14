<template>
  <button class="button">
    <svg class="icon" aria-hidden="true">
      <!-- 使用v-bind绑定样式 -->
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: ['icon']
};
</script>
<style>
.button {
  width: 200px;
  height: 200px;
}
</style>

