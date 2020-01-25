import Repository from "@/Repository";

export const users = {
  namespaced: true,
  state: {
    loggedIn: false,
    user: {}
  },

  actions: {
    auth({ commit }, credentials) {
      Repository.post(`users/authenticate`, credentials).then(user => {
        commit("SET_USER", user.data);
      });
    },

    login_guest({ commit }, pass = null) {
      commit("SET_LOGGEDIN", pass === "Brollop2020");
    }
  },

  mutations: {
    SET_LOGGEDIN(state, status) {
      state.loggedIn = status;
    },

    SET_USER(state, user) {
      state.user = user;
    }
  }
};
