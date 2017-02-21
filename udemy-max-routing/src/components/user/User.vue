<template>
    <div>
      <h1>The User Page</h1>
      <hr>
      <button @click="navigateToHome" class="btn btn-primary">Go To Home</button>
      <hr>
      <router-view></router-view>
    </div>
</template>

<script>
  export default {
    // data: function(){
    //   return {
    //     id: this.$route.params.id
    //   }
    // },
    // watch: {
    //   '$route': function(to, from){
    //     this.id = to.params.id;
    //   }
    // },
    methods: {
      navigateToHome: function(){
        this.$router.push('/');
      }
    }
  }
</script>