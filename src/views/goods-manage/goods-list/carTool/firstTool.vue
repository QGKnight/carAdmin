
<template>
  <div class="toolPage">
    <h4>网络预约出租汽车车辆营运初审</h4>
    <div class="tabMian">
      <div class="main-top">
        <div class="top-left">
          <el-input placeholder="请输入车架号" v-model="input3" class="input-with-select">
            <el-button slot="append">确定</el-button>
          </el-input>
        </div>
        <div class="top-right">补打初审表</div>
      </div>
      <div class="tab-box">
        <table border="1">
          <tbody>
            <tr>
              <td class="form_tipsSmall" rowspan="7">
                <div class="title">
                  <span>车</span>
                  <span>辆</span>
                  <span>所</span>
                  <span>有</span>
                  <span>人</span>
                </div>
              </td>
              <td class="form_tips" rowspan="3">企业</td>
              <td class="form_tips">企业名称</td>
              <td class="form_item" colspan="3">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="FrCzName"
                  readonly
                  textboxname="FrCzName"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input6"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 388px;"
                  />
                  <input type="hidden" class="textbox-value" name="FrCzName" value />
                </span>
              </td>
              <td class="form_tips">法人代表</td>
              <td class="form_item">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="FrCzFr"
                  readonly
                  textboxname="FrCzFr"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input7"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 153px;"
                  />
                  <input type="hidden" class="textbox-value" name="FrCzFr" value />
                </span>
              </td>
            </tr>

            <tr>
              <td class="form_tips">
                统一社会
                <br />信用代码
              </td>
              <td class="form_item" colspan="3">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="CzSfZh"
                  readonly
                  textboxname="CzSfZh"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input8"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 388px;"
                  />
                  <input type="hidden" class="textbox-value" name="CzSfZh" value />
                </span>
              </td>
              <td class="form_tips">联系电话</td>
              <td class="form_item">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="FrCzDh"
                  readonly
                  textboxname="FrCzDh"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input9"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 153px;"
                  />
                  <input type="hidden" class="textbox-value" name="FrCzDh" value />
                </span>
              </td>
            </tr>

            <tr>
              <td class="form_tips">企业地址</td>
              <td class="form_item" colspan="5">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="FrCzAddr"
                  readonly
                  textboxname="FrCzAddr"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input10"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 650px;"
                  />
                  <input type="hidden" class="textbox-value" name="FrCzAddr" value />
                </span>
              </td>
            </tr>

            <tr>
              <td class="form_tips" rowspan="4">个人</td>
              <td class="form_tips">姓名</td>
              <td class="form_item" colspan="3">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="GrCzName"
                  readonly
                  textboxname="GrCzName"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input11"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 388px;"
                  />
                  <input type="hidden" class="textbox-value" name="GrCzName" value />
                </span>
              </td>
              <td class="form_tips">资格证号</td>
              <td class="form_item">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="PpZgZh"
                  readonly
                  textboxname="PpZgZh"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input12"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 153px;"
                  />
                  <input type="hidden" class="textbox-value" name="PpZgZh" value />
                </span>
              </td>
            </tr>
            <tr>
              <td class="form_tips">身份证号</td>
              <td class="form_item" colspan="3">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="GrCzSfZh"
                  readonly
                  textboxname="GrCzSfZh"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input13"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 388px;"
                  />
                  <input type="hidden" class="textbox-value" name="GrCzSfZh" value />
                </span>
              </td>
              <td class="form_tips">联系电话</td>
              <td class="form_item">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="GrCzDh"
                  readonly
                  textboxname="GrCzDh"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input14"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 153px;"
                  />
                  <input type="hidden" class="textbox-value" name="GrCzDh" value />
                </span>
              </td>
            </tr>

            <tr>
              <td class="form_tips">户籍地址</td>
              <td class="form_item" colspan="5">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="GrCzHj"
                  readonly
                  textboxname="GrCzHj"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input15"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 650px;"
                  />
                  <input type="hidden" class="textbox-value" name="GrCzHj" value />
                </span>
              </td>
            </tr>

            <tr>
              <td class="form_tips">现住址</td>
              <td class="form_item" colspan="5">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="GrCzAddr"
                  readonly
                  textboxname="GrCzAddr"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input16"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 650px;"
                  />
                  <input type="hidden" class="textbox-value" name="GrCzAddr" value />
                </span>
              </td>
            </tr>

            <tr>
              <td class="form_tipsSmall" rowspan="6">
                <div class="title">
                  <span>车</span>
                  <span>辆</span>
                </div>
              </td>
              <td class="form_tips">车牌号码</td>
              <td class="form_item" colspan="2">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="Cph"
                  readonly
                  textboxname="Cph"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input17"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 225px;"
                  />
                  <input type="hidden" class="textbox-value" name="Cph" value />
                </span>
              </td>
              <td class="form_tips">车辆类型</td>
              <td class="form_item" colspan="1">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="ClLx"
                  readonly
                  textboxname="ClLx"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input18"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 153px;"
                  />
                  <input type="hidden" class="textbox-value" name="ClLx" value />
                </span>
              </td>
              <td class="form_tips">车身颜色</td>
              <td class="form_item">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="Ys"
                  readonly
                  textboxname="Ys"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input19"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 153px;"
                  />
                  <input type="hidden" class="textbox-value" name="Ys" value />
                </span>
              </td>
            </tr>

            <tr>
              <td class="form_tips">厂牌型号</td>
              <td class="form_item" colspan="2">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="Cx"
                  readonly
                  textboxname="Cx"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input20"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 225px;"
                  />
                  <input type="hidden" class="textbox-value" name="Cx" value />
                </span>
              </td>
              <td class="form_tips">燃料类型</td>
              <td class="form_item">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="RlLx"
                  readonly
                  textboxname="RlLx"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input21"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 153px;"
                  />
                  <input type="hidden" class="textbox-value" name="RlLx" value />
                </span>
              </td>

              <td class="form_tips">发动机号</td>
              <td class="form_item">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="FdJh"
                  readonly
                  textboxname="FdJh"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input22"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 153px;"
                  />
                  <input type="hidden" class="textbox-value" name="FdJh" value />
                </span>
              </td>
            </tr>

            <tr>
              <td class="form_tips">车架号</td>
              <td class="form_item" colspan="2">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="Cjh"
                  readonly
                  textboxname="Cjh"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input23"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 225px;"
                  />
                  <input type="hidden" class="textbox-value" name="Cjh" value />
                </span>
              </td>
              <td class="form_tips">
                轴距
                <br />（毫米）
              </td>
              <td class="form_item" colspan="1">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="ClZj"
                  readonly
                  textboxname="ClZj"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input24"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 153px;"
                  />
                  <input type="hidden" class="textbox-value" name="ClZj" value />
                </span>
              </td>
              <td class="form_tips">
                功率
                <br />（千瓦）
              </td>
              <td colspan="1">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="ClGl"
                  readonly
                  textboxname="ClGl"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input25"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 153px;"
                  />
                  <input type="hidden" class="textbox-value" name="ClGl" value />
                </span>
              </td>
            </tr>

            <tr>
              <td class="form_tips">
                车长
                <br />（毫米）
              </td>
              <td class="form_item" colspan="2">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="ClCd"
                  readonly
                  textboxname="ClCd"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input26"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 225px;"
                  />
                  <input type="hidden" class="textbox-value" name="ClCd" value />
                </span>
              </td>
              <td class="form_tips">
                车宽
                <br />（毫米）
              </td>
              <td class="form_item" colspan="1">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="ClKd"
                  readonly
                  textboxname="ClKd"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input27"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 153px;"
                  />
                  <input type="hidden" class="textbox-value" name="ClKd" value />
                </span>
              </td>
              <td class="form_tips">
                车高
                <br />（毫米）
              </td>
              <td class="form_item">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="ClGd"
                  readonly
                  textboxname="ClGd"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input28"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 153px;"
                  />
                  <input type="hidden" class="textbox-value" name="ClGd" value />
                </span>
              </td>
            </tr>

            <tr>
              <td class="form_tips">
                车辆
                <br />购置价格
                <br />（元）
              </td>
              <td class="form_item" colspan="2">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="GcJg"
                  readonly
                  textboxname="GcJg"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input29"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 225px;"
                  />
                  <input type="hidden" class="textbox-value" name="GcJg" value />
                </span>
              </td>

              <td class="form_tips">
                电动车
                <br />续航里程
                <br />（公里）
              </td>
              <td class="form_item" colspan="1">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="XhLc"
                  readonly
                  textboxname="XhLc"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input30"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 153px;"
                  />
                  <input type="hidden" class="textbox-value" name="XhLc" value />
                </span>
              </td>
              <td class="form_tips">核载人数</td>
              <td class="form_item">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="Zw"
                  readonly
                  textboxname="Zw"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input31"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 153px;"
                  />
                  <input type="hidden" class="textbox-value" name="Zw" value />
                </span>
              </td>
            </tr>
            <tr>
              <td class="form_tips">
                行驶证
                <br />注册日期
              </td>
              <td class="form_item" colspan="2">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="ClDjRq"
                  readonly
                  textboxname="ClDjRq"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input32"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 222px;"
                  />
                  <input type="hidden" class="textbox-value" name="ClDjRq" value />
                </span>
              </td>
              <td class="form_tips">
                变速器
                <br />类型
              </td>
              <td class="form_item" colspan="1">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="BsqLx"
                  readonly
                  textboxname="BsqLx"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input33"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 140px;"
                  />
                  <input type="hidden" class="textbox-value" name="BsqLx" value />
                </span>
              </td>
              <td class="form_tips">排放标准</td>
              <td class="form_item">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="PfBz"
                  readonly
                  textboxname="PfBz"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input34"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 147px;"
                  />
                  <input type="hidden" class="textbox-value" name="PfBz" value />
                </span>
              </td>
            </tr>
            <tr>
              <td class="form_tipsSmall">
                <div class="title">
                  <span>平</span>
                  <span>台</span>
                </div>
              </td>
              <td class="form_item" colspan="7">
                <input
                  type="text"
                  class="easyui-textbox textbox-f"
                  id="QyMc"
                  readonly
                  textboxname="QyMc"
                  style="display: none;"
                />
                <span class="textbox textbox-readonly" style="width: 153px;">
                  <input
                    id="_easyui_textbox_input35"
                    type="text"
                    class="textbox-text validatebox-text validatebox-readonly textbox-prompt"
                    autocomplete="off"
                    tabindex
                    readonly="readonly"
                    placeholder
                    style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 843px;"
                  />
                  <input type="hidden" class="textbox-value" name="QyMc" value />
                </span>
              </td>
            </tr>

            <tr>
              <td class="form_tipsSmall">
                <div class="title">
                  <span>文件</span>
                  <span>高拍</span>
                </div>
              </td>
              <td class="form_item" colspan="7">
                <div class="cell cell_file">
                  <el-select v-model="value" placeholder="文件类别">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                  <span class="textbox combo" style="width: 0px;">
                    <span class="textbox-addon textbox-addon-right" style="right: 0px; top: 0px;">
                      <a
                        href="javascript:;"
                        class="textbox-icon combo-arrow"
                        icon-index="0"
                        tabindex="-1"
                        style="width: 18px; height: 24px;"
                      ></a>
                    </span>
                    <input
                      id="_easyui_textbox_input59"
                      type="text"
                      class="textbox-text validatebox-text"
                      autocomplete="off"
                      tabindex
                      placeholder
                      style="margin: 0px 18px 0px 0px; padding-top: 0px; padding-bottom: 0px; height: 24px; line-height: 24px; width: 0px;"
                    />
                    <input type="hidden" class="textbox-value" name="WjLb" value="机动车销售统一发票" />
                  </span>
                  <a
                    name="uploadFile"
                    id="uploadFile"
                    class="easyui-linkbutton btn_upload l-btn l-btn-small"
                    group
                  >
                    <span class="l-btn-left">高拍初审材料</span>
                  </a>
                </div>
              </td>
            </tr>

            <tr>
              <td class="form_tipsSmall">
                <div class="title">
                  <span>初审</span>
                  <span>意见</span>
                </div>
              </td>
              <td colspan="7" style="padding:8px 0" class="cell_CsJgSm">
                <textarea
                  id="_easyui_textbox_input36"
                  class="textbox-text validatebox-text textbox-prompt"
                  autocomplete="off"
                  tabindex
                  placeholder
                  style="margin: 0px; height: 100px; width: 793px;"
                ></textarea>
                <div class="agreeBox">
                  <el-radio v-model="radio" label="1">初审合格</el-radio>
                  <el-radio v-model="radio" label="2">驳回申请</el-radio>
                  <el-button>提交审批结果</el-button>
                </div>
              </td>
            </tr>
            <tr>
              <td class="form_tipsSmall">
                <div class="title">
                  <span>申</span>
                  <span>请</span>
                  <span>材</span>
                  <span>料{{toolId}}</span>
                </div>
              </td>
              <td colspan="7" style="height:255px;">
                <table id="File" border="0" style="width:100%;height:100%;"></table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['toolId'],
  data() {
    return {
      radio: "",
      input3: "",
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
      ]
    };
  },
  mounted(){
    this.getData();
  },
  methods: {
    getData(){
      alert(this.toolId)
    }
  }
};
</script>
<style lang="less" scoped>
.toolPage {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 20px 0;
  h4 {
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 14px;
  }
  .tabMian {
    width: 1000px;
    .main-top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .top-left {
        button {
          background: #409eff;
          color: #fff;
          border-radius: 0;
        }
      }
      .top-right {
        padding: 0 15px;
        line-height: 35px;
        height: 35px;
        background: #577eb2;
        color: #fff;
        border-radius: 3px;
      }
    }
    .tab-box {
      margin-top: 15px;
      table {
        width: 100%;
        border-collapse: collapse;
        .form_tipsSmall {
          width: 75px;
          background: #eee;
          .title {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            span {
              margin: 3px 0;
            }
          }
          text-align: center;
        }
        .form_tips {
          text-align: center;
          width: 100px;
          background: #eee;
        }
      }
      table,
      td,
      th {
        height: 50px;
        border: 1px solid black;
        display: table-cell;
        vertical-align: middle;
        font-size: 14px;
        input {
          border: none;
        }
      }
      .cell_file {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .l-btn-left {
          display: inline-block;
          padding: 0 15px;
          line-height: 35px;
          height: 35px;
          background: #577eb2;
          color: #fff;
          border-radius: 3px;
          margin-left: 500px;
        }
      }
      .cell_CsJgSm {
        textarea {
          height: 80px;
          border: none;
          outline: none;
        }
        .agreeBox {
          width: 97%;
          text-align: right;
          padding-right: 3%;
          button {
            background: #3c8b3c;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>