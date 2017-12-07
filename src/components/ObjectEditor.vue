<template>
  <div>
    <h2>{{title}}</h2>
    <div class="resumeField" v-for="key in labelKey" :key="key">
      <div>
        <label>{{labels[key] || key}}</label>
        <el-button type="danger"  size="mini"
          @click="clearInput(name, key, '')">清空</el-button>
      </div>
      <input type="text" :value="items[key]" @input="changeResume(name, key, $event.target.value)">
    </div>
  </div>
</template>

<script>
export default {
  props: ["items", "labels", "title", "name","labelKey"],
  methods: {
    changeResume(item, key, value){
      this.$store.commit('updateObjectResume',{
        item, key, value
      })
    },
    clearInput(item, key, value){
      this.$store.commit('updateObjectResume',{
        item, key, value
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .resumeField{
    div{
      display: flex;
      align-items: center;
      justify-content: space-between;
      >button{
        padding: 5px 8px;
      }
    }
  }
</style>

