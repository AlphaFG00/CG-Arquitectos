<template>
    <div class="lista-proyectos">
      <b-carousel
                id="CarouselProyectos"
                v-model="slide"
                :interval="4000"
                background="#ffffff"
                ref="CarouselProyectos"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">
        <ol id="CarouselProyectos___BV_indicators_" class="carousel-indicators Lista-color" aria-hidden="false" aria-label="Select a slide to display" aria-owns="CarouselProyectos___BV_inner_">
          <!--Si se necesita agregar mas proyectos se hace otra paguina para el carrucel con esto:-->
          <li role="button" id="CarouselProyectos___BV_indicator_1_" data-slide-to="0" aria-current="false" aria-label="Goto Slide 1" aria-controls="CarouselProyectos___BV_inner_" @click="setSlide(0)" :class="(slide == 0) ? 'active' : ''"></li>
          <li role="button" id="CarouselProyectos___BV_indicator_2_" data-slide-to="1" aria-current="false" aria-label="Goto Slide 2" aria-controls="CarouselProyectos___BV_inner_" @click="setSlide(1)" :class="(slide == 1) ? 'active' : ''"></li>
        </ol>
        <b-carousel-slide img-blank>
          <template>
            <!--Saca las imagenes y nombres de images del store-->
            <b-row class="contenedor">
              <b-col cols="12" md="6" lg="4" class="thumbex">
                <div class="thumbnail" @click="showModel(0)">
                    <b-img fluid :src="getImgUrl(images[0].name)" :alt="images[0].name" class="img-proyecto"></b-img>
                    <span>{{images[0].title}}</span>
                </div>
              </b-col>
              <b-col cols="12" md="6" lg="4" class="thumbex">
                <div class="thumbnail" @click="showModel(1)">
                    <b-img fluid :src="getImgUrl(images[1].name)" :alt="images[1].name" class="img-proyecto"></b-img>
                    <span>{{images[1].title}}</span>
                </div>
              </b-col>
              <b-col cols="12" md="6" lg="4" class="thumbex">
                <div class="thumbnail" @click="showModel(2)">
                    <b-img fluid :src="getImgUrl(images[2].name)" :alt="images[2].name" class="img-proyecto"></b-img>
                    <span>{{images[2].title}}</span>
                </div>
              </b-col>
              <b-col cols="12" md="6" lg="4" class="thumbex">
                <div class="thumbnail" @click="showModel(3)">
                    <b-img fluid :src="getImgUrl(images[3].name)" :alt="images[3].name" class="img-proyecto"></b-img>
                    <span>{{images[3].title}}</span>
                </div>
              </b-col>
              <b-col cols="12" md="6" lg="4" class="thumbex">
                <div class="thumbnail" @click="showModel(4)">
                    <b-img fluid :src="getImgUrl(images[4].name)" :alt="images[4].name" class="img-proyecto"></b-img>
                    <span>{{images[4].title}}</span>
                </div>
              </b-col>
              <b-col cols="12" md="6" lg="4" class="thumbex">
                <div class="thumbnail" @click="showModel(5)">
                    <b-img fluid :src="getImgUrl(images[5].name)" :alt="images[5].name" class="img-proyecto"></b-img>
                    <span>{{images[5].title}}</span>
                </div>
              </b-col>
            </b-row>
          </template>
        </b-carousel-slide>
          <!--Pack de 6-->
        <b-carousel-slide  img-blank img-alt="Blank image">
          <template>
            <b-row class="contenedor">
              <b-col cols="12" md="6" lg="4" class="thumbex">
                <div class="thumbnail" @click="showModel(0)">
                    <b-img fluid :src="getImgUrl(images[0].name)" :alt="images[0].name" class="img-proyecto"></b-img>
                    <span>{{images[0].title}}</span>
                </div>
              </b-col>
              <b-col cols="12" md="6" lg="4" class="thumbex">
                <div class="thumbnail" @click="showModel(1)">
                    <b-img fluid :src="getImgUrl(images[1].name)" :alt="images[1].name" class="img-proyecto"></b-img>
                    <span>{{images[1].title}}</span>
                </div>
              </b-col>
              <b-col cols="12" md="6" lg="4" class="thumbex">
                <div class="thumbnail" @click="showModel(2)">
                    <b-img fluid :src="getImgUrl(images[2].name)" :alt="images[2].name" class="img-proyecto"></b-img>
                    <span>{{images[2].title}}</span>
                </div>
              </b-col>
              <b-col cols="12" md="6" lg="4" class="thumbex">
                <div class="thumbnail" @click="showModel(3)">
                    <b-img fluid :src="getImgUrl(images[3].name)" :alt="images[3].name" class="img-proyecto"></b-img>
                    <span>{{images[3].title}}</span>
                </div>
              </b-col>
              <b-col cols="12" md="6" lg="4" class="thumbex">
                <div class="thumbnail" @click="showModel(4)">
                    <b-img fluid :src="getImgUrl(images[4].name)" :alt="images[4].name" class="img-proyecto"></b-img>
                    <span>{{images[4].title}}</span>
                </div>
              </b-col>
              <b-col cols="12" md="6" lg="4" class="thumbex">
                <div class="thumbnail" @click="showModel(5)">
                    <b-img fluid :src="getImgUrl(images[5].name)" :alt="images[5].name" class="img-proyecto"></b-img>
                    <span>{{images[5].title}}</span>
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
        <ModalAltitude :proyectTitle="images[0].title" :ref="0"/>
        <ModalApaches :proyectTitle="images[1].title" :ref="1"/>
        <ModalFinox :proyectTitle="images[2].title" :ref="2"/>
        <ModalHuasteca :proyectTitle="images[3].title" :ref="3"/>
        <ModalLeonDavid :proyectTitle="images[4].title" :ref="4"/>
        <ModalLasAguilas :proyectTitle="images[5].title" :ref="5"/>
      </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import ModalAltitude from '@/components/ModalAltitude.vue'
import ModalApaches from '@/components/ModalApaches.vue'
import ModalFinox from '@/components/ModalFinox.vue'
import ModalHuasteca from '@/components/ModalHuasteca.vue'
import ModalLeonDavid from '@/components/ModalLeonDavid.vue'
import ModalLasAguilas from '@/components/ModalLasAguilas.vue'
export default {
    name:'ListaProyectos',
    data(){
      return {
       slide: 0,
       sliding: null
      }
    },
    components:{
          ModalAltitude,ModalApaches,ModalFinox,ModalHuasteca,ModalLeonDavid,ModalLasAguilas
    },
    computed:{
        ...mapState(['images'])
    },
    methods:{
        getImgUrl(pet) {
            var images = require.context('../assets/imagenproyectos/', false, /\.jpg$/)
            return images('./' + pet + ".jpg")
        },
        showModel(index){
         var mod=this.$refs[index].$refs.myModal
         mod.classList.add("show-modal");
        },
        onSlideStart() {
          this.sliding = true
        },
        onSlideEnd() {
          this.sliding = false
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

@media (min-width: 0) and (max-width: 767px){
  .carousel-item{
    min-height: 1450px;
    height: 1450px;
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