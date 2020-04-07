<template>
    <div class="lista-proyectos">
        <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="512"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">
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
        onSlideStart(slide) {
          this.sliding = true
        },
        onSlideEnd(slide) {
          this.sliding = false
        }
    }
}

</script>

<style scoped>
.img-fluid{
  display: block;
  height: 400px;
}
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
</style>