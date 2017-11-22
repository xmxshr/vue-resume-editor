import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentTab: 0,
    icons: ["id", "work", "book", "heart", "cup", "phone", "add"],
    profile: { name: "", birth: "", city: "" },
    workExperience: [{ company: "", content: "" }],
    education: [{school: "", time: "", degree: ""}],
    project: [{name: "", content: ""}],
    awards: [{name: "", content: ""}],
    contact: { qq: "", wechat: "", phone: "", email: ""}
  },
  mutations: {
    initState(state, payload){
      Object.assign(state, payload)
    },
    swithTab(state, payload){
      state.currentTab = payload
      localStorage.setItem('state', JSON.stringify(state))
    },
    updateArrayResume(state, {item, index, key, value}){
      state[item][index][key] = value
      localStorage.setItem('state', JSON.stringify(state))
    },
    updateObjectResume(state, {item, key, value}){
      state[item][key] = value
      localStorage.setItem('state', JSON.stringify(state))
    },
    addItem(state, {item}) {
      const newItem = {}
      let keys = Object.keys(state[item][0])
      keys.map((key)=>{
        newItem[key] = ''
      })
      state[item].push(newItem)
    },
    removeItem(state, {item, index}) {
      state[item].splice(index, 1)
    },
  }
})