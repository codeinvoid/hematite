import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Footer from './components/Footer.vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'uno.css'

const app = createApp(App)
const routes = [
    { path: '/', component: App },
    { path: '/index', component: Footer },
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

app.use(router)
app.mount('#app')