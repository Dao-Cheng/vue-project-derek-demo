<script setup>
const msg = '本文插值';
const i = 1;

const getNumber = () => {
    return i;
}

</script>

<template>
    <p>{{ msg }}</p>
    <p>{{ i + 1 }}</p>
    <p>{{ getNumber() }}</p>
    <p>{{ i >= 0 ? '有值' : '無值' }}</p>
</template>

<style scoped></style>