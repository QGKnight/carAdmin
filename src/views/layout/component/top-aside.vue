<template>
  <div class="topBar">
    <div class="bar-left">
      <img src="../../../static/image/jtzf.png" alt />
      <span>出租网约综合办公系统</span>
    </div>
    <div class="bar-right">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar size="large" :src="circleUrl"></el-avatar>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
  },
  computed: {
    ...mapState(["isSidebarNavCollapse", "crumbList"])
  },
  methods: {
    toggleNavCollapse() {
      this.$store.commit("toggleNavCollapse");
    },
    loginOut() {
      this.$store.commit("LOGIN_OUT");
      /* 防止切换角色时addRoutes重复添加路由导致出现警告 */
      window.location.reload();
    }
  }
};
</script>

<style lang="less" scoped>
.topBar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 80px;
  background: rgb(48, 65, 86);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .bar-left {
    display: flex;
    align-items: center;
    img {
      width: 38px;
      height: 38px;
      margin: 0 20px 0 30px;
    }
    span {
      color: rgb(255, 255, 255);
      font-size: 26px;
    }
  }
  .bar-right {
    margin-right: 30px;
    .el-dropdown-link{
        display: flex;
        flex-direction: row;
        align-items: center;
        i{
            color:#fff;
        }
    }
  }
}
</style>
