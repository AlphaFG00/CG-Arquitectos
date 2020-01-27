<template>
    <div class="lista-proyectos">
      <b-container fluid>
        <b-row class="contenedor">
          <b-col v-for="imagen of images" :key="imagen.id"
          cols="12" md="6" lg="4" class="thumbex">
            <div class="thumbnail">
              <a href="javascript:void(0)">
                <b-img fluid :src="getImgUrl(imagen)" v-bind:alt="imagen" class="img-proyecto"></b-img>
                <span>Nombre del proyecto</span>
              </a>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name:'ListaProyectos',
    computed:{
        ...mapState(['images'])
    },
    methods:{
        getImgUrl(pet) {
            var images = require.context('../assets/imagenproyectos/', false, /\.jpg$/)
            return images('./' + pet + ".jpg")
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
}

.contenedor>.thumbex>.thumbnail .img-proyecto {
  z-index: 1;
  min-height: 170px;
}

.contenedor>.thumbex>.thumbnail span{
  position: absolute;
  z-index: 2;
  top: 35%;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.432);
  padding: 10px 30px;
  margin: 0 40px;
  text-align: center;
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