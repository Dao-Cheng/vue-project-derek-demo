<script setup></script>

<template>

    <h1>ABOUT</h1>
    <RouterLink :to="{ name: 'Content1', params: { id: 1 } }">內容1</RouterLink> |
    <RouterLink :to="{ name: 'Content1', params: { id: 2 } }">內容1</RouterLink> |
    <RouterLink :to="{ name: 'Content2' }">內容2</RouterLink> |
    <RouterView />
</template>

<style scoped></style>