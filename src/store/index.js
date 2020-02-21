import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: "Radzymin",
    link: "https://gdgradzymin.pl",
    favPizzas: ["salami", "capriciosa", "wszystkie"],
    visibilityCounter: 0,
    pizzaCounter: 0
  },
  mutations: {
    visibilityBtnClickRecived(state) {
      state.visibilityCounter += 1;
    }
  },
  actions: {
    clicked({ commit }) {
      commit("visibilityBtnClickRecived");
    }
  },
  getters: {
    city: state => state.city,
    logo: state => state.logo,
    link: state => state.link,
    visibilityCounter: state => state.visibilityCounter
  }
});
