<template>
  <div class="proyectos">
    <b-container id="view-proyectos">
      <p class="titulo-proyectos">Lo mas Destacado</p>
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
    border-color: black;
    background-color: #212121;
    padding-bottom: 10px;
  }
  #view-proyectos{
    background-color:transparent;
  }
  #view-proyectos .titulo-proyectos{
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

  .list-animation{
    animation-duration: 1.2s;
    animation-name: slideinleft;
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