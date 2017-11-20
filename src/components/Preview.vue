<template>
  <div id="preview">
    {{profile}}
    <hr>
    {{workExperience}}
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState([
      'profile', 'workExperience', 'education', 'project', 'awards', 'contact'
    ])
  }
}
</script>


<style>
#preview {
 
}
</style>
