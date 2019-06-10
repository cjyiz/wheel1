<template>
  <div class="toast" ref="wrapper">
      <div class='message'>
    <slot v-if="!enableHtml"></slot>
    <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span v-if="closeButton" class="close" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>

<script>
export default {
  name: "GuluToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 50
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "关闭",
          callback: undefined
        };
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position:{
        type:String,
        default:'top',
        validator(value){
          return  ['top','bottom','middle'].indexOf(value)>=0
        }
    }
  },
  created() {
    console.log(this.closeButton);
  },
  mounted() {
    this.execAutoClose();
    this.updateStyles();
  },
  methods: {
    updateStyles() {
        // 这个方法不太好
      this.$nextTick(() => {
        this.$refs.line.style.height = `{this.$refs.wrapper.getBoundingClientRect().height}px`
      });
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    close() {
      this.$el.remove();
      this.$destroy();
    },
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback=== "function") {
        this.closeButton.callback(this);
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.toast {
  display: flex;
  align-items: center;
  font-size: var(--font-size);
  background-color: var(--toast-bg);
  min-height: var(--toast-height);
  line-height: 1.8;
  border: 1px solid red;
  position: fixed;
  top: 0;
  left: 50%;
  padding: 0 16px;
  transform: translateX(-50%);
  .message{
      padding: 4px 0;
  }
}
.close {
  padding-left: 16px;
  flex-shrink: 0;
}
.line {
  height: 100%;
  border-left: 1px solid blue;
  margin-left: 16px;
}
</style>

