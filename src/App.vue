<template>
  <div id="app">
    <project-header/>

    <router-view class="nav-fix"/>

    <footer>
      <project-footer/>
    </footer>
  </div>
</template>

<script>
import header from "@/components/Header.vue";
import footer from "@/components/Footer.vue";

export default {
  components: {
    'project-header': header,
    'project-footer': footer
  }
}
</script>

<style>
.nav-fix {
  padding-top: 5em;
  background-color: #ffffff;
  min-height: 89vh;
}
</style>
