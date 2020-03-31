<template>
  <div class="about">
    <h1>Información del Usuario </h1>
    <!--Necesario el binding y poniendo el name la ruta y el params-->
    <router-link :to="{ name:'usuarios', params:{id: arreglo} }" v-for="arreglo in arregloUsuarios" :key="arreglo">
        <button>{{arreglo}}</button>
    </router-link>
    <usuario/>
  </div>
</template>
<script>
import Usuario from '@/components/Usuario.vue';

export default {
    components:{ 
        Usuario
    },
    data(){
        return{
            arregloUsuarios: ['Zoila','Carlos','Dayana','Oscar','Karla']
        }
    }
}
</script>