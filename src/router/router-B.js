//DIY
const diy=r => require.ensure([], () => r(require('src/views/diy/diy.vue')), 'diy')
const addDiy=r => require.ensure([], () => r(require('src/views/diy/addDiy.vue')), 'addDiy')
const editDiy=r => require.ensure([], () => r(require('src/views/diy/editDiy.vue')), 'editDiy')
const diy_comment=r => require.ensure([], () => r(require('src/views/diy/comment.vue')), 'diy_comment')
const diy_fee=r => require.ensure([], () => r(require('src/views/diy/fee.vue')), 'diy_fee')

//热点频道
const schoolMsg=r => require.ensure([], () => r(require('src/views/schoolMsg/schoolMsg.vue')), 'schoolMsg');
const editSchoolMsg=r => require.ensure([], () => r(require('src/views/schoolMsg/editSchoolMsg.vue')), 'schoolMsg');
const addSchoolMsg=r => require.ensure([], () => r(require('src/views/schoolMsg/addSchoolMsg.vue')), 'schoolMsg');
const detailSchoolMsg=r => require.ensure([], () => r(require('src/views/schoolMsg/detailSchoolMsg.vue')), 'schoolMsg');
//节日log
const feastLogo=r => require.ensure([], () => r(require('src/views/feastLogo/feastLogo.vue')), 'feastLogo')
//测试页面页面
const test1 = r => require.ensure([], () => r(require('src/views/test1/test1.vue')), 'test1')
//测试页面页面
const test2 = r => require.ensure([], () => r(require('src/views/test2/test2.vue')), 'test2')
//测试页面页面
const test3 = r => require.ensure([], () => r(require('src/views/test3/test3.vue')), 'test3')
//区划信息
const area = r => require.ensure([], () => r(require('src/views/area/area.vue')), 'area')
//机构信息
const institution = r => require.ensure([], () => r(require('src/views/institution/institution.vue')), 'institution')
//机构信息添加
const institutionAdd = r => require.ensure([], () => r(require('src/views/institution/add/institutionAdd.vue')), 'institutionAdd')
//机构信息添加
const institutionOther = r => require.ensure([], () => r(require('src/views/institution/add/institutionOther.vue')), 'institutionOther')
//短信数量
const noticeSms = r => require.ensure([],() => r(require('src/views/noticeSms/noticeSms.vue')),'noticeSms')
//广告管理
const advert = r => require.ensure([],() => r(require('src/views/advert/advert.vue')),'advert')
//广告新增
const saveAdvert= r => require.ensure([], () => r(require('src/views/advert/saveAdvert.vue')), 'saveAdvert')
//广告编辑
const editAdvert= r => require.ensure([], () => r(require('src/views/advert/editAdvert.vue')), 'editAdvert')
//圈子管理
const circleInfo = r => require.ensure([],() => r(require('src/views/circleInfo/circleInfo.vue')),'circleInfo')
//圈子新增
const saveCircleInfo= r => require.ensure([], () => r(require('src/views/circleInfo/saveCircleInfo.vue')), 'saveCircleInfo')
//圈子编辑
const editCircleInfo= r => require.ensure([], () => r(require('src/views/circleInfo/editCircleInfo.vue')), 'editCircleInfo')
//圈子成员列表
const showCircleUser= r => require.ensure([], () => r(require('src/views/circleInfo/showCircleUser.vue')), 'showCircleUser')
//积分规则管理
const pointsRule = r => require.ensure([],() => r(require('src/views/pointsRule/pointsRule.vue')),'pointsRule')
//积分规则新增
const savePointsRule= r => require.ensure([], () => r(require('src/views/pointsRule/savePointsRule.vue')), 'savePointsRule')
//积分规则编辑
const editPointsRule= r => require.ensure([], () => r(require('src/views/pointsRule/editPointsRule.vue')), 'editPointsRule')
//积分列表
const pointsLog = r => require.ensure([],() => r(require('src/views/pointsLog/pointsLog.vue')),'pointsLog')
//抽奖奖品设置列表
const drawEveryDayPrize = r => require.ensure([],() => r(require('src/views/drawEveryDayPrize/drawEveryDayPrize.vue')),'drawEveryDayPrize')
//新增抽奖奖品
const saveDrawEveryDayPrize = r => require.ensure([],() => r(require('src/views/drawEveryDayPrize/saveDrawEveryDayPrize.vue')),'saveDrawEveryDayPrize')
//编辑抽奖奖品
const editDrawEveryDayPrize = r => require.ensure([],() => r(require('src/views/drawEveryDayPrize/editDrawEveryDayPrize.vue')),'editDrawEveryDayPrize')
//库存信息列表
const stockRecord = r => require.ensure([],() => r(require('src/views/stockRecord/stockRecord.vue')),'stockRecord')
//积分抽奖统计列表
const drawEveryDayResult = r => require.ensure([],() => r(require('src/views/drawEveryDayResult/drawEveryDayResult.vue')),'drawEveryDayResult')
//圈子文章管理
const circleArticle = r => require.ensure([],() => r(require('src/views/circleArticle/circleArticle.vue')),'circleArticle')
//新增圈子文章
const circleArticle_add = r => require.ensure([],() => r(require('src/views/circleArticle/add.vue')),'circleArticle_add')
//编辑圈子文章
const circleArticle_edit = r => require.ensure([],() => r(require('src/views/circleArticle/edit.vue')),'circleArticle_edit')
//推荐圈子文章
const circleArticle_recomend = r => require.ensure([],() => r(require('src/views/circleArticle/recomend.vue')),'circleArticle_recomend')
//圈子文章评论
const circleArticle_comment = r => require.ensure([],() => r(require('src/views/circleArticle/comment.vue')),'circleArticle_comment')
//圈子文章精选
const chorsenArticle=r => require.ensure([],() => r(require('src/views/chorsenArticle/chorsenArticle.vue')),'chorsenArticle')
const chorsenArticle_add=r => require.ensure([],() => r(require('src/views/chorsenArticle/add.vue')),'add')
const chorsenArticle_edit=r => require.ensure([],() => r(require('src/views/chorsenArticle/edit.vue')),'edit')
//举报管理
const circleReport=r => require.ensure([],() => r(require('src/views/circleReport/circleReport.vue')),'circleReport')
//用户积分列表
const selectUserPoints = r => require.ensure([],() => r(require('src/views/selectUserPoints/selectUserPoints.vue')),'selectUserPoints')
//用户积分列表
const selectUserAddress = r => require.ensure([],() => r(require('src/views/selectUserPoints/selectUserAddress.vue')),'selectUserAddress')
//用户积分列表
const pointExchangeDetail = r => require.ensure([],() => r(require('src/views/selectUserPoints/pointExchangeDetail.vue')),'pointExchangeDetail')
//注册用户统计(家长)
const regUserParent= r => require.ensure([], () => r(require('src/views/statistic/regUserParent/regUser.vue')), 'regUserParent')
//注册用户统计(教师)
const regUserTeacher= r => require.ensure([], () => r(require('src/views/statistic/regUserTeacher/regUser.vue')), 'regUserTeacher')
//登录用户统计(家长)
const loginUserParent= r => require.ensure([], () => r(require('src/views/statistic/loginUserParent/regUser.vue')), 'loginUserParent')
//登录用户统计(教师)
const loginUserTeacher= r => require.ensure([], () => r(require('src/views/statistic/loginUserTeacher/regUser.vue')), 'loginUserTeacher')
//通知功能分析
const noticeAnalysis= r => require.ensure([], () => r(require('src/views/statistic/noticeAnalysis/analysis.vue')), 'noticeAnalysis')
//叮嘱功能分析
const chargedAnalysis= r => require.ensure([], () => r(require('src/views/statistic/chargedAnalysis/analysis.vue')), 'chargedAnalysis')
//考勤功能分析
const attdenceAnalysis= r => require.ensure([], () => r(require('src/views/statistic/attdenceAnalysis/analysis.vue')), 'attdenceAnalysis')
//故事汇功能分析
const storyAnalysis= r => require.ensure([], () => r(require('src/views/statistic/storyAnalysis/analysis.vue')), 'storyAnalysis')
//绘本功能分析
const paintAnalysis= r => require.ensure([], () => r(require('src/views/statistic/paintAnalysis/analysis.vue')), 'paintAnalysis')

// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
export const router_B = [
      //diy
		{ path: '/diy', component: diy },
		//新增diy
		{ path: '/diy/addDiy', component: addDiy },
		//编辑diy
		{ path: '/diy/editDiy/:id', component: editDiy },
		//评论信息
		{ path: '/diy/comment/:id', component: diy_comment },
		//打赏信息
		{ path: '/diy/fee/:id', component: diy_fee },
		//节日logo
		{ path: '/feastLogo', component: feastLogo },
		//热点频道
		{ path: '/schoolMsg', component: schoolMsg },
		{ path: '/schoolMsg/editSchoolMsg/:id', component: editSchoolMsg },
		{ path: '/schoolMsg/addSchoolMsg', component: addSchoolMsg },
		{ path: '/schoolMsg/detailSchoolMsg/:id', component: detailSchoolMsg },
		//区划
		{ path: '/area', component: area },
		//机构信息
		{ path: '/institution', component: institution},
		{ path: '/institution/add', component: institutionAdd},
		{ path: '/institution/other', component: institutionOther},
		//短信数量
		{ path: '/noticeSms',component: noticeSms},
		//广告信息
		{ path: '/advert',component: advert},
		//广告信息保存
		{ path: '/advert/saveAdvert', component: saveAdvert },
		//广告信息编辑
		{ path: '/advert/editAdvert/:id', component: editAdvert },
		//圈子信息
		{ path: '/circleInfo',component: circleInfo},
		//圈子信息保存
		{ path: '/circleInfo/saveCircleInfo', component: saveCircleInfo },
		//圈子信息编辑
		{ path: '/circleInfo/editCircleInfo/:id', component: editCircleInfo },
		//圈子成员列表
		{ path: '/circleInfo/showCircleUser/:id', component: showCircleUser },
		//积分规则信息
		{ path: '/pointsRule',component: pointsRule},
		//积分规则信息保存
		{ path: '/pointsRule/savePointsRule', component: savePointsRule },
		//积分规则信息编辑
		{ path: '/pointsRule/editPointsRule/:ruleId', component: editPointsRule },
		//积分信息
		{ path: '/pointsLog',component: pointsLog},
		//抽奖奖品列表
		{ path: '/drawEveryDayPrize',component: drawEveryDayPrize},
		//新增抽奖奖品
		{ path: '/drawEveryDayPrize/saveDrawEveryDayPrize',component: saveDrawEveryDayPrize},
		//编辑抽奖奖
		{ path: '/drawEveryDayPrize/editDrawEveryDayPrize/:id',component: editDrawEveryDayPrize},
		//库存记录列表
		{ path: '/stockRecord',component: stockRecord},
		//积分抽奖统计列表
		{ path: '/drawEveryDayResult',component: drawEveryDayResult},
		//注册用户统计(家长)
		{ path: '/regUserParent',component: regUserParent},
		//圈子文章管理
		{ path: '/circleArticle',component: circleArticle},
		//新增圈子文章
		{ path: '/circleArticle/add',component: circleArticle_add},
		//编辑圈子文章
		{ path: '/circleArticle/edit/:id',component: circleArticle_edit},
		//推荐圈子文章
		{ path: '/circleArticle/recomend/:id',component: circleArticle_recomend},
		//推荐圈子文章
		{ path: '/circleArticle/comment/:id',component: circleArticle_comment},
		//圈子精选
		{ path: '/chorsenArticle',component: chorsenArticle},
		//圈子精选-》新增
		{ path: '/chorsenArticle/add',component: chorsenArticle_add},
		//圈子精选-》编辑
		{ path: '/chorsenArticle/edit/:id',component: chorsenArticle_edit},
		//圈子精选-》编辑
		{ path: '/circleReport',component: circleReport},
		//用户积分信息
		{ path: '/selectUserPoints',component: selectUserPoints},
		//用户收货地址
		{ path: '/selectUserPoints/selectUserAddress/:userId',component: selectUserAddress},
		//积分详情
		{ path: '/selectUserPoints/pointExchangeDetail/:userId',component: pointExchangeDetail},
		//注册用户统计(教师)
		{ path: '/regUserTeacher',component: regUserTeacher},
		//登录用户统计(家长)
		{ path: '/loginUserParent',component: loginUserParent},
		//登录用户统计(教师)
		{ path: '/loginUserTeacher',component: loginUserTeacher},
		//通知功能分析
		{ path: '/noticeAnalysis',component: noticeAnalysis},
		//叮嘱功能分析
		{ path: '/chargedAnalysis',component: chargedAnalysis},
		//考勤功能分析
		{ path: '/attdenceAnalysis',component: attdenceAnalysis},
		//故事汇功能分析
		{ path: '/storyAnalysis',component: storyAnalysis},
		//绘本功能分析
		{ path: '/paintAnalysis',component: paintAnalysis}
];