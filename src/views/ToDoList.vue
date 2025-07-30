<script setup></script>

<template>

    <h1>待辦清單</h1>

    <div>
        <input type="text" placeholder="輸入新的待辦事項" />
        <button class="btn btn-success">新增</button>
    </div>

    <table>
        <tbody>
            <tr>
                <td>
                    <input type="checkbox" />
                </td>
                <td>羽球</td>
                <td>
                    <button class="btn btn-danger">刪除</button>
                </td>
            </tr>
        </tbody>
    </table>


</template>

<style scoped></style>