<script setup>
import Product from '@/class/product';
import PiniaProductItem from '@/components/PiniaProductItem.vue';
import { useCartStore } from '@/stores/cart';
import { ref } from 'vue';

const products = ref([
    new Product(1, '麥克雙牛堡', 100),
    new Product(2, '麥克雞塊餐', 180),
    new Product(3, '麥脆雞餐', 150),
]);

const cartStore = useCartStore();

</script>

<template>

    <PiniaProductItem v-for="(item, index) in products" :key="item.id" :product="item" />
    <hr />
    <h1>P已選購清單</h1>
    <ul>
        <li v-for="(item, index) in cartStore.carts" :key="item.id">
            {{ `${item.name} - ${item.price} X ${item.count}` }}
        </li>
    </ul>
    <h3>總計：{{ cartStore.totalPrice }}</h3>
</template>

<style scoped></style>