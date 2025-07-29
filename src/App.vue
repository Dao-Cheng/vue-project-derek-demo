<script setup>
import BMI from './components/BMI.vue';
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
import FToC from './components/FToC.vue';

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
    <p>

        <RouterLink :to="{ path: '/' }">首頁</RouterLink> |
        <RouterLink :to="{ name: 'About' }">關於我們</RouterLink> |
        <!-- <RouterLink :to="{ name: 'Content1' }">關於我們1</RouterLink> |
        <RouterLink :to="{ name: 'Content2' }">關於我們2</RouterLink> | -->
    </p>
    <hr />
    <RouterView />

</template>

<style scoped></style>
