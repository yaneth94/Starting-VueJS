<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(fruta,index) in  arrayOrdenado" :key="index"  @click="aumentar(index)">
        {{ fruta.nombre }}
        <span class="badge badge-primary badge-pill">{{ fruta.cantidad }}</span>
      </li>
    </ul>
    <button class="btn btn-danger btn-block mt-2" @click="reiniciarValores">Reiniciar Valores</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: "Lista",
  computed:{
      ...mapState(['frutas']),
      arrayOrdenado(){
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          return this.frutas.sort( (a , b) => {
            return b.cantidad-a.cantidad;
          } )
      }
  },
  methods:{
      ...mapMutations(['aumentar','reiniciarValores'])
  }
};
</script>

<style scoped></style>
