import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueDisqus from 'vue-disqus'

Vue.use(VueDisqus)

Vue.config.productionTip = false

new Vue({
 watch: {
    '$route' (to, from) {
    	
      $(document).scrollTop(0);
    }
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
