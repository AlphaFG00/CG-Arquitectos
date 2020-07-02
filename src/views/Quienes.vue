<template>
  <div class="quienes">
    <b-container id="view-quienes">

      <div class="Titulo-Cuerpo">
        <div class="titulo-letra"><pre>C+G Arquitectura</pre></div>
        <div class="titulo-restante">
          <pre><span>y Desarrollos</span></pre>
        </div>
      </div>
      <!--cuerpo de la pagina INICIO-->
      <b-container class="texto_quienes">
        <b-container class="primera-parte text-justify">
          Fundada por profesionales en el ramo, en C+G Arquitectura y Desarrollos buscamos, de la mano con los clientes, crear esos espacios que les dignifiquen a ellos como a su entorno, llegando a la realización de ese proyecto que forma parte de su vida. Con una idea clara y compromiso, hemos dedicado nuestra experiencia a desarrollar proyectos integrando los valores que nos caracterizan, siendo estos:
        </b-container>
        <span class="segunda-parte">
          <ul>
            <li class="li-1"> Honestidad</li>
            <li class="li-2"> Lealtad a nuestros clientes</li>
            <li class="li-3"> Respeto por el medio ambiente</li>
            <li class="li-4"> Calidad y mejora continua</li>
          </ul>
        </span>
        <b-container class="tercera-parte text-justify">
          Con nuestra experiencia en el desarrollo arquitectónico, construcción, administración y la gestión inmobiliaria ofrecemos asesoramiento en los proyectos para que satisfaga las necesidades de nuestros clientes, tanto en diseño, beneficios y rentabilidad. Queremos que los sueños de nuestros clientes se hagan realidad.
        </b-container>
        <b-container class="cuarta-parte mb-5">
          <span class="msj-aclarativo text-justify">Experiencia de mas de 9 años con otras empresas, en los ámbitos:</span>
          <b-card-group deck class="text-center">
            <b-card no-body class="overflow-hidden border-green">
              <b-row align-v="center" no-gutters class="mt-3">
                <b-col md="6">
                  <b-card-body title="Industrial"/>
                </b-col>
                <b-col md="6">
                  <b-img center :src="require('@/assets/marcas/Matel.png')" width="auto" height="45" alt="Mattel logo"/>
                  <b-img center :src="require('@/assets/marcas/Takata.png')" width="auto" height="45" alt="Takata logo"/>
                  <b-img height="45" blank-color="transparent"></b-img>
                </b-col>
              </b-row>
            </b-card>

            <b-card no-body class="overflow-hidden border-green">
              <b-row align-v="center" no-gutters class="mt-3">
                <b-col md="6">
                  <b-card-body title="Comercial"/>
                </b-col>
                <b-col md="6">
                  <b-img center :src="require('@/assets/marcas/McDonalds.png')" width="auto" height="45" alt="McDonalds logo"/>
                  <b-img center :src="require('@/assets/marcas/StarBucks.png')" width="auto" height="45" alt="StarBucks logo"/>
                  <b-img center :src="require('@/assets/marcas/LasAlitas.png')" width="auto" height="45" alt="LasAlitas logo"/>
                </b-col>
              </b-row>
            </b-card>
          </b-card-group>
        </b-container>
      </b-container>
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

<style scoped lang="scss">
  .quienes{
    width: auto;
    min-height: 100vh;
  }
  #view-quienes{
    background-color:transparent;
    text-align: center;
  }
  .Titulo-Cuerpo{
    display: inline-block;
    width: 80vw;
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
    animation: reveal 2s .4s forwards;
  }

  .titulo-restante span{
    margin-left: -50px;
    animation: slidein 5s .4s forwards;
  }

  .Titulo-Cuerpo pre{ /*texto demaciado grande, se nesecita pre para evitar modificaciones de html*/
    margin: 0;
    padding:0;
    font-family: "Helvetica Neue","Arial Nova",Helvetica,Arial,sans-serif !important;
    color: #A37e2c;
    overflow: hidden;
    font-size: 1em;
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

  .cuarta-parte {
    margin-top: 10px;
    opacity: 0;
    text-align: left;
    margin-bottom: 15px;
    padding-bottom: 15px;
    animation: show-text 1.5s 4s forwards;
  }
  .cuarta-parte div{
    margin-top: 15px;
  }

  .cuarta-parte .msj-aclarativo{
    color: rgb(12, 52, 105);
    margin-left: 20px;
  }

  .border-green {
    border-color: rgb(9, 73, 9) !important;
    color: rgb(12, 52, 105);

    div {
      margin-top: 0;
    }

    img {
      margin-bottom: 1em;
    }
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


</style>