<script setup>
import { nextTick, ref } from 'vue';

const count = ref(0);
function click() {
    count.value++;
    console.log(document.querySelector('#p').textContent);
    nextTick((e) => {
        console.log(1,e);
        console.log('nextTick', document.querySelector('#p').textContent);
    })
}
</script>

<template>
    <p id="p">{{ count }}</p>
    <button @click="click()">按鈕</button>
</template>

<style scoped></style>
