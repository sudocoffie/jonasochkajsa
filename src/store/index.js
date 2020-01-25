import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

import { users } from "./modules/user";
import { notifies } from "./modules/notifies";
import { musicSuggestions } from "./modules/musicSuggestions";

Vue.use(Vuex);

const vuexLocalStoreage = new VuexPersist({
  key: "vuex",
  storage: window.localStorage
});

export default new Vuex.Store({
  modules: {
    users,
    notifies,
    musicSuggestions
  },
  plugins: [vuexLocalStoreage.plugin]
});
