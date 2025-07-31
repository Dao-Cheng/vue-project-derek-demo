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
    <div class="card w-50">
        <div class="card-body">
            <h5 class="card-title">{{ props.product.name }}</h5>
            <p class="card-text">{{ props.product.price }}</p>
            <a href="#" @click="addCart()" class="btn btn-primary">加入購物車</a>
        </div>
    </div>

</template>

<style scoped></style>