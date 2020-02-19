<template>
  <div class="home">
    <b-container>
      <p class="titulo-proyectos">Bienvenido</p>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components:{
    HelloWorld
  }
 
}
</script>

<style scoped>
.titulo-proyectos{
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
.home{

}
</style>