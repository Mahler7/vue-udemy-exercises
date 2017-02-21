<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server v-for="server in servers"
              :server="server"
            ></app-server>
        </ul>
    </div>
</template>

<script>
  // Loop through all the servers, create a new component for the list item, pass the id and status to the component. Set click event on component which loads the server in server details. Server details has a button that returns the server status back to normal.
  import Server from './Server.vue';
  export default {
    data: function(){
      return {
        servers: [
          { id: 1, status: 'Normal' },
          { id: 2, status: 'Critical' },
          { id: 3, status: 'Unknown' },
          { id: 4, status: 'Normal' },
        ]
      };
    },
    components: {
      appServer: Server
    }
  }
</script>

<style>

</style>
