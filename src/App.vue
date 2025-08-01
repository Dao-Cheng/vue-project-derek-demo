<script setup>

import { useToDoListStore } from '@/stores/todoList';
const toDoListStore = useToDoListStore();

</script>

<template>

    <!-- <Demo1 />
    <Demo2 />
    <Demo3 />
    <Demo4 />
    <Demo5 />
    <Demo6 />
    <Demo7 />
    <Demo8 /> -->
    <!-- <BMI /> -->
    <!-- <Demo9 /> -->
    <!-- <Demo10 /> -->
    <!-- <FToC/> -->

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <RouterLink :to="{ path: '/' }" class="navbar-brand">首頁</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'About' }" class="nav-link">關於我們</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'DemoList' }" class="nav-link">Demo</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'Lifecycle' }" class="nav-link">生命週期</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'ShoppingCart' }" class="nav-link">購物車</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'Parent' }" class="nav-link">父子組件</RouterLink>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            功能練習<span class="badge bg-danger" v-if="toDoListStore.waitingCount > 0"><i
                                    class="bi bi-exclamation-lg"></i>
                            </span>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <RouterLink :to="{ name: 'BMI' }" class="dropdown-item">1.BMI計算機</RouterLink>
                            </li>
                            <li>
                                <RouterLink :to="{ name: 'FToC' }" class="dropdown-item">2.溫度轉換</RouterLink>
                            </li>
                            <li>
                                <RouterLink :to="{ name: 'StudentScore' }" class="dropdown-item">3.學生成績單</RouterLink>
                            </li>
                            <li>
                                <RouterLink :to="{ name: 'ToDoList' }" class="dropdown-item">4.待辦事項</RouterLink>
                            </li>
                            <li>
                                <RouterLink :to="{ name: 'PiniaToDoList' }" class="dropdown-item">4-1.Pinia待辦事項<span
                                        class="badge bg-danger" v-if="toDoListStore.waitingCount > 0">{{
                                            toDoListStore.waitingCount }}</span>
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink :to="{ name: 'PokemonList' }" class="dropdown-item">5.寶可夢圖鑑</RouterLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="content-div">

        <RouterView />

    </div>


</template>

<style scoped>
.content-div {
    margin: auto;
    width: 80%;
}
</style>
