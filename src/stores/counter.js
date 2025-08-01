import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore('counter', () => {

    // data
    const count = ref(0);
    const aaa = ref('');

    // computed
    const doubleCount = computed(() => count.value * 2);

    // function
    function addCount() {
        count.value++;
    }

    return { count, doubleCount, addCount, aaa };

})