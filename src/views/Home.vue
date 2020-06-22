<template>
  <div class="home">
    <b-container id="view-inicio">
      <div class="Titulo-Cuerpo">
        <div class="titulo-letra">Bienvenido</div>
      </div>
    </b-container>
  </div>
</template>

<style scoped>
.home{
    width: auto;
    min-height: 100vh;
    padding-bottom: 10px;
}

  #view-inicio{
    background-color:transparent;
    text-align: center;
  }

  .Titulo-Cuerpo{
  display: inline-block;
  width: 60vw;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 1000;
  perspective: 1000;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  border-width: 4px;
  border-bottom:double rgb(219, 196, 132);
  border-top:double rgb(219, 196, 132);
  animation: showup 1.5s;
  margin-top: 15px;
  margin-bottom: 10px;
  }

.titulo-letra, .titulo-restante{
    display: inline-block;
    overflow: hidden;
    color: #A37e2c;
    font-family: "Helvetica Neue","Arial Nova",Helvetica,Arial,sans-serif !important;
    font-size: 2em;
  }

@keyframes showup {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


</style>