<template>
  <v-container>
    <v-row wrap>
      <v-col class="primary " md="12">
        <h1>12</h1>
      </v-col>
      <v-col class="secondary" md="6" >
        <h1>12</h1>
      </v-col>
        <v-col class="secondary" md="6" >
        <h1>12</h1>
      </v-col>
    </v-row>
    <v-row class="mt-5" justify="center">
      <v-col class="info" md="3">
        <h1>Centrado</h1>
      </v-col>
       <v-col class="success" md="3">
        <h1>Centrado</h1>
      </v-col>
    </v-row>
    <v-row class="mt-5 secondary" justify="center" align="center" style="height:300px">
      <v-col class="info" md="3">
        <h1>Centrado</h1>
      </v-col>
       <v-col class="pink lighten-1 white--text" md="3">
        <h1>Centrado</h1>
      </v-col>
    </v-row>
    <v-row class="mt-5 ">
      <v-col>
        <h1 class="display-1 text-uppercase text-sm-center">Lorem, ipsum dolor.</h1>
        <h1 class="display-2">Lorem, ipsum dolor.</h1>
        <h1 class="display-3 primary pa-5 mt-5">Lorem, ipsum dolor.</h1>
        <h1 class="display-4">Lorem, ipsum dolor.</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
   
  }
}
</script>
