<template>
  <form class="sign-form" @submit.prevent="signIn">
    <div class="row">
      <label>账号：</label>
      <input type="text" v-model="formData.username" required>
    </div>
    <div class="row">
      <label>密码：</label>
      <input type="password" v-model="formData.password" required>
    </div>
    <div class="actions">
      <el-button type="primary" size="small" native-type="submit">提交</el-button>
      <el-button size="small" @click="resetForm">重置</el-button>
      <span class="error-message">{{errorMessage}}</span>
    </div>
  </form>
</template>

<script>
import AV from '../assets/leancloud'
import getErrorMessage from '../assets/getErrorMessage'
import getUser from '../assets/getUser'

export default {
  data(){
    return{
      formData:{
        username: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  methods:{
    signIn(){
      let {username, password} = this.formData
      AV.User.logIn(username, password).then(()=> {
        this.$emit('success', getUser())
      }, (error)=> {
        this.errorMessage = getErrorMessage(error)
      })
    },
    resetForm(){
      this.formData = {
        username: '',
        password: ''
      }
    }
  }
}
</script>
