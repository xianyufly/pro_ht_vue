

/**
项目路由地址
*/

/*
 按模块打包 写法
*/
/*-----------Index组 Begin-----------*/

//首页
const index = r => require.ensure([], () => r(require('src/views/index/index.vue')), 'Index')
//首次加载页面
const defualt = r => require.ensure([], () => r(require('src/views/defualt/defualt.vue')), 'Index')
//首次加载页面
const role = r => require.ensure([], () => r(require('src/views/role/role.vue')), 'role')
//菜单管理
const menu = r => require.ensure([], () => r(require('src/views/menu/menu.vue')), 'menu')
//资讯管理
const resource = r => require.ensure([], () => r(require('src/views/resource/resource.vue')), 'resource')
//资讯编辑
const saveResource= r => require.ensure([], () => r(require('src/views/resource/saveResource.vue')), 'saveResource')
//资讯编辑
const editResource= r => require.ensure([], () => r(require('src/views/resource/editResource.vue')), 'editResource')
//用户管理
const user = r => require.ensure([], () => r(require('src/views/user/user.vue')), 'user')
//App功能管理
const functionCharge = r => require.ensure([], () => r(require('src/views/functionCharge/functionCharge.vue')), 'functionCharge')
//新增App功能
const addFunction = r => require.ensure([], () => r(require('src/views/functionCharge/addFunction.vue')), 'addFunction')
//编辑App功能
const updateFunction = r => require.ensure([], () => r(require('src/views/functionCharge/updateFunction.vue')), 'updateFunction')
//App功能设置
const functionSetting = r => require.ensure([], () => r(require('src/views/functionSetting/functionSetting.vue')), 'functionSetting')
//新增App功能设置
const addFunctionSetting = r => require.ensure([], () => r(require('src/views/functionSetting/addFunctionSetting.vue')), 'addFunctionSetting')
//编辑App功能设置
const updateFunctionSetting = r => require.ensure([], () => r(require('src/views/functionSetting/updateFunctionSetting.vue')), 'updateFunctionSetting')
//学校信息
const compInfo = r => require.ensure([], () => r(require('src/views/compInfo/compInfo.vue')), 'compInfo')
//新增学校
const addComp = r => require.ensure([], () => r(require('src/views/compInfo/addComp.vue')), 'compInfo')
//审核学校
const checkComp = r => require.ensure([], () => r(require('src/views/compInfo/checkComp.vue')), 'compInfo')
//修改学校信息
const updateComp = r => require.ensure([], () => r(require('src/views/compInfo/updateComp.vue')), 'compInfo')
//修改在线反馈
const feedBack = r => require.ensure([], () => r(require('src/views/compInfo/feedBack.vue')), 'compInfo')
//配置全
const compSetManager = r => require.ensure([], () => r(require('src/views/compInfo/compSetManager.vue')), 'compInfo')
//学校详情（已审核通过）
const compDetail = r => require.ensure([], () => r(require('src/views/compInfo/compDetail.vue')), 'compDetail')
//学校详情（未审核或审核不通过）
const checkCompDetail = r => require.ensure([], () => r(require('src/views/compInfo/checkCompDetail.vue')), 'checkCompDetail')
//学校配置
const compSet = r => require.ensure([], () => r(require('src/views/compInfo/compSet.vue')), 'compSet')
//学校体验报名
const compExperience = r => require.ensure([], () => r(require('src/views/compInfo/experience.vue')), 'compExperience')
//订单管理
const orders = r => require.ensure([], () => r(require('src/views/orders/orders.vue')), 'orders')
//订单详情
const ordersDetail = r => require.ensure([], () => r(require('src/views/orders/ordersDetail.vue')), 'ordersDetail')
//打赏商品
const goodsInfo = r => require.ensure([], () => r(require('src/views/goodsInfo/goodsInfo.vue')), 'goodsInfo')
//添加打赏商品
const addGoods = r => require.ensure([], () => r(require('src/views/goodsInfo/addGoods.vue')), 'addGoods')
//修改打赏商品
const updateGoods = r => require.ensure([], () => r(require('src/views/goodsInfo/updateGoods.vue')), 'updateGoods')
//分成角色
const payRoleInfo = r => require.ensure([], () => r(require('src/views/payRoleInfo/payRoleInfo.vue')), 'payRoleInfo')
//添加分成角色
const addPayRole = r => require.ensure([], () => r(require('src/views/payRoleInfo/addPayRole.vue')), 'addPayRole')
//修改分成角色
const updatePayRole = r => require.ensure([], () => r(require('src/views/payRoleInfo/updatePayRole.vue')), 'updatePayRole')
//分成模式
const payDivide = r => require.ensure([], () => r(require('src/views/payDivide/payDivide.vue')), 'payDivide')
//添加分成模式
const addDivide = r => require.ensure([], () => r(require('src/views/payDivide/addDivide.vue')), 'addDivide')
//修改分成角色
const updateDivide = r => require.ensure([], () => r(require('src/views/payDivide/updateDivide.vue')), 'updateDivide')
//资讯类型
const resType= r => require.ensure([], () => r(require('src/views/resType/resType.vue')), 'resourceType')
//绘本类别
const paintCategory=r => require.ensure([], () => r(require('src/views/paintCategory/paintCategory.vue')), 'paintCategory')
//绘本
const paintLibrary=r => require.ensure([], () => r(require('src/views/paintLibrary/paintLibrary.vue')), 'paintLibrary')
//新增绘本
const addPaint=r => require.ensure([], () => r(require('src/views/paintLibrary/addPaint.vue')), 'addPaint')
//编辑绘本
const editPaint=r => require.ensure([], () => r(require('src/views/paintLibrary/editPaint.vue')), 'editPaint')
//用户绘本
const ownerPaintLibrary=r => require.ensure([], () => r(require('src/views/paintLibrary/ownerPaintLibrary.vue')), 'ownerPaintLibrary') 
//绘本专辑
const paintAlbum=r => require.ensure([], () => r(require('src/views/paintAlbum/paintAlbum.vue')), 'paintAlbum')
//新增专辑
const addAlbum=r => require.ensure([], () => r(require('src/views/paintAlbum/addAlbum.vue')), 'addAlbum')
//编辑专辑
const editAlbum=r => require.ensure([], () => r(require('src/views/paintAlbum/editAlbum.vue')), 'editAlbum')
//歌曲库
const songLibrary=r => require.ensure([], () => r(require('src/views/songLibrary/songLibrary.vue')), 'songLibrary')
//用户歌曲库
const ownerSongLibrary=r => require.ensure([], () => r(require('src/views/songLibrary/ownerSongLibrary.vue')), 'ownerSongLibrary')
//新增歌曲
const addSong=r => require.ensure([], () => r(require('src/views/songLibrary/addSong.vue')), 'addSong')
//编辑歌曲
const editSong=r => require.ensure([], () => r(require('src/views/songLibrary/editSong.vue')), 'editSong')

//作业管理
const workManage=r=>require.ensure([], () => r(require('src/views/work/workManage.vue')), 'workManage')
//作业发布
const workNew=r=>require.ensure([], () => r(require('src/views/work/workNew.vue')), 'workNew')
//作业修改
const workEdit=r=>require.ensure([], () => r(require('src/views/work/workEdit.vue')), 'workEdit')
//作业情况
const workDetail=r=>require.ensure([], () => r(require('src/views/work/workDetail.vue')), 'workEdit')
//学生提交详情
const answerList=r=>require.ensure([], () => r(require('src/views/work/answerList.vue')), 'answerList')

// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
export const router_A = [
      { path: '/', component: defualt },
      //角色信息
  	  { path: '/role', component: role },
      //菜单管理
      { path: '/menu', component: menu },
      //资讯信息
      { path: '/resource', component: resource },
      //资讯信息保存
      { path: '/resource/saveResource', component: saveResource },
      //资讯信息编辑
      { path: '/resource/editResource/:id', component: editResource },
      //资讯类型
      { path: '/resType', component: resType },
      //用户管理
      { path: '/user', component: user },
      //App功能管理
      { path: '/functionCharge', component: functionCharge },
      //新增App功能
      { path: '/functionCharge/addFunction', component: addFunction },
      //编辑App功能
      { path: '/functionCharge/updateFunction/:id', component: updateFunction },
      //App功能设置
      { path: '/functionSetting/:compInfoId', component: functionSetting },
      //新增App功能设置
      { path: '/functionSetting/addFunctionSetting/:compInfoId', component: addFunctionSetting },
      //编辑App功能设置
      { path: '/functionSetting/updateFunctionSetting/:id', component: updateFunctionSetting },
      //学校信息
      { path: '/compInfo', component: compInfo },
      //添加学校
      { path: '/compInfo/addComp', component: addComp },
      //审核学校
      { path: '/compInfo/checkComp/:id', component: checkComp },
      //修改学校信息
      { path: '/compInfo/updateComp/:id', component: updateComp },
      //修改学校信息
      { path: '/compInfo/feedBack/:id', component: feedBack },
      //学校配置全
      { path: '/compInfo/compSetManager/:id', component: compSetManager },
      //学校详情（已审核通过）
      { path: '/compInfo/compDetail/:id', component: compDetail },
      //学校详情（未审核或审核不通过）
      { path: '/compInfo/checkCompDetail/:id', component: checkCompDetail },
      //学校配置
      { path: '/compInfo/compSet/:id', component: compSet },
      //学校体验报名
      { path: '/compInfo/compExperience/:compInfoId', component: compExperience },
      //学校APP功能设置
      { path: '/compInfo/functionSetting/:compInfoId', component: functionSetting },
      //新增App功能设置
      { path: '/compInfo/functionSetting/addFunctionSetting/:compInfoId', component: addFunctionSetting },
      //编辑App功能设置
      { path: '/compInfo/functionSetting/updateFunctionSetting/:id', component: updateFunctionSetting },
      //订单管理
      { path: '/orders', component: orders },
      //订单详情
      { path: '/orders/ordersDetail/:id', component: ordersDetail },
      //打赏商品
      { path: '/goodsInfo', component: goodsInfo },
      //添加打赏商品
      { path: '/goodsInfo/addGoods', component: addGoods },
      //修改打赏商品
      { path: '/goodsInfo/updateGoods/:id', component: updateGoods },
      //分成角色
      { path: '/payRoleInfo', component: payRoleInfo },
      //添加分成角色
      { path: '/payRoleInfo/addPayRole', component: addPayRole },
      //修改分成角色
      { path: '/payRoleInfo/updatePayRole/:id', component: updatePayRole },
      //分成模式
      { path: '/payDivide', component: payDivide },
      //添加分成模式
      { path: '/payDivide/addDivide', component: addDivide },
      //修改分成模式
      { path: '/payDivide/updateDivide/:id', component: updateDivide },
      //绘本分类 
      { path: '/paintCategory', component: paintCategory },
      //绘本
      { path: '/paintLibrary', component: paintLibrary },
      //新增绘本
      { path: '/paintLibrary/addPaint', component: addPaint },
      //编辑绘本
      { path: '/paintLibrary/editPaint/:id', component: editPaint },
      //用户绘本
      { path: '/ownerPaintLibrary', component: ownerPaintLibrary },
      //绘本专辑 
      { path: '/paintAlbum', component: paintAlbum },
      //新增专辑 
      { path: '/paintAlbum/addAlbum', component: addAlbum },
      //编辑专辑 
      { path: '/paintAlbum/editAlbum/:id', component: editAlbum },
      //歌曲库
      { path: '/songLibrary', component: songLibrary },
      //用户歌曲库
      { path: '/ownerSongLibrary', component: ownerSongLibrary },
      //新增歌曲
      { path: '/songLibrary/addSong', component: addSong },
      //编辑歌曲
      { path: '/songLibrary/editSong/:id', component: editSong },


      //作业管理
      { path: '/work', component: workManage },
      //作业新增
      { path: '/work/workNew', component: workNew },
      //作业编辑
      { path: '/work/workEdit/:id', component: workEdit },
      //作业情况
      { path: '/work/workDetail/:id', component: workDetail },
       //作业情况
      { path: '/work/answerList/:studentId/:workId', component: answerList },

    
];