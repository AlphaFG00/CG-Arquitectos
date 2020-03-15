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
                        <span class="Modal-Titulo">Descripción</span>
                        <p>Diseño y construcción para adecuacion de 2 pisos para departamentos.</p>
                      </div>
                      <div class="slide">
                        <span class="Modal-Titulo">Ubicación</span>
                        <p>Zapopan,Jalisco. </p>
                      </div>
                      <div class="slide">
                        <span class="Modal-Titulo">Superficie</span>
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
  position: fixed; /* Stay in place */
  transition: all 1s ease;
  animation: suave 1s forwards;

}

.modal{
  z-index: 10; /* Sit on top */
  padding: 0;/* Location of the box */
  left: 0;
  top: 0;
  overflow: auto; /* Enable scroll if needed */
 /* Black w/ opacity */
  background-color: rgba(35, 38, 58, 0.705);
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
  margin-top: 3vh;
  min-height: 80vh;
  /*background: -webkit-linear-gradient(#212121,rgb(59, 59, 59));*/
  background-color: white;
  border-style: solid;
}
.contenido .proyecto-texto{
  overflow: auto;
  height: 50%;
}
.cerrar{
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
  border-top: double rgb(194, 158, 68) 5px;
  border-bottom: double rgb(194, 158, 68) 5px;
}

.cuadro p{
  margin-bottom: 0;
  margin-top: 0;
}

.Modal-Titulo{
  font-family: "Helvetica Neue","Arial Nova",Helvetica,Arial,sans-serif !important;
  font-weight: bold;
  display: block;
  color: rgb(12, 52, 105);
  text-align: center;
  letter-spacing: 0.25em;
  margin: 0;
  margin-top: 1vh;
  margin-bottom: .5vh;
}

.modal h2{
  text-align: center;
  font-family: "Helvetica Neue","Arial Nova",Helvetica,Arial,sans-serif !important;
  color: rgb(12, 105, 12);
  padding-bottom: 4px;
  border-bottom: double rgb(194, 158, 68);
}

@keyframes Aparicion-titulo {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#slider,  #slider .slide{
  width: 60vw;
  height: 150px;
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
    width: 80vw;
  }
}

@media (min-width: 993px) and (orientation: landscape){
  .contenido{
    max-width: 60vw;
    max-height: 80vh;
    width: 900px;
  }
  #slider{
    width:100%;
    height: 150px;
  }
  .slide{
    padding:0;
    width:28.9% !important;
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