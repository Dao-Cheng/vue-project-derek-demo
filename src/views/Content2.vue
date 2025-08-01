<script setup>
import ProjectButton from '@/components/ProjectButton.vue';
import { useCounterStore } from '@/stores/counter';

// const add = ()=>{
// }
// add();
const counterStore = useCounterStore();

</script>

<template>

    <h1>Content2</h1>
    <h2>Count：{{ counterStore.count }}</h2>
    <h2>DoubleCount：{{ counterStore.doubleCount }}</h2>
    <ProjectButton @p-click="counterStore.addCount()" type="cal"></ProjectButton>

</template>

<style scoped></style>