import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LinksView from "../views/LinksView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/', 
            name: 'home', 
            component: HomeView
         },
        { 
            path: '/links', 
            name: 'links', 
            component: LinksView
        },
        { 
            path: '/:catchAll(.*)', 
            redirect: { 
                name: 'home' 
            }
        }
    ],
});

export default router; 