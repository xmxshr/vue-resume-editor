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
          :title="'个人信息'" 
          :labels="{name: '姓名', birth: '出生日期', city: '城市'}" />
      </li>
      <li :class="{active: currentTab === 1}">
        <ArrayEditor :items="workExperience" 
          :title="'工作经历'" 
          :labels="{company:'公司名称', content: '工作内容'}" />
      </li>
      <li :class="{active: currentTab === 2}">
        <ArrayEditor :items="study" 
          :title="'学习经历'" 
          :labels="{school: '学校名称', time: '学习时间', degree: '学历'}" />
      </li>
      <li :class="{active: currentTab === 3}">
        <ArrayEditor :items="project" 
          :title="'项目经历'" 
          :labels="{name: '项目名称', content: '具体内容'}" />
      </li>
      <li :class="{active: currentTab === 4}">
        <ArrayEditor :items="awards" 
          :title="'获奖情况'" 
          :labels="{name: '获奖名称', content: '详细情况'}" />
      </li>
      <li :class="{active: currentTab === 5}">
        <ObjectEditor :items="contact" 
          :title="'联系方式'" 
          :labels="{qq: 'QQ', wechat: '微信', phone: '电话', email: '邮箱'}" />
      </li>
      <li :class="{active: currentTab === 6}">其他</li> 
    </ol>
  </div>
</template>

<script>
import ArrayEditor from './ArrayEditor'
import ObjectEditor from './ObjectEditor'
export default {
  data() {
    return {
      currentTab: 0,
      icons: ["id", "work", "book", "heart", "cup", "phone", "add"],
      profile: { name: "1", birth: "2", city: "3" },
      workExperience: [{ company: "", content: "" }],
      study: [{school: "", time: "", degree: ""}],
      project: [{name: "", content: ""}],
      awards: [{name: "", content: ""}],
      contact: { qq: "", wechat: "", phone: "", email: ""}
    }
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
  }
}
</style>
