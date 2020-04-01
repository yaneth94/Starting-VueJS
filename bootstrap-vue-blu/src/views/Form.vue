<template>
    <div class="mt-5">
        <h1>Formularios</h1>
        <form>
            <b-row>
                <b-col md="3">
                 <b-form-input v-model="texto" placeholder="Ingrese" type="text" :state="comprobar"></b-form-input>
                 <small>Minimo 3 caracteres</small>
                </b-col>
                <b-col md="3">
                    <b-form-select v-model="selected" :options="animales"></b-form-select>
                    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
                </b-col>
                <b-col md="3">
                    <b-form-radio-group v-model="selectedRadio" :options="animalesRadio"></b-form-radio-group>
                    <div class="mt-3">Selected: <strong>{{ selectedRadio }}</strong></div>
                </b-col>
                <b-col md="3">
                    <b-form-checkbox-group
                        v-model="selectedCheck"
                        :options="animalesRadio"
                    ></b-form-checkbox-group>
                     <div>Selected: <strong>{{ selectedCheck }}</strong></div>
                </b-col>
            </b-row>
        </form>
        <p>Texto: {{texto}}</p>
    </div>
</template>

<script>
export default {
    name: 'Form',
    data(){
        return{
            texto: '',
            selected: null,
            selectedRadio: '',
            selectedCheck:[],
            animales: [
                { value: null, text: 'Porfavor seleccione un animal' },
                { value: 'perro', text: 'Gua guao' },
                { value: 'gato', text: 'Miua' },
                { value: 'pato', text: 'Cuack' },
                { value: 'ganzo', text: 'Rank' }
            ],
            animalesRadio: [
                 { value: 'perro', text: 'Gua guao' },
                { value: 'gato', text: 'Miua' },
                { value: 'pato', text: 'Cuack' },
                { value: 'ganzo', text: 'Rank' }
            ],
        }
    },
    computed:{
        comprobar(){
            return this.texto.length > 2 ? true : false
        }
    }
}
</script>