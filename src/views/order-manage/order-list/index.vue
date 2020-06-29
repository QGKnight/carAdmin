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
import apply from "./child/apply";
import list from "./child/list";
export default {
  components: { apply, list },
  data() {
    return {
      currentIndex: 1,
      taskCur: "apply",
      tabList: [
        { title: "个体巡游车经营许可申请", value: "1", name: "apply" },
        { title: "个体经营许可受理列表", value: "2", name: "list" }
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
