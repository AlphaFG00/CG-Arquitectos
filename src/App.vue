<template>
  <div id="app">

    <b-navbar toggleable="lg" type="light" id="nav-bg">
      <b-container>
        <b-navbar-brand :to="{name: 'home'}" class="brillo">
          <img src="./assets/logoc+g.png" alt="Logo" class="logo-empresa">
          <span></span>
        </b-navbar-brand>
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
        <b-nav-item :to="{name: 'home'}">Inicio</b-nav-item>
        <b-nav-item :to="{name: 'Quienes'}">Acerca de nosotros</b-nav-item>
        <b-nav-item :to="{name: 'Proyectos'}">Proyectos</b-nav-item>
      </div>
      <div class="foot-bot">
        <div class="foot-bot-title">Contacto</div>
        <div class="tel-area">
          <i class="fas fa-phone-square tel-ico"></i>
          <div class="numtel">81 1354 5442</div>
        </div>
        <div class="redes">
          <div>
            <i class="fab fa-twitter-square" href="#"></i>
          </div>
          <div>
            <i class="fab fa-facebook-square" href="#"></i>
          </div>
          <div>
            <i class="fab fa-whatsapp-square" href="#"></i>
          </div>
        </div>
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
  min-height: 89vh;
}
.logo-empresa{
  width: auto;
  max-height: 100%;
}

.brillo{
    position:relative;
    display: block;
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
    background:url('~@/assets/brillog.png') no-repeat;
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
}
.foot-top .rights-reserved{
  text-align: center;
  display:block;
  font-family:'Times New Roman', Times, serif;
  font-size: .8em;
  margin-top: .1em;
  margin-bottom: 0;
}
.foot-top a{
  display: inline-block;
  margin-top: 2em !important;
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
.foot-mid li{
  list-style: none;
}
.foot-mid a{
  display:block;
  width: auto;
  font-family:Arial, Helvetica, sans-serif;
  color: rgb(11, 85, 11) !important;
  font-size: .90em;
  margin-top: 0px !important;
  padding-bottom: 0px !important;
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
.foot-bot i{
  display: inline-block;
  font-size: 2.7em;
  color: black;
  margin:0;
}
.foot-bot .foot-bot-title{
  text-align: center; 
  color: rgb(12, 52, 105);
}
.foot-bot .tel-area .tel-ico{
  color: rgb(32, 39, 131) !important;
  display: inline-block;
}
.foot-bot .tel-area .numtel{
  font-size: 1.3em;
  color: cornflowerblue;
  display: inline-block;
}
.foot-bot .redes div:nth-child(1) i{
  color: rgb(0, 174, 255);
}
.foot-bot .redes div:nth-child(2) i{
  color: rgb(0, 60, 255);
}
.foot-bot .redes div:nth-child(3) i{
  color: rgb(15, 153, 3);
}
.foot-bot .redes i:hover{
  font-size: 3.5em;
  cursor: pointer;
  transition-duration: .2s;
  -webkit-transition-duration: .2s;
}
.foot-bot .redes i{
  transition-duration: .2;
  -webkit-transition-duration: .2s;
}

@media (min-width: 993px) and (orientation: landscape){
  .foot-body{
      height: 100px;
  }
  .foot-top{
    position: absolute;
    left: 0;
    display: inline-block;
    width: 20%;
    height: 95px;
    margin: 0;
    text-align: center;
  }
  .foot-mid{
    position: absolute;
    left: 20%;
    display: inline-block;
    width: 40%;
    height: 95px;
    text-align: center;
  }

  .foot-bot{
    position: absolute;
    left: 60%;
    display: inline-block;
    width: 40%;
    height: 95px;
  }
  .foot-bot .tel-area {
    width: 60%;
    height: 60px;
    float: left;
  }
  .foot-bot .redes div{
    width: 33.3%;
    float: left;
  }
  .foot-bot .redes {
    height: 60px;
    width: 40%;
    float: left;
  }
  .foot-bot .tel-area .numtel{
    margin-left: 10%;
  }
  .foot-bot .tel-area .tel-ico{
    margin-left: 7%;
  }
}

@media (min-width: 768px) and (max-width: 992px){
  .foot-body{
      height: 235px;
      display: flex;
      flex-direction: column;
  }
  .foot-top{
    order: 3;
    display:block;
    width: 100%;
    height: 65px;
    margin: 0;
    text-align: center;
    border-top: #A37e2c 1px dotted;
  }
  .foot-top a{
    margin-top: 10px !important;
  }
  .foot-mid{
    order: 1;
    display:block;
    width: 100%;
    height: 90px;
    text-align: center;
  }

  .foot-mid li a{
    padding-top:2px !important;
    font-size: 1em;
  }
  .foot-bot{
    order:2;
    display: block;
    width: 100%;
    height: 80px;
    margin: 0px;
    border-top: #A37e2c 1px dotted;
  }

  .foot-bot .tel-area {
    width: 50%;
    height: 60px;
    float: left;
    padding-left: 100px;
  }
  .foot-bot .redes div{
    width: 20%;
    float: left;
  }
  .foot-bot .redes {
    height: 60px;
    width: 50%;
    float: left;
  }
  .foot-bot .tel-area .numtel{
    margin-left: 10%;
  }
  .foot-bot .tel-area .tel-ico{
    margin-left: 7%;
  }
}

@media (min-width: 0px) and (max-width: 767px){
  .foot-body{
      height: 235px;
      display: flex;
      flex-direction: column;
  }
  .foot-top{
    order: 3;
    display:block;
    width: 100%;
    height: 65px;
    margin: 0;
    text-align: center;
    border-top: #A37e2c 1px dotted;
  }
  .foot-top a{
    margin-top: 10px !important;
  }
  .foot-mid{
    order: 1;
    display:block;
    width: 100%;
    height: 90px;
    text-align: center;
  }

  .foot-mid li a{
    padding-top:2px !important;
    font-size: .9em;
    margin-left: 10%;
    margin-right: 10%;
  }
  .foot-bot{
    order:2;
    display: block;
    width: 100%;
    height: 80px;
    margin: 0px;
    border-top: #A37e2c 1px dotted;
  }

  .foot-bot .tel-area {
    width: 60%;
    height: 60px;
    float: left;
    padding-left: 15px;
  }
  .foot-bot .redes div{
    width: 33.3%;
    float: left;
  }
  .foot-bot .redes {
    height: 60px;
    width: 40%;
    float: left;
  }
  .foot-bot .tel-area .numtel{
    margin-left: 4%;
  }
  .foot-bot .tel-area .tel-ico{
    margin-left: 2%;
  }
}

</style>