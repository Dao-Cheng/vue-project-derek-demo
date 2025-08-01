<script setup>

const props = defineProps(['name', 'types', 'number']);

</script>

<template>

    <div class="card">
        <div class="image">
            <slot name="image"></slot>
        </div>
        <ul class="info">
            <li>名字：{{ props.name }}
            </li>
            <li>屬性：<slot name="types"></slot>
            </li>
            <li>編號：<slot name="number"></slot>
            </li>
        </ul>
    </div>


</template>


<style scoped>
.card {
    background-color: rgb(229, 246, 196);
    width: 200px;
    height: 200px;
    border-radius: 8px;
    margin: 10px;
    border: 1px solid;
}

.image {
    text-align: center;
}

.info {
    padding: 1px;
    list-style: none;
    font-size: 16px;
}
</style>
