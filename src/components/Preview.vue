<template>
  <div id="page">
    <ResumePreview class="preview" />
    <router-link class="back el-button el-button--small" to="/">返回</router-link>
  </div>
</template>

<script>
import ResumePreview from './ResumePreview'
export default {
  components:{
    ResumePreview
  }
}
</script>

<style lang="scss" scoped>

#page {
  padding: 1px;
  background: #eee;
  .preview{
    min-width: 700px;
    max-width: 900px;
    margin: 80px auto;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    background: #fff;
    border-radius: 3px;
  }
  .back{
    position: absolute;
    top: 20px;
    right: 50px;
    padding: 12px 20px;
  }
}

</style>
