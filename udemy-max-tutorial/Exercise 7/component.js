window.onload = function(){
  Vue.component('my-cmp',{
    data: function(){
      return {
        status: "Critical!"
      }
    },
    template: '<p>Server Status: {{ status }}</p>'
  });
  var cmp = {
    data: function(){
      return {
        status: "Not Critical!"
      }
    },
    template: '<p>Server Status: {{ status }}</p>'
  };

  new Vue({
    el: '#app'
  }),

  new Vue({
    el: '#app2',
    components: {
      'my-cmp': cmp
    }
  });
}