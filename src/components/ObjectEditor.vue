<template>
  <div>
    <h2>{{title}}</h2>
    <el-form :label-position="'top'" label-width="80px" 
      :model="items">
      <el-form-item v-for="(item, index) in items" :key="index" :label="labels[index]">
        <el-input v-model="item[index]"></el-input>
      </el-form-item> 
    </el-form>
  </div>
</template>

<script>
export default {
  props: ['items', 'labels', 'title']

}
</script>
