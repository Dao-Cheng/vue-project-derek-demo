<script setup>
import BMIRecord from '@/components/BMIRecord.vue';
import { ref } from 'vue';

const height = ref();
const weight = ref();
const bmi = ref();
const isHidden = ref(true);
const bmiRecords = ref([]);

const calBMI = () => {
    bmi.value = (weight.value / Math.pow(height.value * 0.01, 2)).toFixed(2);
    isHidden.value = false;
    bmiRecords.value.push(bmi.value);
}
</script>

<template>
    <div>
        身高(公分cm)：<input type="number" v-model="height" />
        體重(公斤kg)：<input type="number" v-model="weight" />
        <br />
        <ProjectButton @click="calBMI()" type="cal"></ProjectButton>
        <button @click="calBMI()" class="btn btn-success"><i class="bi bi-calculator"></i>計算</button>
        <br />
        <span :hidden="isHidden">您的BMI：{{ bmi }}</span>
    </div>

    <BMIRecord :records="bmiRecords" />
</template>


<style scoped>
div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
}
</style>