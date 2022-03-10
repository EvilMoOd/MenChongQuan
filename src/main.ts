//全家桶
import { createApp } from 'vue'
import App from './App.vue'
import './reset.css'
import router from './router'
import { createPinia } from 'pinia'
//Element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

const pinia = createPinia()

createApp(App).use(ElementPlus).use(router).use(pinia).mount('#app')
