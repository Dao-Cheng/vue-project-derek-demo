<script setup>
import { computed, ref } from 'vue';


// const todos = [{
//     id: Date.now(),
//     text: 'test',
//     isDone: true
// }]
const newToDo = ref(null);
const todos = ref([]);


function addTodo() {
    // true => 1 -1 true 'XXX'(任意字串)
    // false => 0 ''(空字串) false null undefined
    const inputText = newToDo.value.trim();
    if (inputText !== '') {
        todos.value.push({
            id: Date.now(),
            text: inputText,
            isDone: false
        })
        newToDo.value = '';
    }
}

function removeTodo(id) {
    todos.value = todos.value.filter(x => x.id !== id);
}

const doneCount = computed(() => {
    return todos.value.filter(x => x.isDone).length;
})

</script>

<template>

    <h1>待辦清單</h1>

    <div style="display: flex;">
        <input @keyup.enter="addTodo()" type="text" placeholder="輸入新的待辦事項" v-model="newToDo" />
        <button class="btn btn-success btn-sm" @click="addTodo()"><i class="bi bi-plus"></i>新增</button>
    </div>

    <table>
        <tbody>
            <tr v-for="(item, key) in todos" :key="item.id">
                <td>
                    <input type="checkbox" v-model="item.isDone" />
                </td>
                <td>
                    <span :class="{ done: item.isDone }">{{ item.text }}</span>
                </td>
                <td>
                    <button class="btn btn-danger btn-sm" @click="removeTodo(item.id)"><i
                            class="bi bi-trash"></i>刪除</button>
                </td>
            </tr>
        </tbody>
    </table>
    <p>共 {{ todos.length }} 項，已完成 {{ doneCount }} 項</p>

</template>

<style scoped>
.done {
    text-decoration: line-through;
    color: grey;
}
</style>