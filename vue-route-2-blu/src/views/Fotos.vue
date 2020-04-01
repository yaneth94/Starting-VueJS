<template>
  <div class="about">
   <!-- <h1>Fotos: {{ $route.params.id }} </h1>-->
    <h1>Galeria de Fotos</h1>

    <router-link :to="{ name:'Fotos', params: {id : item } }" 
    v-for="(item,index ) of fotosArreglo" :key="index">
        <button>foto {{item}}</button>
    </router-link>

    <foto />
    <button @click="home">Home</button>
    <button @click="anterior">Anterior</button>
    <button @click="siguiente">Siguiente</button>
  </div>
</template>

<script>
import Foto from '@/components/Foto.vue'

export default {
    components: {
        Foto
    },
    data(){
        return{
            fotosArreglo: [1,2,3]
        }
    },
    methods:{
        //uso de metodos para enviar a una vista 
        home(){
            this.$router.push('/')
        },
        anterior(){
            this.$router.go(-1);
        },
        siguiente(){
            this.$router.go(1);
        }
    }
}
</script>
