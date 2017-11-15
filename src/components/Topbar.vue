<template>
  <div id="topbar">
    <div class="logo">
      Resume
    </div>
    <div class="action">
      <el-button type="primary" size="small">注册</el-button>
      <el-button size="small">登录</el-button>
    </div>
  </div>
</template>

<style lang='scss'>
#topbar {
  display: flex;
  justify-content: space-between;
  padding: 8px 32px;
  align-items: center;
  .logo {
    font-size: 22px;
  }
}
</style>
