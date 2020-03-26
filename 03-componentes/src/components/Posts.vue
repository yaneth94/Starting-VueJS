<template>
  <div class="container">
    <p>
     <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Titulo</th>
          <th scope="col">Body</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td>{{post.id}}</td>
          <td>{{post.titulo}}</td>
          <td>{{post.body}}</td>
        </tr>
      </tbody>
    </table>
    </p>
  </div>
</template>

<script>
export default {
  name: "EjemploPost",
  data() {
    return {
      posts: [
        {
          id: 1,
          titulo: 'Post 1',
          body: 'Post 1'
        },
         {
          id: 2,
          titulo: 'Post 1',
          body: 'Post 1'
        },
         {
          id: 3,
          titulo: 'Post 3',
          body: 'Post 3'
        },
      ]
    }
  }
};
</script>

<style></style>
