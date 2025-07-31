<script setup>

const props = defineProps({
    records: {
        type: Array,
        required: true
    }
})

// const bmis = [18, 30, 22.5, 23, 15]

// v-for 

// computed
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

</script>

<template>

    <h2>測量記錄</h2>

    <div v-for="(item, index) in props.records" :key="index">
        BMI：{{ item }} {{ getStatus(item) }}
    </div>

</template>

<style></style>