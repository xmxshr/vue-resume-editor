<template>
  <div>
    <h2>{{title}}</h2>
    <div class="resumeField" v-for="key in keys" :key="key">
      <label>{{labels[key] || key}}</label>
      <input type="text" :value="items[key]" @input="changeResume(name, key, $event.target.value)">
    </div>
  </div>
</template>

<script>
export default {
  props: ["items", "labels", "title", "name"],
  computed: {
    keys() {
      return Object.keys(this.items)
    }
  },
  methods: {
    changeResume(item, key, value){
      this.$store.commit('updateObjectResume',{
        item, key, value
      })
    }
  }
}
</script>
