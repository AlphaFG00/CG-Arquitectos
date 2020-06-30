<template>
  <div>
    <div :class="['modal', showing_class]" @keyup.esc="close()" tabindex="0">
      <div class="contenido">
        <span class="cerrar" @click="close()">&times;</span>
        <h2>{{projectTitle}}</h2>
        <!--Carrusel-->
        <div class="proyecto-imagen">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <!--Imagenes para el carrusel, deben tener mas o menos la misma escala (alto es Xveces el ancho) independientemente del tamaño-->
            <b-carousel-slide
              class="limit"
              v-for="(image, index) in images" :key="index"
              :img-src="require('../assets/' + image)"
            />
          </b-carousel>
        </div>
        <div class="proyecto-texto">
          <b-carousel
                id="Carousel_2"
                v-model="slid"
                :interval="5000"
                ref="Carousel_2"
                @sliding-start="sliding = true"
                @sliding-end="sliding = false"
          >
            <ol id="Carousel_2___BV_indicators_" class="carousel-indicators Lista-color" aria-hidden="false" aria-label="Select a slide to display" aria-owns="Carousel_2___BV_inner_">
            <!--Si se necesita agregar mas texto (bloque) se hace otra paguina para el carrucel con esto:-->
              <li role="button" id="Carousel_2___BV_indicator_1_" data-slide-to="0" aria-current="false" aria-label="Goto Slide 1" aria-controls="Carousel_2___BV_inner_" @click="setSlide2(0)" :class="(slid == 0) ? 'active' : ''"></li>
              <li role="button" id="Carousel_2___BV_indicator_2_" data-slide-to="1" aria-current="false" aria-label="Goto Slide 2" aria-controls="Carousel_2___BV_inner_" @click="setSlide2(1)" :class="(slid == 1) ? 'active' : ''"></li>
              <li role="button" id="Carousel_2___BV_indicator_3_" data-slide-to="2" aria-current="false" aria-label="Goto Slide 3" aria-controls="Carousel_2___BV_inner_" @click="setSlide2(2)" :class="(slid == 2) ? 'active' : ''"></li>
            </ol>
            <b-carousel-slide>
              <template>
                <b-container class="slidet">
                  <span class="Slider-Titulo">Descripción</span>
                  <p>{{ description }}</p>
                </b-container>
              </template>
            </b-carousel-slide>
            <b-carousel-slide>
              <template>
                <b-container class="slidet">
                  <span class="Slider-Titulo">Ubicación</span>
                  <p>{{ location }}</p>
                </b-container>
              </template>
            </b-carousel-slide>
            <b-carousel-slide>
              <template>
                <b-container class="slidet">
                  <span class="Slider-Titulo">Superficie</span>
                  <p>{{ area }}</p>
                </b-container>
              </template>
            </b-carousel-slide>
          </b-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseModal',
  props:{
    projectTitle:{
      type: String,
      required: true
    },
    description: {
      type: String,
      default: `Diseño y construcción para adecuacion de 2 pisos para departamentos.`
    },
    location: {
      type: String,
      default: "Zapopan,Jalisco."
    },
    area: {
      type: String,
      default: "600 metros cuadrados"
    },
    images: {
      type: Array,
      default: function () { return [
        `imagenproyectos/fotosproyectos/ALTITUDE-2.jpg`
      ]}
    },
    is_shown: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      slide: 0,
      slid: 0,
      sliding: null,
      showing_class: 'show-modal'
    }
  },
  created: function () {
    this.showing_class = this.is_shown ? 'show-modal' : '';
  },
  methods: {
    close: function (){
      this.showing_class = 'bye-modal'
      setTimeout(function(){ this.showing_class = '' }, 500);
      this.$emit('close', this.projectTitle)
    },
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
    setSlide2(indice) {
      this.$refs.Carousel_2.setSlide(indice)
    }
  }
}
</script>

<style scoped lang="scss">
/*Css para la trancision de las ventanas INICIO*/
.show-modal,.bye-modal{
  display: block !important;
  position: fixed; 
  transition: all 1s ease;
}
.show-modal{animation: suave 1s forwards; /*animacion de aparicion suave*/}
.bye-modal{animation: suave-inverso 1s forwards; /*animacion de desaparicion suave*/}

@keyframes suave {
  0%{opacity: 0;}
  100%{opacity: 1;}
}

@keyframes suave-inverso {
  0%{opacity: 1 ;}
  100%{opacity: 0 ;}
}
.modal{
  z-index: 20; /* Manda al frente de toda la paguina el modal */
  padding: 0;
  left: 0;
  top: 0;
  overflow: auto;
  background-color: rgba(35, 38, 58, 0.705); /*Efecto oscuro transparente de fondo*/
  h2{
    text-align: center;
    font-family: "Helvetica Neue","Arial Nova",Helvetica,Arial,sans-serif !important;
    color: rgb(12, 105, 12);
    padding-top: 5vh;
    padding-bottom: 3vh;
  }
}

.contenido{
  margin-left: auto;
  margin-right: auto;
  margin-top: 3vh; /*Espacio entre tope de ventana del navegador y la ventana modal*/
  background-color: white;
  .proyecto-texto{
    display: inline-block; /*Tratar como un bloque*/
    margin-top: 5vh;
    width: 40%;
  }
  .proyecto-imagen{
    display: inline-block;
    margin-top: 5vh;
    width:50%;
  }
}
.cerrar{ /*icono de cerrar*/
  color: #aaaaaa;
  float: right;
  font-size: 30px;
  font-weight: bold;
  margin-right: 4px;
  &:hover, /*Animacion del icono de cierre al pasar el puntero o dar click*/
  &:focus {
    color:  #801919;
    cursor: pointer;
    transition: .5s
  }
}
/*Texto del modal */

.Slider-Titulo{
  font-family: "Helvetica Neue","Arial Nova",Helvetica,Arial,sans-serif !important;
  font-weight: bold;
  display: block;
  color: rgb(12, 52, 105);
  text-align: center;
  letter-spacing: 0.25em;
  margin: 0;
}

.slidet{
  margin: 0;
  font-size: 1em;
  color: #A37e2c;
  min-height: 150px;
  p{
    text-align: center;
    margin-bottom: 0;
    margin-top: 0;
  }
}

@media (min-width: 0px) and (max-width: 767px){
  .contenido{
    max-width:100vw;
    min-height: 90vh;
    width: 100vw;
    .proyecto-imagen{
      width: 85%;
      margin-top: 0;
    }
    .proyecto-texto{
      width: 95%;
      margin-top: 0;
      .carousel-item {
        min-height: 225px !important;
        height: 50vw;
        max-height: 260px !important;
        width: 100vw;
      }
    }
  }
  .slidet{
    min-height: 130px;
  }
}

@media (min-width: 768px) and (max-width: 992px){
  .contenido{
    max-width:90vw;
    min-height: 80vh;
    width: 80vw;
    .proyecto-imagen{
      width: 75%;
      margin-top: 0;
    }
    .proyecto-texto{
      width: 70%;
      margin-top: 0;
      .carousel-item {
        min-height: 30vh !important;
        height: 30vw;
        max-height: 300px !important;
      }
    }
  }
}

@media (min-width: 993px){ /*Vista computadora*/
  .contenido{
    margin-top: 10vh;
    max-width: 1100px;
    max-height: 90vh;
    width: 95vw;
    height: 80vh; 
    min-height: 600px !important; /*Altura del 80% del dispositivo*/
    padding-top: 0vh; /*Dimensiones del nav*/
    .proyecto-texto .carousel-item {
      min-height: 40vh !important;
      height: 40vw;
      max-height: 300px !important;
    }
  }
  .modal h2{ /*Formato del titulo del modal*/
    font-size: 2.5em;
    display: inline-block;
    padding-top: .5vh;
    padding-bottom: 10vh;
    width: 90%;
    height: 9vh;
    padding-bottom: .5vh;
    border-bottom: double 10px #A37e2c;
  }
  .cerrar{ /*icono de cerrar*/
    font-size: 50px;
    margin-right: 20px;
    margin-left: 80%;
  }
}
  .limit{ background-color: rgba(128, 128, 128, 0.685);}
  .Lista-color > li,
  .carousel-control-next > span,
  .carousel-control-prev > span{filter: invert(100%) !important;}
</style>