<script setup>
import { computed } from 'vue';

const emit = defineEmits(['pClick']);
const props = defineProps({ type: String });

function getButtonDisplay() {
    switch (props.type) {
        case 'search':
            return { text: '查詢', className: 'btn btn-primary btn-sm', icon: 'bi bi-search' };
        case 'add':
            return { text: '新增', className: 'btn btn-success btn-sm', icon: 'bi bi-plus' };
        case 'confirm':
            return { text: '確認', className: 'btn btn-info btn-sm', icon: 'bi bi-check' };
        case 'delete':
            return { text: '刪除', className: 'btn btn-danger btn-sm', icon: 'bi bi-trash' };
        case 'cal':
            return { text: '計算', className: 'btn btn-warning btn-sm', icon: 'bi bi-calculator' };
        default:
            return { text: '未定義' };
    }
}

const buttonDisplay = computed(() => {
    return getButtonDisplay();
})

</script>

<template>
    <button :class="buttonDisplay.className" @click="emit('pClick')">
        <i :class="buttonDisplay.icon"></i>{{ buttonDisplay.text }}
    </button>
</template>

<style scoped></style>