<template>
    <div class="container">
        <m-header title="header组件">
            <left-item v-on:handle="back" icon="http://www.mfancms.com/douban/images/ic_bar_back_white.png" slot='left'></left-item>
        </m-header>
        <div class="page-content">
            <m-cell title="带图标" icon="http://www.mfancms.com/douban/images/ic_my_movies_tvs.png" value="20"></m-cell>
            <m-cell title="无图标" value="20" ></m-cell>
            <m-cell title="标题"></m-cell>
        </div>
    </div>
</template>
<style>
.container{
    width: 750px;
}
    .page-content{
        flex: 1;
        background-color:#fff;
     }
</style>
<script>
    import header from '../components/header/header.vue'
    import leftItem from '../components/header/leftItem.vue'
    import cell from '../components/cell/cell.vue'
    export default{
        name:'cell',
        data(){
            return{

            }
        },
        components:{
            'mHeader':header,
            'mCell':cell,
            leftItem
           
        },
        created(){

        },
        mounted(){

        },
        methods:{

        }
    }
</script>