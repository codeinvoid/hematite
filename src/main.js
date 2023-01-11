import { createApp } from 'vue'
import App from './App.vue'
const index = () => import('./pages/Index.vue')
const game = () => import('./pages/Game.vue')
const anime = () => import('./pages/Anime.vue')
const termsofuse = () => import('./pages/TermsOfUse.vue')
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from "unhead"
import 'uno.css'
import { Application } from "@hotwired/stimulus"
import ClipboardController from "./controllers/clipboard_controller"

window.Stimulus = Application.start()
Stimulus.register("clipboard", ClipboardController)

const app = createApp(App)
const head = createHead()
const routes = [
    { path: '/', component: index },
    { path: '/anime', component: anime },
    { path: '/game', component: game },
    { path: '/termsofuse', component: termsofuse }
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

app.use(head)
app.use(router)
app.mount('#app')