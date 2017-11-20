<template>
  <div>
    <h2>{{title}}</h2>
    <el-form :label-position="'top'" label-width="80px" :model="items">
      <el-form-item v-for="key in keys" :key="key" :label="labels[key] || key">
        <el-input v-model="items[key]"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ["items", "labels", "title"],
  computed: {
    keys() {
      return Object.keys(this.items)
    }
  }
}
</script>
