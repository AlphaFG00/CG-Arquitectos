<template>
  <div id="app">

    <b-navbar toggleable="lg" type="dark" id="nav-bg">
      <b-container>
        <b-navbar-brand :to="{name: 'home'}" class="brillo"><img src="./assets/logoc+g.png" alt="Logo" class="logo-empresa"><span></span></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav id="nav-font">
            <b-nav-item :to="{name: 'home'}"> Inicio</b-nav-item>
            <b-nav-item :to="{name: 'Proyectos'}"> Proyectos</b-nav-item>
            <b-nav-item :to="{name: 'Servicios'}"> Servicios</b-nav-item>
          </b-navbar-nav>
        </b-collapse>

      </b-container>
    </b-navbar>

    <router-view id="nav-fix"/>
  </div>
</template>

<style>
#nav-bg{
    background: linear-gradient(160deg, rgb(114, 113, 113) 10%,rgb(41, 39, 39) 30%, rgb(75, 75, 75)90%);
    position: fixed;
    width: 100%;
    z-index: 2;
    border-width: .1em !important;
    border-bottom: solid;
    border-color: rgb(235, 190, 95);
}
/*
#nav-font-title{
  font-family:"Lucida Sans Unicode", "Lucida Grande", sans-serif;
  font-size: 1.5em;
  font-weight: bold;
  background: -webkit-linear-gradient(#d1ba69 50%,#69550b 10%, #b6a35f 40%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
#nav-font-sub-title{
  background: -webkit-linear-gradient(#c9c9c1 ,#cfcfcd, #7a7a78);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size:.68em;
}
*/
#nav-font{
font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
color: linear-gradient(70deg, black, grey);
}
#nav-fix{
  padding-top: 5em;
  background-color: #212121;
  min-height: 100vh;
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
</style>
