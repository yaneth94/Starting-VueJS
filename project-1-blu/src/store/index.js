import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas: [
      {
        nombre: 'Manzana',
        cantidad: 0,
      },
      {
        nombre: 'Pera',
        cantidad: 0,
      },
      {
        nombre: 'Piña',
        cantidad: 0,
      }
    ]
  },
  mutations: {
    aumentar(state,index){
      state.frutas[index].cantidad++;
    },
    reiniciarValores(state){
      state.frutas.map(fruta => fruta.cantidad = 0)
    }
  },
  actions: {
  },
  modules: {
  }
})
