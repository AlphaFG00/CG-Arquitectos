<template>
    <div class="Modal-Altitude">
      <div class="modal" id="myModal" ref="myModal">


        <div class="contenido">
            <span class="cerrar" ref="myClose">&times;</span>
            <h2>{{proyectTitle}}</h2>
            <b-img class="proyecto-imagen" :src="require(`../assets/imagenproyectos/fotosproyectos/ALTITUDE-2.jpg`)" alt="Imagen-Proyecto-Altitude"></b-img>
            <div class="proyecto-texto">
                <div class="cuadro">
                <!--Desplazador (Inicio)-->
                  <div id="slider">
                    <div class="contenido2">
                      <div class="slide">
                        <span class="Slider-Titulo">Descripción</span>
                        <!--<p>Diseño y construcción para adecuacion de 2 pisos para departamentos.</p>-->
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In non tempore accusamus rerum optio. Illo assumenda suscipit quia doloremque fugiat corporis debitis doloribus voluptatem ab ratione in, pariatur autem nemo.</p>
                      </div>
                      <div class="slide">
                        <span class="Slider-Titulo">Ubicación</span>
                        <p>Zapopan,Jalisco. </p>
                      </div>
                      <div class="slide">
                        <span class="Slider-Titulo">Superficie</span>
                        <p> 600 metros cuadrados</p>
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
    name:'ModalAltitude',
    props:{
      proyectTitle:{
        type: String,
        required: true
      },
   },
   data(){
        return {
          myModal: [],
          myClose: []
        }
   },
   mounted(){
    var modal = this.$refs.myModal;
    var span = this.$refs.myClose;
    span.onclick = function() {
       modal.classList.remove("show-modal");
    }
   }
}
</script>

<style scoped>
/*css de la ventana de proyecto*/
.show-modal{
  display: block !important;
  position: fixed; 
  transition: all 1s ease;
  animation: suave 1s forwards; /*animacion de aparicion suave*/
}

.modal{
  z-index: 10; /* Manda al frente de toda la paguina el modal */
  padding: 0;
  left: 0;
  top: 0;
  overflow: auto;
  background-color: rgba(35, 38, 58, 0.705); /*Efecto oscuro transparente de fondo*/
}

.contenido .proyecto-imagen{
  display: block;
  align-content: center;
  max-width: 90%;
  max-height: 40vh;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 1vh;
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
.cerrar:hover,
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
/*  border-top: double rgb(194, 158, 68) 5px;
  border-bottom: double rgb(194, 158, 68) 5px;*/
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

#slider,  #slider .slide{
  width: 60vw;
  height: 170px;
}
#slider {
  overflow: hidden;
  margin: 0;
  font-size: 1.2em;
  color: #A37e2c;
  background-color: transparent;
  border-radius: 50px;
}

#slider .contenido2 {
  position: relative;
  width: 350%; /* Tiene que ser lo bastante grande como para todos los mensajes*/
  top: 0;
  right: 0;
  animation: slide-animation 10s infinite; /*Aqui se aplica la animacion, nombre, duracion, Propiedad al acabar (infinite = loop)*/
}

#slider .slide {
  position: relative;
  float: left;
  box-sizing: border-box;
}

@media (min-width: 0px) and (max-width: 992px) and (orientation: landscape){
  .contenido{
    min-width:90vw;
    min-height: 95vh;
    background-color: blue;
    width: 80vw;
  }
}

@media (min-width: 993px) and (orientation: landscape){ /*Vista computadora*/
  .contenido{
    margin-top: 10vh;
    max-width: 1000px;
    max-height: 80vh; 
    width: 95vw;
    min-height: 70vh;
  }
  .modal h2{ /*Formato del titulo del modal*/
    text-align: center;
    font-family: "Helvetica Neue","Arial Nova",Helvetica,Arial,sans-serif !important;
    font-size: 2.5em;
    color: rgb(12, 105, 12);
    padding-top: 8vh;
    padding-bottom: 1vh;
  }

  .cerrar{ /*icono de cerrar*/
    color: #aaaaaa;
    float: right;
    font-size: 50px;
    font-weight: bold;
    margin-right: 20px;
  }

  .contenido .proyecto-imagen{
    display: block; /*tratar como un bloque*/
    float: left; /*poner a la izq del contenedor*/
    align-content: center; /*Texto centrado*/
    max-width: 45%;
    max-height: 35vh;
    margin-right:1%;/*La mitad del tamaño 48% + 1% + 4% = 50%*/
    margin-left:4%;
    margin-top: 5vh;/*Espacio alejado del titulo*/
  }
  .proyecto-texto{
    display: block; /*Tratar como un bloque*/
    float: right; /*poner a la derecha del contenedor*/
    margin-right:2%;
    max-width: 48%;  /*Compartir la mitad del tamaño 48% + 2%*/
    margin-top: 10vh; /*Espacio alejado del titulo*/
  }

  #slider{
    width:100%;
    height: 200px;
  }
  .slide{
    padding:0;
    width:28.6% !important;
    height: 200px !important;
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
  39% { right: 100%;}
  62% { right: 100%;}
  72% { right: 200%;}
  95%{
    right:200%;
    opacity:1;
}
  100%{ right:200%;
    opacity:0;
  }
}

@keyframes suave {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>