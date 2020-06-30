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

<style lang="scss">
  @import '@/assets/styles/main.scss';
</style>