<template>
  <div id="app">
    <Topbar class="topbar" />
    <main>
      <Editor class="editor" />
      <Preview class="preview" />
    </main>
  </div>
</template>

<script>
import Topbar from "./components/Topbar"
import Editor from "./components/Editor"
import Preview from "./components/Preview"
import store from './store/index'
import getUser from './assets/getUser'
import AV from './assets/leancloud'

export default {
  name: "app",
  store,
  components: {
    Topbar, Editor, Preview
  },
  created(){
    let state = localStorage.getItem('state')
    if(state){
      state = JSON.parse(state)
    }
    this.$store.commit('initState', state)
    this.$store.commit('setUser', getUser())
  }
};
</script>

<style lang="scss">
$boxShadow: 0 0 3px rgba(0, 0, 0, 0.4);
html,
body,
#app {
  height: 100%;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  background: #eee;
  .topbar {
    z-index: 1;
    box-shadow: $boxShadow;
    background: #fff;
  }
  >main {
    display: flex;
    flex: 1;
    min-width: 1024px;
    max-width: 1440px;
    width: 100%;
    align-self: center;

    .preview {
      flex: 1;
      margin: 16px;
      border-radius: 3px;
      box-shadow: $boxShadow;
      background: #fff;
    }
    .editor {
      width: 30em;
      margin: 16px 0 16px 16px;
      border-radius: 3px;
      box-shadow: $boxShadow;
      background: #fff;
    }
  }
}
</style>
