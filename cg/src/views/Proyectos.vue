<template>
  <div class="proyectos">
    <b-container id="view-proyectos">
      <h1>Estos son los Proyectos </h1>
        <ListaProyectos/>
        <VentanaModel imageUrl="1"
        imageMsj=
"
Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsum similique delectus eum, officia veritatis, neque cupiditate veniam vitae placeat eius. Voluptate aliquam cupiditate, nihil expedita architecto nesciunt debitis nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsum similique delectus eum, officia veritatis, neque cupiditate veniam vitae placeat eius. Voluptate aliquam cupiditate, nihil expedita architecto nesciunt debitis nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsum similique delectus eum, officia veritatis, neque cupiditate veniam vitae placeat eius. Voluptate aliquam cupiditate, nihil expedita architecto nesciunt debitis nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsum similique delectus eum, officia veritatis, neque cupiditate veniam vitae placeat eius. Voluptate aliquam cupiditate, nihil expedita architecto nesciunt debitis nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsum similique delectus eum, officia veritatis, neque cupiditate veniam vitae placeat eius. Voluptate aliquam cupiditate, nihil expedita architecto nesciunt debitis nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsum similique delectus eum, officia veritatis, neque cupiditate veniam vitae placeat eius. Voluptate aliquam cupiditate, nihil expedita architecto nesciunt debitis nisi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsum similique delectus eum, officia veritatis, neque cupiditate veniam vitae placeat eius. Voluptate aliquam cupiditate, nihil expedita architecto nesciunt debitis nisi.
"
        />
    </b-container>
  </div>
</template>

<script>
import ListaProyectos from '@/components/ListaProyectos.vue'
import VentanaModel from '@/components/VentanaModel.vue'

export default {
  name:"Proyectos",
  components:{
    ListaProyectos,
    VentanaModel
  }
}
</script>

<style scoped>
  .proyectos{
    width: auto;
    border-width: .5rem;
    border-top: solid;
    border-color: black;
    background-color: transparent;/*rgb(240, 234, 234);*/
  }
  #view-proyectos{
    background-color:transparent;
  }
  #view-proyectos h1{
    background-color: transparent;

  }
</style>