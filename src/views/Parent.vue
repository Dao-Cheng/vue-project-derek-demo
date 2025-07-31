<script setup>
import Child from '@/components/Child.vue';

const title = 'v-bind父組件給的標題'
const count = 10;

function clicked(data) {
    console.log(data, '子組件被點擊');
}

</script>

<template>

    <hr />
    <Child title="父組件給的標題" msg="訊息" :count="count" @btnClicked="clicked($event)" />
    <br />
    <!-- <Child v-bind:title1="title" :title2="title" /> -->
    <hr />

</template>

<style scoped></style>