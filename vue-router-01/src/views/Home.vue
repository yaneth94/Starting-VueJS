<template>
  <div class="home">
    <HelloWorld msg="Bienvenido a tu  Vue.js  con rutas"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
