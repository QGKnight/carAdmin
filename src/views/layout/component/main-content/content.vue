<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <transition-group name="breadcrumb">
          <!-- 防止面包屑导航出现 首页/首页， v-if="route.name!='home'" -->
          <el-breadcrumb-item
            v-for="(route,i) in crumbList"
            :key="route.name"
            :to="{name:route.name}"
            v-if="route.name!=='home'"
            :class="{'is-last-link':i==crumbList.length-1}"
          >{{route.meta.name}}</el-breadcrumb-item>
        </transition-group>
      </el-breadcrumb>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="moreTh " v-if="!showFlag" @click="showTool">
      <i class="el-icon-d-arrow-left"></i>
      <span>待</span>
      <span>办</span>
      <span>事</span>
      <span>项</span>
    </div>
    <div class="moreTool"  v-if="showFlag" @click="showTool">
      <div class="titleBox">
        <span>待办事项</span>
        <i class="el-icon-d-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      showFlag: false
    };
  },
  computed: {
    ...mapState(["crumbList"])
  },
  mounted() {},
  methods: {
    showTool() {
      this.showFlag = !this.showFlag;
    }
  }
};
</script>

<style lang="less" scoped>
.moreTh {
  position: fixed;
  top: 80px;
  right: 0;
  width: 30px;
  height: 100%;
  background: #f2f2f2;
  z-index: 99;
  border-left: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  i {
    margin: 10px 0;
    color: #409eff;
  }
  span {
    color: #409eff;
  }
}
.moreTool {
  position: fixed;
  top: 80px;
  right: 0;
  width: 150px;
  height: 100%;
  background: #fff;
  z-index: 99;
  border-left: 5px solid #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  .titleBox{
    display: flex;
    width:100%;
    height:35px;
    justify-content: space-between;
    align-items: center;
    background: #f2f2f2;
    border-bottom: 1px solid #ccc;
    padding:0 5px;
    
    span{
      font-size: 14px;
      color:#409eff;
    }
    i{
      font-size: 14px;
      color:#409eff;
    }
  }
}
/deep/ .crumbs {
  position: fixed;
  top: 80px;
  left: 200px;
  z-index: 99;
  width: 100%;
  height: 35px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  background: #f2f2f2;
  margin-bottom: 15px;
  .el-breadcrumb {
    height: 100%;
    line-height: 35px;
    padding-left: 10px;
    span {
      font-weight: 550;
    }
  }
}
.content {
  position: absolute;
  top: 115px;
  left: 200px;
  bottom: 0;
  right: 0;
  background: #f2f2f2;
  padding: 8px 60px 8px 20px;
}
</style>
