const state = {
  counter: 0
};

const getters = {
  doubleCounter: function(state){
    return state.counter * 2;
  },
  stringCounter : function(state){
    return state.counter + " Clicks";
  }
};

const mutations = {
  increment: function(state, payload){
    state.counter += payload;
  },
  decrement: function(state, payload){
    state.counter -= payload;
  }
};

const actions = {
  increment: function(context, payload){
    context.commit('increment', payload);
  },
  decrement: function(context, payload){
    context.commit('decrement', payload);
  },
  asyncIncrement: function(context, payload){
    setTimeout(function(){
      context.commit('increment', payload.by);
    }, payload.duration);
  },
  asyncDecrement: function(context, payload){
    setTimeout(function(){
      context.commit('decrement', payload.by);
    }, payload.duration);
  }
};

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}