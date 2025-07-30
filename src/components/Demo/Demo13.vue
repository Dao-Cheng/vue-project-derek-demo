<script setup>
import { onMounted } from 'vue';


onMounted(() => {

    const element = document.querySelector('#my-btn');
    element.addEventListener('click', (eventObj) => {
        eventObj.stopPropagation(); // 停止事件傳播
        eventObj.preventDefault();
        console.log('here');
    }, true)

})

</script>

<template>

    <div>
        <button id="my-btn">按鈕</button>
    </div>

    <div @click.capture="console.log('div here')" style="background-color: green;">
        <button @click.stop="console.log('btn click')" class="btn btn-danger">按鈕</button>
    </div>

    <form>
        <button type="submit" @click.prevent="console.log('here')">送出</button>
    </form>

    <button @click.middle="console.log('here')">點擊</button>

    <input @keyup.enter="console.log('keyup')" />

    <button @click.ctrl="console.log('ctrl')">點擊</button>
    <button @click.ctrl.exact="console.log('ctrl')">點擊</button>

</template>

<style scoped></style>
