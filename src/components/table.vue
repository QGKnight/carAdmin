<template>
  <el-table :data="tableData" style="width:100%" border>
    <template v-for="column in columns">
      <el-table-column
        align="center"
        :width="column.width"
        :prop="column.prop"
        :label="column.title"
        v-if="!column.action"
      ></el-table-column>
      <el-table-column align="center" :label="column.title" v-else>
        <template slot-scope="scope">
          <template v-for="(fn,index) in column.actions">
            <Divider direction="vertical" v-if="index>0" />
            <el-button type="text" @click="handleClick(scope.row,fn.fnName)">{{fn.title}}</el-button>
          </template>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>
<script>
import { Divider } from "element-ui";

export default {
  name: "tableC",
  components: { Divider },
  props: {
    columns: {
      required: true,
      type: Array,
      default: () => {
        return [];
      }
    },
    tableData: {
      required: true,
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  methods: {
    handleClick(row, fnName) {
      this.$emit(`${fnName}`, row);
    }
  }
};
</script>
<style lang="less" scoped>
/deep/ .el-table__row {
  td {
    padding:0;
    height: 50px;
  }
}
</style>