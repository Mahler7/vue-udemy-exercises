import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    value: 0,
  },
  getters: {
    value: function(state){
      return state.value;
    },
    value: function(state){
      return state.value;
    }
  },
  mutations: {
    updateValue: function(state, payload){
      state.value = payload;
    }
  },
  actions: {
    updateValue: function(context, payload){
      context.commit('updateValue', payload);
    }
  },
  modules: {
    counter: counter
  }
})