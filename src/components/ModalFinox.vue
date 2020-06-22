<template>
    <div class="Modal-Finox">
      <div class="modal" id="myModal" ref="myModal">
        <div class="contenido">
            <span class="cerrar" ref="myClose">&times;</span>
            <h2>{{proyectTitle}}</h2>
            <!--Carrusel-->
            <div class="proyecto-imagen">
              <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">
                <!--Imagenes para el carrusel, deben tener mas o menos la misma escala (alto es Xveces el ancho) independientemente del tamaño-->
                <b-carousel-slide :img-src="require(`../assets/imagenproyectos/fotosproyectos/ALTITUDE-2.jpg`)"></b-carousel-slide>
                <b-carousel-slide :img-src="require(`../assets/imagenproyectos/fotosproyectos/ALTITUDE 1.jpg`)"></b-carousel-slide>
                <b-carousel-slide :img-src="require(`../assets/imagenproyectos/fotosproyectos/ALTITUDE 4.jpg`)"></b-carousel-slide>
                <b-carousel-slide :img-src="require(`../assets/imagenproyectos/fotosproyectos/ALTITUDE 5.jpg`)"></b-carousel-slide>
              </b-carousel>
            </div>
            <!--Carrusel FIN-->
            <div class="proyecto-texto">
                <div class="cuadro">
                <!--Desplazador (Inicio)-->
                  <div id="slidert">
                    <div class="contenido2">
                      <div class="slidet">
                        <span class="Slider-Titulo">Descripción</span>
                        <p>Diseño y construcción de edificio de oficinas para Corporativo Financiero.</p>
                      </div>
                      <div class="slidet">
                        <span class="Slider-Titulo">Ubicación</span>
                        <p>Zapopan,Jalisco. </p>
                        <span class="Slider-Titulo">Superficie</span>
                        <p>Sótano + 5 pisos de oficinas con un superficie total de 1,500 metros cuadrados</p>
                      </div>
                    </div>
                  </div>
                <!--Desplazador (Fin)-->
                </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:'ModalFinox',
    props:{
      proyectTitle:{
        type: String,
        required: true
      },
   },
   data(){
        return {
          myModal: [],
          myClose: [],
          slide: 0,
          sliding: null
        }
   },
   mounted(){
    var modal = this.$refs.myModal;
    var span = this.$refs.myClose;
    var quitar = 
    span.onclick = function() {
      modal.classList.remove("show-modal");
      modal.classList.add("bye-modal");
      setTimeout(function(){modal.classList.remove("bye-modal")}, 500);
    }
   },
   methods: {
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
/*Css para la trancision de las ventanas INICIO*/
.show-modal{
  display: block !important;
  position: fixed; 
  transition: all 1s ease;
  animation: suave 1s forwards; /*animacion de aparicion suave*/
}
.bye-modal{
  display: block !important;
  position: fixed;
  transition: all 1s ease;
  animation: suave-inverso 1s forwards; /*animacion de desaparicion suave*/
}
.modal{
  z-index: 20; /* Manda al frente de toda la paguina el modal */
  padding: 0;
  left: 0;
  top: 0;
  overflow: auto;
  background-color: rgba(35, 38, 58, 0.705); /*Efecto oscuro transparente de fondo*/
}
@keyframes suave {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

@keyframes suave-inverso {
  0%{
    opacity: 1 ;
  }
  100%{
    opacity: 0 ;
  }
}
/*Css de trancisiones para aparecer y desaparecer FIN*/
.contenido .proyecto-imagen{
  display: inline-block;
  margin-top: 5vh;;
  width:60%;
}
.contenido{
  margin-left: auto;
  margin-right: auto;
  margin-top: 3vh; /*Espacio entre tope de ventana del navegador y la ventana modal*/ 
  min-height: 80vh; /*Altura del 80% del dispositivo*/
  background-color: white;
}
.contenido .proyecto-texto{
  overflow: auto;
  height: 50%;
}
.cerrar{ /*icono de cerrar*/
  color: #aaaaaa;
  float: right;
  font-size: 30px;
  font-weight: bold;
  margin-right: 4px;
}
.cerrar:hover, /*Animacion del icono de cierre al pasar el puntero o dar click*/
.cerrar:focus {
  color:  #801919;;
  text-decoration: none;
  cursor: pointer;
  transition: .5s
}

/*Texto del modal */
.cuadro{
  display: float;
  color: black;
  background-color:transparent;
  width: 100%;
  padding-right: 15vw;
  padding-left:15vw;
  float: right;
}

.cuadro p{
  margin-bottom: 0;
  margin-top: 0;
}

.Slider-Titulo{
  font-family: "Helvetica Neue","Arial Nova",Helvetica,Arial,sans-serif !important;
  font-weight: bold;
  display: block;
  color: rgb(12, 52, 105);
  text-align: center;
  letter-spacing: 0.25em;
  margin: 0;
  margin-top: 3vh;
  margin-bottom: .5vh;
}

.modal h2{
  text-align: center;
  font-family: "Helvetica Neue","Arial Nova",Helvetica,Arial,sans-serif !important;
  color: rgb(12, 105, 12);
  padding-top: 5vh;
  padding-bottom: 3vh;
}

#slidert,  #slidert .slidet{
  width: 60vw;
  height: 200px;
}
#slidert {
  overflow: hidden;
  margin: 0;
  font-size: 1.2em;
  color: #A37e2c;
  background-color: transparent;
}

#slidert .contenido2 {
  position: relative;
  width: 350%; /* Tiene que ser lo bastante grande como para todos los mensajes*/
  top: 0;
  right: 0;
  animation: slide-animation 10s infinite; /*Aqui se aplica la animacion, nombre, duracion, Propiedad al acabar (infinite = loop)*/
}

#slidert .slidet {
  position: relative;
  float: left;
  box-sizing: border-box;
}

@media (min-width: 0px) and (max-width: 992px) and (orientation: landscape){
  .contenido{
    min-width:90vw;
    min-height: 80vh;
    width: 80vw;
  }
}

@media (min-width: 993px) and (orientation: landscape){ /*Vista computadora*/
  .contenido{
    margin-top: 10vh;
    max-width: 1100px;
    max-height: 80vh; 
    width: 95vw;
    min-height: 70vh;
    padding-top: 0vh; /*Dimensiones del nav*/
  }
  .modal h2{ /*Formato del titulo del modal*/
    text-align: center;
    font-family: "Helvetica Neue","Arial Nova",Helvetica,Arial,sans-serif !important;
    font-size: 2.5em;
    color: rgb(12, 105, 12);
    position: normal;
    display: inline-block;
    padding-top: .5vh;
    width: 90%;
    padding-bottom: .5vh;
    border-bottom: double 12px #A37e2c;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
  }
  .contenido .proyecto-imagen{/*Dimenciones de la imagen*/
    display: inline-block;/*Obligar a estar en una linea de bloque*/
    margin-top: 5vh;
    width:45%; /*ancho de las imagenes*/
  }
  .cerrar{ /*icono de cerrar*/
    color: #858383;
    float: right;
    font-size: 50px;
    font-weight: bold;
    margin-right: 20px;
    margin-left: 80%;
  }
 
  .proyecto-texto{
    display: block; /*Tratar como un bloque*/
    float: right; /*poner a la derecha del contenedor*/
    margin-right:2%;
    max-width: 48%;  /*Compartir la mitad del tamaño 48% + 2%*/
    margin-top: 5vh; /*Espacio alejado del titulo*/
  }
/*Css para Slider de texto inicio*/
  #slidert{ 
    width:95%;
    height: 300px;
    border-left: double 5px;
    margin-left: 1vw;
    padding-left: 1vw;
  }
  .slidet{
    padding-top:25px;
    width:27% !important;
    height: 300px !important;
  }
  .cuadro{
    display:float;
    right:0;
    width: 100%;
    padding: 0;
  }
}

@keyframes slide-animation {/*Aqui se define la animacion*/
  0% { 
    opacity: 0;
    right: 0;
  }
  5% {
    opacity: 1;
    right: 0; 
  }
  29% { right: 0;}
  39% { right: 0%;}
  62% { right: 100%;}
  72% { right: 100%;}
  95%{
    right:100%;
    opacity:1;
}
  100%{ right:100%;
    opacity:0;
  }
}
/*Css para Slider de texto fin*/
</style>