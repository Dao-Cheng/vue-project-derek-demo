<script setup>

import { ref } from 'vue';
import studentData from '../data/student.json';

const students = ref(studentData);

const headList = ['名字', '國文', '英文', '數學'];

const search = ref(null);

const searchName = () => {
    // 篩選資料
    // students.value
    students.value = studentData
        .filter(e => e.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()));
}

</script>

<template>

    <h3>
        名字搜尋：<input type="text" v-model="search" @keyup="searchName()" />
    </h3>
    {{ search }}
    <table class="table">
        <thead>
            <tr>
                <th colspan="4">學生成績單</th>
            </tr>
            <tr>
                <th v-for="(item, index) in headList">
                    {{ item }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in students">
                <td>{{ item.name }}</td>
                <td>{{ item.chinese }}</td>
                <td>{{ item.english }}</td>
                <td>{{ item.math }}</td>
            </tr>
        </tbody>
    </table>

</template>


<style scoped></style>