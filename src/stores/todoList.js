import { defineStore } from "pinia";
import { computed, ref } from "vue";


export const useToDoListStore = defineStore('toDoList', () => {

    // 管理待辦清單的資料
    const todos = ref([]);

    // 新增todos的資料
    function addTodo(newToDo) {
        if (newToDo && newToDo.trim() !== '') {
            todos.value.push({
                id: Date.now(),
                text: newToDo,
                isDone: false
            })
        }
    }

    function getXX() {
        // Call API...
    }

    // 移除todos的資料
    function removeTodo(id) {
        todos.value = todos.value.filter(x => x.id !== id);
    }

    // computed
    // 已經完成的待辦項目
    const doneCount = computed(() => {
        // filter
        return todos.value.filter(x => x.isDone).length;
    })

    // 全部的待辦項目
    const count = computed(() => {
        return todos.value.length;
    })

    // 待完成項目  (全)-(已完成)
    const waitingCount = computed(() => {
        return count.value - doneCount.value;
    })


    return { todos, addTodo, removeTodo, doneCount, count, waitingCount };
})