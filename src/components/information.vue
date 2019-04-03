<template>
  <div class="index" v-loading.fullscreen.lock="fullscreenLoading" element-loading-text="拼命加载中...">
    <input type="file" @change="importFile(this)" id="imFile" style="display: none"
           accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
    <a id="downlink"></a>
    <el-button class="button" @click="uploadFile()">导入</el-button>
    <el-button class="button" @click="downloadFile(excelData)">导出</el-button>
    <!--错误信息提示-->
    <el-dialog title="提示" v-model="errorDialog" size="tiny">
      <span>{{errorMsg}}</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="errorDialog=false">确认</el-button>
        </span>
    </el-dialog>
    <!--展示导入信息-->
    <el-table :data="excelData" tooltip-effect="dark">
      <el-table-column label="名称" prop="name" show-overflow-tooltip></el-table-column>
      <el-table-column label="分量" prop="size" show-overflow-tooltip></el-table-column>
      <el-table-column label="口味" prop="taste" show-overflow-tooltip></el-table-column>
      <el-table-column label="单价(元)" prop="price" show-overflow-tooltip></el-table-column>
      <el-table-column label="剩余(份)" prop="remain" show-overflow-tooltip></el-table-column>
    </el-table>
  </div>
</template>

<script>

   import xlsxjs from '@/mixins/excel';
  export default {
    name: 'Index',
    mixins: [xlsxjs],
    data () {
      return {
        fullscreenLoading: false, // 加载中
        imFile: '', // 导入文件el
        outFile: '',  // 导出文件el
        errorDialog: false, // 错误信息弹窗
        errorMsg: '', // 错误信息内容
        
        fileName:'超级菜单',
        columns:[
        	{field:'name',title:'名称'},
        	{field:'size',title:'分量'},
        	{field:'taste',title:'口味'},
        	{field:'price',title:'单价(元)'},
        	{field:'remain',title:'剩余(份)'}
        ],
        excelData: [  // 测试数据
          {
            name: '红烧鱼', size: '大', taste: '微辣', price: '40', remain: '100'
          },
          {
            name: '麻辣小龙虾', size: '大', taste: '麻辣', price: '138', remain: '200'
          },
          {
            name: '清蒸小龙虾', size: '大', taste: '清淡', price: '138', remain: '200'
          },
          {
            name: '香辣小龙虾', size: '大', taste: '特辣', price: '138', remain: '200'
          },
          {
            name: '十三香小龙虾', size: '大', taste: '中辣', price: '138', remain: '108'
          },
          {
            name: '蒜蓉小龙虾', size: '大', taste: '中辣', price: '138', remain: '100'
          },
          {
            name: '凉拌牛肉', size: '中', taste: '中辣', price: '48', remain: '60'
          },
          {
            name: '虾仁寿司', size: '大', taste: '清淡', price: '29', remain: '无限'
          },
          {
            name: '海苔寿司', size: '大', taste: '微辣', price: '26', remain: '无限'
          },
          {
            name: '金针菇寿司', size: '大', taste: '清淡', price: '23', remain: '无限'
          },
          {
            name: '泡菜寿司', size: '大', taste: '微辣', price: '24', remain: '无限'
          },
          {
            name: '鳗鱼寿司', size: '大', taste: '清淡', price: '28', remain: '无限'
          },
          {
            name: '肉松寿司', size: '大', taste: '清淡', price: '22', remain: '无限'
          },
          {
            name: '三文鱼寿司', size: '大', taste: '清淡', price: '30', remain: '无限'
          },
          {
            name: '蛋黄寿司', size: '大', taste: '清淡', price: '20', remain: '无限'
          }
        ]
      }
    }
  }  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-table th>.cell {
    text-align: center;
  }
  .button {
    margin-bottom: 20px;
  }
</style>
