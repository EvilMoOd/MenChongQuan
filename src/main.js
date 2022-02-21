import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

//element插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//bootstrap
import BScss from 'bootstrap/dist/css/bootstrap.min.css'
import BSjs from 'bootstrap/dist/js/bootstrap.bundle'

//mock
import '@/mock/mockServe'

new Vue({
  render: h => h(App),
  router,
  store,
  BScss,
  BSjs,
  beforeCreate() {
    Vue.prototype.$bus = this; //安装全局事件总线，$bus就是当前应用的vm
  },
}).$mount('#app')
