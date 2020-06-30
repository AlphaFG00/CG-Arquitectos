<template>
  <b-container fluid class="pt-5 pb-2 foot-body">
    <b-row align-v="center">
      <b-col sm="4" class="text-center mt-2 foot-col" order="3" order-sm="1">
        <a class="i_block">Términos</a><a class="i_block">Privacidad</a>
        <p class="rights-reserved">© 2020 Garca Desarrollos. Todos los derechos reservados</p>
      </b-col>
      <b-col sm="4" class="text-center foot-col" order="2">
        <router-link :to="{name: 'home'}">Inicio</router-link>
        <router-link :to="{name: 'Quienes'}">Acerca de nosotros</router-link>
        <router-link :to="{name: 'Servicios'}">Proyectos</router-link>
      </b-col>
      <b-col sm="4" class="text-center" order="1" order-sm="3">
        <i class="fab fa-twitter-square color-tw"></i>
        <i class="fab fa-facebook-square color-fb"></i>
        <i class="fab fa-whatsapp-square color-wa"></i><br>
        <span class="block">
          <i class="fas fa-phone-square color-phone"></i><span class="i_block ml-3">(+521) 811 978 3811</span>
        </span>
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss" scoped>
.foot-body {
  background: linear-gradient(160deg, rgb(226, 220, 220) 10%,rgb(240, 237, 237) 40%, rgb(230, 229, 229)50%);
  border-top: double 4px #A37e2c;
}

.foot-col {
  font-family:Arial, Helvetica, sans-serif;

  a {
    color: rgb(11, 85, 11) !important;
    font-size: .90em;
    display: block;
    margin: 0 7px;
  }

  a:hover {
    color: rgb(12, 170, 243) !important;
    cursor: pointer;
    transition: .4s;
  }

  .i_block {
    display: inline-block;
  }

  .block {
    display: block;
  }

  .rights-reserved {
    display:block;
    font-family:'Times New Roman', Times, serif;
    font-size: .8em;
    margin-top: .8em;
  }
}

.fab, .fas {
  margin: 0 10px;
  font-size: 2em;
}

.color-phone { color: rgb(32, 39, 131) !important; }
.color-tw { color: rgb(0, 174, 255) !important; }
.color-fb { color: rgb(0, 60, 255) !important; }
.color-wa { color: rgb(15, 153, 3) !important; }
</style>