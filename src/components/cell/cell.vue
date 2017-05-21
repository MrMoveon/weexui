<template>
    <div class="cell-wrap" @click="handle">
        <div class="cell-title">
            <image v-if="icon" class="cell-title-icon" :src="icon"></image>
            <text class="cell-title-text">{{title}}</text>
        </div>
        <div class="cell-value">
            <text class="cell-value-text">{{value}}</text>
            <div class="cell-arrow">
                <image class="cell-arrow-img" src="http://www.mfancms.com/douban/images/ic_group_topic_right_arrow.png"></image>
            </div>
        </div>
        
    </div>
</template>
<style>
    .cell-wrap{
        height:92px;
        width:750px;
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
        padding-left: 20px;
        padding-right:20px;
        border-bottom-width:1px;
        border-bottom-style:solid;
        border-bottom-color:#ccc;
    }
    .cell-title{
        flex:1;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
    }
    .cell-title-icon{
        width:40px;
        height:40px;
        margin-right:10px;
    }
    .cell-title-text{
        font-size: 28px;
    }
    .cell-value{
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }
    .cell-value-text{
        font-size: 24px;
        color: #999;
    }
    .cell-arrow-img{
        width: 20px;
        height:20px;
    }
</style>
<script>
    
    export default{
        name:'cell',
        props:{
            title:{
                type:String,
                default:''
            },
            value:{
                type:String,
                default:''
            },
            icon:{
                type:String,
                default:''
            }
        },
        data(){
            return{

            }
        },
        created(){

        },
        mounted(){

        },
        methods:{
            handle(){
                this.$emit('handle');
            }
        }
    }
</script>