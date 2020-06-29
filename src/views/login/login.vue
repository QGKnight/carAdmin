<template>
  <div class="login-page">
    <div class="main-box">
      <div class="title">郑州市客运管理处综合办公系统</div>
      <div class="form-main">
        <img class="main-left" src="../../static/image/lgimg.png" alt />
        <div class="main-line"></div>
        <div class="main-right">
          <div class="form-title">用户登录</div>
          <div class="right-main">
            <el-form
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              class="demo-ruleForm"
            >
              <el-form-item prop="username">
                <img src="../../static/image/icon01.png" alt />
                <el-input type="text" clearable v-model="ruleForm.username" placeholder="请输入登录账号"></el-input>
              </el-form-item>
              <el-form-item prop="pass">
                <img src="../../static/image/icon02.png" alt />
                <el-input
                  type="password"
                  clearable
                  v-model="ruleForm.pass"
                  placeholder="请输入密码"
                ></el-input>
              </el-form-item>
              <el-form-item prop="smscode">
                <el-input v-model.number="ruleForm.smscode" clearable placeholder="请输入验证码"></el-input>
                <span class="smscode">123123</span>
              </el-form-item>
              <el-checkbox v-model="checked">记住密码</el-checkbox>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            </el-form>
          </div>
        </div>
      </div>
      <div class="foot">技术支持:瑞丰科技</div>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/permission";
export default {
  data() {
   
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入登录账号"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
     var checkCode = (rule, value, callback) => {
       if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        callback();
      }
    };
    return {
      checked: "",
      ruleForm: {
        username: "",
        pass: "",
        smscode: ""
      },
      rules: {
        username: [{ validator: validateUser, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        smscode: [{ validator: checkCode, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
           this.$store.commit('LOGIN_IN', "HJG21HV3214BV")
            this.$router.replace('/')
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.login-page {
  height: 100%;
  width: 100%;
  background: #fff;
  .main-box {
    width: inherit;
    height: 100%;
    background: url("../../static/image/background.png") no-repeat;
    background-size: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title {
      margin-bottom: 60px;
      font-size: 40px;
      letter-spacing: 7px;
      text-indent: 7px;
      color: #049aff;
      text-shadow: 2px 0px #fff, 1px -2px #fff, -2px 0px #fff, 0px 2px #fff;
    }
    .form-main {
      width: 1020px;
      height: 480px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 3px 26px #1f8fb4;
      padding: 40px 50px;
      display: flex;
      flex-direction: row;
      align-items: center;
      .main-left {
        width: 470px;
        height: 430px;
      }
      .main-line {
        width: 1px;
        height: 300px;
        background: #ccc;
        margin: 0 80px;
      }
      .main-right {
        width: 360px;
        .form-title {
          width: 100%;
          height: 50px;
          line-height: 50px;
          border-bottom: 1px solid #ccc;
          text-align: center;
          font-size: 24px;
          color: #3c9bed;
          margin-bottom: 40px;
        }
        .right-main {
          .el-form-item {
            margin-bottom: 35px;
          }

          /deep/ .el-form-item__content {
            display: flex;
            flex-direction: row;
            align-items: center;
            border: 1px solid #ccc;
            border-radius: 20px;
            padding: 0 15px;
            img {
              width: 36px;
              height: 36px;
            }
            input {
              border: none;
              flex: 1;
            }
            .smscode {
              height: 100%;
              padding-left: 20px;
              border-radius: 20px 0 0 20px;
              border-left: 1px solid #eee;
            }
          }
        }
        button {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          margin-top:20px;
        }
      }
    }
    .foot {
      position: fixed;
      top: 850px;
    }
  }
}
</style>

