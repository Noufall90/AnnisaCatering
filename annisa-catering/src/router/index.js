import { createRouter, createWebHistory } from "vue-router";
import Main from '../views/main.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            name: 'main',
            component : Main
        },
        {
            path:'/gallery', 
            name: 'gallery',
            component: () => import('../views/gallery.vue')
        }
    ],
    scrollBehavior(to, from, savedPosition){
        return {top: 0}
    }    
})

export default router;