<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{ stringCounter }}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    // computed: {
    //   counter: function(){
    //     return this.$store.getters.doubleCounter;
    //   },
    //   clicks: function(){
    //     return this.$store.getters.stringCounter;
    //   }
      computed: { 
        ...mapGetters([
          'doubleCounter',
          'stringCounter'
        ]),
        //Add additonal custom computed properties here
      }
  }
</script>