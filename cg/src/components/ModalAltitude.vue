<template>
    <div class="Modal-Altitude">
      <div class="modal" id="myModal" ref="myModal">
        <b-container class="contenido">
            <span class="cerrar" ref="myClose">&times;</span>
            <h2>{{proyectTitle}}</h2>
            <b-img class="proyecto-imagen" :src="require(`../assets/imagenproyectos/fotosproyectos/ALTITUDE-2.jpg`)" alt="Imagen-Proyecto-Altitude"></b-img>
            <div class="proyecto-texto">
                <div class="cuadro">
                    <h5 class="Modal-Titulo">Descripción</h5>
                    <p>Diseño y construcción para adecuacion de 2 pisos para departamentos.</p>
                </div>
                <div class="cuadro">
                    <h5 class="Modal-Titulo">Ubicación</h5>
                    <p>Zapopan,Jalisco. </p>
                </div>
                <div class="cuadro">
                    <h5 class="Modal-Titulo">Superficie</h5>
                    <p> 600.00 metros cuadrados</p>
                </div>
            </div>
        </b-container>
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
  min-height: 100vh;
  /*background: -webkit-linear-gradient(#212121,rgb(59, 59, 59));*/
  background-color: white;
  max-width: 100vw;
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
  /*background-color: white;*/
  width: 100%;
  float: right;
  border-top: double rgb(194, 158, 68) 5px;
}

.cuadro p{
  margin-bottom: 0;
  margin-right: 0;
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

@media (min-width: 0px) and (max-width: 992px) and (orientation: landscape){
  .contenido{
    min-width:90vw;
    width: 80vw;
  }
}

@media (min-width: 993px) and (orientation: landscape){
  .contenido{
    max-width: 70vw;
    width: 900px;
  }
}
</style>