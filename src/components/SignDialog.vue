<template>
  <div class="dialog-wrapper" v-show="visible">
    <div class="dialog">
      <header>
        {{title}}
        <span class="close" @click="close">
          <i class="el-icon-circle-close-outline"></i>
        </span>  
      </header>
      <main>
        <slot></slot>
      </main>  
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'visible'],
  methods:{
    close(){
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="scss">
  .dialog-wrapper{
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    .dialog{
      min-width: 280px;
      min-height: 160px;
      background: #fff;
      color: #5a5e66;
      >header{
        padding: 16px 16px 8px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #d8dce5;
        .close{
          cursor: pointer;
        }
      }
      >main{
        padding: 16px;
      }
    }
  }
</style>


