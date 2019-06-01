<template>
  <div
    class="col"
    :class="colClass"
    :style="colStyle"
  >
  <div style='border:1px solid green; height:100px;'>
       <slot></slot>
  </div>
   
  </div>
</template>
<script>
export default {
  name: "GuluCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    }
  },
  computed:{
      colStyle(){
          return {
            paddingLeft:this.gutter/2+'px',
            paddingRight:this.gutter/2+'px'
          }
      },
      colClass(){
          let {span,offset}=this
          return [span &&`col-${span}`,offset && `offset-${offset}`]
      }
  },
  data() {
    return {
      gutter: 0
    }
  }
};
</script>
<style lang="scss" scoped>
.col {
  height: 100px;
padding:0 10px;
  width: 50%;

  $class: col-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class: offset-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}
</style>


