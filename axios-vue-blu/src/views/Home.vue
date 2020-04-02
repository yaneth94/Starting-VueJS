<template>
  <div>
    <v-layout :wrap="true">
      <v-flex xs12>
        <v-card>
          <v-date-picker 
            v-model="picker"
            full-width
            locale="es-cl"
            :min="minimo"
            :max="maximo"
            @change="getdolar(picker)"
          >

          </v-date-picker>
        </v-card>
        <v-card color="error" dark>
          <v-card-text class="display-1 text-center">
            {{valor}} 
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import  axios  from "axios";
import { mapMutations } from "vuex";
export default {
  name: 'Home',
  data(){
    return{
      picker: new Date().toISOString().substr(0, 10),
      minimo: '1984',
      maximo: new Date().toISOString().substr(0, 10),
      valor: null
    }
  },
  methods:{
    ...mapMutations(['mostrarLoading','ocultarLoading']),
    async getdolar(dia){
      let arrayFecha = dia.split(['-'])
      let ddmmyy= arrayFecha[2]+'-'+arrayFecha[1]+'-'+arrayFecha[0];
      try {
        this.mostrarLoading({titulo:'Accediento a información', color: 'secondary'})
        let datos = await axios.get(`https://www.mindicador.cl/api/dolar/${ddmmyy}`)
        //console.log(datos.data.serie[0].valor);
        if(datos.data.serie.length > 0){
          this.valor = await datos.data.serie[0].valor
        }else{
          this.valor = "Sin resultados"
        }
      } catch (error) {
        console.log(error)
      }finally{
        this.ocultarLoading()
      }
    }
  },
  created() {
    this.getdolar(this.picker)
  }
}
</script>
