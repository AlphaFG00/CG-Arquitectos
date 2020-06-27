<template>
  <div class="home">
    <b-container id="view-inicio">
      <div class="Titulo-Cuerpo">
        <div class="titulo-letra">Bienvenido</div>
      </div>
      <div class="cuerpo-bienvenida">
        <span class="texto-bienvenida">
          Ofrecemos a nuestros clientes una solución a sus problemas, creando esa empatía para vivir junto a el la experiencia de crecer y hacer realidad sus sueños.
        </span>
      </div>
    </b-container>
  </div>
</template>

<style scoped>
.home{
    width: auto;
    min-height: 100vh;
    padding-bottom: 10px;
    background-image:url('../assets/fondo.jpg');
    background-color: white;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    animation: showup 1s forwards;
}

  #view-inicio{
    background-color:transparent;
    text-align: center;
        background-color: rgba(255, 255, 255, 0.568);
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

  .cuerpo-bienvenida{
    text-align: center !important;
    margin-top: 10vh;
    height: 50vh;
  }

  .texto-bienvenida{
    font-size: 1.5em;
    opacity: 0;
    color:rgb(12, 52, 105);
    animation: bienvenido 1.5s .8s forwards;
  }

  @keyframes showup {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes bienvenido {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
</style>