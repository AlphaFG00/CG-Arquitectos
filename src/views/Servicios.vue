<template>
  <div class="servicios">
    <b-container id="view-servicios">
    <!--Estructura para el efecto del titulo INICIO-->
      <div class="Titulo-Cuerpo">
        <div class="titulo-letra">Nosotros</div>
        <div class="titulo-restante">
          <pre><span>te ayudamos</span></pre>
        </div>
      </div>
    <!--Estructura para el efecto del titulo INICIO-->
      <div class="texto-servicios">
      <p class="texto-explicativo">Ofrecemos a nuestros clientes una solución a sus problemas, creando esa empatía para vivir junto a el la experiencia de crecer y hacer realidad sus sueños, dando nuestra experiencia y soporte en todo lo relacionado a:</p>
    <!--Estructura para el efecto de textos desplazados "slider" INICIO-->
        <div id="slider">
          <div class="contenido">
            <div class="slide">
                <h4>Diseño arquitectónico.</h4>
                <span>Desde la conceptualización del proyecto hasta su etapa ejecutiva, ponemos nuestra experiencia y conocimiento para llegar a la mejor solución arquitectónica, estética y funcional para el cliente.</span>
            </div>
            <div class="slide">
                <h4>Construcción</h4>
                <span>Contamos con el equipo humano para materializar tu proyecto. Somos contratistas generales para entrega de proyectos llave en mano o según la necesidad que tenga el cliente.</span>
            </div>
            <div class="slide">
                <h4>Consultoría en administración de la construcción</h4>
                <span>Enfocado en aquellas empresas o constructores quienes ya tengan una obra en proceso o estén por iniciar algún proyecto, le ayudamos a tener el mejor control de la misma, partiendo desde la elaboración de catálogos de conceptos, control de estimaciones, gastos, insumos, control de materiales y personal tanto en materia de operación como en el tema administrativo (IMSS, Gestorias, Cierres de obra, etc).</span>
            </div>
            <div class="slide">
                <h4>Desarrollo inmobiliario.</h4>
                <span>Ayudamos al cliente a sacar el máximo provecho y rentabilidad para su propiedad. Haciendo un estudio exhaustivo de mercado, vocación del predio, diseño conceptual y estudio financiero, brindamos la mejor solución para conseguir los mejores rendimientos de la tierra en cuestión. Proyectos de inversión, aportación o consultoría, estamos para servirle.</span>
            </div>
            <div class="slide">
                <h4>Gestión Inmobiliaria.</h4>
                <span>Brindamos soluciones para comercializar tu propiedad, asi como todo lo relacionado a la gestión legal y de permisos para poder hacer la compra/venta de inmuebles.</span>
            </div>
            <div class="slide">
                <h4> Mantenimiento</h4>
                <span>Contamos con un equipo profesional de mantenimiento correctivo y preventivo en todos los rubros (obra civil, electricidad, plomeria, acabados, herreria, aire acondicionado) para que tus instalaciones estén siempre en perfectas condiciones.</span>
            </div>
          </div>
        </div>
<!--Estructura para el efecto de textos desplazados "slider" FIN-->
      </div>
    </b-container>
  </div>
</template>

<style scoped>
/*CSS para la estructura del efecto del titulo de la vista INICIO*/
.servicio{
    width: auto;
    min-height: 100vh;
    padding-bottom: 10px;
  }
  #view-servicios{
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
  animation-duration: 1s;
  animation-name: slideinright;
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
  .Titulo-Cuerpo pre{ /*texto demaciado grande, se nesecita pre para evitar modificaciones de html*/
    margin: 0;
    padding:0;
    font-family: "Helvetica Neue","Arial Nova",Helvetica,Arial,sans-serif !important;
    color: #A37e2c;
    overflow: hidden;
    font-size: 1em;
  }
  .titulo-letra{
    animation: showup 5s forwards;
  }

  .titulo-restante{
    width: 0px;
    animation: reveal 5s .4s forwards;
  }

  .titulo-restante span{
    margin-left: -100px;
    animation: slidein 5s .4s forwards;
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
    width: 200px;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    width: 200px;
  }
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
/*CSS para el texto simple que Aparece INICIO*/
.texto-servicios{
  text-align: left;/*correccion del texto centrado de view-servicios*/
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
/*CSS para el texto simple que Aparece FIN*/

/*CSS para la estructura slider*/
#slider,  #slider .slide{
  width: 80vw;
  height: auto;
}
#slider {
  overflow: hidden;
  margin: 0;
  font-size: 1em;
  color: #A37e2c;
  background-color: transparent;
  border-radius: 50px;
  
}

#slider .contenido {
  position: relative;
  width: 480vw; /* Tiene que ser lo bastante grande como para todos los mensajes*/
  top: 0;
  right: 0;
  animation: slide-animation 40s infinite; /*Aqui se aplica la animacion, nombre, duracion, Propiedad al acabar (infinite = loop)*/
}
#slider .slide {
  position: relative;
  float: left;
  box-sizing: border-box;
  padding: 10px 10vw 0px 10px;
  max-width: 80vw;
}

#slider .slide h4{
  padding-top: .5em;
  color: rgb(12, 52, 105);
}

#slider .slide span{
  color:rgb(9, 73, 9);
}

@keyframes slide-animation {/*Aqui se define la animacion*/
  0% { 
    opacity: 0;
    right: 0;
  }
  8% {
    opacity: 1;
    right: 0; 
  }
  16% { right: 100%; }
  27% { right: 100%; }
  32% { right: 200%; }
  40% { right: 200%; }
  48% { right: 300%; }
  56% { right: 300%; }
  64% { right: 400%; }
  72% { right: 400%; }
  80%{
    opacity: 1;
    right: 500%; 
  }
  100%{
    opacity: 0;
    right: 500%;
  }
}
/*CSS para la estructura slider FIN*/
</style>
