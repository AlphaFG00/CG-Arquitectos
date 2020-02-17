<template>
  <div class="proyectos">
    <b-container id="view-proyectos">
      <div class="Titulo-Cuerpo">
        <div class="titulo-letra">Nuestros</div>
        <div class="titulo-restante">
          <span>Proyectos</span>
        </div>
      </div>
        <ListaProyectos class="list-animation"/>
    </b-container>
  </div>
</template>

<script>
import ListaProyectos from '@/components/ListaProyectos.vue'
export default {
  name:"Proyectos",
  components:{
    ListaProyectos
  }
}
</script>

<style scoped>
  .proyectos{
    width: auto;
    min-height: 100vh;
    padding-bottom: 10px;
  }
  #view-proyectos{
    background-color:transparent;
    text-align: center;
  }
  .Titulo-cuerpo{
  display: inline-block;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 1000;
  perspective: 1000;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  }

  .titulo-letra, .titulo-restante{
    display: inline-block;
    overflow: hidden;
    color: #A37e2c;
    font-family: "Helvetica Neue","Arial Nova",Helvetica,Arial,sans-serif !important;
    font-size: 2em;
  }
  .titulo-letra{
    animation: showup 5s forwards;
  }

  .titulo-restante{
    width: 0px;
    animation: reveal 5s forwards;
  }

  .titulo-restante span{
    margin-left: -100px;
    animation: slidein 5s forwards;
  }

@keyframes showup {
  0% {
    opacity: 0;
    margin-right: 100px;
  }
  10% {
    opacity: 1;
    margin-right: 0px;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slidein {
  0% {
    margin-left: -800px;
  }
  10% {
    margin-left: -800px;
  }
  30% {
    margin-left: 0px;
  }
  100% {
    margin-left: 0px;
  }
}

@keyframes reveal {
  0% {
    opacity: 0;
    width: 0px;
  }
  10% {
    opacity: 1;
    width: 0px;
  }
  25% {
    width: 150px;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    width: 150px;
  }
}



















 .titulo-proyectos{
    display: block;
    text-align: center;
    color: #A37e2c;
    text-align: center;
    font-family: "Helvetica Neue","Arial Nova",Helvetica,Arial,sans-serif !important;
    font-size: 2em;
    overflow: hidden;
    white-space: nowrap;
    animation-duration: 3s;
    animation-name: Aparicion-titulo;
    background-color: transparent;
/*    background: linear-gradient(180deg, rgb(255, 255, 255)30%,rgb(238, 237, 237)60%,rgb(255, 255, 255)90%);*/
    border-width: 4px;
    border-bottom:double rgb(219, 196, 132);
    border-top:double rgb(219, 196, 132);
/*    box-shadow: rgb(94, 94, 128) 3px 3px 5px;*/
  }
  .titulo-proyectos span{
    overflow: hidden;
    white-space: nowrap;
    width: 0px;
    animation: desliz 5s 0s forwards;
  }

  .list-animation{
    animation-duration: 2s;
    animation-name: Aparicion-lista;
  }
  @keyframes Aparicion-lista {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

</style>