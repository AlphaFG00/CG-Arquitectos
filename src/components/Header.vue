<template>
  <b-navbar toggleable="lg" type="light" id="nav-bg" class="nav-font">
    <b-container>
      <b-navbar-brand :to="{name: 'home'}" class="brillo">
        <img src="@/assets/logoc+g.png" alt="Logo" class="logo-empresa">
        <span></span>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{name: 'home'}"> Inicio</b-nav-item>
          <b-nav-item :to="{name: 'Quienes'}" > ¿Quienes Somos?</b-nav-item>
          <b-nav-item :to="{name: 'Proyectos'}"> Proyectos</b-nav-item>
          <b-nav-item :to="{name: 'Servicios'}"> Servicios</b-nav-item>
            <b-nav-item :to="{name: 'Contacto'}" >Contacto</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<style lang="scss" scoped>
#nav-bg {
  background: linear-gradient(160deg, rgb(255, 255, 255) 10%,rgb(240, 237, 237) 40%, rgb(255, 255, 255)50%);
  position: fixed;
  width: 100vw;
  z-index: 15;
  border-width: .1em !important;
  border-bottom: solid;
  border-color: #A37e2c;
}

.nav-font {
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
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

    span {
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

    &:hover span {
      background-position: 300px 0px;
      -webkit-transition-property: all;
      -webkit-transition-duration: 1.5s;
      transition-property: all;
      transition-duration: 1.5s;
    }
}

.nav-item a {
  color: black !important;

  &:hover {
    color: rgb(11, 63, 11) !important;
  }
}
</style>