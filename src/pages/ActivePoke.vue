<template>
  <div class="activepoke container-fluid" v-if="activePokemon.name">
    <div class="row mt-5">
      <div class="col-8 offset-2">
        <div class="card shadow-lg text-center p-2 radius-25">
          <h1 class="pb-3">
            {{ activePokemon.name }}
          </h1>
          <div class="d-flex justify-content-around">
            <h6 class="">
              Height: {{ activePokemon.height }}
            </h6>
            <h6 class="">
              Weight: {{ activePokemon.weight }}
            </h6>
          </div>
          <div class="d-flex justify-content-around">
            <img :src="activePokemon.sprites.front_default" class="grow" alt="">
            <img :src="activePokemon.sprites.back_default" class="grow" alt="">
            <img :src="activePokemon.sprites.front_shiny" class="grow" alt="">
            <img :src="activePokemon.sprites.back_shiny" class="grow" alt="">
          </div>
          <img :src="activePokemon.sprites.other.dream_world.front_default" class="grow" alt="">
          <button class="btn bg-transparent my-2 grow" @click="catchPokemon(activePokemon)">
            <i class="fa fa-plus-circle fa-2x text-dark" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { allPokemonService } from '../services/AllPokemonService'
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'

export default {
  name: 'ActivePoke',
  setup() {
    const route = useRoute()
    onMounted(() => { allPokemonService.getActive(route.params.pokemonName) })
    return {
      activePokemon: computed(() => AppState.activePokemon),
      catchPokemon() {
        allPokemonService.catchPokemon(AppState.activePokemon)
      }

    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
