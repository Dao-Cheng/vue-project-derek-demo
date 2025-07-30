<script setup>
import { ref } from 'vue';
const score = ref(100);

const isLogin = ref(true);

const visible = ref(true);


</script>

<template>
    <h1>v-if的測試</h1>

    <input type="number" placeholder="輸入分數" v-model="score" />
    <p v-if="score >= 60">及格</p>
    <p v-else-if="score >= 50">可補考</p>
    <p v-else>不及格</p>

    {{ isLogin }}
    <button @click="isLogin = !isLogin">登入切換</button>
    <div>
        <template v-if="isLogin">
            <h1>Hi</h1>
            <p>使用者您好!!!</p>
            <h3>=============</h3>
        </template>
        <template v-else>
            <p>尚未登入</p>
        </template>
    </div>

    <button @click="visible = !visible">
        {{ visible ? '隱藏內容' : '顯示內容' }}
    </button>
    <p v-show="visible">Hello!!</p>

</template>

<style scoped></style>
