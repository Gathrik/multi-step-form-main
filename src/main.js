import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import Step1 from "./components/Step1.vue";


const routes = [
    { path: '/', component: Step1, name: 'Step1' },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')

