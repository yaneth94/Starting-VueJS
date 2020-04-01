<template>
  <div id="app" class="container">
    <cabecera/>
    <lista />
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue';
import Lista from './components/Lista.vue';

export default {
  name: 'App',
  components: {
    Cabecera,
    Lista
  }
}
</script>

