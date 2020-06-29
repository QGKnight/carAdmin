<template>
  <div class="apply">
    <div class="formBox">
      <el-form :label-position="labelPosition" label-width="180px" :model="formLabelAlign">
        <div class="form-title">
          <img src="../../../../static/image/icon.png" alt />
          <span>平台信息</span>
        </div>
        <div class="formItemBox">
          <el-form-item label="平台名称">
            <el-input></el-input>
          </el-form-item>
          <div class="threeBox">
            <el-form-item label="业户编号">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="社会信用代码">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="经济性质">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>
          <el-form-item label="注册地址">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="经营地址">
            <el-input></el-input>
          </el-form-item>
          <div class="threeBox">
            <el-form-item label="注册资金">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="法人代表">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="身份证号">
              <el-input></el-input>
            </el-form-item>
          </div>
          <div class="threeBox">
            <el-form-item label="电信业务许可证编号">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="ICP许可证编号">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="服务器IP地址">
              <el-input></el-input>
            </el-form-item>
          </div>
          <el-form-item label="结算银行">
            <el-input></el-input>
          </el-form-item>
        </div>
        <div class="form-title">
          <img src="../../../../static/image/icon.png" alt />
          <span>分支机构信息</span>
          <span class="tips">注：总部设在本市的平台，如果在本市未设置分支机构，那么分支机构信息可按总部信息填写</span>
        </div>
        <div class="formItemBox">
          <el-form-item label="企业名称">
            <el-input></el-input>
          </el-form-item>
          <div class="threeBox">
            <el-form-item label="企业简称">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="社会信用代码">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="经济性质">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>
          <el-form-item label="注册地址">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="经营地址">
            <el-input></el-input>
          </el-form-item>
          <div class="threeBox">
            <el-form-item label="成立日期">
              <el-date-picker v-model="value1" type="date" placeholder="选择成立日期"></el-date-picker>
            </el-form-item>
            <el-form-item label="经营区域">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="企业电话">
              <el-input></el-input>
            </el-form-item>
          </div>
          <div class="threeBox">
            <el-form-item label="负责人">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
              <el-input></el-input>
            </el-form-item>
          </div>
          <div class="threeBox">
            <el-form-item label="经办人">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
              <el-input></el-input>
            </el-form-item>
          </div>
          <el-form-item label="备  注">
            <el-input></el-input>
          </el-form-item>
        </div>
        <div class="form-title">
          <img src="../../../../static/image/icon.png" alt />
          <span>附件列表</span>
        </div>
        <div class="list-tips">
          <p>温馨提示：</p>
          <p>1、请将以上每个项目所需材料合并成一个文件(PDF格式或者JPG/JPEG格式)上传；</p>
          <p>2、以下文件红色表示审核不合格，绿色表示审核合格，白色表示待审核;</p>
          <p>3、审核不合格文件需要删除原文件并且重新上传即可，无需点击提交按钮再次提交数据。</p>
        </div>
        <div class="changeFile">
          <el-select v-model="value" placeholder="请选择文件类别">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-button>上传文件</el-button>
        </div>
        <div class="changeFile">
          <el-checkbox v-model="checked">我同意以下条款</el-checkbox>
        </div>
        <div class="list-tips">
          <p>我公司承诺所提供的文件、证件（复印件与原件一致）及法定代表人或委托人签字真实、准确、完整、有效，</p>
          <p>若因提供虚假资料所产生一切后果，公司承担一切法律责任。</p>
        </div>
        <div></div>
        <div class="subMitBox">
          <el-button class="subBtn">提交网约平台申请</el-button>
           <el-button class="resetBtn">重置</el-button>
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
  .formBox {
    width: 1400px;
    margin-top: 30px;
    padding-bottom: 200px;
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
      .tips {
        font-size: 16px;
        font-weight: normal;
        color: red;
        margin-left: 30px;
      }
    }
    .list-tips {
      padding: 0 120px;
      color: red;
      font-size: 14px;
      line-height: 24px;
      margin-top:25px;
    }
    .subMitBox{
      margin-top:90px;
      .subBtn{
        background: #3c8b3c;
        color:#fff;
        margin-left:400px;
      }
      .resetBtn{
        background: orange;
        color:#fff;
        margin-left:30px;
      }

    }
    .changeFile {
      margin-top: 25px;
      padding: 0 120px;
      .el-select {
        width: 500px;
      }
      .el-button {
        width: 90px;
        margin-left: 25px;
        background: #4b72a4;
        color: #fff;
      }
    }
    .formItemBox {
      padding: 0 30px;
      .threeBox {
        display: flex;
        flex-direction: row;
        .el-form-item {
          flex: 1;
          margin-right: 20px;
          .el-select {
            width: 100%;
          }
          .el-date-editor {
            width: 100%;
          }
          &:last-child {
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
