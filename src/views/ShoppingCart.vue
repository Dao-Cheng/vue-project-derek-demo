<script setup>
import Cart from '@/class/cart';
import Product from '@/class/product';
import ProductItem from '@/components/ProductItem.vue';
import { computed, ref } from 'vue';

const products = ref([
    new Product(1, '麥克雙牛堡', 100),
    new Product(2, '麥克雞塊餐', 180),
    new Product(3, '麥脆雞餐', 150),
]);

const carts = ref([]);

function addToCart(product) {

    const hasItem = carts.value.findIndex(x => x.id === product.id) >= 0;
    if (hasItem) {
        const item = carts.value.find(x => x.id === product.id);
        item.count++;
    } else {
        carts.value.push(new Cart(product.id, product.name, product.price, 1));
    }
}

const totalPrice = computed(() => {
    // XXXX
    // Array.reduce
    // const arr = [{ id: 1, 'name': 'XX餐' }]
    const total1 = carts.value.reduce((total, item) => {
        return total + item.price * item.count;
    }, 0);

    return total1;
})

</script>

<template>

    <ProductItem v-for="(item, index) in products" :key="item.id" :product="item" @add="addToCart($event)" />
    <hr />
    <h1>已選購清單</h1>
    <ul>
        <li v-for="(item, index) in carts" :key="item.id">
            {{ `${item.name} - ${item.price} X ${item.count}` }}
        </li>
    </ul>
    <h3>總計：{{ totalPrice }}</h3>
</template>

<style scoped></style>