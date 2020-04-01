<template>
  <div id="app">
     <b-navbar r toggleable="lg" type="dark" variant="danger">
        <b-container>
          <b-navbar-brand href="#">NavBar</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
               <b-navbar-nav>
                <b-nav-item :to="{ name: 'Home'}"  active-class="active" exact>Home</b-nav-item>
                <b-nav-item :to="{ name: 'About'}"  active-class="active" >About</b-nav-item>
                <b-nav-item :to="{ name: 'Grid'}"  active-class="active" >Grid</b-nav-item>
                <b-nav-item :to="{ name: 'Card'}"  active-class="active" >Cards</b-nav-item>
                <b-nav-item :to="{ name: 'Form'}"  active-class="active" >Form</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
        </b-container>
     </b-navbar>
     <b-container>
      <router-view/>
     </b-container>
  </div>
</template>


