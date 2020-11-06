import { AppState } from '../AppState'
import { api } from './AxiosService'

class AllPokemonService {
  async getAllPokemon() {
    try {
      for (let i = 1; i < 15; i++) {
        const res = await api.get('/' + Math.ceil((Math.random() * 151)))
        AppState.allPokemon.push(res.data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  async getActive(name) {
    try {
      const res = await api.get('/' + name)
      AppState.activePokemon = res.data
      console.log(res.data)
    } catch (error) {
      console.error(error)
    }
  }
}

export const allPokemonService = new AllPokemonService()
