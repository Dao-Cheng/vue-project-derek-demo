import Cart from "@/class/cart";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore('cart', () => {

    const carts = ref([]);

    // 加入到購物車
    function addToCart(product) {

        const hasItem = carts.value.findIndex(x => x.id === product.id) >= 0;
        if (hasItem) {
            const item = carts.value.find(x => x.id === product.id);
            item.count++;
        } else {
            carts.value.push(new Cart(product.id, product.name, product.price, 1));
        }
    }

    // 總價
    const totalPrice = computed(() => {
        const total1 = carts.value.reduce((total, item) => {
            return total + item.price * item.count;
        }, 0);

        return total1;
    })

    // 總數
    const count = computed(() => {
        // return carts.value.length;

        return carts.value.reduce((total, item) => {
            return total + item.count
        }, 0)
    })

    return { carts, addToCart, totalPrice, count };

})