<script setup>

import Demo1 from './components/Demo/Demo1.vue';
import Demo10 from './components/Demo/Demo10.vue';
import Demo2 from './components/Demo/Demo2.vue';
import Demo3 from './components/Demo/Demo3.vue';
import Demo4 from './components/Demo/Demo4.vue';
import Demo5 from './components/Demo/Demo5.vue';
import Demo6 from './components/Demo/Demo6.vue';
import Demo7 from './components/Demo/Demo7.vue';
import Demo8 from './components/Demo/Demo8.vue';
import Demo9 from './components/Demo/Demo9.vue';

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
                        <RouterLink :to="{ name: 'BMI' }" class="nav-link">1.BMI計算機</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'FToC' }" class="nav-link">2.溫度轉換</RouterLink>
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
