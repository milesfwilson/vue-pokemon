<template>
  <div class="allPokemon col-3">
    <router-link :to="{name: 'ActivePokemon', params: {pokemonName: pokemonProp.name}}">
      <div class="my-4 text-center">
        <h6 class="text-center text-dark m-2">
          {{ pokemonProp.name[0].toUpperCase() + pokemonProp.name.substring(1) }}
        </h6>
        <!-- <img :src="pokemonProp.sprites.front_default" alt=""> -->
        <img :src="pokemonProp.sprites.other.dream_world.front_default" class="img-fluid grow" alt="">
      </div>
    </router-link>
  </div>
</template>

<script>
// import { AppState } from '../AppState'

export default {
  name: 'AllPokemon',
  props: ['pokemonProp'],
  setup() {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>

</style>
