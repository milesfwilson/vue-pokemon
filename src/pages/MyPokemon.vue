<template>
  <div class="MyPokemon container-fluid">
    <div class="row">
      <div class="col-8 offset-2">
        <h3 class="text-center p-4">
          Caught Pokemon
        </h3>
        <div class="row">
          <div class="col-2" v-for="p in myPokemonArray" :key="p.name">
            <img :src="p.sprites.front_default" class="img-fluid grow" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
// import { mypokemoncomponent } from '../components/MyPokemonComponent'

export default {
  name: 'MyPokemon',
  setup() {
    return {
      myPokemonArray: computed(() => AppState.myPokemon)
    }
  }
  // components: { mypokemoncomponent }
}
</script>

<style lang="scss" scoped>

</style>
