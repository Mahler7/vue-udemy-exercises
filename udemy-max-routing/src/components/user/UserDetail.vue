<template>
  <div>
    <h3>Some User Details</h3>
    <p>Loaded ID: {{ $route.params.id }} </p>
    <router-link 
      tag="button" 
      :to="link"
      class="btn btn-primary">Edit User</router-link>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {
        link: { 
          name: 'userEdit', 
          params: { 
            id: this.$route.params.id 
          }, 
          query: { 
            locale: 'en', 
            q: 100 
          },
          hash: '#data' 
        }
      }
    },
    // doesnt have access to this
    beforeRouteEnter: function(to, from, next){
      if (true){
        next();
      } else {
        next(false);
      }
      // next(vm => { access to this if needed
      //   vm.link
      // });
    }
  }
</script>

<!-- :to="'/user/' + $route.params.id + '/edit'" -->