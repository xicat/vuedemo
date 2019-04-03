// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入静态资源
require('./style/animate.css');
require('./assets/css/main.css');
require('font-awesome-webpack');


// 导入 css
import 'vue-easytable/libs/themes-base/index.css'

// 导入 table 组件 和分页组件
import {VTable,VPagination} from 'vue-easytable'

// 将组件注册到全局
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)

/* eslint-disable no-new */

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
new Vue({
  el: '#app',
  render: h => h(App),
  router

})
