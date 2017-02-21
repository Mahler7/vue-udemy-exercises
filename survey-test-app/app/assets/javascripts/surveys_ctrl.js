$(document).ready(function(){
  var app = new Vue({
    el: '#app',
    data: {
      newSurveyDisplay: false,
      surveys: [],
      survey: {
        name: '',
        start_time: '',
        end_time: ''
      },
      polls: [{}],
      poll: {
        name: '',
        start_time: '',
        end_time: ''
      },
    },
    methods: {
      toggleNewSurvey: function(){
        this.newSurveyDisplay = !this.newSurveyDisplay
      },
      submitNewSurvey: function(){
        $.ajax({
          method: 'POST',
          data: {
            survey: this.survey
          },
          url: '/api/v1/surveys.json',
          success: function(response){
            this.errors = {}
            console.log("Response is " + response);
            this.surveys.push(response);
          },
          error: function(response){
            this.errors = response.responseJSON.errors
          }
        })
      },

      submitNewPoll: function(){
        this.polls.push({
          name: this.poll.name,
          start_time: this.poll.start_time,
          end_time: this.poll.end_time
        })n
      }
    }
  })
})