<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
      computed: {
        counter: function(){
          return this.$store.getters.doubleCounter;
        }
      }
    }
</script>