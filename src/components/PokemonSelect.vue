<script setup>

// 跟後端要資料
import { ref } from 'vue';
import pokemonData from '../data/pokemon.json';

const pokemons = ref(pokemonData);

const model = defineModel();

</script>

<template>

    <select v-model="model">
        <option disabled :value="-1">請選擇</option>
        <option v-for="(pokemon, index) in pokemons" :key="pokemon.number" :value="pokemon.number">
            {{ `${pokemon.number}.${pokemon.name}` }}
        </option>
    </select>

</template>

<style scoped></style>