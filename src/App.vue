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
import Topbar from "./components/Topbar";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

export default {
  name: "app",
  components: {
    Topbar,
    Editor,
    Preview
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
  main {
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
