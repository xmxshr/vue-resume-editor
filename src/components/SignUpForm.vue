<template>
  <form class="sign-form" @submit.prevent="signUp">
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
    signUp(){
      let {username, password} = this.formData
      var user = new AV.User()
      user.setUsername(username)
      user.setPassword(password)
      user.signUp().then(()=> {
        this.$emit('success', getUser())
      },  (error)=> {
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

<style lang="scss">
  .sign-form{
    .row{
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 16px;
      >input{
        flex: 1;
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid #d8dce5;
        box-sizing: border-box;
        color: #5a5e66;
        display: inline-block;
        font-size: inherit;
        height: 35px;
        line-height: 1;
        outline: 0;
        padding: 0 15px;
        width: 100%;
      }
    }
    .actions{
      .error-message{
        margin-left: 8px;
        color: red;
        font-size: 14px;
      }
    }
  }
</style>
