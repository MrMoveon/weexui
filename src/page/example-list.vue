<template>
    <div>
        <m-header title="weex ui组件"></m-header>
        <scroller show-scrollbar="false">
           <m-cell title="header" v-on:handle="jump('header')"></m-cell>
           <m-cell title="cell" v-on:handle="jump('cell')"></m-cell>
        </scroller>
    </div>
</template>

<script>
  var navigator = weex.requireModule('navigator')
  const modal = weex.requireModule('modal')
  import header from '../components/header/header.vue'
  import cell from '../components/cell/cell.vue'

  export default {
    name:'header',
    data() {
      return {
      
      };
    },
   components:{
      'mHeader':header,
      'mCell':cell
    },
    methods: {
      
    }
  }
</script>