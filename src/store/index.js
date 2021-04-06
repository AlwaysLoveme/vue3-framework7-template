import { createStore } from "vuex";

export default createStore({
  state: {
    requestMuster: [],
  },
  mutations: {
    SETREQUESTMUSTER(state, payload) {
      if (payload instanceof Array) {
        state.requestMuster = payload;
      } else {
        state.requestMuster.push(payload);
      }
      // 集合去重
      state.requestMuster = Array.from(new Set(state.requestMuster));
    },
  },
  actions: {},
  modules: {},
});
