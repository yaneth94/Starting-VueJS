
<template>
    
        <button @click='contar'>{{ contador }}</button>
    
</template>
<script>
export default {
    name: 'Contador',
    data(){
        return{
            contador: 0
        }
    },
    methods:{
        contar:function(){
            this.contador++;
        }
    }
}
</script>

<style>

</style>