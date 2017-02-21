<template>
    <div>
      <h1>Directives</h1>
      <p>{{ text | toUppercase | to-lowercase }}</p>
      <hr>
      <input v-model="filterText">
      <ul>
        <li v-for="fruit in filteredFruits">{{ fruit }}</li>
      </ul>
      <hr>
      <app-list></app-list>
    </div>
</template>

<script>

    export default {
      data: function(){
        return {
          text: "Hello There!",
          fruits: ["Apple", "Banana", "Mango", "Melon"],
          filterText: ''
        }
      },
      filters: {
        toUppercase(value){
          return value.toUpperCase()
        }
      },
      computed: {
        filteredFruits: function(){
          return this.fruits.filter((element) => {
            return element.match(this.filterText);
          })
        }
      }
    }
</script>

<style>

</style>
