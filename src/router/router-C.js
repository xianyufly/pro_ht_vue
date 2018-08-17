//经营数据统计分析 周
const operateAnalysisW= r => require.ensure([], () => r(require('src/views/statistic/operateAnalysisWeek/App.vue')), 'operateAnalysisW')
//经营数据统计分析 月
const operateAnalysisM= r => require.ensure([], () => r(require('src/views/statistic/operateAnalysisMonth/App.vue')), 'operateAnalysisM')
//数据统计分析 天
const schoolCountDay= r => require.ensure([], () => r(require('src/views/statistic/schoolCountDay/schoolCountDay.vue')), 'schoolCountDay')
//数据统计分析 周
const schoolCountWeek= r => require.ensure([], () => r(require('src/views/statistic/schoolCountWeek/schoolCountWeek.vue')), 'schoolCountWeek')
//数据统计分析 月
const schoolCountMonth= r => require.ensure([], () => r(require('src/views/statistic/schoolCountMonth/schoolCountMonth.vue')), 'schoolCountMonth')
//直播信息列表
const liveInfo= r => require.ensure([], () => r(require('src/views/live/live.vue')), 'liveInfo')
//直播信息 添加
const addLive= r => require.ensure([], () => r(require('src/views/live/addLive.vue')), 'addLive')
//直播信息 修改
const editLive= r => require.ensure([], () => r(require('src/views/live/editLive.vue')), 'editLive')

//点播信信息 列表
const vodInfo= r => require.ensure([], () => r(require('src/views/vodInfo/vodInfo.vue')), 'vodInfo')
//点播信信息 新增
const vodInfo_add= r => require.ensure([], () => r(require('src/views/vodInfo/add.vue')), 'vodInfo_add')
//点播信信息 编辑
const vodInfo_edit= r => require.ensure([], () => r(require('src/views/vodInfo/edit.vue')), 'vodInfo_edit')
//点播信息 详情
const vodInfo_detail= r => require.ensure([], () => r(require('src/views/vodInfo/detail.vue')), 'vodInfo_detail')
//点播信息 分享记录
const vodInfo_shareRecord= r => require.ensure([], () => r(require('src/views/vodInfo/shareRecord.vue')), 'vodInfo_shareRecord')
//提现设置
const withdrawSet=r =>require.ensure([],()=>r(require('src/views/withdrawSet/withdrawSet.vue')),'withdrawSet')
//积分抽奖设置
const pointsDrawSetup=r =>require.ensure([],()=>r(require('src/views/pointsDrawSetup/pointsDrawSetup.vue')),'pointsDrawSetup')
//积分抽奖查询
const pointsDrawSearch=r =>require.ensure([],()=>r(require('src/views/pointsDrawSearch/pointsDrawSearch.vue')),'pointsDrawSearch')
//积分商品管理
const pointsGoodsManage=r =>require.ensure([],()=>r(require('src/views/pointsGoodsManage/pointsGoodsManage.vue')),'pointsGoodsManage')
//积分商品新增
const newPointsGoods=r =>require.ensure([],()=>r(require('src/views/pointsGoodsManage/newPointsGoods.vue')),'newPointsGoods')
//积分商品编辑
const editPointsGoods=r =>require.ensure([],()=>r(require('src/views/pointsGoodsManage/editPointsGoods.vue')),'editPointsGoods')
//积分商品兑换详情
const pointsGoodsExDetail = r => require.ensure([],() => r(require('src/views/pointsGoodsManage/pointsGoodsExDetail.vue')),'pointsGoodsExDetail')
//积分商品详情
const pointsGoodsDetail = r => require.ensure([],() => r(require('src/views/pointsGoodsManage/pointsGoodsDetail.vue')),'pointsGoodsDetail')
//班级秀
const classShow = r => require.ensure([],() => r(require('src/views/classShow/classShow.vue')),'classShow')
//新增班级秀
const saveClassShow = r => require.ensure([],() => r(require('src/views/classShow/saveClassShow.vue')),'saveClassShow')
//修改班级秀
const editClassShow = r => require.ensure([],() => r(require('src/views/classShow/editClassShow.vue')),'editClassShow')
//获取班级秀详情
const getClassShow = r => require.ensure([],() => r(require('src/views/classShow/getClassShow.vue')),'getClassShow')
//精彩瞬间
const wonderful = r => require.ensure([],() => r(require('src/views/wonderful/wonderful.vue')),'wonderful')
//新增精彩瞬间
const saveWonderful = r => require.ensure([],() => r(require('src/views/wonderful/saveWonderful.vue')),'saveWonderful')
//精彩瞬间详情
const wonderfulDetail = r => require.ensure([],() => r(require('src/views/wonderful/wonderfulDetail.vue')),'wonderfulDetail')
//编辑精彩瞬间
const editWonderful = r => require.ensure([],() => r(require('src/views/wonderful/editWonderful.vue')),'editWonderful')
//精彩瞬间打赏信息
const rewardInfoList = r => require.ensure([],() => r(require('src/views/wonderful/rewardInfoList.vue')),'rewardInfoList')
//学生出勤统计
const totalCount = r => require.ensure([],() => r(require('src/views/callRollTotal/totalCount.vue')),'totalCount')
//学生详细信息
const totalDatils = r => require.ensure([],() => r(require('src/views/callRollTotal/totalDatils.vue')),'totalDatils')
//出勤列表
const attenDatils = r => require.ensure([],() => r(require('src/views/callRollTotal/attenDatils.vue')),'attenDatils')
//未出勤列表
const noAttenDatils = r => require.ensure([],() => r(require('src/views/callRollTotal/noAttenDatils.vue')),'noAttenDatils')
//学生出勤统计列表
const totalStudentCount = r => require.ensure([],() => r(require('src/views/callRollTotal/totalStudentCount.vue')),'totalStudentCount')
//学生考勤累计
const totalCall = r => require.ensure([],() => r(require('src/views/callRollTotal/totalCall.vue')),'totalCall')
//教师考勤累计
const teaTotalCall = r => require.ensure([],() => r(require('src/views/callRollTotal/teaTotalCall.vue')),'teaTotalCall')
//学生考勤查询
const stuAttendance = r => require.ensure([],() => r(require('src/views/attendance/stuAttendance.vue')),'stuAttendance')
//教师考勤查询
const teaAttendance = r => require.ensure([],() => r(require('src/views/attendance/teaAttendance.vue')),'teaAttendance')
//教师考勤
const attendanceOfTeacher = r => require.ensure([],() => r(require('src/views/attendance/attendanceOfTeacher.vue')),'attendanceOfTeacher')
//考勤设置
const attendList = r => require.ensure([],() => r(require('src/views/check/attendList.vue')),'attendList')
//添加教师考勤规则
const addTeaAttend = r => require.ensure([],() => r(require('src/views/check/addTeaAttend.vue')),'addTeaAttend')
//添加学生考勤规则
const addStuAttend = r => require.ensure([],() => r(require('src/views/check/addStuAttend.vue')),'addStuAttend')
//修改教师考勤规则
const editTeaAttend = r => require.ensure([],() => r(require('src/views/check/editTeaAttend.vue')),'editTeaAttend')
//修改学生考勤规则
const editStuAttend = r => require.ensure([],() => r(require('src/views/check/editStuAttend.vue')),'editStuAttend')
//设置教师
const teaAttendSet = r => require.ensure([],() => r(require('src/views/check/teaAttendSet.vue')),'teaAttendSet')
//节假日设置
const holidaySet=r =>require.ensure([],()=>(require('src/views/holidaySet/holidaySet.vue')),'holidaySet')
//缴费信息管理
const payItemlist=r =>require.ensure([],()=>(require('src/views/payItem/payItemlist.vue')),'payItemlist')
//新增缴费信息
const addPayItem=r =>require.ensure([],()=>(require('src/views/payItem/addPayItem.vue')),'addPayItem')
//编辑缴费信息
const updatePayItem=r =>require.ensure([],()=>(require('src/views/payItem/updatePayItem.vue')),'updatePayItem')
//编辑缴费信息
const editPayItem=r =>require.ensure([],()=>(require('src/views/payItem/editPayItem.vue')),'editPayItem')
//编辑缴费信息
const paySettingList=r =>require.ensure([],()=>(require('src/views/payItem/paySettingList.vue')),'paySettingList')
//招生简介
const enrolStudentsList=r =>require.ensure([],()=>(require('src/views/enrolStudents/enrolStudentsList.vue')),'enrolStudentsList')
//新增招生简介
const addEnrolStudents=r =>require.ensure([],()=>(require('src/views/enrolStudents/addEnrolStudents.vue')),'addEnrolStudents')
//编辑招生简介
const editEnrolStudents=r =>require.ensure([],()=>(require('src/views/enrolStudents/editEnrolStudents.vue')),'editEnrolStudents')
//科学常识
const scienceNousList = r => require.ensure([],() => r(require('src/views/scienceNous/scienceNousList.vue')),'scienceNousList')
//新增科学常识
const addScienceNous = r => require.ensure([],() => r(require('src/views/scienceNous/addScienceNous.vue')),'addScienceNous')
//编辑科学常识
const editScienceNous = r => require.ensure([],() => r(require('src/views/scienceNous/editScienceNous.vue')),'editScienceNous')
//闽南童谣
const southMusicList = r => require.ensure([],() => r(require('src/views/southMusic/southMusicList.vue')),'southMusicList')
//新增闽南童谣
const addSouthMusic = r => require.ensure([],() => r(require('src/views/southMusic/addSouthMusic.vue')),'addSouthMusic')
//编辑闽南童谣
const editSouthMusic = r => require.ensure([],() => r(require('src/views/southMusic/editSouthMusic.vue')),'editSouthMusic')
//学校用户管理
const schoolUser = r => require.ensure([],() => r(require('src/views/schoolUser/schoolUser.vue')),'schoolUser')

// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
export const router_C = [
	//经营统计分析 周
		{ path: '/operateAnalysisW',component: operateAnalysisW},
		//经营统计分析 月
		{ path: '/operateAnalysisM',component: operateAnalysisM},
		//统计分析 天
		{ path: '/schoolCountDay',component: schoolCountDay},
		//统计分析 周
		{ path: '/schoolCountWeek',component: schoolCountWeek},
		//统计分析 月
		{ path: '/schoolCountMonth',component: schoolCountMonth},
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
		//科学常识
		{ path: '/scienceNousList',component: scienceNousList},
		//新增科学常识
		{ path: '/scienceNousList/addScienceNous',component: addScienceNous},
		//编辑科学常识
		{ path: '/scienceNousList/editScienceNous/:blobId',component: editScienceNous},
		//闽南童谣
		{ path: '/southMusicList',component: southMusicList},
		//新增闽南童谣
		{ path: '/southMusicList/addSouthMusic',component: addSouthMusic},
		//编辑闽南童谣
		{ path: '/southMusicList/editSouthMusic/:blobId',component: editSouthMusic},
		//学校用户管理
		{ path: '/schoolUser',component: schoolUser},
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
		//教师考勤累计
		{ path: '/teaTotalCall',component: teaTotalCall},
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
		{ path:'/holidaySet',component:holidaySet},
		     //缴费项目管理
       {path:'/payItemlist',component:payItemlist},
        //新增缴费项目
       {path:'/payItemlist/addPayItem',component:addPayItem},
       //编辑缴费项目
       {path:'/payItemlist/updatePayItem/:goods_id',component:updatePayItem},
        //编辑缴费项目
       {path:'/payItemlist/editPayItem/:goods_id',component:editPayItem},
        //编辑缴费项目
       {path:'/payItemlist/paySettingList/:goods_id',component:paySettingList},
       //招生简介
       {path:'/compInfo/enrolStudentsList/:compInfoId',component:enrolStudentsList},
       //新增招生简介
        {path:'/compInfo/enrolStudentsList/addEnrolStudents/:compInfoId',component:addEnrolStudents},
       //编辑招生简介
        {path:'/compInfo/enrolStudentsList/editEnrolStudents/:kms_ext_info_id',component:editEnrolStudents}
      
];