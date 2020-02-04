<template>
    <div class="Modal-Altitude">
      <div class="modal" id="myModal" ref="myModal">
        <b-container class="contenido">
            <span class="cerrar" ref="myClose">&times;</span>
            <h2>{{proyectTitle}}</h2>
            <b-img class="proyecto-imagen" :src="require(`../assets/imagenproyectos/fotosproyectos/ALTITUDE-2.jpg`)" alt="Imagen-Proyecto-Altitude"></b-img>
            <div class="proyecto-texto">
                <span class="Modal-Titulo1">
                    <p>Descripción</p>
                    <p>Diseño y construcción para adecuacion de 2 pisos para departamentos.</p>
                </span>
                <span class="Modal-Titulo2">
                    <p>Ubicación:</p>
                    <p>Zapopan, Jalisco. </p>
                </span>
                <span class="Modal-Titulo3">
                    <p>Superficie</p>
                    <p> 600.00 m2</p>
                </span>
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
  z-index: 10; /* Sit on top */
  padding: 0;/* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
 /* Black w/ opacity */
  transition: all 1s ease;
}

.modal{
  z-index:10;
  background-color: aqua;
}

.contenido .proyecto-imagen{
  display: block;
  align-content: center;
  max-width: 90%;
  max-height: 40vh;
  margin-right: auto;
  margin-left: auto;
}
.contenido{
  margin-left: auto;
  margin-right: auto;
  max-width: 100vh;
  max-height: 100vh;
  height: 100%;
  background-color: green;
  border-style: solid;
}
.contenido .proyecto-texto{
  margin: 10px;
  overflow: auto;
  height: 50%;
  background-color: red;
}

.cerrar{
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  margin-right: 5px;
}

.cerrar:hover,
.cerrar:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
  transition: .5s
}
</style>