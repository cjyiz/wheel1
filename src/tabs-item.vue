<template>
    <div class='tabs-item'>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'GuluTabsItem',
    props:{
        disabled:{
                type:String,
                default:false
        }
    }
}
</script>
<style>

</style>

