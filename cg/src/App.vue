<template>
  <div id="app">

    <b-navbar toggleable="lg" type="dark" id="nav-bg">
      <b-container>
        <b-navbar-brand :to="{name: 'home'}" id="nav-font-title">ARQUITECTURA</b-navbar-brand>
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

    <router-view/>
  </div>
</template>

<style>
#nav-bg{
    background: linear-gradient(70deg, black, grey);
}
#nav-font-title{
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  background: -webkit-linear-gradient(#69550b ,#d1ba69, #8f7411);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
#nav-font{
font-family: "Times New Roman", Times, serif;
color: linear-gradient(70deg, black, grey);
}

</style>
