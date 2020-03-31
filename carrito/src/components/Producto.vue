<template>
    <div class="card my-5">
        <div class="card-body">
            <h5 class="text-center card-title">{{producto.titulo}}</h5>
            <img :src="producto.imagen" width="270" height="150">
            <p class="text-center text-muted card-text display-4">$ {{ Number(producto.precio).toFixed()}}</p>
            <button class="btn btn-primary form-control" @click="agregarCarro(producto)" :disabled="estaEnCarrito">{{ estaEnCarrito ? 'Agregado': 'Agregar al Carrito' }}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Producto',
    props: ['producto','estaEnCarrito'],
    methods:{
        agregarCarro(producto){
            this.$emit('agregar-carro',producto);
        }
    }
}
</script>

<style>

</style>