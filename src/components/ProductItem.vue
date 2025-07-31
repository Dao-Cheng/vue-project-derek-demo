<script setup>
import Product from '@/class/product';

const props = defineProps({
    product: Product
})

const emit = defineEmits(['add']);

function addCart() {
    emit('add', props.product);
}

</script>

<template>
    <h1>{{ props.product.name }}</h1>
    <h3>{{ props.product.price }}</h3>
    <button @click="addCart()">加入購物車</button>
</template>

<style scoped></style>