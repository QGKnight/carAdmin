
<template>
  <div class="toolList">
    <div class="tool-main">
      <div class="main-item">
        <el-select v-model="value" clearable placeholder="请选择企业名称">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="main-item">
        <el-input placeholder="请输入车牌号" v-model="carNum" clearable></el-input>
      </div>
      <div class="main-item">
        <el-input placeholder="请输入车架号" v-model="carFrame" clearable></el-input>
      </div>
      <div class="main-item">
        <el-select v-model="valueFrame" clearable placeholder="请选择厂牌型号">
          <el-option
            v-for="item in optionsFrame"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="main-item">
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
      <el-button type="primary">查询</el-button>
      <el-button type="warning">清空</el-button>
    </div>
    <div class="table-main">
      <TableC :columns="columns" :tableData="tableData" @lookMore="lookMore" @print="print"></TableC>
    </div>
    <div class="pageNum">
      <Pagination v-bind:child-msg="pageparm" @callFather="callFather"></Pagination>
    </div>
  </div>
</template>

<script>
import Pagination from "../../../../components/Pagination";
import TableC from "../../../../components/table";
export default {
  components: { Pagination, TableC },
  data() {
    return {
      columns: [
        { prop: "id", title: "", width: "50" },
        { prop: "carNum", title: "序号", width: "50" },
        { prop: "carFrame", title: "平台编号", width: "200" },
        { prop: "carCla", title: "平台简称", width: "300" },
        { prop: "company", title: "经济类型", width: "300" },
        { prop: "user", title: "注册地址", width: "300" },
        { prop: "date", title: "起始日期", width: "150" },
        { prop: "date", title: "终止日期", width: "150" },
        { prop: "date", title: "办理状态", width: "150" },
        {
          action: true,
          title: "操作",
          actions: [
            { fnName: "lookMore", title: "核发" },
            { fnName: "print", title: "延续" },
            { fnName: "print", title: "变更" }
          ]
        }
      ],
      tableData: [
        {
          id: "2",
          carNum: "25",
          carFrame: "W25",
          carCla: "来回出行",
          company: "滴滴出行科技有限公司郑州分公司",
          user: "河南林锐汽车销售有限公司",
          date: "2016-05-02"
        },
        {
          id: "2",
          carNum: "25",
          carFrame: "W25",
          carCla: "来回出行",
          company: "滴滴出行科技有限公司郑州分公司",
          user: "河南林锐汽车销售有限公司",
          date: "2016-05-02"
        },
        {
          id: "2",
          carNum: "25",
          carFrame: "W25",
          carCla: "来回出行",
          company: "滴滴出行科技有限公司郑州分公司",
          user: "河南林锐汽车销售有限公司",
          date: "2016-05-02"
        },
        {
          id: "2",
          carNum: "25",
          carFrame: "W25",
          carCla: "来回出行",
          company: "滴滴出行科技有限公司郑州分公司",
          user: "河南林锐汽车销售有限公司",
          date: "2016-05-02"
        },
        {
          id: "2",
          carNum: "25",
          carFrame: "W25",
          carCla: "来回出行",
          company: "滴滴出行科技有限公司郑州分公司",
          user: "河南林锐汽车销售有限公司",
          date: "2016-05-02"
        }
      ],
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
      optionsFrame: [
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
      value: "",
      carNum: "",
      carFrame: "",
      valueFrame: "",
      value1: "",
      pageparm: {
        currentPage: 1,
        pageSize: 10,
        total: 10
      },
      formInline: {
        current: 1,
        size: 10
      }
    };
  },
  methods: {
    callFather(parm) {
      this.formInline.current = parm.currentPage;
      this.formInline.size = parm.pageSize;
      //   this.search(this.formInline);
    },
    lookMore(item) {
      this.$emit("formData", item);
    },
    print(){
      
    }
  }
};
</script>
<style lang="less" scoped>
.toolList {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  .tool-main {
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
    .main-item {
      margin-right: 20px;
      .el-select {
        width: 250px;
      }
      .el-input {
        width: 250px;
      }
    }
  }
  .pageNum {
    background: #fff;
    text-align: right;
    padding-right: 30px;
  }
}
</style>