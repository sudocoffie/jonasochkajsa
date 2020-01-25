import Repository from "@/Repository";

export const musicSuggestions = {
  namespaced: true,
  state: {
    ms: [],
    suggestion: {}
  },

  actions: {
    async etAll({ commit, rootState }) {
      var config = {
        headers: `Bearer: ${rootState.users.Token}`
      };

      await Repository.get(`musicsuggestions`, config).then(n => {
        commit("SET_MUSICSUGGESTIONS", n.data);
      });
    },

    async addSuggestion({ commit }, payload) {
      await Repository.post("musicsuggestions", payload).then(v => {
        commit("SET_SUGGESTION", v.data);
      });
    }
  },

  mutations: {
    SET_MUSICSUGGESTIONS(state, ms) {
      state.ms = ms;
    },

    SET_SUGGESTION(state, suggestion) {
      state.suggestion = suggestion;
      state.ms.push(suggestion);
    }
  }
};
