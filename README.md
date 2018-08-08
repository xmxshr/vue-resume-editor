# 在线简历编辑器
可以在线编写简历，包括个人信息、工作经历、教育背景、项目经历、获奖情况以及联系方式。在编辑完成后可进行预览。

# 预览
预览链接：[预览](https://xmxshr.github.io/vue-resume-editor/dist/)

# 功能
- 编辑简历
- 预览简历

# 技术
Vue/SCSS/Element-UI/LeanCloud/Vuex/Vue-Router

采用`SCSS`以及`Element-UI`编写`CSS`。   
使用`vue-cli`搭建环境，后端数据使用`LeanCloud`。   
为了组件间通信使用了`Vuex`。   
为了预览功能轻量使用了`Vue-Router`。   

# 运行
```
// clone 项目至本地
git clone https://github.com/xmxshr/vue-resume-editor.git
// 进入项目文件夹
cd vue-resume-editor
// 安装依赖
npm i
// 运行项目
npm run dev
```

# 细节
### 数据类型
个人信息、联系方式的数据类型是`Object`：
```
profile: {
  name: "张二狗", 
  birth: "1995.06", 
  city: "火星", 
  for: "前端工程师",
},
contact: { 
  qq: "2233421", 
  wechat: "22352", 
  phone: "13412345678", 
  email: "111@foxmail.com",
}
```
项目经历、工作经历、教育背景、获奖情况的数据类型是`Array`：
```
workExperience: [{ 
  time: "2011.04-2011.08", 
  company: "火星探索有限公司", 
  content: "公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化定制。",
}, { 
  time: "2010.10-2011.03", 
  company: "月球探索有限公司", 
  content: "公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化定制。",
}],
```
这样的数据类型能够更好更方便的修改数据，看起来更加直观。并且也分别写了两个组件`ArrayEditor`、`ObjectEditor`来展示、修改数据。

### 数据的修改
因为是两个组件之间的通信，并且为了学习使用，就选择了`Vuex`。   
需要注意的是：修改`store`中的状态的唯一方法是提交`mutation`。    
`mutation`就像事件一般，需要一个**事件类型**（一个字符串类型的名字）和一个**回调函数**（第一个参数是`state`）。    
项目中删除一条数据是这样的：
```
removeItem(item, index) {
  this.$store.commit('removeItem', {
    item, index
  });
}
```
在`store`中是这样写的：
```
removeItem(state, {item, index}) {
  state.resume[item].splice(index, 1);
}
```
