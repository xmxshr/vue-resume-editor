<template>
  <div id="topbar">
    <div class="logo">
      Resume
    </div>
    <div class="action">
      <div v-if="logined">
        <span>你好， {{user.username}}</span>
        <el-button size="small" @click.prevent="signOut">登出</el-button>     
      </div>
      <div v-else>
        <el-button type="primary" size="small" 
          @click.prevent="signUpDialogVisible = true">注册</el-button>
        <el-button size="small" 
          @click.prevent="signInDialogVisible = true">登录</el-button>
      </div>
      <SignDialog :title="'注册'" :visible = "signUpDialogVisible"
        @close="signUpDialogVisible = false">
        <SignUpForm @success="signIn($event)"/>
      </SignDialog>
      <SignDialog :title="'登录'" :visible = "signInDialogVisible" 
        @close="signInDialogVisible = false">
        <SignInForm @success="signIn($event)"/>
      </SignDialog>
    </div>
  </div>
</template>

<script>
import SignDialog from './SignDialog'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import AV from '../assets/leancloud'

export default {
  data(){
    return{
      signUpDialogVisible: false,
      signInDialogVisible: false
    }
  },
  computed: {
    user(){
      return this.$store.state.user
    },
    logined(){
      return this.user.id
    }
  },
  components: {
    SignDialog, SignUpForm, SignInForm
  },
  methods:{
    signIn(user){
      this.signUpDialogVisible = false
      this.signInDialogVisible = false
      this.$store.commit('setUser', {user})
    },
    signOut(){
      AV.User.logOut()
      this.$store.commit('removeUser')
    }
  }
}
</script>


<style lang='scss'>
#topbar {
  display: flex;
  justify-content: space-between;
  padding: 8px 32px;
  align-items: center;
  .logo {
    font-size: 22px;
  }
  .action{
    button{
      margin-left: 8px;
    }
  }
}
</style>
