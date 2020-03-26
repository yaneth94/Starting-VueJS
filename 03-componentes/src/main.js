import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//Componentes

/*var componente1 = Vue.extend({
  template:''
})

var componente2 = Vue.extend({
  template:'<h3>{{titulo}}</h3>',
  data() {
    return {
      titulo : 'Listado de Frameworks Javascript que debo aprender'
    }
  }
})

var componente3 = Vue.extend({
  template:'<div><ul><framework v-for="len in frameworks" :key="len.id">{{ len.titulo }} </framework></ul></div>',
  data() {
    return {
       frameworks: [
         {
           id: 1,
           titulo: 'Vue'
         },
         {
          id: 2,
          titulo: 'Angular'
        },
        {
          id: 3,
          titulo: 'React'
        }
       ]
    }
  }
})

Vue.component('saludo',{
  data() {
    return {
      titulo: ' Hola - Introducción a Componentes Zoila',
    }
  },
  methods:{
    display() {
      console.log('Hola');
    }
  }
});

Vue.component('titulo',componente2);

Vue.component('lista',componente3);

Vue.component('framework',{
  template: '<li><slot></slot></li>'
})
*/
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
