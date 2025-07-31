<script setup>
import Child from '@/components/Child.vue';

const title = 'v-bind父組件給的標題'

</script>

<template>

    <hr />
    <Child title1="父組件給的標題" />
    <br />
    <Child v-bind:title1="title" />
    <hr />

</template>

<style scoped></style>