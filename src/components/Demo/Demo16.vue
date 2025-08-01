<script setup>
import ProjectButton from '../ProjectButton.vue';

function clicked() {
    console.log('here');
}

</script>

<template>

    <ProjectButton type="search" @p-click="clicked"></ProjectButton>
    <ProjectButton type="add"></ProjectButton>
    <ProjectButton type="cal"></ProjectButton>
    <ProjectButton type="delete"></ProjectButton>

</template>

<style scoped></style>