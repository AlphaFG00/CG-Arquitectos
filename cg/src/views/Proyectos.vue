<template>
  <div class="proyectos">
    <b-container id="view-proyectos">
      <h1>Estos son los Proyectos </h1>

      <b-container fluid>
        <b-row class="contenedor">
          <b-col cols="12" md="6" lg="4" class="thumbex">
            <div class="thumbnail">
              <a href="javascript:void(0)">
                <b-img fluid src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT62lIEdO9-X5DuWcxkMKghPfI6razi3Ax3fr9KDxYI9SmAK50F" alt="Image 1"></b-img>
                <span>Nombre del proyecto</span>
              </a>
            </div>
          </b-col>
          <b-col cols="12" md="6" lg="4" class="thumbex">
            <div class="thumbnail">
              <a href="javascript:void(0)">
                <b-img fluid src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRw2_MaoSeidJenbuF3Da4w3yDtvIpxKc8EicRkcrZlmAknZ264" alt="Image 2"></b-img>
                <span>Nombre del proyecto</span>
              </a>
            </div>
          </b-col>
          <b-col cols="12" md="6" lg="4" class="thumbex">
            <div class="thumbnail">
              <a href="javascript:void(0)">
                <b-img fluid src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTn12qA1i6OZG_zNLkq_VVup1XflqNrtSE_gnxpa4F9kiBkn-X" alt="Image 3"></b-img>
                <span>Nombre del proyecto</span>
              </a>
            </div>
          </b-col>
          <b-col cols="12" md="6" lg="4" class="thumbex">
            <div class="thumbnail">
              <a href="javascript:void(0)">
                <b-img fluid src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTn12qA1i6OZG_zNLkq_VVup1XflqNrtSE_gnxpa4F9kiBkn-X" alt="Image 3"></b-img>
                <span>Nombre del proyecto</span>
              </a>
            </div>
          </b-col>
          <b-col cols="12" md="6" lg="4" class="thumbex">
            <div class="thumbnail">
              <a href="javascript:void(0)">
                <b-img fluid src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT62lIEdO9-X5DuWcxkMKghPfI6razi3Ax3fr9KDxYI9SmAK50F" alt="Image 1"></b-img>
                <span>Nombre del proyecto</span>
              </a>
            </div>
          </b-col>
          <b-col cols="12" md="6" lg="4" class="thumbex">
            <div class="thumbnail">
              <a href="javascript:void(0)">
                <b-img fluid src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRw2_MaoSeidJenbuF3Da4w3yDtvIpxKc8EicRkcrZlmAknZ264" alt="Image 2"></b-img>
                <span>Nombre del proyecto</span>
              </a>
            </div>
          </b-col>
          <b-col cols="12" md="6" lg="4" class="thumbex">
            <div class="thumbnail">
              <a href="javascript:void(0)">
                <b-img fluid src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTn12qA1i6OZG_zNLkq_VVup1XflqNrtSE_gnxpa4F9kiBkn-X" alt="Image 3"></b-img>
                <span>Nombre del proyecto</span>
              </a>
            </div>
          </b-col>
        </b-row>
      </b-container>
<!--Fin del area de proyectos-->
    </b-container>
  </div>
</template>

<script>
export default {
  name:"Proyectos"
}
</script>

<style scoped>
  .proyectos{
    width: auto;
    border-width: .5rem;
    border-top: solid;
    border-color: black;
    background-color:rgb(240, 234, 234);
  }
  #view-proyectos{
    background-color: red;
  }
  #view-proyectos h1{
    background-color:blue;
  }
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

.contenedor>.thumbex>.thumbnail b-img {
  position: absolute;
  z-index: 1;
  height: 115%;
  width: auto;
  backface-visibility: hidden;
}

.contenedor>.thumbex>.thumbnail span{
  position: absolute;
  z-index: 2;
  top: 40%;
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