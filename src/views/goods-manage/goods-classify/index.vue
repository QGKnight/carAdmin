<template>
  <div class="carTool">
    <div class="navTool">
      <div class="items" v-for="(item,index) in tabList" :key="index" :class="{actived:currentIndex==item.value}" @click="changeTab(item.value,item.name)">{{item.title}}</div>
    </div>
    <div class="comBox">
        <component v-bind:is="taskCur" v-on:formData="handleFormData" ></component>
    </div>
    
  </div>
</template>

<script>
import firstTool from "./carTool/firstTool";
import readyTool from "./carTool/readyTool";
import tooList from "./carTool/tooList";
export default {
  components: { firstTool, readyTool, tooList },
  data() {
    return {
      currentIndex: 1,
      taskCur: "tooList",
      tabList: [
        { title: "待受理网约车列表", value: "1", name: "tooList" },
        { title: "网约受理合格列表", value: "2", name: "readyTool" },
        { title: "网约车许可受理", value: "3", name: "firstTool" },
        { title: "网约车许可受理", value: "3", name: "firstTool" },
        { title: "网约车变更受理", value: "3", name: "firstTool" }
      ]
    };
  },
  methods: {
    changeTab(value,name) {
      this.currentIndex = value;
      this.taskCur=name;
    },
    handleFormData(data){
      console.log(data)
      this.changeTab('3','firstTool')
    }
  }
};
</script>
<style lang="less" scoped>
.carTool {
  width: 100%;
  height: 100%;
  .navTool {
    width: 100%;
    height: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background: #fff;
    .items {
      margin: 0 5px;
      font-size: 14px;
      height: 100%;
      line-height: 35px;
      padding: 0 5px;
      border-radius: 4px 4px 0 0;
      background: #f2f2f2;
      cursor: pointer;
    }
    .actived {
      background: #fff;
      border: 1px solid #eee;
      position: relative;
      &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 2px;
        background: #304156;
        top: 0;
        left: 0;
      }
    }
  }
  .comBox{
      margin-top:20px;
  }
}
</style>
