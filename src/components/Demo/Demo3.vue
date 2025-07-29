<script setup>
const dynamicId = null;
const url = 'http://google.com.tw';
const target = '_blank';
const isDisabled = true;
const attrObj = {
    'id': 'myId',
    'class': 'myClass',
    'style': 'color:red'
};
const attributeName = 'id';

</script>

<template>
    <h1 id=null>我是標題</h1>
    <h1 :id="dynamicId">我是標題</h1>
    <a :href="url" :target="target">Google</a>
    <button :disabled="isDisabled">按鈕</button>
    <h2 v-bind="attrObj">標題2</h2>
    <h3 v-bind:[attributeName]="dynamicId">標題3</h3>
</template>

<style scoped>
.myClass {
    background-color: yellowgreen;
}
</style>