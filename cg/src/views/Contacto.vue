<template>
  <div class="Contacto">
    <b-container id="view-contacto">
    <!--Estructura para el efecto del titulo INICIO-->
      <div class="Titulo-Cuerpo">
        <div class="titulo-letra">Nuestros</div>
        <div class="titulo-restante">
          <span>Servicios</span>
        </div>
      </div>
    <!--Estructura para el efecto del titulo INICIO-->
    </b-container>
  </div>
</template>

<script>
import ListaProyectos from '@/components/ListaProyectos.vue'
export default {
  name:"Contacto",
  components:{
    ListaProyectos
  }
}
</script>

<style scoped>
  .Contacto{
    width: auto;
    min-height: 100vh;
    border-color: black;
    background-color: #212121;
    padding-bottom: 10px;
  }
  #view-contacto{
    background-color:transparent;
  }
  #view-contacto .titulo-contacto{
    color: lightgray;
    text-align: center;
    font-family: "Helvetica Neue","Arial Nova",Helvetica,Arial,sans-serif !important;
    font-size: 2em;
    animation-duration: 1s;
    animation-name: slideinright;
    background-color: transparent;
    border-width: 4px;
    border-bottom:double rgb(219, 196, 132);
    border-top:double rgb(219, 196, 132);
/*    border-left-color: rgb(221, 204, 158);*/
  }

  @keyframes slideinright {
    from {
      margin-left: 100%;
      width: 300%;
    }
    to {
      margin-left: 0%;
      width: 100%;
    }
  }
  @keyframes slideinleft {
    from {
      margin-right: 100%;
      width: 0%;
    }
    to {
      margin-right: 0%;
      width: 100%;
    }
  }
</style>