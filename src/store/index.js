import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentTab: 0,
    icons: ["id", "work", "book", "heart", "cup", "phone"],
    user:{username: "", id: ""},
    resumeConfig:{
      profile:{keys:['name','birth','city','for']},
      workExperience:{keys:['time','company','content']},
      education:{keys:['school','time','degree']},
      project:{keys:['name','content']},
      awards:{keys:['name','content']},
      contact:{keys:['qq','wechat','phone','email']}
    },
    resume:{
      profile: {name: "张二狗", birth: "1995.06", city: "火星", for: "前端工程师"}, 
      workExperience: [
        { time: "2011.04-2011.08", 
          company: "火星探索有限公司", 
          content: "公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。" },
        { time: "2010.10-2011.03", 
          company: "月球探索有限公司", 
          content: "公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。" }
        ],
      education: [
        {school: "热气球大学", time: "2008.09-2012.09", degree: "本科"}
      ],
      project: [
        {name: "探索火星空气质量计划", content: "我做了什么解决了什么问题最终做到了什么结果"},
        {name: "建造火星殖民地计划", content: "我做了什么解决了什么问题最终做到了什么结果"}
      ], 
      awards: [
        {name: "优秀殖民员", content: "因在“月球殖民计划”中发挥出色，特颁发此奖"},
        {name: "优秀探索员", content: "因在“月球探索计划”中发挥出色，特颁发此奖"}
      ],
      contact: { qq: "2233421", wechat: "22352", phone: "13412345678", email: "111@foxmail.com"}
    }

  },
  mutations: {
    initState(state, payload){
      Object.assign(state, payload)
    },
    swithTab(state, payload){
      state.currentTab = payload
      // localStorage.setItem('state', JSON.stringify(state))
    },
    updateArrayResume(state, {item, index, key, value}){
      state.resume[item][index][key] = value
      // localStorage.setItem('state', JSON.stringify(state))
    },
    updateObjectResume(state, {item, key, value}){
      state.resume[item][key] = value
      // localStorage.setItem('state', JSON.stringify(state))
    },
    addItem(state, {item}) {
      const newItem = {}
      let keys = Object.keys(state.resumeConfig[item].keys)
      keys.map((key)=>{
        newItem[key] = ''
      })
      state.resume[item].push(newItem)
      // localStorage.setItem('state', JSON.stringify(state))
    },
    removeItem(state, {item, index}) {
      state.resume[item].splice(index, 1)
      // localStorage.setItem('state', JSON.stringify(state))
    },
    setUser(state,payload){
      Object.assign(state.user, payload)
    },
    removeUser(state){
      state.user.id = ''
    }
  }
})