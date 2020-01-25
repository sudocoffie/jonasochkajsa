import Repository from "@/Repository";

export const notifies = {
  namespaced: true,
  state: {
    notifies: [],
    notify: {}
  },

  actions: {
    getAll({ commit, rootState }) {
      var config = {
        headers: `Bearer: ${rootState.users.Token}`
      };

      Repository.get(`notifies`, config).then(n => {
        commit("SET_NOTIFIES", n.data);
      });
    },

    async addNotify({ commit }, payload) {
      await Repository.post("notifies", payload).then(v => {
        commit("SET_NOTIFY", v.data);
      });
    }
  },

  mutations: {
    SET_NOTIFIES(state, notifies) {
      state.notifies = notifies;
    },

    SET_NOTIFY(state, notify) {
      state.notify = notify;
    }
  }
};
