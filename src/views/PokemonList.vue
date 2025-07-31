<script setup>
import PokemonCard from '@/components/PokemonCard.vue';
import pokemonData from '../data/pokemon.json';
import { ref } from 'vue';

const pokemons = ref(pokemonData);

const pokemon = ref(pokemonData[0]);

// Array.join
const numbers = [1, 2, 3, 4, 5]; // => 1-2-3-4-5
numbers.join('-');

function getType(types) {
    return types.join('、');
}

</script>

<template>

    <div class="panel">
        <PokemonCard v-for="(pokemon, index) in pokemons" :key="pokemon.number">
            <template #image>
                <img :src="pokemon.image" />
            </template>
            <template #name>{{ pokemon.name }}</template>
            <template #types>{{ getType(pokemon.types) }}</template>
            <template #number>{{ pokemon.number }}</template>
        </PokemonCard>
    </div>

</template>


<style scoped>
.panel {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
