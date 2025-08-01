<script setup>
import Product from '@/class/product';

const props = defineProps({
    product: Product
})

import { useCartStore } from '@/stores/cart';
const cartStore = useCartStore();

</script>

<template>
    <div class="card w-50">
        <div class="card-body">
            <h5 class="card-title">{{ props.product.name }}</h5>
            <p class="card-text">{{ props.product.price }}</p>
            <a href="#" @click="cartStore.addToCart(props.product)" class="btn btn-primary">加入購物車</a>
        </div>
    </div>

</template>

<style scoped></style>