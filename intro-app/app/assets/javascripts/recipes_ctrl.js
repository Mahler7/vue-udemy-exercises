"use strict;"
$(document).on('ready', function() {
  Vue.component('my-component', {
    template: '<div>A custom component!</div>'
  })

  Vue.component('task-item', {
    props: ['task'],
    template: '<li>{{ task.text }}</li>'
  })

  Vue.component('simple-counter', {
    template: '<button v-on:click="counter += 1">{{ counter }}</button>',
    // data is technically a function, so Vue won't
    // complain, but we return the same object
    // reference for each component instance
    data: function () {
      return data
    }
  })

  Vue.component('simple-counter2', {
    template: '<button v-on:click="counter += 1">{{ counter }}</button>',
    // data is technically a function, so Vue won't
    // complain, but we return the same object
    // reference for each component instance
    data: function () {
      return {
        counter: 0
      }
    }
  })

  Vue.component('child', {
    // declare the props
    props: ['message'],
    // just like data, the prop can be used inside templates
    // and is also made available in the vm as this.message
    template: '<span>{{ message }}</span>'
  })

  Vue.component('child2', {
    // camelCase in JavaScript
    props: ['myMessage'],
    template: '<span>{{ myMessage }}</span>'
  })

  Vue.component('child3', {
    // camelCase in JavaScript
    props: ['parentMsg'],
    template: '<span>{{ parentMsg }}</span>'
  })

  Vue.component('comp', {
    props: ['someNumber'],
    template: '<span>{{ someNumber }}</span>'
  })
  // Validations-----------------------------------
  Vue.component('example', {
    props: {
      // basic type check (`null` means accept any type)
      propA: Number,
      // multiple possible types
      propB: [String, Number],
      // a required string
      propC: {
        type: String,
        required: true
      },
      // a number with default value
      propD: {
        type: Number,
        default: 100
      },
      // object/array defaults should be returned from a
      // factory function
      propE: {
        type: Object,
        default: function () {
          return { message: 'hello' }
        }
      },
      // custom validator function
      propF: {
        validator: function (value) {
          return value > 10
        }
      }
    }
  })

  Vue.component('button-counter', {
    template: '<button v-on:click="increment">{{ counter }}</button>',
    data: function () {
      return {
        counter: 0
      }
    },
    methods: {
      increment: function () {
        this.counter += 1
        this.$emit('increment')
      }
    },
  })

  Vue.component('my-input', {
    template: '\
      <div class="form-group">\
        <label v-bind:for="randomId">{{ label }}:</label>\
        <input v-bind:id="randomId" v-bind:value="value" v-on:input="onInput">\
      </div>\
    ',
    props: ['value', 'label'],
    data: function () {
      return {
        randomId: 'input-' + Math.random()
      }
    },
    methods: {
      onInput: function (event) {
        this.$emit('input', event.target.value)
      }
    },
  })

  Vue.component('app-layout', {
    template: '\
      <div class="container">\
        <header>\
          <slot name="header"></slot>\
        </header>\
        <main>\
          <slot></slot>\
        </main>\
        <footer>\
          <slot name="footer"></slot>\
        </footer>\
      </div>\
      '
  })

  var Child = {
    template: '<div>A custom component!</div>'
  } 

  var myRow = {
    template: '<tr>A custom row!</tr>'
  }

  var data = { counter: 0 }

  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello World!',
      message2: 'You loaded this page on ' + new Date(),
      parentMsg: 'Message from parent',
      seen: true,
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ],
      tasks: [
        { text: 'Learn Vue' },
        { text: 'Learn Angular' },
        { text: 'Learn React' }
      ],
      message3: "Vue.js",
      message4: "User Input",
      message5: "capitalize test",
      newToDo: '',
      number: 0,
      ok: false,
      id: 1,
      firstName: 'Foo',
      lastName: 'Bar',
      question: '',
      answer: 'I cannot give you an answer until you ask a question!',
      isActive: true,
      hasError: false,
      error: null,
      styleObject: {
        color: 'blue',
      },
      styleObject2: {
        color: 'red',
        fontSize: '30px'
      },
      parentMessage: 'Parent',
        items: [
          { message: 'Foo' },
          { message: 'Bar' }
        ],
      object: {
        FirstName: 'John',
        LastName: 'Doe',
        Age: 30
      },
      numbers: [ 1, 2, 3, 4, 5 ],
      counter: 0,
      total: 0,
      name: 'Vue.js',
      checkedNames: [],
      checked: false,
      picked: false,
      selected: [],
      selected2: [],
      selected3: 'A',
        options: [
          { text: 'One', value: 'A' },
          { text: 'Two', value: 'B' },
          { text: 'Three', value: 'C' }
        ]
    },
    watch: {
      // whenever question changes, this function will run
      question: function (newQuestion) {
        this.answer = 'Waiting for you to stop typing...'
        this.getAnswer()
      }
    },
    methods: {
      reverseMessage: function () {
        this.message3 = this.message3.split('').reverse().join('');
      },
      addTodos: function() {
        this.todos.push({ text: this.newToDo });
        console.log(this.newToDo);
      },
      toggleMessage: function() {
        this.seen = !this.seen;
        console.log(this.seen);
      },
      classObject: function () {
        return {
          active: this.isActive && !this.error,
          'text-danger': this.error && this.error.type === 'fatal',
        }
      },
      greet: function (event) {
        // `this` inside methods points to the Vue instance
        alert('Hello ' + this.name + '!')
        // `event` is the native DOM event
        alert(event.target.tagName)
      },
      say: function (message) {
        alert(message)
      },
      warn: function (message, event) {
        // now we have access to the native event
        if (event) event.preventDefault()
        alert(message)
      },
      incrementTotal: function () {
        this.total += 1
      },
      
      // _.debounce is a function provided by lodash to limit how
      // often a particularly expensive operation can be run.
      // In this case, we want to limit how often we access
      // yesno.wtf/api, waiting until the user has completely
      // finished typing before making the ajax request. To learn
      // more about the _.debounce function (and its cousin
      // _.throttle), visit: https://lodash.com/docs#debounce
      getAnswer: _.debounce(
        function () {
          var vm = this
          if (this.question.indexOf('?') === -1) {
            vm.answer = 'Questions usually contain a question mark. ;-)'
            return
          }
          vm.answer = 'Thinking...'
          axios.get('https://yesno.wtf/api')
            .then(function (response) {
              vm.answer = _.capitalize(response.data.answer)
            })
            .catch(function (error) {
              vm.answer = 'Error! Could not reach the API. ' + error
            })
        },
        // This is the number of milliseconds we wait for the
        // user to stop typing.
        500
      )
    },
    filters: {
      capitalize: function (value) {
        console.log(value)
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    },
    computed: {
      fullName: {
        // getter
        get: function () {
          return this.firstName + ' ' + this.lastName
        },
        // setter
        set: function (newValue) {
          var names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
      },
      evenNumbers: function () {
        return this.numbers.filter(function (number) {
          return number % 2 === 0
        })
      }
    },
    components: {
      // <my-component> will only be available in parent's template
      'my-component': Child,
      'my-row': myRow
    }
  })

  var app2 = new Vue({
    el: '#app-2',
    data: {
      seen2: true
    }
  })

// Hook
  var vm = new Vue({
    data: {
      a: 1
    },
    created: function () {
      // `this` points to the vm instance
      console.log('a is: ' + this.a)
    }
  })
})