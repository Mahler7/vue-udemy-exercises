window.onload = function(){
  var header = require('header');
  new Vue({
    el: '#app',
    data: {
      message: 'Hello World!'
    },
    components: {
      appHeader: header
    }
  })
}