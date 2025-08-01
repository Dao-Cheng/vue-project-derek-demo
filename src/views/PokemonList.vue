<script setup>
import PokemonCard from '@/components/PokemonCard.vue';
import pokemonData from '../data/pokemon.json';
import { computed, ref } from 'vue';
import PokemonSelect from '@/components/PokemonSelect.vue';
import ProjectButton from '@/components/ProjectButton.vue';

const pokemons = ref(pokemonData);

// const pokemon = ref(pokemonData[0]);

// Array.join
const numbers = [1, 2, 3, 4, 5]; // => 1-2-3-4-5
numbers.join('-');

function getType(types) {
    console.log('function');
    return types.join('、');
}

// Array => map  filter foreach find/findIndex join reduce includes

// Computed + Array.map
const pokemonList = computed(() => {

    const newList = pokemons.value.map(x => {
        return {
            'number': x.number,
            'name': x.name,
            'image': x.image,
            'typeDisplay': getType(x.types)
        }
    })

    return newList;
})

const arr = [1, 2, 3];
arr.map(x => x + 1);
arr.map(x => { return x + 1 });
arr.filter(x => x > 1);
arr.filter(x => {
    // logic....    
    return x > 1;
    // return true or false
});
arr.includes(1);

const searchType = ref('');

function searchByType() {
    // JS Array
    // filter includes
    // pokemons.value = pokemonData.filter(x => {
    //     // logic...
    //     return x.types.includes(searchType.value)
    // });

    // 判斷是否有值
    if (searchType.value) {
        // Yes 篩選
        pokemons.value = pokemonData.filter(x => x.types.includes(searchType.value));
    } else {
        // No 放回原始值
        pokemons.value = pokemonData;
    }
}

const selected = ref('');

function searchBySelect() {
    // 判斷是否有值
    if (selected.value) {
        // Yes 篩選
        // filter
        // == 只做值比較   1 = '1'
        // === 值與型別都比較 1 != '1'
        pokemons.value = pokemonData.filter(x => x.number === selected.value);
        // SQL     =
        // Java C# ==
        // JS      ===
    } else {
        // No 放回原始值   
        pokemons.value = pokemonData;
    }
}

</script>

<template>

    <div>
        搜尋屬性：<input v-model="searchType" @keyup="searchByType()" />
    </div>
    <div>
        選擇名字：<PokemonSelect v-model="selected"></PokemonSelect>
        {{ selected }}
        <ProjectButton type="search" @p-click="searchBySelect()"></ProjectButton>
    </div>
    <div class="panel">
        <PokemonCard v-for="(pokemon, index) in pokemonList" :key="pokemon.number" :name="pokemon.name">
            <template #image>
                <img :src="pokemon.image" />
            </template>
            <template #types>{{ pokemon.typeDisplay }}</template>
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
