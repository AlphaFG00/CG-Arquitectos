<template>
  <div id="app">

    <b-navbar toggleable="lg" type="light" id="nav-bg">
      <b-container>
        <b-navbar-brand :to="{name: 'home'}" class="brillo"><img src="./assets/logoc+g.png" alt="Logo" class="logo-empresa"><span></span></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav id="nav-font">
            <b-nav-item :to="{name: 'home'}"> Inicio</b-nav-item>
            <b-nav-item :to="{name: 'Quienes'}" > ¿Quienes Somos?</b-nav-item>
            <b-nav-item :to="{name: 'Proyectos'}"> Proyectos</b-nav-item>
            <b-nav-item :to="{name: 'Servicios'}"> Servicios</b-nav-item>
              <b-nav-item :to="{name: 'Contacto'}" >Contacto</b-nav-item> 
          </b-navbar-nav>
        </b-collapse>

      </b-container>
    </b-navbar>

    <router-view id="nav-fix"/>

    <footer class="foot-body">
      <div class="foot-top">
      </div>
      <div class="foot-mid">
      </div>
      <div class="foot-bot">
      </div>
    </footer>
  </div>
</template>

<style>
#nav-bg{
    background: linear-gradient(160deg, rgb(255, 255, 255) 10%,rgb(240, 237, 237) 40%, rgb(255, 255, 255)50%);
    position: fixed;
    width: 100vw;
    z-index: 15;
    border-width: .1em !important;
    border-bottom: solid;
    border-color: #A37e2c;
}
#nav-collapse{
      color: rgb(12, 105, 12) !important;
}
#nav-font{
font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
}
#nav-fix{
  padding-top: 5em;
  background-color: #ffffff;
  min-height: 90vh;
}
.logo-empresa{
  width: auto;
  max-height: 2.5em;
}

.brillo{
    position:relative;
    display: block;
    font-size:70px;
    height: 50px;
    width: 140px;  
    text-decoration:none;
    color:#333;
    overflow:hidden;
    margin: 0 !important;
    padding: 0 !important;
}
.brillo span{
    position:relative;
    display: block;
    background:url(./assets/brillog.png) no-repeat;  
    background-position: -250px 0px;
    margin-top:-49px;
    margin-left: 2.5px;
    border-radius: 10px;
    height: 48px;
    width: 111px;
}
.brillo:hover span{
    background-position: 300px 0px;
    -webkit-transition-property: all;
    -webkit-transition-duration: 1.5s;
    transition-property: all;
    transition-duration: 1.5s;
}

.nav-item a:hover{
  color: rgb(11, 63, 11) !important;
}
.nav-item a{
  color: black !important;
}

.foot-body{
  width: 100vw;
  background-color: darkgreen;
  height: 95px;
  display: none;
}
.foot-top{
  display: inline-block;
  right: 0;
  width: 34vw;
  height: 70px;
  background-color: red;
}

.foot-mid{
  display: inline-block;
  right: 0;
  width: 32vw;
  height: 70px;
  background-color:blue;
}

.foot-bot{
  display: inline-block;
  right: 0;
  width: 34vw;
  height: 70px;
  background-color: yellow;
}
</style>
