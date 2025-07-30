<script setup>
const arr = ['a', 'b', 'c'];
const obj = { 'name': 'Derek', 'age': 33 };
// fof => for...of  
for (const item of arr) {
    console.log(item);
}

// fin => for...in
// 陣列
for (const item in arr) {
    console.log(item);
}
// 物件
for (const item in obj) {
    console.log(item);
}

import { ref } from 'vue';
import foodData from '../../data/food.json';
const foodItems = ref(foodData);
const selectedItem = ref(-1);

import studentData from '../../data/student.json';
const student = ref(studentData[5]);

function changeFoodItems() {
    foodItems.value = foodItems.value.filter(x => x.id > 5);
}

</script>

<template>

    <select v-model="selectedItem">
        <option disabled value="-1">請選擇</option>
        <option v-for="(item, index) in foodItems" :key="item.id" v-bind:value="item.id">
            {{ `${index}___${item.name}` }}
        </option>
    </select>
    <button @click="changeFoodItems()">改變foodItems</button>
    <h1>選擇ID:{{ selectedItem }}</h1>

    <ul>
        <li v-for="(item, key) in student">
            {{ key }}：{{ item }}
        </li>
    </ul>

</template>

<style scoped></style>
