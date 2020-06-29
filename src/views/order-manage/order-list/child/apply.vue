<template>
  <div class="apply">
    <div class="apply-top">
      <el-input placeholder="请输入经营权号" v-model="manNum" clearable></el-input>
      <el-button type="primary" class="succ">确定</el-button>
      <el-button class="subm">提交申请</el-button>
    </div>
    <div class="formBox">
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <div class="form-title">
          <img src="../../../../static/image/icon.png" alt />
          <span>个体业户基本信息</span>
        </div>
        <div class="formItem">
          <el-form-item label="车牌号码">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="业户名称">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="法人代表">
            <el-input></el-input>
          </el-form-item>
        </div>
        <div class="formItem">
          <el-form-item label="车牌号码">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="业户名称">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="法人代表">
            <el-input></el-input>
          </el-form-item>
        </div>
        <div class="formItem items">
          <el-form-item label="车牌号码">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="业户名称">
            <el-input></el-input>
          </el-form-item>
        </div>
        <div class="formItem items">
          <el-form-item label="车牌号码">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="业户名称">
            <el-input></el-input>
          </el-form-item>
        </div>
        <div class="form-title">
          <img src="../../../../static/image/icon.png" alt />
          <span>材料目录</span>
        </div>
        <div class="formItem">
          <el-form-item label="文件类别">
            <el-select v-model="value" placeholder="请选择文件类别">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
           <el-button class="submitBtn">高拍申请材料</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      manNum: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.apply {
  width: 100%;
  height: 100%;
  .apply-top {
    display: flex;
    flex-direction: row;
    .el-input {
      width: 400px;
    }
    .succ {
      margin: 0 100px 0 30px;
    }
    .subm {
      background: #3c8b3c;
      color: #fff;
    }
  }
  .formBox {
    margin-top: 30px;
    .form-title {
      display: flex;
      img {
        margin-right: 15px;
        margin-bottom: 25px;
      }
      span {
        font-size: 16px;
        font-weight: bold;
      }
    }
    .formItem {
      display: flex;
      flex-direction: row;
      padding-left:30px;
      .el-form-item {
        margin-right: 50px;
      }
      .submitBtn{
          background: #4b72a4;
          color:#fff;
          height:40px;
      }
    }
    .items {
      .el-input {
        width: 400px;
      }
    }
  }
}
</style>
