<script setup>
import { ref } from 'vue';
import ComponentInput from '../ComponentInput.vue';
import ProjectButton from '../ProjectButton.vue';

function clicked() {
    console.log('here');
}

const text = ref('');

</script>

<template>

    <ProjectButton type="search" @p-click="clicked"></ProjectButton>
    <ProjectButton type="add"></ProjectButton>
    <ProjectButton type="cal"></ProjectButton>
    <ProjectButton type="delete"></ProjectButton>
    <hr />
    {{ text }}
    <ComponentInput v-model="text"></ComponentInput>

</template>

<style scoped></style>