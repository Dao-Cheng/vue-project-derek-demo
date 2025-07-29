<script setup>
import { useRoute } from 'vue-router';

const props = defineProps({
    id: String
})

const route = useRoute();

</script>

<template>

    <h1>Content1</h1>
    <p>{{ props.id }}</p>
    <p>{{ route.params.id }}</p>
</template>

<style scoped></style>