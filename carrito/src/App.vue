<template>
  <div id="app" class="container">
    <div class="row ">
      <div class="col-md-7">
        <div class="row">
          <div class="col-md-6" v-for="product in productos" :key="product.id">
            <producto :producto="product" v-on:agregar-carro="agregarProdCarro" :estaEnCarrito="estaEnCarrito(product)"/>
          </div>
        </div>
      </div>
      <div class="col-md-5 my-5">
        <carrito :items="carrito" v-on:remover-item="removerProdCarro" v-on:pagar="pagar"/>
      </div>
    </div>
  </div>
</template>

<script>
import Producto from './components/Producto'
import productos from './productos.json'
import Carrito from './components/Carrito'

export default {
  name: 'App',
  components: {
    Producto,
    Carrito
  },
  data(){
    return{
      productos,
      carrito: []
    }
  },
  methods:{
    agregarProdCarro(producto){
      this.carrito.push(producto);
    },
    estaEnCarrito(producto){
      const item = this.carrito.find(item => item.id === producto.id);
      if(item){
        return true;
      }
      return false;
    },
    removerProdCarro(producto){
      this.carrito = this.carrito.filter( item => item.id != producto.id);
    },
    pagar(){
      this.carrito=[];
      alert('Venta Completada');
    }
  }
}
</script>

<style>

</style>
