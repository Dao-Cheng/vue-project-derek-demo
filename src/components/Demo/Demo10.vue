<script setup>

import { ref, watch, watchEffect } from 'vue';
import memberData from '../../data/member.json';

// 傳值(基本型別)


// 傳參考(參考型別)
const person = { name: 'Derek' };
person.name // Derek
const person2 = person;
person2.name // Derek
person2.name = 'Sam';
// console.log(person.name); // Sam


const member = ref(memberData[0]);
//    {
//         "id": 1,
//         "name": "Alice",
//         "age": 27
//     },
watch(member, (newVal, oldVal) => {
    const h1Tag = document.querySelector('h2');
    console.log(h1Tag, h1Tag.textContent);
    console.log('資料改變', newVal, oldVal);
}, {
    immediate: false,
    deep: true,
    once: false,
    flush: 'sync'
})

const changeMember = () => {
    member.value = memberData[2];
}

function addAge() {
    member.value.age = member.value.age + 1;
}

const name = ref('Amy');
const age = ref(20);

watchEffect(() => {
    console.log('here', name.value);
    console.log('here', age.value);
},)

</script>

<template>
    <h1>{{ member.name }}</h1>
    <h2>{{ member.age }}</h2>
    <button @click="addAge()">年齡+1</button>
    <button @click="changeMember()">換會員</button>
    <hr />
    <input v-model="name" />{{ name }}
    <input v-model="age" />{{ age }}
</template>

<style scoped></style>