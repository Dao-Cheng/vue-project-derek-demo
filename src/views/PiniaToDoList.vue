<script setup>
import { useToDoListStore } from '@/stores/todoList';
import { ref } from 'vue';

const toDoListStore = useToDoListStore();
const newToDo = ref(null);

function add() {
    toDoListStore.addTodo(newToDo);
    newToDo.value = '';
}

</script>

<template>

    <h1>Pinia待辦清單</h1>

    <div style="display: flex;">
        <input type="text" placeholder="輸入新的待辦事項" v-model="newToDo" />
        <button class="btn btn-success btn-sm" @click="toDoListStore.addTodo(newToDo); newToDo = ''">
            <i class="bi bi-plus"></i>新增</button>
    </div>

    <table>
        <tbody>
            <TransitionGroup>
                <tr v-for="(item, key) in toDoListStore.todos" :key="item.id">
                    <td>
                        <input type="checkbox" v-model="item.isDone" />
                    </td>
                    <td>
                        <span :class="{ done: item.isDone }">{{ item.text }}</span>
                    </td>
                    <td>
                        <button class="btn btn-danger btn-sm" @click="toDoListStore.removeTodo(item.id)">
                            <i class="bi bi-trash"></i>刪除
                        </button>
                    </td>
                </tr>
            </TransitionGroup>
        </tbody>
    </table>
    <p>共 {{ toDoListStore.count }} 項，已完成 {{ toDoListStore.doneCount }} 項</p>

</template>

<style scoped>
.done {
    text-decoration: line-through;
    color: grey;
}

.v-enter-active,
.v-leave-active {
    transition:
        opacity 1s ease-out,
        transform 1s cubic-bezier(1, .18, .46, 1.48);
}


.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>