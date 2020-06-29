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
import readyList from "./carTool/readyList";
import issue from "./carTool/issue";
import waitList from "./carTool/waitList";
import contin from "./carTool/contin";
import change from "./carTool/change";
export default {
  name: "list",
  components: { NavBar,waitList,readyList,issue,contin,change},
  data() {
    return {
      currentIndex: 1,
      taskCur: "waitList",
      toolId: null,
      tabList: [
        { title: " 待许可平台列表 ", value: "1", name: "waitList" },
        { title: " 已许可平台列表 ", value: "2", name: "readyList" },
        { title: " 许可证核发 ", value: "3", name: "issue" },
        { title: " 许可证延续 ", value: "4", name: "contin" },
        { title: " 许可证变更 ", value: "5", name: "change" }
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