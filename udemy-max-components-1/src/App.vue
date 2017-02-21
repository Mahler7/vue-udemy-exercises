<template>
  <div class="container">
    <div class="row">
      <app-header></app-header>
    </div>
    <hr>
    <div class="row">
      <app-servers></app-servers>
      <app-server-details></app-server-details>
    </div>
    <hr>
    <div class="row">
      <app-footer></app-footer>
    </div>
  </div>
</template>



<script>
  import Header from './components/shared/Header.vue'
  import Footer from './components/shared/Footer.vue'
  import Servers from './components/server/Servers.vue'
  import ServerDetails from './components/server/ServerDetails.vue'
  export default {
    components: {
      'app-header': Header,
      'app-footer': Footer,
      'app-servers': Servers,
      'app-server-details': ServerDetails
    }
  }
</script>

<style>

</style>
