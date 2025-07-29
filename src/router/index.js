// 1.匯入vue-router 所需函式
import { createRouter, createWebHistory } from "vue-router";

// 2.匯入組件(已建立)
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Content1 from "@/views/Content1.vue";
import Content2 from "@/views/Content2.vue";
import NotFound from "@/views/NotFound.vue";
import BMI from "@/views/BMI.vue";
import FToC from "@/views/FToC.vue";
import DemoList from "@/views/DemoList.vue";

// 3.定義路由
const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/About',
        component: About,
        name: 'About',
        children: [
            {
                path: 'Content1/:id?',
                component: Content1,
                name: 'Content1',
                props: true
            },
            {
                path: 'Content2',
                component: Content2,
                name: 'Content2'
            },
        ]
    },
    {
        path: '/BMI',
        component: BMI,
        name: 'BMI'
    },
    {
        path: '/FToC',
        component: FToC,
        name: 'FToC'
    },
    {
        path: '/DemoList',
        component: DemoList,
        name: 'DemoList'
    },
    { path: '/:pathMatch(.*)*', component: NotFound, name: 'NotFound' },
]

// 4.建立router實體
const router = createRouter({
    history: createWebHistory(),
    routes
})

// 5.匯出
export default router;