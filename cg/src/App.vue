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
        <a>Términos</a><a>Privacidad</a>
        <p class="rights-reserved">© 2020 Garca Desarrollos. Todos los derechos reservados</p>
      </div>
      <div class="foot-mid">
        <a>Inicio</a>
        <a>Acerca de nosotros</a>
        <a>Proyectos</a>
      </div>
      <div class="foot-bot">
        <p class="foot-contacto">Contacto</p>
        <span>
          <i class="fas fa-phone-square tel-ico"></i>
          <p class="numtel">81 1354 5442</p>
        </span>
        <i class="fab fa-twitter-square"></i>
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-whatsapp-square"></i>
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
  position: absolute;
  width: 100vw;
  max-width: 100%;
  margin: 0;
  padding: 0;
  background: linear-gradient(160deg, rgb(226, 220, 220) 10%,rgb(240, 237, 237) 40%, rgb(230, 229, 229)50%);
  border-top: double 4px #A37e2c;
  height: 100px;

}

.foot-top{
  position: absolute;
  left: 0;
  display: inline-block;
  width: 33.3%;
  height: 95px;
  margin: 0;
  text-align: center;
}
.foot-top .rights-reserved{
  text-align: center;
  display:block;
  font-family:'Times New Roman', Times, serif;
  font-size: .8em;
  margin-top: .8em;
  margin-bottom: 0;
}

.foot-top a{
  display: inline-block;
  margin-top: 3em !important;
  font-family:Arial, Helvetica, sans-serif;
  color: rgb(11, 85, 11) !important;
  font-size: .90em;
}

.foot-top a:hover{
  font-family:Arial, Helvetica, sans-serif;
  color: rgb(12, 170, 243) !important;
  cursor: pointer;
  transition: .4s;
}

.foot-top>a:nth-child(1){
  margin-right: 15px;
}
.foot-mid{
  position: absolute;
  left: 33.3%;
  display: inline-block;
  width: 33.3%;
  height: 95px;
  text-align: center;
}

.foot-mid a{
  display:block;
  width: auto;
  font-family:Arial, Helvetica, sans-serif;
  color: rgb(11, 85, 11) !important;
  font-size: .90em;
  margin-left: 30%;
  margin-right: 30%;
}

.foot-mid a:nth-child(1){
  margin-top: 15px;
}

.foot-mid a:hover{
  font-family:Arial, Helvetica, sans-serif;
  color: rgb(12, 170, 243) !important;
  cursor: pointer;
  transition: .4s;
}

.foot-bot{
  position: absolute;
  left: 66.6%;
  display: inline-block;
  width: 33.3%;
  height: 95px;
}

.foot-bot i{
  display: inline-block;
  font-size: 2em;
  color: black;
  margin:0;
}

.foot-bot span .tel-ico{
  color: rgb(32, 39, 131) !important;
  margin-left: 20px;
}

.foot-bot .foot-contacto{
  text-align: center;
  display: block;
  margin: 0;
}

.foot-bot span{
  display: inline-block;
  width: 100%;
}

.foot-bot span .numtel{
  display: inline-block;
  text-align: center;
  font-family:Arial, Helvetica, sans-serif;
  margin-bottom: 0;
  margin-right: 30%;
  margin-left:20px;
}

.foot-bot>i{
  margin-left: 20px;
}

.foot-bot i:nth-child(3){
  color: rgb(0, 174, 255);
}

.foot-bot i:nth-child(4){
  color: rgb(0, 60, 255);
}

.foot-bot i:nth-child(5){
  color: rgb(15, 153, 3);
}
</style>
