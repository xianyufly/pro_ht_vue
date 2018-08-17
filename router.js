

/**
项目路由地址
*/

/*
 按模块打包 写法
*/
/*-----------Index组 Begin-----------*/

//首页
const index = r => require.ensure([], () => r(require('./views/index/index.vue')), 'Index')
//首次加载页面
const defualt = r => require.ensure([], () => r(require('./views/defualt/defualt.vue')), 'Index')
//首次加载页面
const role = r => require.ensure([], () => r(require('./views/role/role.vue')), 'role')
//菜单管理
const menu = r => require.ensure([], () => r(require('./views/menu/menu.vue')), 'menu')
//资讯管理
const resource = r => require.ensure([], () => r(require('./views/resource/resource.vue')), 'resource')
//资讯编辑
const saveResource= r => require.ensure([], () => r(require('./views/resource/saveResource.vue')), 'saveResource')
//资讯编辑
const editResource= r => require.ensure([], () => r(require('./views/resource/editResource.vue')), 'editResource')
//用户管理
const user = r => require.ensure([], () => r(require('./views/user/user.vue')), 'user')
//App功能管理
const functionCharge = r => require.ensure([], () => r(require('./views/functionCharge/functionCharge.vue')), 'functionCharge')
//新增App功能
const addFunction = r => require.ensure([], () => r(require('./views/functionCharge/addFunction.vue')), 'addFunction')
//编辑App功能
const updateFunction = r => require.ensure([], () => r(require('./views/functionCharge/updateFunction.vue')), 'updateFunction')
//App功能设置
const functionSetting = r => require.ensure([], () => r(require('./views/functionSetting/functionSetting.vue')), 'functionSetting')
//新增App功能设置
const addFunctionSetting = r => require.ensure([], () => r(require('./views/functionSetting/addFunctionSetting.vue')), 'addFunctionSetting')
//编辑App功能设置
const updateFunctionSetting = r => require.ensure([], () => r(require('./views/functionSetting/updateFunctionSetting.vue')), 'updateFunctionSetting')
//学校信息
const compInfo = r => require.ensure([], () => r(require('./views/compInfo/compInfo.vue')), 'compInfo')
//新增学校
const addComp = r => require.ensure([], () => r(require('./views/compInfo/addComp.vue')), 'addComp')
//审核学校
const checkComp = r => require.ensure([], () => r(require('./views/compInfo/checkComp.vue')), 'checkComp')
//修改学校信息
const updateComp = r => require.ensure([], () => r(require('./views/compInfo/updateComp.vue')), 'updateComp')
//学校详情（已审核通过）
const compDetail = r => require.ensure([], () => r(require('./views/compInfo/compDetail.vue')), 'compDetail')
//学校详情（未审核或审核不通过）
const checkCompDetail = r => require.ensure([], () => r(require('./views/compInfo/checkCompDetail.vue')), 'checkCompDetail')
//学校配置
const compSet = r => require.ensure([], () => r(require('./views/compInfo/compSet.vue')), 'compSet')
//学校体验报名
const compExperience = r => require.ensure([], () => r(require('./views/compInfo/experience.vue')), 'compExperience')
//订单管理
const orders = r => require.ensure([], () => r(require('./views/orders/orders.vue')), 'orders')
//订单详情
const ordersDetail = r => require.ensure([], () => r(require('./views/orders/ordersDetail.vue')), 'ordersDetail')
//打赏商品
const goodsInfo = r => require.ensure([], () => r(require('./views/goodsInfo/goodsInfo.vue')), 'goodsInfo')
//添加打赏商品
const addGoods = r => require.ensure([], () => r(require('./views/goodsInfo/addGoods.vue')), 'addGoods')
//修改打赏商品
const updateGoods = r => require.ensure([], () => r(require('./views/goodsInfo/updateGoods.vue')), 'updateGoods')
//分成角色
const payRoleInfo = r => require.ensure([], () => r(require('./views/payRoleInfo/payRoleInfo.vue')), 'payRoleInfo')
//添加分成角色
const addPayRole = r => require.ensure([], () => r(require('./views/payRoleInfo/addPayRole.vue')), 'addPayRole')
//修改分成角色
const updatePayRole = r => require.ensure([], () => r(require('./views/payRoleInfo/updatePayRole.vue')), 'updatePayRole')
//分成模式
const payDivide = r => require.ensure([], () => r(require('./views/payDivide/payDivide.vue')), 'payDivide')
//添加分成模式
const addDivide = r => require.ensure([], () => r(require('./views/payDivide/addDivide.vue')), 'addDivide')
//修改分成角色
const updateDivide = r => require.ensure([], () => r(require('./views/payDivide/updateDivide.vue')), 'updateDivide')
//资讯类型
const resType= r => require.ensure([], () => r(require('./views/resType/resType.vue')), 'resourceType')
//绘本类别
const paintCategory=r => require.ensure([], () => r(require('./views/paintCategory/paintCategory.vue')), 'paintCategory')
//绘本
const paintLibrary=r => require.ensure([], () => r(require('./views/paintLibrary/paintLibrary.vue')), 'paintLibrary')
//新增绘本
const addPaint=r => require.ensure([], () => r(require('./views/paintLibrary/addPaint.vue')), 'addPaint')
//编辑绘本
const editPaint=r => require.ensure([], () => r(require('./views/paintLibrary/editPaint.vue')), 'editPaint')
//用户绘本
const ownerPaintLibrary=r => require.ensure([], () => r(require('./views/paintLibrary/ownerPaintLibrary.vue')), 'ownerPaintLibrary') 
//绘本专辑
const paintAlbum=r => require.ensure([], () => r(require('./views/paintAlbum/paintAlbum.vue')), 'paintAlbum')
//新增专辑
const addAlbum=r => require.ensure([], () => r(require('./views/paintAlbum/addAlbum.vue')), 'addAlbum')
//编辑专辑
const editAlbum=r => require.ensure([], () => r(require('./views/paintAlbum/editAlbum.vue')), 'editAlbum')
//歌曲库
const songLibrary=r => require.ensure([], () => r(require('./views/songLibrary/songLibrary.vue')), 'songLibrary')
//用户歌曲库
const ownerSongLibrary=r => require.ensure([], () => r(require('./views/songLibrary/ownerSongLibrary.vue')), 'ownerSongLibrary')
//新增歌曲
const addSong=r => require.ensure([], () => r(require('./views/songLibrary/addSong.vue')), 'addSong')
//编辑歌曲
const editSong=r => require.ensure([], () => r(require('./views/songLibrary/editSong.vue')), 'editSong')
//DIY
const diy=r => require.ensure([], () => r(require('./views/diy/diy.vue')), 'diy')
const addDiy=r => require.ensure([], () => r(require('./views/diy/addDiy.vue')), 'addDiy')
const editDiy=r => require.ensure([], () => r(require('./views/diy/editDiy.vue')), 'editDiy')
const diy_comment=r => require.ensure([], () => r(require('./views/diy/comment.vue')), 'diy_comment')
const diy_fee=r => require.ensure([], () => r(require('./views/diy/fee.vue')), 'diy_fee')

//热点频道
const schoolMsg=r => require.ensure([], () => r(require('./views/schoolMsg/schoolMsg.vue')), 'schoolMsg');
const editSchoolMsg=r => require.ensure([], () => r(require('./views/schoolMsg/editSchoolMsg.vue')), 'editSchoolMsg');
const addSchoolMsg=r => require.ensure([], () => r(require('./views/schoolMsg/addSchoolMsg.vue')), 'addSchoolMsg');
//节日log
const feastLogo=r => require.ensure([], () => r(require('./views/feastLogo/feastLogo.vue')), 'feastLogo')

//测试页面页面
const test1 = r => require.ensure([], () => r(require('./views/test1/test1.vue')), 'test1')
//测试页面页面
const test2 = r => require.ensure([], () => r(require('./views/test2/test2.vue')), 'test2')
//测试页面页面
const test3 = r => require.ensure([], () => r(require('./views/test3/test3.vue')), 'test3')
//区划信息
const area = r => require.ensure([], () => r(require('./views/area/area.vue')), 'area')
//机构信息
const institution = r => require.ensure([], () => r(require('./views/institution/institution.vue')), 'institution')
//机构信息添加
const institutionAdd = r => require.ensure([], () => r(require('./views/institution/add/institutionAdd.vue')), 'institutionAdd')
//机构信息添加
const institutionOther = r => require.ensure([], () => r(require('./views/institution/add/institutionOther.vue')), 'institutionOther')
//广告管理
const advert = r => require.ensure([],() => r(require('./views/advert/advert.vue')),'advert')
//广告新增
const saveAdvert= r => require.ensure([], () => r(require('./views/advert/saveAdvert.vue')), 'saveAdvert')
//广告编辑
const editAdvert= r => require.ensure([], () => r(require('./views/advert/editAdvert.vue')), 'editAdvert')
//圈子管理
const circleInfo = r => require.ensure([],() => r(require('./views/circleInfo/circleInfo.vue')),'circleInfo')
//圈子新增
const saveCircleInfo= r => require.ensure([], () => r(require('./views/circleInfo/saveCircleInfo.vue')), 'saveCircleInfo')
//圈子编辑
const editCircleInfo= r => require.ensure([], () => r(require('./views/circleInfo/editCircleInfo.vue')), 'editCircleInfo')
//圈子成员列表
const showCircleUser= r => require.ensure([], () => r(require('./views/circleInfo/showCircleUser.vue')), 'showCircleUser')
//积分规则管理
const pointsRule = r => require.ensure([],() => r(require('./views/pointsRule/pointsRule.vue')),'pointsRule')
//积分规则新增
const savePointsRule= r => require.ensure([], () => r(require('./views/pointsRule/savePointsRule.vue')), 'savePointsRule')
//积分规则编辑
const editPointsRule= r => require.ensure([], () => r(require('./views/pointsRule/editPointsRule.vue')), 'editPointsRule')
//积分列表
const pointsLog = r => require.ensure([],() => r(require('./views/pointsLog/pointsLog.vue')),'pointsLog')
//抽奖奖品设置列表
const drawEveryDayPrize = r => require.ensure([],() => r(require('./views/drawEveryDayPrize/drawEveryDayPrize.vue')),'drawEveryDayPrize')
//新增抽奖奖品
const saveDrawEveryDayPrize = r => require.ensure([],() => r(require('./views/drawEveryDayPrize/saveDrawEveryDayPrize.vue')),'saveDrawEveryDayPrize')
//编辑抽奖奖品
const editDrawEveryDayPrize = r => require.ensure([],() => r(require('./views/drawEveryDayPrize/editDrawEveryDayPrize.vue')),'editDrawEveryDayPrize')
//库存信息列表
const stockRecord = r => require.ensure([],() => r(require('./views/stockRecord/stockRecord.vue')),'stockRecord')
//积分抽奖统计列表
const drawEveryDayResult = r => require.ensure([],() => r(require('./views/drawEveryDayResult/drawEveryDayResult.vue')),'drawEveryDayResult')
//圈子文章管理
const circleArticle = r => require.ensure([],() => r(require('./views/circleArticle/circleArticle.vue')),'circleArticle')
//新增圈子文章
const circleArticle_add = r => require.ensure([],() => r(require('./views/circleArticle/add.vue')),'circleArticle_add')
//编辑圈子文章
const circleArticle_edit = r => require.ensure([],() => r(require('./views/circleArticle/edit.vue')),'circleArticle_edit')
//推荐圈子文章
const circleArticle_recomend = r => require.ensure([],() => r(require('./views/circleArticle/recomend.vue')),'circleArticle_recomend')
//圈子文章评论
const circleArticle_comment = r => require.ensure([],() => r(require('./views/circleArticle/comment.vue')),'circleArticle_comment')
//圈子文章精选
const chorsenArticle=r => require.ensure([],() => r(require('./views/chorsenArticle/chorsenArticle.vue')),'chorsenArticle')
const chorsenArticle_add=r => require.ensure([],() => r(require('./views/chorsenArticle/add.vue')),'add')
const chorsenArticle_edit=r => require.ensure([],() => r(require('./views/chorsenArticle/edit.vue')),'edit')
//举报管理
const circleReport=r => require.ensure([],() => r(require('./views/circleReport/circleReport.vue')),'circleReport')
//用户积分列表
const selectUserPoints = r => require.ensure([],() => r(require('./views/selectUserPoints/selectUserPoints.vue')),'selectUserPoints')
//用户积分列表
const selectUserAddress = r => require.ensure([],() => r(require('./views/selectUserPoints/selectUserAddress.vue')),'selectUserAddress')
//用户积分列表
const pointExchangeDetail = r => require.ensure([],() => r(require('./views/selectUserPoints/pointExchangeDetail.vue')),'pointExchangeDetail')
//注册用户统计(家长)
const regUserParent= r => require.ensure([], () => r(require('./views/statistic/regUserParent/regUser.vue')), 'regUserParent')
//注册用户统计(教师)
const regUserTeacher= r => require.ensure([], () => r(require('./views/statistic/regUserTeacher/regUser.vue')), 'regUserTeacher')
//登录用户统计(家长)
const loginUserParent= r => require.ensure([], () => r(require('./views/statistic/loginUserParent/regUser.vue')), 'loginUserParent')
//登录用户统计(教师)
const loginUserTeacher= r => require.ensure([], () => r(require('./views/statistic/loginUserTeacher/regUser.vue')), 'loginUserTeacher')
//通知功能分析
const noticeAnalysis= r => require.ensure([], () => r(require('./views/statistic/noticeAnalysis/analysis.vue')), 'noticeAnalysis')
//叮嘱功能分析
const chargedAnalysis= r => require.ensure([], () => r(require('./views/statistic/chargedAnalysis/analysis.vue')), 'chargedAnalysis')
//考勤功能分析
const attdenceAnalysis= r => require.ensure([], () => r(require('./views/statistic/attdenceAnalysis/analysis.vue')), 'attdenceAnalysis')
//故事汇功能分析
const storyAnalysis= r => require.ensure([], () => r(require('./views/statistic/storyAnalysis/analysis.vue')), 'storyAnalysis')
//绘本功能分析
const paintAnalysis= r => require.ensure([], () => r(require('./views/statistic/paintAnalysis/analysis.vue')), 'paintAnalysis')
//经营数据统计分析 周
const operateAnalysisW= r => require.ensure([], () => r(require('./views/statistic/operateAnalysisWeek/App.vue')), 'operateAnalysisW')
//经营数据统计分析 月
const operateAnalysisM= r => require.ensure([], () => r(require('./views/statistic/operateAnalysisMonth/App.vue')), 'operateAnalysisM')
//直播信息列表
const liveInfo= r => require.ensure([], () => r(require('./views/live/live.vue')), 'liveInfo')
//直播信息 添加
const addLive= r => require.ensure([], () => r(require('./views/live/addLive.vue')), 'addLive')
//直播信息 修改
const editLive= r => require.ensure([], () => r(require('./views/live/editLive.vue')), 'editLive')

//点播信信息 列表
const vodInfo= r => require.ensure([], () => r(require('./views/vodInfo/vodInfo.vue')), 'vodInfo')
//点播信信息 新增
const vodInfo_add= r => require.ensure([], () => r(require('./views/vodInfo/add.vue')), 'vodInfo_add')
//点播信信息 编辑
const vodInfo_edit= r => require.ensure([], () => r(require('./views/vodInfo/edit.vue')), 'vodInfo_edit')
//点播信息 详情
const vodInfo_detail= r => require.ensure([], () => r(require('./views/vodInfo/detail.vue')), 'vodInfo_detail')
//点播信息 分享记录
const vodInfo_shareRecord= r => require.ensure([], () => r(require('./views/vodInfo/shareRecord.vue')), 'vodInfo_shareRecord')
//提现设置
const withdrawSet=r =>require.ensure([],()=>r(require('./views/withdrawSet/withdrawSet.vue')),'withdrawSet')
//积分抽奖设置
const pointsDrawSetup=r =>require.ensure([],()=>r(require('./views/pointsDrawSetup/pointsDrawSetup.vue')),'pointsDrawSetup')
//积分抽奖查询
const pointsDrawSearch=r =>require.ensure([],()=>r(require('./views/pointsDrawSearch/pointsDrawSearch.vue')),'pointsDrawSearch')
//积分商品管理
const pointsGoodsManage=r =>require.ensure([],()=>r(require('./views/pointsGoodsManage/pointsGoodsManage.vue')),'pointsGoodsManage')
//积分商品新增
const newPointsGoods=r =>require.ensure([],()=>r(require('./views/pointsGoodsManage/newPointsGoods.vue')),'newPointsGoods')
//积分商品编辑
const editPointsGoods=r =>require.ensure([],()=>r(require('./views/pointsGoodsManage/editPointsGoods.vue')),'editPointsGoods')
//积分商品兑换详情
const pointsGoodsExDetail = r => require.ensure([],() => r(require('./views/pointsGoodsManage/pointsGoodsExDetail.vue')),'pointsGoodsExDetail')
//积分商品详情
const pointsGoodsDetail = r => require.ensure([],() => r(require('./views/pointsGoodsManage/pointsGoodsDetail.vue')),'pointsGoodsDetail')
//班级秀
const classShow = r => require.ensure([],() => r(require('./views/classShow/classShow.vue')),'classShow')
//新增班级秀
const saveClassShow = r => require.ensure([],() => r(require('./views/classShow/saveClassShow.vue')),'saveClassShow')
//修改班级秀
const editClassShow = r => require.ensure([],() => r(require('./views/classShow/editClassShow.vue')),'editClassShow')
//获取班级秀详情
const getClassShow = r => require.ensure([],() => r(require('./views/classShow/getClassShow.vue')),'getClassShow')
//精彩瞬间
const wonderful = r => require.ensure([],() => r(require('./views/wonderful/wonderful.vue')),'wonderful')
//新增精彩瞬间
const saveWonderful = r => require.ensure([],() => r(require('./views/wonderful/saveWonderful.vue')),'saveWonderful')
//精彩瞬间详情
const wonderfulDetail = r => require.ensure([],() => r(require('./views/wonderful/wonderfulDetail.vue')),'wonderfulDetail')
//编辑精彩瞬间
const editWonderful = r => require.ensure([],() => r(require('./views/wonderful/editWonderful.vue')),'editWonderful')
//精彩瞬间打赏信息
const rewardInfoList = r => require.ensure([],() => r(require('./views/wonderful/rewardInfoList.vue')),'rewardInfoList')
//学生出勤统计
const totalCount = r => require.ensure([],() => r(require('./views/callRollTotal/totalCount.vue')),'totalCount')
//学生详细信息
const totalDatils = r => require.ensure([],() => r(require('./views/callRollTotal/totalDatils.vue')),'totalDatils')
//出勤列表
const attenDatils = r => require.ensure([],() => r(require('./views/callRollTotal/attenDatils.vue')),'attenDatils')
//未出勤列表
const noAttenDatils = r => require.ensure([],() => r(require('./views/callRollTotal/noAttenDatils.vue')),'noAttenDatils')
//学生出勤统计列表
const totalStudentCount = r => require.ensure([],() => r(require('./views/callRollTotal/totalStudentCount.vue')),'totalStudentCount')
//学生考勤累计
const totalCall = r => require.ensure([],() => r(require('./views/callRollTotal/totalCall.vue')),'totalCall')

//学生考勤查询
const stuAttendance = r => require.ensure([],() => r(require('./views/attendance/stuAttendance.vue')),'stuAttendance')
//教师考勤查询
const teaAttendance = r => require.ensure([],() => r(require('./views/attendance/teaAttendance.vue')),'teaAttendance')
//教师考勤
const attendanceOfTeacher = r => require.ensure([],() => r(require('./views/attendance/attendanceOfTeacher.vue')),'attendanceOfTeacher')
//考勤设置
const attendList = r => require.ensure([],() => r(require('./views/check/attendList.vue')),'attendList')
//添加教师考勤规则
const addTeaAttend = r => require.ensure([],() => r(require('./views/check/addTeaAttend.vue')),'addTeaAttend')
//添加学生考勤规则
const addStuAttend = r => require.ensure([],() => r(require('./views/check/addStuAttend.vue')),'addStuAttend')
//修改教师考勤规则
const editTeaAttend = r => require.ensure([],() => r(require('./views/check/editTeaAttend.vue')),'editTeaAttend')
//修改学生考勤规则
const editStuAttend = r => require.ensure([],() => r(require('./views/check/editStuAttend.vue')),'editStuAttend')
//设置教师
const teaAttendSet = r => require.ensure([],() => r(require('./views/check/teaAttendSet.vue')),'teaAttendSet')
//节假日设置
const holidaySet=r =>require.ensure([],()=>(require('./views/holidaySet/holidaySet.vue')),'holidaySet')
//校车管理
const schoolCarM=r =>require.ensure([],()=>r(require('./views/schoolCarM/schoolCarM.vue')),'schoolCarM')
const schoolCarM_add=r =>require.ensure([],()=>r(require('./views/schoolCarM/add.vue')),'schoolCarM_add')
const schoolCarM_edit=r =>require.ensure([],()=>r(require('./views/schoolCarM/edit.vue')),'schoolCarM_edit')
//校车行驶路线
const carDrive=r =>require.ensure([],()=>r(require('./views/carDrive/carDrive.vue')),'carDrive')
const carDrive_stuInfo=r =>require.ensure([],()=>r(require('./views/carDrive/stuInfo.vue')),'carDrive_stuInfo')
//学校通知
const schoolNotice=r =>require.ensure([],()=>r(require('./views/schoolNotice/schoolNotice.vue')),'schoolNotice')
const schoolNotice_add=r =>require.ensure([],()=>r(require('./views/schoolNotice/add.vue')),'schoolNotice_add')
const schoolNotice_edit=r =>require.ensure([],()=>r(require('./views/schoolNotice/edit.vue')),'schoolNotice_edit')
const schoolNotice_detail=r =>require.ensure([],()=>r(require('./views/schoolNotice/detail.vue')),'schoolNotice_detail')

//家园互动 点评
const comments = r => require.ensure([],() => r(require('./views/comments/commentsManage.vue')),'commentsManage')
//家园互动 点评 新增
const commentsNew = r => require.ensure([],() => r(require('./views/comments/commentsNew.vue')),'commentsNew')
//家园互动 点评 修改
const commentsEdit = r => require.ensure([],() => r(require('./views/comments/commentsEdit.vue')),'commentsEdit')
//家园互动 点评 详情
const commentsDetail = r => require.ensure([],() => r(require('./views/comments/commentsDetail.vue')),'commentsDetail')
//系统公告
const notifications=r =>require.ensure([],()=>r(require('./views/notifications/notifications.vue')),'notifications')
const notifications_add=r =>require.ensure([],()=>r(require('./views/notifications/add.vue')),'notifications')
const notifications_edit=r =>require.ensure([],()=>r(require('./views/notifications/edit.vue')),'notifications')
//评语模板
const commentsTemplate = r => require.ensure([],() => r(require('./views/commentsTemplate/commentTmplManage.vue')),'commentsTemplate')
const commentsTemplateNew = r => require.ensure([],() => r(require('./views/commentsTemplate/commentTmplNew.vue')),'commentsTemplateNew')
const commentsTemplateDetail = r => require.ensure([],() => r(require('./views/commentsTemplate/commentTmplDetail.vue')),'commentsTemplateDetail')
const commentsTemplateEdit = r => require.ensure([],() => r(require('./views/commentsTemplate/commentTmplEdit.vue')),'commentsTemplateEdit')

//徽章模板
const badgeTemplate=r =>require.ensure([],()=>(require('./views/badgeTemplate/badgeTemplateManage.vue')),'badgeTemplate')
const badgeTemplateNew=r =>require.ensure([],()=>(require('./views/badgeTemplate/badgeTemplateNew.vue')),'badgeTemplateNew')
const badgeTemplateDetail=r =>require.ensure([],()=>(require('./views/badgeTemplate/badgeTemplateDetail.vue')),'badgeTemplateDetail')
const badgeTemplateEdit=r =>require.ensure([],()=>(require('./views/badgeTemplate/badgeTemplateEdit.vue')),'badgeTemplateEdit')

//年级信息
const gradeInfo=r =>require.ensure([],()=>(require('./views/grade/gradeInfoManage.vue')),'gradeInfo')
const gradeInfoNew=r =>require.ensure([],()=>(require('./views/grade/gradeInfoNew.vue')),'gradeInfoNew')
const gradeInfoEdit=r =>require.ensure([],()=>(require('./views/grade/gradeInfoEdit.vue')),'gradeInfoEdit')
const gradeInfoDetail=r =>require.ensure([],()=>(require('./views/grade/gradeInfoDetail.vue')),'gradeInfoDetail')



//班级信息
const classes=r =>require.ensure([],()=>(require('./views/classes/classInfoManage.vue')),'classes')
const classInfoNew=r =>require.ensure([],()=>(require('./views/classes/classInfoNew.vue')),'classInfoNew')
const classInfoEdit=r =>require.ensure([],()=>(require('./views/classes/classInfoEdit.vue')),'classInfoEdit')
const classInfoDetail=r =>require.ensure([],()=>(require('./views/classes/classInfoDetail.vue')),'classInfoDetail')


//公众号绑定信息
const wxBindInfo=r =>require.ensure([],()=>(require('./views/wxBindInfo/wxBindInfo.vue')),'wxBindInfo')
const wxBindInfo_detail=r =>require.ensure([],()=>(require('./views/wxBindInfo/detail.vue')),'wxBindInfo')


//学生信息
const student=r =>require.ensure([],()=>(require('./views/student/studentManage.vue')),'student')
const studentNew=r =>require.ensure([],()=>(require('./views/student/studentNew.vue')),'studentNew')
const studentEdit=r =>require.ensure([],()=>(require('./views/student/studentEdit.vue')),'studentEdit')
const parentInfo=r =>require.ensure([],()=>(require('./views/student/parentInfo.vue')),'parentInfo') 
const parentNew=r =>require.ensure([],()=>(require('./views/student/parentNew.vue')),'parentNew') 
const parentEdit=r =>require.ensure([],()=>(require('./views/student/parentEdit.vue')),'parentEdit') 
const parentDetail=r =>require.ensure([],()=>(require('./views/student/parentDetail.vue')),'parentDetail') 
const studentDetail=r =>require.ensure([],()=>(require('./views/student/studentDetail.vue')),'studentDetail') 
const cardManage=r =>require.ensure([],()=>(require('./views/student/cardManage.vue')),'cardManage') 
const cardNew=r =>require.ensure([],()=>(require('./views/student/cardNew.vue')),'cardNew') 
const cardEdit=r =>require.ensure([],()=>(require('./views/student/cardEdit.vue')),'cardEdit') 
const cardBind=r =>require.ensure([],()=>(require('./views/student/cardBind.vue')),'cardBind') 
const cardImport=r =>require.ensure([],()=>(require('./views/student/cardImport.vue')),'cardImport') 
const importResult=r =>require.ensure([],()=>(require('./views/student/importResult.vue')),'importResult') 
const studentImport=r =>require.ensure([],()=>(require('./views/student/studentImport.vue')),'studentImport') 
const stuFaceImport=r =>require.ensure([],()=>(require('./views/student/stuFaceImport.vue')),'stuFaceImport') 
const parentFaceImport=r =>require.ensure([],()=>(require('./views/student/parentFaceImport.vue')),'parentFaceImport') 

//食谱模板
const cookTemplate=r =>require.ensure([],()=>(require('./views/cookTemplate/cookTemplate.vue')),'cookTemplate')
const cookTemplate_add=r =>require.ensure([],()=>(require('./views/cookTemplate/add.vue')),'cookTemplate')
const cookTemplate_edit=r =>require.ensure([],()=>(require('./views/cookTemplate/edit.vue')),'cookTemplate')
//用户留言
const suggest=r =>require.ensure([],()=>(require('./views/suggest/suggest.vue')),'suggest')
//食谱
const cookBook=r =>require.ensure([],()=>(require('./views/cookBook/cookBook.vue')),'cookBook')
const cookBook_add=r =>require.ensure([],()=>(require('./views/cookBook/add.vue')),'cookBook')
const cookBook_edit=r =>require.ensure([],()=>(require('./views/cookBook/edit.vue')),'cookBook')
const cookBook_detail=r =>require.ensure([],()=>(require('./views/cookBook/detail.vue')),'cookBook')

//部门管理
const schoolDepartment=r =>require.ensure([],()=>(require('./views/schoolDepartment/schoolDepartment.vue')),'schoolDepartment')

//注册审核
const regAudit=r =>require.ensure([],()=>(require('./views/regAudit/regAudit.vue')),'regAudit')

//设备管理
const devicesInfo=r =>require.ensure([],()=>(require('./views/devicesInfo/devicesInfo.vue')),'devicesInfo')
const devicesInfo_add=r =>require.ensure([],()=>(require('./views/devicesInfo/add.vue')),'devicesInfo')
const devicesInfo_edit=r =>require.ensure([],()=>(require('./views/devicesInfo/edit.vue')),'devicesInfo')
const devicesInfo_detail=r =>require.ensure([],()=>(require('./views/devicesInfo/detail.vue')),'devicesInfo')
const devicesInfo_funcSetting=r =>require.ensure([],()=>(require('./views/devicesInfo/funcSetting.vue')),'devicesInfo')
const devicesInfo_mediaSetting=r =>require.ensure([],()=>(require('./views/devicesInfo/mediaSetting.vue')),'devicesInfo')
const devicesInfo_allMediaSetting=r =>require.ensure([],()=>(require('./views/devicesInfo/allMediaSetting.vue')),'devicesInfo')
const devicesInfo_infoSetting=r =>require.ensure([],()=>(require('./views/devicesInfo/infoSetting.vue')),'devicesInfo')

//视频监控
const monitorInfo=r =>require.ensure([],()=>(require('./views/monitorInfo/monitorInfo.vue')),'monitorInfo')
const monitorInfoNew=r =>require.ensure([],()=>(require('./views/monitorInfo/monitorInfoNew.vue')),'monitorInfo')
const monitorInfoEdit=r =>require.ensure([],()=>(require('./views/monitorInfo/monitorInfoEdit.vue')),'monitorInfo')
const monitorInfoDetail=r =>require.ensure([],()=>(require('./views/monitorInfo/monitorInfoDetail.vue')),'monitorInfo')

/*-----------Index组 End-----------*/

/*-----------login组 Begin-----------*/

//TestB页面
const login = r => require.ensure([], () => r(require('./views/login/login.vue')), 'login')

/*-----------login组 End-----------*/


// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
export const routes = [
  //首页
  { path: '/index', component: index,
  	children:[
      { path: '/', component: defualt },
      { path: '/test1', component: test1 },
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
      //区划
      { path: '/area', component: area },
      //机构信息
      { path: '/institution', component: institution},
      { path: '/institution/add', component: institutionAdd},
      { path: '/institution/other', component: institutionOther},
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
      { path: '/paintAnalysis',component: paintAnalysis},
      //经营统计分析 周
      { path: '/operateAnalysisW',component: operateAnalysisW},
      //经营统计分析 月
      { path: '/operateAnalysisM',component: operateAnalysisM},
      //直播信息列表
      { path: '/live',component: liveInfo},
      { path: '/live/add',component: addLive},
      { path: '/live/edit/:id',component: editLive},
      //点播信息列表
      { path: '/vodInfo',component: vodInfo},
      { path: '/vodInfo/add',component: vodInfo_add},
      { path: '/vodInfo/edit/:id',component: vodInfo_edit},
      { path: '/vodInfo/detail/:id',component: vodInfo_detail},
      { path: '/vodInfo/shareRecord/:id',component: vodInfo_shareRecord},
      //提现设置
      {path:'/withdrawSet',component:withdrawSet},
      //积分抽奖设置
      {path:'/pointsDrawSetup',component:pointsDrawSetup},
      //积分抽奖查询
      {path:'/pointsDrawSearch',component:pointsDrawSearch},
      //积分商品管理
      {path:'/pointsGoodsManage',component:pointsGoodsManage},
      //积分商品新增
      {path:'/pointsGoodsManage/newPointsGoods',component:newPointsGoods},
      //积分商品编辑
      {path:'/pointsGoodsManage/editPointsGoods/:goods_id',component:editPointsGoods},
      //积分商品兑换详情 
      {path:'/pointsGoodsManage/pointsGoodsExDetail/:goods_id',component:pointsGoodsExDetail},
      //积分商品详情 
      {path:'/pointsGoodsManage/pointsGoodsDetail/:goods_id',component:pointsGoodsDetail},
      //班级秀
      { path: '/classShow',component: classShow},
      //新增班级秀
      { path: '/classShow/saveClassShow',component: saveClassShow},
      //编辑班级秀
      { path: '/classShow/editClassShow/:blobInfoId',component: editClassShow},
      //获取班级秀详情
      { path: '/classShow/getClassShow/:blobInfoId',component: getClassShow},
      //精彩瞬间
      { path: '/wonderful',component: wonderful},
       //新增精彩瞬间
      { path: '/wonderful/saveWonderful',component: saveWonderful},
       //编辑精彩瞬间
      { path: '/wonderful/editWonderful/:blobInfoId',component: editWonderful},
      //精彩瞬间详情
      { path: '/wonderful/wonderfulDetail/:blobInfoId',component: wonderfulDetail},
      //瞬间详情打赏信息
      { path: '/wonderful/rewardInfoList/:blobInfoId',component: rewardInfoList},
      //学生出勤统计
      { path: '/totalCount',component: totalCount},
	  //学生详细列表
      { path: '/totalCount/totalDatils/:classId',component: totalDatils},
      //出勤列表
      { path: '/totalCount/attenDatils/:classId/:time',component: attenDatils},
      //未出勤列表
      { path: '/totalCount/noAttenDatils/:classId/:time/:schoolId',component: noAttenDatils},
      //学生出勤列表
      { path: '/totalCount/totalStudentCount/:classId/:time',component: totalStudentCount},
      //学生考勤累计
      { path: '/totalCall',component: totalCall},

      //学生考勤查询
      { path: '/stuAttendance',component: stuAttendance},
       //教师考勤查询
      { path: '/teaAttendance',component: teaAttendance},
       //教师考勤
      { path: '/attendanceOfTeacher',component: attendanceOfTeacher},
      //考勤设置
      { path: '/attendList',component: attendList},
      //添加教师考勤规则
      { path: '/attendList/addTeaAttend',component: addTeaAttend},
      //添加学生考勤规则
      { path: '/attendList/addStuAttend',component: addStuAttend},
      //修改教师考勤规则
      { path: '/attendList/editTeaAttend/:ruleTypeId',component: editTeaAttend},
      //修改学生考勤规则
      { path: '/attendList/editStuAttend/:ruleTypeId',component: editStuAttend},
      //设置教师
      { path: '/attendList/teaAttendSet/:ruleTypeId',component: teaAttendSet},
       //节假日设置
       {path:'/holidaySet',component:holidaySet},
  


      //校车管理
      {path:'/schoolCarM',component:schoolCarM},
      {path:'/schoolCarM/add',component:schoolCarM_add},
      {path:'/schoolCarM/edit/:id',component:schoolCarM_edit},
      //校车行驶路线
      {path:'/carDrive',component:carDrive},
      {path:'/carDrive/stuInfo/:id',component:carDrive_stuInfo},
      {path:'/carDrive/stuInfo/:id',component:carDrive_stuInfo},
      {path:'/carDrive/stuInfo/:id',component:carDrive_stuInfo},
      //学校通知
      {path:'/schoolNotice',component:schoolNotice},
      {path:'/schoolNotice/add',component:schoolNotice_add},
      {path:'/schoolNotice/edit/:id',component:schoolNotice_edit},
      {path:'/schoolNotice/detail/:id',component:schoolNotice_detail},

      //家园互动 点评
      {path:'/comments',component:comments},
      //家园互动 点评 新增
      {path:'/comments/commentsNew',component:commentsNew},
        //家园互动 点评 修改
      {path:'/comments/commentsEdit/:id',component:commentsEdit},
        //家园互动 点评 详情
      {path:'/comments/commentsDetail/:id',component:commentsDetail},
      //系统公告
      {path:'/notifications',component:notifications},
      {path:'/notifications/add',component:notifications_add},
      {path:'/notifications/edit/:id',component:notifications_edit},
      
      //点评模板
      {path:'/comTemplate',component:commentsTemplate},
      {path:'/comTemplate/comTemplateNew',component:commentsTemplateNew},
      {path:'/comTemplate/comTemplateDetail/:id',component:commentsTemplateDetail},
      {path:'/comTemplate/comTemplateEdit/:id',component:commentsTemplateEdit},

      //徽章模板
      {path:'/badgeTemplate',component:badgeTemplate},
      {path:'/badgeTemplate/badgeTemplateNew',component:badgeTemplateNew},
      {path:'/badgeTemplate/badgeTemplateDetail/:id',component:badgeTemplateDetail},
      {path:'/badgeTemplate/badgeTemplateEdit/:id',component:badgeTemplateEdit},


	    //年级信息
	    {path:'/gradeInfo',component:gradeInfo},
	    {path:'/gradeInfoNew',component:gradeInfoNew},
	    {path:'/gradeInfoEdit/:id',component:gradeInfoEdit},
	   	{path:'/gradeInfoDetail/:id',component:gradeInfoDetail},


	   	//班级信息
	   	{path:'/classes',component:classes},
	   	{path:'/classes/classInfoNew',component:classInfoNew},
	   	{path:'/classes/classInfoEdit/:id',component:classInfoEdit},
	   	{path:'/classes/classInfoDetail/:id',component:classInfoDetail},
	  	//微信公众号绑定信息
	  	{path:'/wxBindInfo',component:wxBindInfo},
	  	{path:'/wxBindInfo/detail/:id',component:wxBindInfo_detail},
	  	//食谱模板
	  	{path:'/cookTemplate',component:cookTemplate},
	  	{path:'/cookTemplate/add',component:cookTemplate_add},
	  	{path:'/cookTemplate/edit/:id',component:cookTemplate_edit},
      	//食谱
      	{path:'/cookBook',component:cookBook},
	  	{path:'/cookBook/add',component:cookBook_add},
	  	{path:'/cookBook/edit/:weekOfYear/:compInfoId',component:cookBook_edit},
	  	{path:'/cookBook/detail/:weekOfYear/:compInfoId',component:cookBook_detail},
        //用户留言
        {path:'/suggest',component:suggest},
        //部门管理
        {path:'/schoolDepartment',component:schoolDepartment},

      	//学生信息
      	{path:'/student',component:student},
      	{path:'/student/studentNew',component:studentNew},
      	{path:'/student/studentEdit/:id',component:studentEdit},
      	{path:'/student/parentInfo/:id',component:parentInfo},
        {path:'/student/parentInfo/parentNew/:id',component:parentNew},
        {path:'/student/parentInfo/parentEdit/:userId/:studentInfoId',component:parentEdit},
        {path:'/student/parentInfo/parentDetail/:userId/:studentInfoId',component:parentDetail},
        {path:'/student/studentDetail/:studentInfoId',component:studentDetail},
        {path:'/student/cardManage',component:cardManage},
        {path:'/student/cardManage/cardNew',component:cardNew},
        {path:'/student/cardManage/cardImport',component:cardImport},
        {path:'/student/cardManage/importResult/:msg',component:importResult},
        {path:'/student/cardManage/cardEdit/:cardId',component:cardEdit},
        {path:'/student/cardManage/cardBind/:cardId',component:cardBind},
        {path:'/student/studentImport',component:studentImport},
        {path:'/student/stuFaceImport',component:stuFaceImport},
        {path:'/student/parentFaceImport',component:stuFaceImport},

      	//注册审核
        {path:'/regAudit',component:regAudit},

        //设备信息
        {path:'/devicesInfo',component:devicesInfo},
        {path:'/devicesInfo/add',component:devicesInfo_add},
        {path:'/devicesInfo/edit/:id',component:devicesInfo_edit},
        {path:'/devicesInfo/detail/:id',component:devicesInfo_detail},
        {path:'/devicesInfo/mediaSetting/:id',component:devicesInfo_mediaSetting},
        {path:'/devicesInfo/funcSetting/:id',component:devicesInfo_funcSetting},
        {path:'/devicesInfo/infoSetting',component:devicesInfo_infoSetting},
        {path:'/devicesInfo/allMediaSetting',component:devicesInfo_allMediaSetting},

         //视频监控
        {path:'/monitorInfo',component:monitorInfo},
	   	{path:'/monitorInfo/monitorInfoNew',component:monitorInfoNew},
	   	{path:'/monitorInfo/monitorInfoEdit/:id',component:monitorInfoEdit},
	   	{path:'/monitorInfo/monitorInfoDetail/:id',component:monitorInfoDetail},
  		
  	]

  },
  //登陆页面
  { path: '/', component: login }
];
