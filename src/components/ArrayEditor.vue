<template>
  <div>
    <h2>{{title}}</h2>
    <ol>
      <li v-for="(item, index) in items" :key="index">
        <div class="resumeField" v-for="key in keys" :key="key">
          <label>{{labels[key] || key}}</label>
          <input type="text" :value="items[key]" @input="changeResume(name, index, key, $event.target.value)">
        </div>
        <el-button type="danger"  size="small"
          @click="removeItem(name, index)">删除</el-button>
      </li>
    </ol>
    <el-button type="primary" size="small" class="add-item"
      @click="addItem(name)">添加一项</el-button>
  </div>
</template>

<script>
export default {
  props:['items', 'title', 'labels', 'name'],
  computed:{
    keys(){
      return Object.keys(this.items[0])
    }
  },
  methods: {
    addItem(item) {
      this.$store.commit('addItem', {
        item
      })
    },
    removeItem(item, index) {
      this.$store.commit('removeItem', {
        item, index
      })
    },
    changeResume(item, index, key, value){
      this.$store.commit('updateArrayResume',{
        item, index, key, value
      })
    }
  }
}
</script>
