<script setup>
import { ref } from 'vue';

const text = ref("Hello");

function changeTextValue(event) {
    text.value = event.target.value;
}
</script>

<template>
    <h1>{{ text }}</h1>
    <input :value="text" v-on:input="changeTextValue($event)" />
    
    <input v-model="text" />
</template>

<style scoped></style>