<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br>
        <button class="btn btn-primary" @click="selectedComponent='appBlue'">Load Blue Template</button>
        <button class="btn btn-success" @click="selectedComponent='appGreen'">Load Green Template</button>
        <button class="btn btn-danger" @click="selectedComponent='appRed'">Load Red Template</button>
        <hr>
         <!-- <app-blue>
          <h1>Blue has the content blues</h1>
         </app-blue>
         <app-green>
          <h1>Green is sick of content</h1>
         </app-green>
         <app-red>
          <h1>Red is bleeding content all over the floor</h1>
         </app-red> -->
        <hr>
        <keep-alive>
          <component :is="selectedComponent">
            <p>Default Content</p>
          </component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  import Blue from './components/Blue.vue'
  import Green from './components/Green.vue'
  import Red from './components/Red.vue'

  export default {
    data: function(){
      return {
        selectedComponent: 'appBlue'
      };
    },
    components: {
      appBlue: Blue,
      appGreen: Green,
      appRed: Red
    }
  }
</script>

<style>
</style>

<!-- Pass content into color html tags and have buttons that switch the content with one of the pages being unique.
 -->