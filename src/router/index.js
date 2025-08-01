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
import StudentScore from "@/views/StudentScore.vue";
import ToDoList from "@/views/ToDoList.vue";
import Lifecycle from "@/views/Lifecycle.vue";
import Parent from "@/views/Parent.vue";
import ShoppingCart from "@/views/ShoppingCart.vue";
import PokemonList from "@/views/PokemonList.vue";
import PiniaToDoList from "@/views/PiniaToDoList.vue";
import PiniaShoppingCart from "@/views/PiniaShoppingCart.vue";

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
        path: '/StudentScore',
        component: StudentScore,
        name: 'StudentScore'
    },

    {
        path: '/ToDoList',
        component: ToDoList,
        name: 'ToDoList'
    },
    {
        path: '/DemoList',
        component: DemoList,
        name: 'DemoList'
    },
    {
        path: '/Lifecycle',
        component: Lifecycle,
        name: 'Lifecycle'
    },
    {
        path: '/Parent',
        component: Parent,
        name: 'Parent'
    },
    {
        path: '/ShoppingCart',
        component: ShoppingCart,
        name: 'ShoppingCart'
    },

    {
        path: '/PiniaToDoList',
        component: PiniaToDoList,
        name: 'PiniaToDoList'
    },
    {
        path: '/PiniaShoppingCart',
        component: PiniaShoppingCart,
        name: 'PiniaShoppingCart'
    },
    {
        path: '/PokemonList',
        component: PokemonList,
        name: 'PokemonList'
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