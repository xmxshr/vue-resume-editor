<template>
  <div>
    <h2>{{title}}</h2>
    <ol>
      <li v-for="(item, index) in items" :key="index">
        <el-form :label-position="'top'" label-width="80px" :model="item">
          <el-form-item v-for="key in keys" :key="key" :label="labels[key] || key">
            <el-input v-model="item[key]"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="danger"  size="small"
          @click="removeItem(index)">删除</el-button>
      </li>
    </ol>
    <el-button type="primary" size="small" class="add-item"
      @click="addItem">添加一项</el-button>
  </div>
</template>

<script>
export default {
  props:['items', 'title', 'labels'],
  computed:{
    keys(){
      return Object.keys(this.items[0])
    }
  },
  methods: {
    addItem() {
      const newItem = {}
      this.keys.map((key)=>{
        newItem[key] = ''
      })
      this.items.push(newItem)
    },
    removeItem(index) {
      this.items.splice(index, 1)
    }
  }
}
</script>
