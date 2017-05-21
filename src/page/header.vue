<template>
  <div class="container">
      <m-header title="header组件">
        <left-item v-on:handle="left" icon="http://www.mfancms.com/douban/images/ic_bar_back_white.png" slot='left'></left-item>
      </m-header>
      <div class="page-content" :style="{height:deviceHeight+'px'}">
        <scroller show-scrollbar="false">
          <m-header title="电影" style="margin-top:20px;">
              <left-item v-on:handle="left" icon="http://www.mfancms.com/douban/images/ic_bar_back_white.png" slot='left'></left-item>
              <right-item v-on:handle="left" text="完成" slot='right'></right-item>
          </m-header>
          <m-header title="左侧文字" style="margin-top:20px;" >
              <left-item v-on:handle="left"  text="返回" slot='left'></left-item>
          </m-header>
          <m-header title="右侧文字" style="margin-top:20px;">
            <right-item v-on:handle="left" text="分享" slot='right'></right-item>
          </m-header>
          <m-header title="图标" style="margin-top:20px;">
              <left-item v-on:handle="left" icon="http://www.mfancms.com/douban/images/ic_bar_back_white.png" slot='left'></left-item>
              <right-item v-on:handle="left" icon="http://www.mfancms.com/douban/images/ic_action_overflow_white.png" text="完成" slot='right'></right-item>
          </m-header>
          <m-header title="多个按钮" style="margin-top:20px;">
              <left-item v-on:handle="left" icon="http://www.mfancms.com/douban/images/ic_bar_back_white.png" text="返回" slot='left'></left-item>
              <right-item v-on:handle="left" icon="http://www.mfancms.com/douban/images/ic_action_share.png" slot='right'></right-item>
              <right-item v-on:handle="left" icon="http://www.mfancms.com/douban/images/ic_status_action_all.png" slot='right'></right-item>
          </m-header>
          <m-header title="背景" bg="#f7f7f7" color="#333" style="margin-top:20px;">
              <left-item v-on:handle="left" color="#333" icon="http://www.mfancms.com/douban/images/ic_bar_back_green.png" text="返回" slot='left'></left-item>
              <right-item v-on:handle="left" icon="http://www.mfancms.com/douban/images/ic_action_share_green.png" slot='right'></right-item>
              <right-item v-on:handle="left" icon="http://www.mfancms.com/douban/images/ic_action_overflow_icon_green.png" slot='right'></right-item>
          </m-header>
          <div style="height:1200px;background-color:#ccc"></div>
        </scroller>
      </div>
  </div>
</template>

<style>

.page-content{
  flex: 1;
  background-color:#eee;
}


</style>

<script>
  import header from '../components/header/header.vue'
  import leftItem from '../components/header/leftItem.vue'
  import rightItem from '../components/header/rightItem.vue'
  const modal = weex.requireModule('modal')

  export default {
    name:'header',
    data() {
      return {
       input:'123',
       deviceHeight:'1334'
      };
    },
   components:{
      'mHeader':header,
      leftItem,
      rightItem
    },
    created(){
       var config = weex.config;
       console.log(config)
       this.deviceHeight=config.deviceHeight
       
    },
    methods: {
      left(){
        modal.toast({ message: '点击了', duration: 1 })
      }
     
    }
  }
</script>
