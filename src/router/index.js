// import {router_A} from './router-A.js'
// import {router_B} from './router-B.js'
// import {router_C} from './router-C.js'
// import {router_D} from './router-D.js'
// import {router_E} from './router-E.js'
/*-----------index组 Begin-----------*/
const index = r => require.ensure([], () => r(require('src/views/index/index.vue')), 'Index')
/*-----------index组 End-----------*/

/*-----------login组 Begin-----------*/
const login = r => require.ensure([], () => r(require('src/views/login/login.vue')), 'login')
/*-----------login组 End-----------*/

/*-----------menu Begin-----------*/
const menu = r => require.ensure([], () => r(require('src/views/menu/menu.vue')), 'menu')
/*-----------menu End-----------*/

/*-----------标签管理-----------*/
const tags = r => require.ensure([], () => r(require('src/views/tags/tags.vue')), 'tags')
/*-----------标签管理-----------*/

/*-----------模板管理-----------*/
const templateMng = r => require.ensure([], () => r(require('src/views/templateMng/templateMng.vue')), 'templateMng')
/*-----------模板管理-----------*/

let children=[
//菜单管理
{ path: '/menu', component: menu },
//标签管理
{ path: '/tags', component: tags },
//标签管理
{ path: '/templateMng', component: templateMng },
// ...router_A
// ,...router_B
// ,...router_C
// ,...router_D
// ,...router_E
];
export const routes = [
  //首页
  { path: '/index', component: index,
     children:children
  },
  //登陆页面
  { path: '/', component: login }
];
