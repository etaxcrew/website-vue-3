//import vue router
import { createRouter, createWebHistory } from 'vue-router';

//import axios
import axios from 'axios';

//default base URL / EndPoint API
axios.defaults.baseURL = "https://panel.gorontalohosting.com";

//define a routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import( /* webpackChunkName: "Home" */ "@/views/home/Index"),
    },

]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes // <-- routes
})

export default router
