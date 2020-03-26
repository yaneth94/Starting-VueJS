<template>
  <div id="app" class="container">
    <app-header/>
    <ejemplo-post/>
    <app-footer/>
  </div>
</template>

<script>
import EjemploPost from './components/Posts'
import AppHeader from './components/Header'
import AppFooter from './components/Footer'

export default {
  name: 'App',
  components: {
    AppHeader,EjemploPost,AppFooter
  }
}
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

</style>
