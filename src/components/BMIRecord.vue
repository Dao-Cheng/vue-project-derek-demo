<script setup>
import { computed, ref } from 'vue';


const props = defineProps({
    records: {
        type: Array,
        required: true
    }
})

// const bmis = [18, 30, 22.5, 23, 15]

// v-for 

// computed
const arr = ['羽球', '網球', '籃球'];
const newArr = [
    { 'id': '1', 'name': '羽球' },
    { 'id': '2', 'name': '網球' },
    { 'id': '3', 'name': '網球' }
]
arr.map(x => {
    let count = 1
    return {
        'id': count++,
        'name': x
    };
})


const b = [20]
const nb = [{
    'bmi': '20',
    'status': '健康體重'
}]

const bmiRecords = computed(() => {
    // Array => [20 , 30 , 33]
    const newArray = props.records.map(x => {
        return {
            'bmi': x,
            'status': getStatus(x)
        }
    })
    return newArray;
    // return [{
    //     'bmi': '20',
    //     'status': '健康體重'
    // }];
})

// Array.map

// BMI < 18.5
// 體重過輕
// 18.5 ≤ BMI < 24
// 健康體重
// 24 ≤ BMI < 27
// 體重過重
// BMI ≥ 27
// 肥胖

function getStatus(bmi) {

    console.log('fn');

    let status;

    if (bmi < 18.5) {
        status = '體重過輕';
    }
    else if (bmi >= 18.5 && bmi < 24) {
        status = '健康體重';
    }
    else if (bmi >= 24 && bmi < 27) {
        status = '體重過重';
    } else {
        status = '肥胖';
    }

    return status;
}

const text = ref('');

</script>

<template>

    <h2>測量記錄</h2>

    <!-- <div v-for="(item, index) in props.records" :key="index">
        BMI：{{ item }} {{ getStatus(item) }}
    </div> -->

    <div v-for="(item, index) in bmiRecords" :key="index" class="alert alert-primary" role="alert">
        BMI：{{ item.bmi }} {{ item.status }}
    </div>

    <input v-model="text"></input>
    {{ text }}

</template>

<style></style>