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
import Topbar from "./Topbar"
import Editor from "./ResumeEditor"
import Preview from "./ResumePreview"

export default {
  components: {
    Topbar, Editor, Preview
  }
};
</script>
