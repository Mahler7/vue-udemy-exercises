window.onload = function(){
  Vue.component('hello', {
    template: '<h1>Not Hello!</h1>'
  });
  var vm = new Vue({
    // el: '#app',
    data: {
      title: 'The VueJS Instance',
      showParagraph: false
    },
    methods: {
      show: function() {
        this.showParagraph = true;
        this.updateTitle('The VueJS Instance (Updated)');
        console.log(this.$refs);
        this.$refs.myButton.innerText = "Test";
      },
      updateTitle: function(title) {
        this.title = title;
      }
    },
    computed: {
      lowercaseTitle: function() {
        return this.title.toLowerCase();
      }
    },
    watch: {
      title: function(value) {
        alert('Title changed, new value: ' + value);
      }
    }
  });
  vm.$mount('#app');
  vm.$refs.heading.innerText = 'Something Else';
  console.log(vm);
  

  setTimeout(function(){
    vm.title = 'Changed by timer';
    vm.show();
  }, 3000);

  var data = {
      title: 'The VueJS Instance',
      showParagraph: false
    }

  var vm2 = new Vue({
    el: "#app2",
    data: data,   
    methods: {
      onChange: function(){
        vm.title = "Changed!";
      }
    }
  });

  vm3 = new Vue({
    template: '<h1>Hello</h1>'
  });

  vm4 = new Vue({
    el: '#app4',
    data: {
      title: "The Vue.JS Instance"
    },
    beforeCreate: {
      console.log('beforeCreate()');
    },
    created: {
      console.log('created()');
    },
    beforeMount: {
      console.log('beforeMount()');
    },
    mounted: {
      console.log('mounted()');
    },
    beforeUpdate: {
      console.log('update()');
    },
    updated: {
      console.log('updated()');
    },
    beforeDestroy: {
      console.log('beforeDestroy()');
    },
    destroy: {
      console.log('destroyed()');
    },
    methods: {
      destroy: function(){
        this.$destroy();
      }
    }
  })

  // vm3.$mount('#app3');
};
