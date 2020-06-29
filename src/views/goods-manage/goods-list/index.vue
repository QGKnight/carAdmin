<template>
  <div class="page">
    <NavBar ref="navChild" :currentIndex="currentIndex" :taskCur="taskCur" :tabList="tabList" />
    <div class="comBox">
      <component v-bind:is="taskCur" v-on:formData="handleFormData" :toolId="toolId"></component>
    </div>
  </div>
</template>

<script>
import NavBar from "../../../components/navBar";
import firstTool from "./carTool/firstTool";
import readyTool from "./carTool/readyTool";
import tooList from "./carTool/tooList";
export default {
  name: "list",
  components: { NavBar, firstTool, readyTool, tooList },
  data() {
    return {
      currentIndex: 1,
      taskCur: "tooList",
      toolId: null,
      tabList: [
        { title: "车辆初审待办列表", value: "1", name: "tooList" },
        { title: "已初审列表", value: "2", name: "readyTool" },
        { title: "网约车辆初审", value: "3", name: "firstTool" }
      ]
    };
  },
  methods: {
    fatherChange(item) {
      let currentItem = JSON.parse(JSON.stringify(item));
      this.currentIndex = item.value;
      this.taskCur = item.name;
    },
    handleFormData(data) {
      this.toolId = data.id;
      console.log(this.toolId );
      this.$refs.navChild.changeTab({ value: "3", name: "firstTool" });
    }
  }
};
</script>
<style lang="less" scoped>
.comBox {
  margin-top: 20px;
}
</style>