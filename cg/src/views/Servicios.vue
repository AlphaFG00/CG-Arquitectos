<template>
  <div class="about">
    <b-container class="view-servicios">
      <div class="Titulo-Cuerpo">
        <div class="titulo-letra">Nuestros</div>
        <div class="titulo-restante">
          <span>Servicios</span>
        </div>
      </div>
      <div class="texto-servicios">
      <p class="texto-explicativo">Ofrecemos a nuestros clientes una solución a sus problemas, creando esa empatía para vivir junto a el la experiencia de crecer y hacer realidad sus sueños.</p>

        <div id="slider">
          <div class="contenido">
            <div class="slide">
              <p>
                Diseño arquitectónico.
              </p>
            </div>
            <div class="slide">
              <p>
                Construcción y administración (gerencia de obra).
              </p>
            </div>
            <div class="slide">
              <p>
                Desarrollo inmobiliario.
              </p>
            </div>
            <div class="slide">
              <p>
                Gestión Inmobiliaria.
              </p>
            </div>
            <div class="slide">
              <p>
                Mantenimiento residencial, comercial e industrial.
              </p>
            </div>
          </div>
        </div>

      </div>
    </b-container>
  </div>
</template>

<style scoped>
  .view-servicios{
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

.texto-servicios{
  text-align: left;
}
.texto-explicativo{
  display: block;
  opacity: 0;
  width: 90%;
  background-color: rgb(255, 255, 255);
  color: rgb(9, 73, 9);
  padding: 5px;
  animation: show-text 1.5s 1s forwards;
}

@keyframes show-text {
  0% {
    margin-left: 200px;
    opacity: 0;
  }
  100% {
    margin-left: 0px;
    opacity: 1;
  }
}
/*css listas slider*/


#slider,  #slider .slide{
  width: 750px;
  height: 45px;
}
#slider {
  overflow: hidden;
  margin: 0;
  font-size: 1.2em;
  color: #A37e2c;
  background-color: transparent;
  border-radius: 50px;
}
#slider :hover{
  background-color: lightgray;
}

#slider .contenido {
  position: relative;
  width: 9000px; /* Assign an insanely large width */
  top: 0;
  right: 0;
  animation: slide-animation 25s infinite;
}
#slider .slide {
  position: relative;
  float: left;
  box-sizing: border-box;
  padding: 10px 20px;
}



@keyframes slide-animation {
  0% { 
    opacity: 0;
    right: 0;
  }
  11% {
    opacity: 1;
    right: 0; 
  }
  22% { right: 100%; }
  33% { right: 100%; }
  44% { right: 200%; }
  55% { right: 200%; }
  66% { right: 300%; }
  77% { right: 300%; }
  88% {
    opacity: 1;
    right: 400%; 
  }
  100% {
    opacity: 0;
    right: 400%;
  }
}


</style>
