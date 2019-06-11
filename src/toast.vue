<template>
  <div class="wrapper" :class="toastClasses">
    <div class="toast" ref="wrapper" >
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
      <span v-if="closeButton" class="close" @click="onClickClose">{{closeButton.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuluToast",
  props: {
    autoClose: {
      type: [Boolean,Number],
      default: true,
      validator(value){
        if(value===false||typeof value==='number'){
          return true
        }else{
          return false
        }
      }
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
    position: {
      type: String,
      default: "middle",
      validator(value) {
        return ["top", "bottom", "middle"].indexOf(value) >= 0;
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
  computed: {
    toastClasses() {
      return { [`position-${this.position}`]: true };
    }
  },
  methods: {
    updateStyles() {
      // 这个方法不太好
      this.$nextTick(() => {
        this.$refs.line.style.height = `{this.$refs.wrapper.getBoundingClientRect().height}px`;
      });
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoClose * 1000);
      }
    },
    close() {
      this.$el.remove();
      this.$emit("beforeClose");
      this.$destroy();
    },
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this);
      }
    }
  }
};
</script>
<style lang='scss' scoped>
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translatgeY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translatgeY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  $animation-duration: 300ms;
  &.position-bottom {
    bottom: 0;
    .toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-up $animation-duration;
    }
  }
  &.position-top {
    top: 0;
    .toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down $animation-duration;
    }
  }
  &.position-middle {
    top: 50%;
    .toast {
      animation: fade-in $animation-duration;
    }
    transform: translateX(-50%) translateY(-50%);
  }
}
.toast {
  display: flex;
  align-items: center;
  font-size: var(--font-size);
  background-color: var(--toast-bg);
  min-height: var(--toast-height);
  line-height: 1.8;
  border: 1px solid red;
  padding: 0 16px;
  animation: fade-in 1s;
  .message {
    padding: 4px 0;
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
}
</style>

