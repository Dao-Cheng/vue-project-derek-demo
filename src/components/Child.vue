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

const emit = defineEmits(['btnClicked']);
function handleClick() {
    emit('btnClicked', '123');
}

</script>

<template>

    {{ props.title }}
    <h2>{{ props.msg }}</h2>
    <h2>{{ props.count }}</h2>
    <button @click="handleClick">點我(子)</button>

</template>

<style scoped></style>