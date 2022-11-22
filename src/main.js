import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Index from './pages/Index.vue'
import Footer from './components/footer/Footer.vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'uno.css'
import { Application } from "@hotwired/stimulus"
import ClipboardController from "./controllers/clipboard_controller"

window.Stimulus = Application.start()
Stimulus.register("clipboard", ClipboardController)

const app = createApp(App)
const routes = [
    { path: '/', component: Index },
    { path: '/index', component: Footer },
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

app.use(router)
app.mount('#app')
