<template>
  <div id="editor">
    <nav>
      <ol>
        <li :key="i" v-for="i in [0,1,2,3,4,5,6]"
          :class="{active: currentTab === i}"
          @click="currentTab = i">
          <svg class="icon">
            <use :xlink:href="`#icon-${icons[i]}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="content">
      <li :class="{active: currentTab === 0}">
       <ObjectEditor :items="profile" 
          :title="'个人信息'" :name="'profile'"
          :labels="{name: '姓名', birth: '出生日期', city: '城市'}" />
      </li>
      <li :class="{active: currentTab === 1}">
        <ArrayEditor :items="workExperience" 
          :title="'工作经历'" :name="'workExperience'"
          :labels="{company:'公司名称', content: '工作内容'}" />
      </li>
      <li :class="{active: currentTab === 2}">
        <ArrayEditor :items="education" 
          :title="'学习经历'" :name="'education'"
          :labels="{school: '学校名称', time: '学习时间', degree: '学历'}" />
      </li>
      <li :class="{active: currentTab === 3}">
        <ArrayEditor :items="project" 
          :title="'项目经历'" :name="'project'"
          :labels="{name: '项目名称', content: '具体内容'}" />
      </li>
      <li :class="{active: currentTab === 4}">
        <ArrayEditor :items="awards" 
          :title="'获奖情况'" :name="'awards'"
          :labels="{name: '获奖名称', content: '详细情况'}" />
      </li>
      <li :class="{active: currentTab === 5}">
        <ObjectEditor :items="contact" 
          :title="'联系方式'" :name="'contact'"
          :labels="{qq: 'QQ', wechat: '微信', phone: '电话', email: '邮箱'}" />
      </li>
      <li :class="{active: currentTab === 6}">其他</li> 
    </ol>
  </div>
</template>

<script>
import ArrayEditor from './ArrayEditor'
import ObjectEditor from './ObjectEditor'
import {mapState} from 'vuex'


export default {
  computed: {
    currentTab: {
      get(){
        return this.$store.state.currentTab
      },
      set(value){
        return this.$store.commit('swithTab', value)
      }
    },
    ...mapState([
      'icons', 'profile', 'workExperience', 'education', 'project', 'awards', 'contact'
    ])
  },
  components:{
    ArrayEditor, ObjectEditor
  }
  
}
</script>

<style lang="scss">
#editor {
  display: flex;
  overflow: auto;
  > nav {
    background: #000;
    width: 5em;
    > ol {
      > li {
        padding: 8px 0;
        text-align: center;
        > .icon {
          width: 30px;
          height: 30px;
          fill: white;
        }
      }
      > li.active {
        background: #fff;
        > .icon {
          fill: #000;
        }
      }
    }
  }
  .content {
    flex: 1;
    > li {
      display: none;
      padding: 16px 24px;
      overflow: auto;
      height: 100%;
      .add-item {
        margin-top: 30px;
      }
    }
    > li.active {
      display: block;
    }
    h2{
      margin-bottom: 16px;
    }
    .resumeField{
      margin-bottom: 24px;
      input{
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid #d8dce5;
        box-sizing: border-box;
        color: #5a5e66;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 1;
        outline: 0;
        padding: 0 15px;
        width: 100%;
      }
      label{
        font-size: 14px;
        color: #5a5e66;
        line-height: 40px;
        text-align: left;
        padding: 0 0 10px;
        display: inline-block;
      }
    }
    
  }
}
</style>
