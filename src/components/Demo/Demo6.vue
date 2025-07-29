<script setup>

import { reactive, ref } from 'vue';
import { AbilityPoint } from '../../class/ability-point';

const apRef = ref(AbilityPoint.generateRandom());

const changeApRef = () => {
    apRef.value = AbilityPoint.generateRandom();
}

const apReactive = reactive(AbilityPoint.generateRandom());
const changeApReactive = () => {
    const ap = AbilityPoint.generateRandom();
    apReactive.str = ap.str;
    apReactive.dex = ap.dex;
    apReactive.int = ap.int;
    apReactive.luk = ap.luk;
}

</script>

<template>

    <div>
        <ul>
            <li>力量：{{ apRef.str }}</li>
            <li>敏捷：{{ apRef.dex }}</li>
            <li>智力：{{ apRef.int }}</li>
            <li>幸運：{{ apRef.luk }}</li>
        </ul>
    </div>
    <button @click="changeApRef()">擲骰</button>

    <div>
        <ul>
            <li>力量：{{ apReactive.str }}</li>
            <li>敏捷：{{ apReactive.dex }}</li>
            <li>智力：{{ apReactive.int }}</li>
            <li>幸運：{{ apReactive.luk }}</li>
        </ul>
    </div>
    <button @click="changeApReactive()">擲骰</button>

</template>

<style scoped></style>