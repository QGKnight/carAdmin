
<template>
  <div class="toolPage">
    <h4>郑州市网络预约出租汽车许可受理</h4>
    <div class="tabMian">
      <div class="main-top">
        <div class="top-left">
          <el-input placeholder="请输入车架号" v-model="input3" class="input-with-select">
            <el-button slot="append">确定</el-button>
          </el-input>
        </div>
        <div></div>
      </div>
      <div class="tab-box">
        <table border="1">
          <tbody>
            <tr>
              <td class="form_tipsSmall" rowspan="8">
                <div class="title">
                  <span>经</span>
                  <span>营</span>
                  <span>者</span>
                  <span>填</span>
                  <span>写</span>
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
              <td class="form_tips">燃料类型</td>
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
              <td class="form_tips">变速类型</td>
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
                行车证
                <br />注册日期
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
                排放
                <br />标准
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
              <td class="form_tips">核载人数</td>
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
                轴距
                <br />（mm）
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
                电动车
                <br />续航里程
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
              <td class="form_tips">车辆长度（mm）</td>
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
                车辆宽度
                <br />（mm）
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
              <td class="form_tips">车辆高度（mm）</td>
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
              <td class="form_tips">车主类别</td>
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
              <td class="form_tips">车主名称</td>
              <td class="form_item" colspan="3">
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
            </tr>
            <tr>
              <td class="form_tips">联系电话</td>
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
              <td class="form_tips">证件号码</td>
              <td class="form_item" colspan="3">
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
            </tr>
            <tr>
              <td class="form_tips">车主住址</td>
              <td class="form_item" colspan="6">
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
            </tr>
            <tr>
              <td class="form_tipsSmall" rowspan="4">
                <div class="title">
                  <span>管</span>
                  <span>理</span>
                  <span>部</span>
                  <span>门</span>
                  <span>填</span>
                  <span>写</span>
                </div>
              </td>
              <td class="form_tips" rowspan="3">
                车辆
                初审
                情况
              </td>
              <td class="form_tips">变速类型2</td>
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
              <td class="form_tips" rowspan="3">变速类型6</td>

              <td class="form_tips">发动机号123</td>
              <td class="form_item" colspan="2">
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
              <td class="form_tips">变速类型2</td>
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
              <td class="form_tips">变速类型3</td>
              <td class="form_item" colspan="2">
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
            </tr>
            <tr>
              <td class="form_tips">变速类型2</td>
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
              <td class="form_tips">变速类型4</td>
              <td class="form_item" colspan="2">
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
            </tr>
            <tr>
              <td class="form_tips" colspan="2">燃料类型</td>
              <td class="form_item" colspan="1">
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
              <td class="form_tips" colspan="2">变速类型8</td>
              <td class="form_item" colspan="2">
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
                  <span>材</span>
                  <span>料</span>
                  <span>目</span>
                  <span>录</span>
                </div>
              </td>
              <td colspan="7" style="height:255px;">
                <table id="File" border="0" style="width:100%;height:100%;"></table>
              </td>
            </tr>
            <tr>
              <td class="form_tipsSmall">
                <div class="title">
                  <span>承</span>
                  <span>诺</span>
                </div>
              </td>
              <td colspan="7" style="height:120px;">本人承诺上述所有内容真实、有效，并承担由此产生的法律责任。</td>
            </tr>
            <tr>
              <td class="form_tipsSmall">
                <div class="title">
                  <span>受理</span>
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
                  <el-radio v-model="radio" label="3">自取证件</el-radio>
                  <el-radio v-model="radio" label="4">邮寄证件</el-radio>
                  <el-button class="succ">提交审批结果</el-button>
                  <el-button class="danger">采集申请人签名</el-button>
                </div>
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
  methods: {}
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
          .succ {
            background: #3c8b3c;
            color: #fff;
          }
          .danger {
            background: orange;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>