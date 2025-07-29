<script setup>
import { computed, ref, watch } from 'vue';

// 華氏
const f = ref(32);

// 攝氏  
const c = computed(() => {
    const ans = (f.value - 32) * 5 / 9;
    // Number => 轉型為Number型別
    return Number(ans.toFixed(2));
})

const displayColor = ref('black');
const displayStyle = ref({ 'color': 'black' });

watch(c, () => {
    if (c.value >= 30) {
        // 紅
        displayColor.value = 'red';
        displayStyle.value.color = 'red';
    } else if (c.value < 20) {
        // 藍
        displayColor.value = 'blue';
        displayStyle.value.color = 'blue';
    } else {
        // 黑
        displayColor.value = 'black';
        displayStyle.value.color = 'black';
    }
}, {
    immediate: true
})
</script>
<template>
    <div>
        <label>華式溫度：</label>
        <input type="number" v-model="f" />
    </div>
    <p :style="{ 'color': displayColor }">攝氏溫度：{{ c }}</p>
    <p :style="displayStyle">攝氏溫度：{{ c }}</p>
</template>

<style scoped></style>