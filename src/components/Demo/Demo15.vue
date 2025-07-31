<script setup>
import SlotButton from '../SlotButton.vue';


</script>

<template>

    <SlotButton>
        <template #right>
            <p style="color: green;">Hello</p>
        </template>
        <template v-slot:left>
            <p style="color: red;">Hello</p>
        </template>
        TEST
    </SlotButton>

</template>


<style scoped></style>
