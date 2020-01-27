<template>
    <div class="ventana-model">
      <input type="checkbox" id="cerrar">
      <label for ="cerrar" id="btn-cerrar">X</label>
      <div class="modal">
        <div class="contenido">
          <h2>Proyecto 1</h2>
          <img :src="require(`../assets/imagenproyectos/${imageUrl}.jpg`)" alt="Image window">
          <div class="proyecto-texto">
              <p>{{imageMsj}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:'VentanaModel',
    props:{
        imageUrl: String,
        imageMsj: String
    }
}
</script>

<style scoped>
/*css de la ventana de proyecto*/
.modal{
  z-index: 40;
  width: 100%;
  height: 100vh;
  position: fixed;
  background:rgba(0, 0, 0, 0.8);
  top:0;
  left:0;
  display: flex;

  animation: modal 2s 3s;
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
  width: 70%;
  height: 80%;
  background-color: white;
  border-radius: 5px;
}
.contenido .proyecto-texto{
  margin: 10px;
  overflow: auto;
  height: 50%;
}
#cerrar{
  display:none;
}
#cerrar + label{
  text-align: center;
  position: fixed;
  color: #fff;
  background-color: darkred;
  font-size: 15px;
  z-index: 50;
  height: 25px;
  width: 25px;
  line-height: 25px;
  border-radius: 50%;
  right: 10px;
  top: 0;
  cursor: pointer;
}

#cerrar + label:hover{
    background-color: white;
    color:black;
    transition: .3s;
}

#cerrar:checked + label, #cerrar:checked ~ .modal{
  display: none;
}
</style>