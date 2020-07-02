<template>
  <div class="Contacto">
    <b-container id="view-contacto">
    <!--Estructura para el efecto del titulo INICIO-->
      <div class="Titulo-Cuerpo">
        <div class="titulo-letra">Cotactate</div>
        <div class="titulo-restante">
          <pre><span>con Nosotros</span></pre>
        </div>
      </div>
    <!--Estructura para el efecto del titulo Final-->
      <div>
        <b-row class="ViewCuerpo" align-v="center">
          <b-col cols="12" md="6" lg="6">
            <div class="persona-contacto">
              <span>Arq. Rogelio Cázares Rodríguez</span>
              <span><i class="fas fa-phone-square icon-phone"></i><span>Cel. 8119783811</span></span>
              <span><i class="fas fa-envelope icon-email"></i><span>rogelio.cazares@garcadesarrollos.com</span></span>
            </div>
            <div class="persona-contacto">
              <span>Lic. Elisa García</span>
              <span><i class="fas fa-phone-square icon-phone"></i><span>Cel. 8112505670</span></span>
              <span><i class="fas fa-envelope icon-email"></i><span>elisa.garcia@garcadesarrollos.com</span></span>
            </div>
          </b-col>
          <b-col cols="12" md="6" lg="6">
            <div class="Mapa">
              <span class="direccion">CRT. NACIONAL KM 262. LOS CRISTALES, MONTERREY, NUEVO LEÓN, MÉXICO CP. 64985</span>
              <div style="width=100%; background-color: royalblue; height:200px;">*MAPA*</div>
            </div>
          </b-col>
        </b-row>
      </div>
    <ContactForm/>
    </b-container>
  </div>
</template>

<style scoped lang="scss">

.Contacto{
    width: auto;
    min-height: 100vh;
    padding-bottom: 10px;
  }
  #view-contacto{
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
  .Titulo-Cuerpo pre{ /*texto demaciado grande, se nesecita pre para evitar modificaciones de html*/
    margin: 0;
    padding:0;
    font-family: "Helvetica Neue","Arial Nova",Helvetica,Arial,sans-serif !important;
    color: #A37e2c;
    overflow: hidden;
    font-size: 1em;
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
/*Fin del css por default */

$icons-size: 2em;
$tam-celda: 100%;
.ViewCuerpo{
  .persona-contacto{
    border: solid 1px rgb(219, 196, 132);
    text-align: left;
    >span{/*Hijos directos*/
      margin-left: 3%;
      display: block;
      font-family:Arial, Helvetica, sans-serif;
      font-size: .9em;
    }
    >span .icon-email,>span .icon-phone{
      font-size: $icons-size;
      margin-right: 5%;
    }
  }
  .persona-contacto:first-child{
    margin-bottom: 20px;
  }
  .Mapa{
    border: solid 1px rgb(219, 196, 132);
    .direccion{
      display: block;
      width: 100%;
      font-family:Arial, Helvetica, sans-serif;
      font-size: .8em;
    }
  }
}
.icon-phone{color: rgb(32, 39, 131) !important;}
.icon-email{color: rgb(187, 39, 28) !important;}

</style>

<script>
import ContactForm from '@/components/ContactForm.vue';
export default {
  name: 'Contacto',
  components:{
    ContactForm
  }
}
</script>