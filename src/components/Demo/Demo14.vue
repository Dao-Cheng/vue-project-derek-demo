<script setup>
import { ref } from 'vue';


const isShow = ref(true);

</script>

<template>

    <button @click="isShow = !isShow">切換</button>

    <Transition name="msg">
        <h1 v-show="isShow">V-SHOW</h1>
    </Transition>

    <Transition>
        <h1 v-if="isShow">V-IF</h1>
    </Transition>

    <!-- <button @click="visible = !visible">
        {{ visible ? '隱藏內容' : '顯示內容' }}
    </button>
    <p v-show="visible">Hello!!</p> -->

</template>


<style scoped>
.msg-enter-to,
.msg-leave-from {
    opacity: 1;
    color: blue;
}

.msg-enter-from,
.msg-leave-to {
    opacity: 0.5;
    color: yellowgreen;
}

.msg-leave-active,
.msg-enter-active {
    transition: opacity 2s linear, color 2s ease-out;
}


.v-enter-to,
.v-leave-from {
    opacity: 1;
    color: green;
}

.v-enter-from,
.v-leave-to {
    opacity: 0.5;
    color: red;
}

.v-leave-active,
.v-enter-active {
    transition: opacity 2s linear, color 2s ease-out;
}
</style>
