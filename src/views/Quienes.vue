<template>
  <div class="quienes">
    <b-container id="view-quienes">
      <div class="Titulo-Cuerpo">
        <div class="titulo-letra">Garca</div>
        <div class="titulo-restante">
          <span>Desarrollos</span>
        </div>
      </div>
      <!--cuerpo de la pagina INICIO-->
      <div class="texto_quienes">
        <span class="primera-parte">
          Fundada por profesionales en el ramo, en C+G Arquitectura y Desarrollos buscamos, de la mano con los clientes, crear esos espacios que les dignifiquen a ellos como a su entorno, llegando a la realización de ese proyecto que forma parte de su vida. Con una idea clara y compromiso, hemos dedicado nuestra experiencia a desarrollar proyectos integrando los valores que nos caracterizan, siendo estos:
        </span>
        <span class="segunda-parte">
          <ul>
            <li class="li-1"> Honestidad</li>
            <li class="li-2"> Lealtad a nuestros clientes</li>
            <li class="li-3"> Respeto por el medio ambiente</li>
            <li class="li-4"> Calidad y mejora continua</li>
          </ul>
        </span>
        <span class="tercera-parte">
          A la experiencia en el diseño arquitectónico, construcción y administración, se suma además la Gestión Inmobiliaria, donde buscamos apoyar al cliente en la búsqueda de ese lugar en donde compartirá momentos increíbles junto a sus seres mas queridos, le ayudamos a decidir cuál será la mejor opción para elegir entre la amplia gama de oportunidades del mercado o bien nos encargamos de promover su patrimonio para generarle rentabilidad mientras el goza de los beneficios de tener a un socio a su lado que se preocupe por sus intereses. O bien, si tiene una propiedad que quiere desarrollar, nos encargamos de asesorarle a encontrar la mejor vocación de su tierra, multiplicándole los beneficios que esta pudiera darle. Con estos y mas servicios, en C+G Arquitectura y Desarrollos buscamos siempre se, mas que un proveedor, un aliado de nuestros clientes para ayudarle a cumplir sus sueños y hacerlos realidad.
        </span>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name:"Quienes",
  components:{
  }
}
</script>

<style scoped>
  .quienes{
    width: auto;
    min-height: 100vh;
    padding-bottom: 10px;
  }
  #view-quienes{
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

  .primera-parte{
    display: block;
    opacity: 0;
    width: 100%;
    background-color: rgb(255, 255, 255);
    color: rgb(9, 73, 9);
    padding: 5px;
    animation: show-text 1.5s 1s forwards;
    text-align: left;
  }

  .segunda-parte{
    display: block;
    opacity: 1;
    font-size: 1em;
    width: 100%;
    background-color: rgb(255, 255, 255);
    color: rgb(12, 52, 105);
    padding: 5px;
    text-align: left;
  }

  .li-1{
    opacity: 0;
    animation: show-list-part 1s 1.5s forwards;
  }
  .li-2{
    opacity: 0;
    animation: show-list-part 1s 2s forwards;
  }
  .li-3{
    opacity: 0;
    animation: show-list-part 1s 2.5s forwards;
  }
  .li-4{
    opacity: 0;
    animation: show-list-part 1s 3s forwards;
  }

  .tercera-parte{
    display: block;
    opacity: 0;
    width: 100%;
    background-color: rgb(255, 255, 255);
    color: rgb(9, 73, 9);
    padding: 5px;
    animation: show-text 1.5s 3.5s forwards;
    text-align: left;
  }

@keyframes show-list-part {
  0% {
    opacity: 0;
    font-size: 1em;
  }
  40%{
    opacity: 1;
    font-size:1.2em;
    color:rgb(219, 196, 132);
  }
  60%{
    opacity: 1;
    font-size: 1.2em;
    color: rgb(12, 52, 105);
  }
  100% {
    opacity: 1;
    font-size: 1em;
    color: rgb(12, 52, 105);
  }
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
    width: 170px;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    width: 170px;
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


</style>