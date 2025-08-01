<script setup>

// const props = defineProps({ 'modelValue': String, 'test': String });
// const emit = defineEmits(['update:modelValue']);

// function emitInput(eventObject) {
//     emit('update:modelValue', eventObject.target.value);
// }
const model = defineModel();

</script>

<template>
    <!-- <i class="bi bi-airplane-fill"></i><input type="text" :value="props.modelValue" @input="emitInput($event)" /> -->
    <i class="bi bi-airplane-fill"></i><input type="text" v-model="model" />
</template>

<style scoped></style>