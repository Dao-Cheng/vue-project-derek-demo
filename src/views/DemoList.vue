<script setup>

import { ref } from 'vue';
import Demo1 from '@/components/Demo/Demo1.vue';
import Demo2 from '@/components/Demo/Demo2.vue';
import Demo3 from '@/components/Demo/Demo3.vue';
import Demo4 from '@/components/Demo/Demo4.vue';
import Demo5 from '@/components/Demo/Demo5.vue';
import Demo6 from '@/components/Demo/Demo6.vue';
import Demo7 from '@/components/Demo/Demo7.vue';
import Demo8 from '@/components/Demo/Demo8.vue';
import Demo9 from '@/components/Demo/Demo9.vue';
import Demo10 from '@/components/Demo/Demo10.vue';
import Demo11 from '@/components/Demo/Demo11.vue';
import Demo12 from '@/components/Demo/Demo12.vue';
import Demo13 from '@/components/Demo/Demo13.vue';
import Lifecycle from './Lifecycle.vue';
import Demo14 from '@/components/Demo/Demo14.vue';
import Demo15 from '@/components/Demo/Demo15.vue';
//                     0      1      2
const componentList = [Demo1, Demo2, Demo3, Demo4, Demo5, Demo6,
    Demo7, Demo8, Demo9, Demo10, Demo11, Demo12, Demo13, Lifecycle, Demo14,
    Demo15];

const selected = ref(15);

</script>

<template>

    <div>Demo:
        <select v-model="selected">
            <option v-for="(item, index) in componentList" :value="index">
                {{ item.__name }}
            </option>
        </select>
    </div>

    <hr />

    <KeepAlive>
        <component :is="componentList[selected]"></component>
    </KeepAlive>


</template>

<style scoped></style>