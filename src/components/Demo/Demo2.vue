<script setup>

const msg = `<h1>本文插值</h1>
<img src="error.jpg" onerror="alert('XSS攻擊成功!!');document.body.append('攻擊內容!!');"/>`;

</script>

<template>
    <p v-html="msg"></p>
</template>

<style scoped></style>