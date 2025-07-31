<script setup>
</script>

<template>

    <!-- <Demo1 />
    <Demo2 />
    <Demo3 />
    <Demo4 />
    <Demo5 />
    <Demo6 />
    <Demo7 />
    <Demo8 /> -->
    <!-- <BMI /> -->
    <!-- <Demo9 /> -->
    <!-- <Demo10 /> -->
    <!-- <FToC/> -->

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <RouterLink :to="{ path: '/' }" class="navbar-brand">首頁</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'About' }" class="nav-link">關於我們</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'DemoList' }" class="nav-link">Demo</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'Lifecycle' }" class="nav-link">生命週期</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'ShoppingCart' }" class="nav-link">購物車</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'Parent' }" class="nav-link">父子組件</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'BMI' }" class="nav-link">1.BMI計算機</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'FToC' }" class="nav-link">2.溫度轉換</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'StudentScore' }" class="nav-link">3.學生成績單</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'ToDoList' }" class="nav-link">4.待辦事項</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'PokemonList' }" class="nav-link">5.寶可夢圖鑑</RouterLink>
                    </li>

                </ul>
            </div>
        </div>
    </nav>

    <div class="content-div">

        <RouterView />

    </div>


</template>

<style scoped>
.content-div {
    margin: auto;
    width: 80%;
}
</style>
