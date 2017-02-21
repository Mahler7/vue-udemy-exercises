"use strict";
$(document).on('ready', function() {
  // Vue.component('recipes', {
    
  //   props: ['newRecipe'],
  //   data: function(){
  //     return {
  //       recipes: [{}]
  //     }
  //   },
  //   ready: function () {
  //     this.fetchRecipes();
  //   },
  //   methods: {
  //     fetchRecipes: function(){
  //       var recipes = [{}]
  //       this.$http.get('/api/v1/recipes').success(function(recipes){
  //         this.$set('recipes', recipes);
  //       }).error(function(err){ 
  //         recipes.log(err);
  //       })
  //     },
  //   },
  //   template: '\
  //     <p>recipe.name</p>\
  //     '
  //   // template: '\
  //   //   <p>recipe.name</p>\
  //   //   <p>recipe.chef</p>\
  //   //   <p>recipe.cooktime</p>\
  //   //   <p>recipe.amount</p>\
  //   //   <p>recipe.description</p>\
  //   //   <p>recipe.favorite</p>\
  //   //   '
  // })
  // Vue.component('recipes', {
  //   template: "#recipes-index",
  //   data: function(){
  //     return {
  //       recipeName: "I'm a new recipe"
  //     }
  //   }
  // })
  
  Vue.component('recipes', {
    template: "#recipe-template",
    data: function(){
      return {
        recipe: {}
      }
    },
    init: function(){
      var self = this
      $.ajax({
        method: "GET",
        url: "/api/v1/recipes"
      }).then(function(data){
        self.recipe = data
        console.log("data return = ", data);
      })
    },
    methods: {
      newRecipe: function(){
        var self = this
      },
      handleRecipe: function(){
        var self = this
        console.log("Test")
      }
    }
  })

  var app = new Vue({
    el: '#app',
    // data: {
    //   message: "Hello World",
    //   recipes: [{}],
    //   recipe: {
    //     name: '',
    //     chef: '',
    //     cooktime: '',
    //     amount: '',
    //     description: '',
    //     favorite: ''
    //   }
    // }
  })
})
