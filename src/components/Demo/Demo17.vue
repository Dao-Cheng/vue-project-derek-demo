<script setup>
import { ref } from 'vue';


const msg = ref('Hi!!');

const toggle1 = ref(true);
const toggle2 = ref(true);

</script>

<template>

    <p v-pre>{{ msg }}</p>{{ msg }}
    <hr />
    <button @click="toggle1 = !toggle1">切換1</button> {{ toggle1 }}
    <button @click="toggle2 = !toggle2">切換2</button> toggle2:{{ toggle2 }}
    <hr />
    <p v-memo="[toggle1, toggle2]">toggle2:{{ toggle2 }}</p>

</template>

<style scoped></style>