<template>
    <div class='toast'>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'GuluToast'
}
</script>
<style lang='scss' scoped>

    .toast{
        display: flex;
        align-items: center;
        font-size:var(--font-size);
        background-color: var(--toast-bg);
        height:var(--toast-height);
        line-height: 1.8;
        border:1px solid red;
        position: fixed;
        top:0;
        left:50%;
        padding: 0 16px;
        transform:translateX(-50%);
    }
</style>

