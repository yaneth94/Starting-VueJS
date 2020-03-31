<template>
  <div id="app">
    <center>
      <img alt="Vue logo" src="./assets/logo.png">
      <br/>
      <app-contador/>
      <app-contador/>
      <app-contador/>
      <app-contador/>
      <app-contador/>
      <br/>
      <h2>Listado de Planes de Cursos de Programación</h2>
      <planes/>
    </center>
  </div>
</template>

<script>
import AppContador from './components/Contador'
import Planes from './components/Planes'

export default {
  name: 'App',
  components: {
   AppContador,
   Planes
  },
  
}
</script>

<style>
#app{
  font-family: Arial, Helvetica, sans-serif;
}</style>
