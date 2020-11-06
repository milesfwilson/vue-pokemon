<template>
  <div class="mypokemoncomponent col-4">
    <h3>
      {{ MyPokemonProp.name }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Mypokemoncomponent',
  props: ['MyPokemonProp'],
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
