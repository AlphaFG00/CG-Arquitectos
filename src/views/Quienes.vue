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
      <b-container class="texto_quienes">
        <b-container class="primera-parte">
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
        <b-container class="tercera-parte">
          Con nuestra experiencia en el desarrollo arquitectónico, construcción, administración y la gestión inmobiliaria ofrecemos asesoramiento en los proyectos para que satisfaga las necesidades de nuestros clientes, tanto en diseño, beneficios y rentabilidad. Queremos que los sueños de nuestros clientes se hagan realidad.
        </b-container>
        <b-container class="cuarta-parte">
          <span class="msj-aclarativo">Experiencia de mas de 9 años, previos a la empresa, en el ambito:</span>
          <div class="comercial">
            <span class="exp-title">Comercial con:</span>
            <span>
              <!--By McDonald's - It can be found on McDonald's webpage., Public Domain, https://commons.wikimedia.org/w/index.php?curid=12648922-->
              <img src="../assets/marcas/McDonalds.png" alt="McDon">
              <!--By Source, Fair use, https://en.wikipedia.org/w/index.php?curid=30335490-->
              <img src="../assets/marcas/StarBucks.png" alt="startb">
              <!--By Pinclipart ,Fair use,https://www.pinclipart.com/pindetail/ihxxRT_las-alitas-in-jurez-las-alitas-logo-clipart/-->
              <img src="../assets/marcas/LasAlitas.png" alt="LasAlitas">
            </span>
          </div>
          <div class="industrial">
            <span class="exp-title">Industrial con:</span>
            <span>
              <!--By The original uploader was Seo75 at English Wikipedia. - Transferred from en.wikipedia to Commons., Public Domain, https://commons.wikimedia.org/w/index.php?curid=11296821-->
              <img src="../assets/marcas/Matel.png" alt="Matel">
              <!--By Unknown author - Vektordaten: [1] (PDF)Farbinfo: http://www.takata.com/Investors/images/logosmall.gifVon Marsupilami am 30. Oktober 2010 in die deutschsprachige Wikipedia geladen., Public Domain, https://commons.wikimedia.org/w/index.php?curid=40442895-->
              <img src="../assets/marcas/Takata.png" alt="Takata">
            </span>
          </div>
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

<style scoped>
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

  .cuarta-parte .comercial img, .cuarta-parte .industrial img{
    width: auto;
    height: 45px;
    margin-left: 20px;
  }
  .cuarta-parte {
    margin-top: 10px;
    opacity: 0;
    text-align: left;
    animation: show-text 1.5s 4s forwards;
  }
  .cuarta-parte div{
    margin-top: 15px;
  }
  .cuarta-parte .exp-title {
    color: rgb(12, 52, 105);
  }

  .cuarta-parte .msj-aclarativo{
    color: rgb(12, 52, 105);
    margin-left: 20px;
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