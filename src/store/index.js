import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentTab: 0,
    icons: ["id", "work", "book", "heart", "cup", "phone", "add"],
    profile: { name: "", birth: "", city: "" },
    workExperience: [{ company: "", content: "" }],
    study: [{school: "", time: "", degree: ""}],
    project: [{name: "", content: ""}],
    awards: [{name: "", content: ""}],
    contact: { qq: "", wechat: "", phone: "", email: ""}
  },
  mutations: {
    swithTab(state, payload){
      state.currentTab = payload
    }
  }
})