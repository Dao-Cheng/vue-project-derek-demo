<script setup>

// const props = defineProps(['title1', 'title2']);
const props = defineProps({
    title: String,
    msg: {
        type: String,
        required: true
    },
    count: {
        type: Number
    }
});
</script>

<template>



    {{ props.title }}
    <h2>{{ props.msg }}</h2>
    <h2>{{ props.count }}</h2>

</template>

<style scoped></style>