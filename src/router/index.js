// 1.匯入vue-router 所需函式
import { createRouter, createWebHistory } from "vue-router";

// 2.匯入組件(已建立)
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

// 3.定義路由
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/About',
        component: About
    },
]

// 4.建立router實體
const router = createRouter({
    history: createWebHistory(),
    routes
})

// 5.匯出
export default router;