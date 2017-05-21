
<template>
  <div @androidback="back">
    <router-view style="flex:1"></router-view>
  </div>
</template>

<script>

  export default {
    mounted(){
      this.$router.push('/example')
    },
    methods: {
      back: function () {
        this.$router.back()
      }
    }
  }
</script>
