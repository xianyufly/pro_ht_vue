//校车管理
const schoolCarM=r =>require.ensure([],()=>r(require('src/views/schoolCarM/schoolCarM.vue')),'schoolCarM')
const schoolCarM_add=r =>require.ensure([],()=>r(require('src/views/schoolCarM/add.vue')),'schoolCarM_add')
const schoolCarM_edit=r =>require.ensure([],()=>r(require('src/views/schoolCarM/edit.vue')),'schoolCarM_edit')
//校车行驶路线
const carDrive=r =>require.ensure([],()=>r(require('src/views/carDrive/carDrive.vue')),'carDrive')
const carDrive_stuInfo=r =>require.ensure([],()=>r(require('src/views/carDrive/stuInfo.vue')),'carDrive_stuInfo')
//学校通知
const schoolNotice=r =>require.ensure([],()=>r(require('src/views/schoolNotice/schoolNotice.vue')),'schoolNotice')
const schoolNotice_add=r =>require.ensure([],()=>r(require('src/views/schoolNotice/add.vue')),'schoolNotice_add')
const schoolNotice_edit=r =>require.ensure([],()=>r(require('src/views/schoolNotice/edit.vue')),'schoolNotice_edit')
const schoolNotice_detail=r =>require.ensure([],()=>r(require('src/views/schoolNotice/detail.vue')),'schoolNotice_detail')

//家园互动 点评
const comments = r => require.ensure([],() => r(require('src/views/comments/commentsManage.vue')),'commentsManage')
//家园互动 点评 新增
const commentsNew = r => require.ensure([],() => r(require('src/views/comments/commentsNew.vue')),'commentsNew')
//家园互动 点评 修改
const commentsEdit = r => require.ensure([],() => r(require('src/views/comments/commentsEdit.vue')),'commentsEdit')
//家园互动 点评 详情
const commentsDetail = r => require.ensure([],() => r(require('src/views/comments/commentsDetail.vue')),'commentsDetail')

//系统公告
const notifications=r =>require.ensure([],()=>r(require('src/views/notifications/notifications.vue')),'notifications')
const notifications_add=r =>require.ensure([],()=>r(require('src/views/notifications/add.vue')),'notifications')
const notifications_edit=r =>require.ensure([],()=>r(require('src/views/notifications/edit.vue')),'notifications')
//评语模板
const commentsTemplate = r => require.ensure([],() => r(require('src/views/commentsTemplate/commentTmplManage.vue')),'commentsTemplate')
const commentsTemplateNew = r => require.ensure([],() => r(require('src/views/commentsTemplate/commentTmplNew.vue')),'commentsTemplateNew')
const commentsTemplateDetail = r => require.ensure([],() => r(require('src/views/commentsTemplate/commentTmplDetail.vue')),'commentsTemplateDetail')
const commentsTemplateEdit = r => require.ensure([],() => r(require('src/views/commentsTemplate/commentTmplEdit.vue')),'commentsTemplateEdit')

//徽章模板
const badgeTemplate=r =>require.ensure([],()=>(require('src/views/badgeTemplate/badgeTemplateManage.vue')),'badgeTemplate')
const badgeTemplateNew=r =>require.ensure([],()=>(require('src/views/badgeTemplate/badgeTemplateNew.vue')),'badgeTemplateNew')
const badgeTemplateDetail=r =>require.ensure([],()=>(require('src/views/badgeTemplate/badgeTemplateDetail.vue')),'badgeTemplateDetail')
const badgeTemplateEdit=r =>require.ensure([],()=>(require('src/views/badgeTemplate/badgeTemplateEdit.vue')),'badgeTemplateEdit')

//年级信息
const gradeInfo=r =>require.ensure([],()=>(require('src/views/grade/gradeInfoManage.vue')),'gradeInfo')
const gradeInfoNew=r =>require.ensure([],()=>(require('src/views/grade/gradeInfoNew.vue')),'gradeInfoNew')
const gradeInfoEdit=r =>require.ensure([],()=>(require('src/views/grade/gradeInfoEdit.vue')),'gradeInfoEdit')
const gradeInfoDetail=r =>require.ensure([],()=>(require('src/views/grade/gradeInfoDetail.vue')),'gradeInfoDetail')



//班级信息
const classes=r =>require.ensure([],()=>(require('src/views/classes/classInfoManage.vue')),'classes')
const classInfoNew=r =>require.ensure([],()=>(require('src/views/classes/classInfoNew.vue')),'classInfoNew')
const classInfoEdit=r =>require.ensure([],()=>(require('src/views/classes/classInfoEdit.vue')),'classInfoEdit')
const classInfoDetail=r =>require.ensure([],()=>(require('src/views/classes/classInfoDetail.vue')),'classInfoDetail')


//公众号绑定信息
const wxBindInfo=r =>require.ensure([],()=>(require('src/views/wxBindInfo/wxBindInfo.vue')),'wxBindInfo')
const wxBindInfo_detail=r =>require.ensure([],()=>(require('src/views/wxBindInfo/detail.vue')),'wxBindInfo')


//学生信息
const student=r =>require.ensure([],()=>(require('src/views/student/studentManage.vue')),'student')
const studentNew=r =>require.ensure([],()=>(require('src/views/student/studentNew.vue')),'studentNew')
const studentEdit=r =>require.ensure([],()=>(require('src/views/student/studentEdit.vue')),'studentEdit')
const parentInfo=r =>require.ensure([],()=>(require('src/views/student/parentInfo.vue')),'parentInfo') 
const parentNew=r =>require.ensure([],()=>(require('src/views/student/parentNew.vue')),'parentNew') 
const parentEdit=r =>require.ensure([],()=>(require('src/views/student/parentEdit.vue')),'parentEdit') 
const parentDetail=r =>require.ensure([],()=>(require('src/views/student/parentDetail.vue')),'parentDetail') 
const studentDetail=r =>require.ensure([],()=>(require('src/views/student/studentDetail.vue')),'studentDetail') 
const cardManage=r =>require.ensure([],()=>(require('src/views/student/cardManage.vue')),'cardManage') 
const cardNew=r =>require.ensure([],()=>(require('src/views/student/cardNew.vue')),'cardNew') 
const cardEdit=r =>require.ensure([],()=>(require('src/views/student/cardEdit.vue')),'cardEdit') 
const cardBind=r =>require.ensure([],()=>(require('src/views/student/cardBind.vue')),'cardBind') 
const cardImport=r =>require.ensure([],()=>(require('src/views/student/cardImport.vue')),'cardImport') 
const importResult=r =>require.ensure([],()=>(require('src/views/student/importResult.vue')),'importResult') 
const studentImport=r =>require.ensure([],()=>(require('src/views/student/studentImport.vue')),'studentImport') 
const stuFaceImport=r =>require.ensure([],()=>(require('src/views/student/stuFaceImport.vue')),'stuFaceImport') 
const parentFaceImport=r =>require.ensure([],()=>(require('src/views/student/parentFaceImport.vue')),'parentFaceImport') 

const parentActiveInfo=r =>require.ensure([],()=>(require('src/views/student/parentActiveInfo.vue')),'parentActiveInfo') 

//食谱模板
const cookTemplate=r =>require.ensure([],()=>(require('src/views/cookTemplate/cookTemplate.vue')),'cookTemplate')
const cookTemplate_add=r =>require.ensure([],()=>(require('src/views/cookTemplate/add.vue')),'cookTemplate')
const cookTemplate_edit=r =>require.ensure([],()=>(require('src/views/cookTemplate/edit.vue')),'cookTemplate')
//用户留言
const suggest=r =>require.ensure([],()=>(require('src/views/suggest/suggest.vue')),'suggest')
//食谱
const cookBook=r =>require.ensure([],()=>(require('src/views/cookBook/cookBook.vue')),'cookBook')
const cookBook_add=r =>require.ensure([],()=>(require('src/views/cookBook/add.vue')),'cookBook')
const cookBook_edit=r =>require.ensure([],()=>(require('src/views/cookBook/edit.vue')),'cookBook')
const cookBook_detail=r =>require.ensure([],()=>(require('src/views/cookBook/detail.vue')),'cookBook')

//部门管理
const schoolDepartment=r =>require.ensure([],()=>(require('src/views/schoolDepartment/schoolDepartment.vue')),'schoolDepartment')

//注册审核
const regAudit=r =>require.ensure([],()=>(require('src/views/regAudit/regAudit.vue')),'regAudit')

//设备管理
const devicesInfo=r =>require.ensure([],()=>(require('src/views/devicesInfo/devicesInfo.vue')),'devicesInfo')
const devicesInfo_add=r =>require.ensure([],()=>(require('src/views/devicesInfo/add.vue')),'devicesInfo')
const devicesInfo_edit=r =>require.ensure([],()=>(require('src/views/devicesInfo/edit.vue')),'devicesInfo')
const devicesInfo_detail=r =>require.ensure([],()=>(require('src/views/devicesInfo/detail.vue')),'devicesInfo')
const devicesInfo_funcSetting=r =>require.ensure([],()=>(require('src/views/devicesInfo/funcSetting.vue')),'devicesInfo')
const devicesInfo_mediaSetting=r =>require.ensure([],()=>(require('src/views/devicesInfo/mediaSetting.vue')),'devicesInfo')
const devicesInfo_allMediaSetting=r =>require.ensure([],()=>(require('src/views/devicesInfo/allMediaSetting.vue')),'devicesInfo')
const devicesInfo_infoSetting=r =>require.ensure([],()=>(require('src/views/devicesInfo/infoSetting.vue')),'devicesInfo')

// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
export const router_D = [
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
		{path:'/student/parentFaceImport',component:parentFaceImport},
		{path:'/student/parentActiveInfo',component:parentActiveInfo},
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
		{path:'/devicesInfo/allMediaSetting',component:devicesInfo_allMediaSetting}
      
];

