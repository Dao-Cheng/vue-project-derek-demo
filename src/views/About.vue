<script setup>
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();

</script>

<template>

    <h1>ABOUT</h1>
    <hr />
    {{ counterStore.count }}
    <hr />

    <RouterLink :to="{ name: 'Content1' }">內容1-無參數</RouterLink> |
    <RouterLink :to="{ name: 'Content1', params: { id: 1 } }">內容1-參數1</RouterLink> |
    <RouterLink :to="{ name: 'Content1', params: { id: 2 } }">內容1-參數2</RouterLink> |
    <RouterLink :to="{ name: 'Content2' }">內容2</RouterLink> |
    <RouterView />
</template>

<style scoped></style>