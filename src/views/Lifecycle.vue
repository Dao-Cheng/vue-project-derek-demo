<script setup>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';


const count = ref(1);

// Composition API 組合式
console.log('Composition API');

onBeforeMount(() => {
    const h1Tag = document.querySelector('h1');
    console.log(h1Tag);
    console.log('組件掛載前BeforeMount');
})
onMounted(() => {
    const h1Tag = document.querySelector('h1');
    console.log(h1Tag);
    console.log('組件掛載後Mounted');
})

onBeforeUpdate(() => {
    const btnTag = document.querySelector('#lf-btn');
    console.log(btnTag, btnTag.textContent);
    console.log('組件更新前BeforeUpdate');
})
onUpdated(() => {
    const btnTag = document.querySelector('#lf-btn');
    console.log(btnTag, btnTag.textContent);
    console.log('組件更新後Update');
})

onBeforeUnmount(() => {
    console.log('組件銷毀前BeforeUnmount');
})
onUnmounted(() => {
    console.log('組件銷毀後Unmounted');
})

</script>

<script>

// Options API 選項式
export default {
    data() {
        console.log('Init Options API');
        return {}
    }
}

</script>

<template>
    <h1>Hello</h1>
    <button id="lf-btn" @click="count++">{{ count }}</button>
</template>

<style scoped></style>
