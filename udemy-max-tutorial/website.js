// Progress Bar
// create data object for bar value, set to 0
// get values from text fields
// push values into array
// divide array.length by number of questions
// pass array number to progress bar style
// if statement stopping applicantProgress from going over 100
// IDEA - on focus lost and field has characters push into array

window.onload = function(){
  new Vue({
    el: "#app",
    data: {
      message: "Hello World!",
      field: {
        name: '',
        animal: '',
        species: ''
      },
      progressBar: 0
    },
    methods: {
      userFields: function(){
        var fieldsFilledIn = 0;
        var totalFields = 3
        
        for (var subfield in this.field) {
          if (this.field[subfield] !== "") {
            fieldsFilledIn++;
          }
          var progress = fieldsFilledIn/totalFields
        }
        console.log("This Field = " + this.field.name);
        progressBar = progress * 100
        console.log("Fields filled in " + fieldsFilledIn);
        console.log("Progress Bar " + progressBar);
        this.progressBar = progressBar.toFixed(2);
      },
      randomFunction: function(fieldsFilledIn){
        userFields(fieldsFilledIn);
        console.log("Function Fields " + userFields(fieldsFilledIn));
      },
    }
  })
}