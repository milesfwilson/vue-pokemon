<template>
  <div class="home container-fluid">
    <div class="row">
      <allPokemon v-for="p in pokemon" :key="p.name" :pokemon-prop="p" />
    </div>
  </div>
</template>

<script>
import allPokemon from '../components/AllPokemonComponent'

import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { allPokemonService } from '../services/AllPokemonService'
export default {
  name: 'Home',
  setup() {
    onMounted(() => { allPokemonService.getAllPokemon() })
    return {

      pokemon: computed(() => AppState.allPokemon)
    }
  },
  components: { allPokemon }
}
</script>
