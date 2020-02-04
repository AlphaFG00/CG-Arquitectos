<template>
    <div class="Modal-Finox">
      <div class="modal" id="myModal" ref="myModal">
        <div class="contenido">
            <span class="cerrar" ref="myClose">&times;</span>
            <h2>{{proyectTitle}}</h2>
            <img :src="require(`../assets/imagenproyectos/3.jpg`)" alt="Imagen-Proyecto-Finox">
            <div class="proyecto-texto">
                <p>Texto independiente 3</p>
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
  background-color:transparent; /* Black w/ opacity */
  transition: all 1s ease;
}
.modal{
  z-index:10;
  transition: all 1s ease;
}

.contenido img{
  width: 50%;
  max-width: 25em;
  max-height: 15em;
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.contenido{
  margin: auto;
  max-width: 60em;
  max-height: 400em;
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