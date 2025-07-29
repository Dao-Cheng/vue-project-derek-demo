<script setup>
function printLog(event) {
    console.log('print success!');
    console.log(event);
}
const x = 1;
function printName(event, name) {
    console.log(event);
    console.log(name);
}
</script>

<template>
    <button v-on:click="printLog">按鈕Method</button>
    <button v-on:click="console.log('Hello!')">按鈕Inline1</button>
    <button v-on:click="x > 0 ? console.log(true) : console.log(false);">按鈕Inline2</button>
    <button @click="printLog($event)">按鈕Inline3</button>
    <button @click="printName($event, 'Derek')">按鈕Inline4</button>
    <button @click="(event) => printName(event, 'Sam')">按鈕Inline5</button>
</template>

<style scoped></style>