<script setup>
import { reactive, ref } from 'vue';

const count = ref(0);
function addCount() {
    count.value++;
}

const style = reactive({ "color": "red" });
function changeColor() {
    const colors = ["green", "blue", "red", "yellow"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    style.color = colors[randomIndex];
    // style = reactive({ "color": "green" }); Error
}

</script>

<template>
    <button @click="addCount()">{{ count }}</button>
    <button @click="changeColor()" :style="style">{{ style.color }}</button>
</template>

<style scoped></style>