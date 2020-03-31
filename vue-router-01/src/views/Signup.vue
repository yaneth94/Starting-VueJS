<template>
    <div class="wrapper">
        <form class="form-signin">       
        <h2 class="form-signin-heading">Registrarse</h2>
         
        <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
        <input type="password" class="form-control" name="password" placeholder="Password" required=""/>      
        <label class="checkbox">
            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> Remember me
        </label>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Crear Cuenta</button>   
        <button class="btn btn-info btn-block mt-2" @click="login()">
            Login
        </button>
        </form>
    </div>
</template>


<script>
export default {
    methods:{
        login(){
            this.$router.push('/login');
        }
    }
}
</script>

<style>
body {
    background: #eee !important;    
}

.wrapper {  
    margin-top: 80px;
  margin-bottom: 80px;
}

.form-signin {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.1);  
}

input[type="text"] {
      margin-bottom: -1px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
}

input[type="password"] {
      margin-bottom: 20px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
}

</style>