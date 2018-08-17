//vue 模块
import Vue from 'vue'
//IE promise 问题
import polyfill from 'babel-polyfill'
//vue 路由
import VueRouter from 'vue-router'
//项目路由 配置
import {routes} from './router/index.js'
//组件
import Components from './components/'
//项目Store加载
import store from './stores/index.js'
//指令加载
import drectives from 'src/directives/'
//全局变量
import Constant from 'src/constant/'
//系统设置CSS
import styles from 'src/css/styles.css'
//Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
//表单验证
import VeeValidate from 'vee-validate';
//公用表单验证规则
import commonValidate from 'src/util/validatorUtil.js';
import zh_CN from 'src/util/locale/zh_CN.js';
import VueI18n from 'vue-i18n';
//请求方法
import s_index from 'src/views/index/services/index.js';
//时间格式化方法
import dateFormat from 'src/util/dateUtil.js';
//jQuery
// import $ from 'jquery';
// 引入vue-amap
import VueAMap from 'vue-amap';

//全局注册 2017-5-23 15:29:47
Vue.use(VueAMap);
// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: '4622e9eec7a9627ebf31d34e675416d6',
  // 插件集合
  plugin: ['AMap.Autocomplete','AMap.CitySearch','AMap.Driving','AMap.Geolocation', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

//注册vueRouter 
Vue.use(VueRouter);
//注册ElementUI
Vue.use(ElementUI);
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh_CN',
})
Vue.use(VeeValidate, {
  errorBagName: 'errors', // change if property conflicts.
  delay: 0,
  strict: true,
  i18n,
  i18nRootKey: 'validation',
  dictionary: {
    zh_CN
  }
});
//弹出层使用bootbox,设置语言
bootbox.setLocale("zh_CN");
//动态挂载组件
Object.keys(Components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()) // 首字母大写
  Vue.component(`v${name}`, Components[key])
})
//初始化设置根元素大小
var deviceWidth = document.documentElement.clientWidth; 
if(deviceWidth > 640) deviceWidth = 640; 
document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
window.onload=function(){	
};

let base="";
if (process.env.NODE_ENV=='production') {
  base=process.env.BASE;
}
// 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  mode: 'history',
  base: base,
  routes // （缩写）相当于 routes: routes
})
window.router=router;
//路由钩子 用于授权判断
router.beforeEach((to, from, next) => {
  if(Constant.NoAuthPath.filter((x)=>{return x==to.path}).length!=0){
    next();
    return;
  }
  //判断是否已经查过信息
  if(store.state.user.user.account&&store.state.user.user.account!=""){
    next();
    return;
  }
  // 查询用户基本信息
  s_index.user_initData({},function(data){
      if(data.error==10000){
          let result=data.data;
          //用户信息
          store.dispatch('SET_USER',result.user);
          //设置系统配置项
          store.dispatch('SET_MENU',result.subjects);
          //UE插件中的文件地址
          // UEFileServerUrl=result.setting.fileServerUrl;
          next();
      }else{
          next("/");
      }
  });
})


// 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router,
  store:store
}).$mount('#app');



