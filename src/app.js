import App from './App.vue'
import router from './router/router';
import mixins from './mixins'
Vue.mixin(mixins)
new Vue({
  el: '#root',
  router,
  render: h => h(App)
})
