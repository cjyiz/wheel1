<template>
    <div class='wrapper' :class="{error}">
        <input :value='value' type="text" 
        :disabled='disabled' :readonly='readonly' 
        @change="$emit('change',$event)"
        @input="$emit('input',$event)"
        @focus="$emit('focus',$event)"
        @blur="$emit('blur',$event)">
        <!-- 上面的$event是传值的。emit第一个参数是事件名，第二个参数是传的值，第三个参数是传的值 -->

        <template v-if='error'>
            <icon name='error' class='icon-error'></icon>
            <span class='error-message'>{{error}}</span>    
        </template>
      
    </div>
</template>
<script>
import Icon from './icon'
export default {
    components:{Icon},
    name:'GuluInput',
    props:{
        value:{
            type:String
        },
    disabled:{
        type:Boolean,
        default:false
    },
    readonly:{
        type:Boolean,
        default:false
    },
    error:{
        type:String
    }
}}
</script>
<style  lang='scss' scoped>
.wrapper{
    display: inline-block;
    >input{
        margin: 0px;
        height:32px;
        border:1px solid var(--border-color);
        border-radius:4px;
        padding: 0 8px;
        &:hover{
            border-color:rgb(112, 53, 221)
        }
        &:focus{
            box-shadow:inset 0 1px 3px  rgb(112, 53, 221);
            border-color:rgb(112, 53, 221);
            outline:none;
        }
        &[disabled],&[readonly]{
            border-color:#bbb;
            color:#bbb;
            cursor: not-allowed;
        }
    }
    &.error{
    > input{
        border-color:salmon;
        :focus{
        border-color:salmon;
         box-shadow:inset 0 1px 3px  salmon;
        }
    }
    
    .icon-error{
        fill:red;
    }
    .error-message{
        color:red;
    }
    }
}
</style>

