<template>
  <div class="lista-proyectos">

    <b-carousel
          id="CarouselProyectos"
          v-model="slide"
          :interval="4000"
          ref="CarouselProyectos"
          @sliding-start="sliding = true"
          @sliding-end="sliding = false"
    >
      <ol id="CarouselProyectos___BV_indicators_" class="carousel-indicators Lista-color" aria-hidden="false" aria-label="Select a slide to display" aria-owns="CarouselProyectos___BV_inner_">
        <!--Si se necesita agregar mas proyectos se hace otra paguina para el carrucel con esto:-->
        <li role="button" id="CarouselProyectos___BV_indicator_1_" data-slide-to="0" aria-current="false" aria-label="Goto Slide 1" aria-controls="CarouselProyectos___BV_inner_" @click="setSlide(0)" :class="(slide == 0) ? 'active' : ''"></li>
        <li role="button" id="CarouselProyectos___BV_indicator_2_" data-slide-to="1" aria-current="false" aria-label="Goto Slide 2" aria-controls="CarouselProyectos___BV_inner_" @click="setSlide(1)" :class="(slide == 1) ? 'active' : ''"></li>
      </ol>
      <b-carousel-slide>
        <template>
          <!--Saca las imagenes y nombres de images del store-->
          <b-row class="contenedor">
            <b-col cols="12" md="6" lg="4" class="thumbex" v-for="(image, index) in images" :key="index">
              <div class="thumbnail" @click="showModel(index)">
                <b-img fluid :src="getImgUrl(image.name)" :alt="image.name" class="img-proyecto"></b-img>
                <span>{{image.title}}</span>
              </div>
            </b-col>
          </b-row>
        </template>
      </b-carousel-slide>
        <!--Pack de 6-->
      <b-carousel-slide>
        <template>
          <b-row class="contenedor">
            <b-col cols="12" md="6" lg="4" class="thumbex" v-for="(image, index) in images" :key="index">
              <div class="thumbnail" @click="showModel(index)">
                <b-img fluid :src="getImgUrl(image.name)" :alt="image.name" class="img-proyecto"></b-img>
                <span>{{image.title}}</span>
              </div>
            </b-col>
          </b-row>
        </template>
      </b-carousel-slide>
      <a class="carousel-control-prev" href="#" role="button" aria-controls="CarouselProyectos" @click="prev()">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#" role="button" aria-controls="carouselProyectos" @click="next()">
        <span id="correccion-izq" class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </b-carousel>

    <div>
      <BaseModal
        v-for="(modal, index) in projects_data" :key="modal.projectTitle" :ref="index"
        :projectTitle="modal.projectTitle" :description="modal.description"
        :location="modal.location" :area="modal.area" :images="modal.images"
        :is_shown="modal.is_shown"
        @close="onCloseModal"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BaseModal from '@/components/BaseModal.vue'

export default {
  name:'ListaProyectos',
  created () {
    const component = this;
    this.handler = function () {
      component.closeAllModals()
    }
    window.addEventListener('keyup', this.handler);
  },
  beforeDestroy () {
    window.removeEventListener('keyup', this.handler);
  },
  data(){
    return {
      slide: 0,
      sliding: null,
      projects_data: [
        {
          projectTitle: 'Altitude',
          description: 'Diseño y construcción para adecuacion de 2 pisos para departamentos.',
          location: 'Zapopan,Jalisco.',
          area: '600 metros cuadrados',
          images: [
            'imagenproyectos/fotosproyectos/ALTITUDE-2.jpg',
            'imagenproyectos/fotosproyectos/ALTITUDE-1.jpg',
            'imagenproyectos/fotosproyectos/ALTITUDE-4.jpg',
            'imagenproyectos/fotosproyectos/ALTITUDE-5.jpg'
          ]
        },
        {
          projectTitle: 'Apaches 555',
          description: 'Desarrollo Inmobiliario para un Fraccionamiento de 9 casas de nivel residencial alto, incluyendo Diseño y construcción, urbanización y comercialización.',
          location: 'Zapopan,Jalisco. ',
          area: '9 casas de 250 – 300 metros cuadrados',
          images: [
            'imagenproyectos/fotosproyectos/APACHES1.jpg',
            'imagenproyectos/fotosproyectos/APACHES2.jpg',
            'imagenproyectos/fotosproyectos/APACHES3.jpg',
            'imagenproyectos/fotosproyectos/APACHES4.jpg',
            'imagenproyectos/fotosproyectos/APACHES5.jpg',
            'imagenproyectos/fotosproyectos/APACHES6.jpg',
            'imagenproyectos/fotosproyectos/APACHES7.jpg',
            'imagenproyectos/fotosproyectos/APACHES8.jpg'
          ]
        },
        {
          projectTitle: 'Torre Finox',
          description: 'Diseño y construcción de edificio de oficinas para Corporativo Financiero.',
          location: 'Zapopan,Jalisco. ',
          area: 'Sótano + 5 pisos de oficinas con un superficie total de 1,500 metros cuadrados',
          images: [
            'imagenproyectos/fotosproyectos/FINOX1.png',
            'imagenproyectos/fotosproyectos/FINOX2.png',
            'imagenproyectos/fotosproyectos/FINOX3.png',
            'imagenproyectos/fotosproyectos/FINOX4.png'
          ]
        },
        {
          projectTitle: 'Soriana Las Aguilas',
          description: 'Diseño para remodelación de tienda',
          location: 'Zapopan,Jalisco. ',
          area: '1000 metros cuadrados',
          images: [
            'imagenproyectos/fotosproyectos/SORIANA_AGUILAS.jpg'
          ]
        },
        {
          projectTitle: 'Casa de Abraham Rodriguez',
          description: 'Diseño y construcción para remodelación de casa habitación (en proceso).',
          location: 'Guadalupe, N.L. ',
          area: '300 metros cuadrados',
          images: [
            'imagenproyectos/fotosproyectos/CASA_ABR1.png',
            'imagenproyectos/fotosproyectos/CASA_ABR2.png',
            'imagenproyectos/fotosproyectos/CASA_ABR3.png'
          ]
        }
      ]
    }
  },
  components: {
    BaseModal
  },
  computed: {
    ...mapState(['images'])
  },
  methods: {
    getImgUrl(pet) {
      var images = require.context('../assets/imagenproyectos/', false, /\.jpg$/)
      return images('./' + pet + ".jpg")
    },
    showModel(index){
      this.projects_data[index].is_shown = true
      this.reactiveModal(index)
    },
    reactiveModal (index) {
      let reactive = this.projects_data[index].projectTitle
      this.projects_data[index].projectTitle = ( reactive.slice(0, -1) != ' ' ) ? reactive + ' ' : reactive.slice(0, -1)
    },
    onCloseModal (value) {
      let index = this.projects_data.findIndex(o => o.projectTitle == value)
      this.projects_data[index].is_shown = false
      this.reactiveModal(index)
    },
    closeAllModals () {
      this.projects_data.forEach((obj, index) => {
        obj.is_shown = false
        this.reactiveModal(index)
      })
    },
    prev() {
      this.$refs.CarouselProyectos.prev()
    },
    next() {
      this.$refs.CarouselProyectos.next()
    },
    setSlide(indice) {
      this.$refs.CarouselProyectos.setSlide(indice)
    }
  }
}

</script>

<style scoped>

  /*css - tabla de proyectos */
.contenedor {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
.contenedor>.thumbex {
  overflow: hidden;
  margin:auto;
  padding-top: 15px;
  padding-bottom: 15px;
}

.contenedor>.thumbex>.thumbnail {
  outline: 4px double #dfcf94;
  outline-offset: -16px;
  overflow: hidden;
  opacity: 0.88;
  backface-visibility: hidden;
  transition: all 0.4s ease-out;
  overflow: hidden;
  cursor: pointer;
}

.contenedor>.thumbex>.thumbnail .img-proyecto {
  z-index: 1;
  min-height: 200px;
  max-height: 200px;
}

.contenedor>.thumbex>.thumbnail span{
  position: absolute;
  z-index: 2;
  top: 30%;
  left: 0;
  right: 0;
  padding: 10px 30px;
  margin: 0 40px;
  text-align: center;
  background: rgba(0, 0, 0, 0.432);
  font-size: 20px;
  color: white;
  font-weight: 200;
  font-family: Times, "Times New Roman", Georgia, serif;
  font-style: oblique;
  letter-spacing: .2px;
  transition: all 0.3s ease-out;
}
.contenedor>.thumbex>.thumbnail:hover {
  outline: none;
  backface-visibility: hidden;
  transform: scale(1.15, 1.15);
  opacity: 1;
}
.contenedor>.thumbex>.thumbnail:hover span {
  opacity: 0;
}
/*
.carousel-control-next-icon {
    background-image: url(data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='%23000' width='8' height='8' viewBox='0 0 8 8'><path d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/></svg>);
}
*/

  .Lista-color > li,
  .carousel-control-next > span,
  .carousel-control-prev > span{
    filter: invert(100%) !important;
  }
/*Tiene que ajustarse para el tamaño del carrucel de una sola fila en moviles */
@media (min-width: 0) and (max-width: 767px){
  .carousel-item{
    min-height: 1200px;
    height: 1200px;
  }
  .contenedor>.thumbex>.thumbnail {
    max-width: 300px;
 }
 .contenedor>.thumbex>.thumbnail span{
   max-width: 65%;
 }
}

@media (min-width: 768px) and (max-width: 992px){
  .carousel-item {
    min-height: 760px !important;
    height: 760px !important;
  }
 }

@media (min-width: 993px) and (orientation: landscape){
  .carousel-item {
    min-height: 512px !important;
    height: 66vh;
    max-height: 600px !important;
  }
}

</style>