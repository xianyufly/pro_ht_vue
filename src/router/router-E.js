
//教师
const teacherManage=r =>require.ensure([],()=>(require('src/views/teacher/teacherManage.vue')),'teacherManage')
const teacherNew=r =>require.ensure([],()=>(require('src/views/teacher/teacherNew.vue')),'teacherNew')
const teacherEdit=r =>require.ensure([],()=>(require('src/views/teacher/teacherEdit.vue')),'teacherEdit')
const addLibraryTeachers=r =>require.ensure([],()=>(require('src/views/teacher/addLibraryTeachers.vue')),'addLibraryTeachers')
const importTeacher=r =>require.ensure([],()=>(require('src/views/teacher/importTeacher.vue')),'importTeacher')
const importLibraryTeachers=r =>require.ensure([],()=>(require('src/views/teacher/importLibraryTeachers.vue')),'importLibraryTeachers')
const teacherDetail=r =>require.ensure([],()=>(require('src/views/teacher/teacherDetail.vue')),'teacherDetail')
const teaFaceImport=r =>require.ensure([],()=>(require('src/views/teacher/teaFaceImport.vue')),'teaFaceImport')
//微通知
const microNotice=r =>require.ensure([],()=>(require('src/views/microNotice/microNotice.vue')),'microNotice')
const microNotice_add=r =>require.ensure([],()=>(require('src/views/microNotice/add.vue')),'microNotice')
const microNotice_edit=r =>require.ensure([],()=>(require('src/views/microNotice/edit.vue')),'microNotice')
const microNotice_detail=r =>require.ensure([],()=>(require('src/views/microNotice/detail.vue')),'microNotice')

//视频监控
const monitorInfo=r =>require.ensure([],()=>(require('src/views/monitorInfo/monitorInfo.vue')),'monitorInfo')
const monitorInfoNew=r =>require.ensure([],()=>(require('src/views/monitorInfo/monitorInfoNew.vue')),'monitorInfo')
const monitorInfoEdit=r =>require.ensure([],()=>(require('src/views/monitorInfo/monitorInfoEdit.vue')),'monitorInfo')
const monitorInfoDetail=r =>require.ensure([],()=>(require('src/views/monitorInfo/monitorInfoDetail.vue')),'monitorInfo')
const monitorInfoSetParent=r =>require.ensure([],()=>(require('src/views/monitorInfo/monitorInfoSetParent.vue')),'monitorInfo')
const monitorInfoSetTeacher=r =>require.ensure([],()=>(require('src/views/monitorInfo/monitorInfoSetTeacher.vue')),'monitorInfo')

//书库管理
const bookLibrary=r =>require.ensure([],()=>(require('src/views/bookLibrary/bookLibrary.vue')),'bookLibrary')
const bookLibrary_add=r =>require.ensure([],()=>(require('src/views/bookLibrary/add.vue')),'bookLibrary')
const bookLibrary_edit=r =>require.ensure([],()=>(require('src/views/bookLibrary/edit.vue')),'bookLibrary')
const bookLibrary_detail=r =>require.ensure([],()=>(require('src/views/bookLibrary/detail.vue')),'bookLibrary')
const bookLibrary_proBookImp=r =>require.ensure([],()=>(require('src/views/bookLibrary/proBookImp.vue')),'bookLibrary')
const bookLibrary_localBookImp=r =>require.ensure([],()=>(require('src/views/bookLibrary/localBookImp.vue')),'bookLibrary')
const bookLibrary_bookImp=r =>require.ensure([],()=>(require('src/views/bookLibrary/bookImp.vue')),'bookLibrary')
const bookLibrary_bookAdd=r =>require.ensure([],()=>(require('src/views/bookLibrary/bookAdd.vue')),'bookLibrary')
const bookLibrary_localAdd=r =>require.ensure([],()=>(require('src/views/bookLibrary/localAdd.vue')),'bookLibrary')
const bookLibrary_importBookQuery=r =>require.ensure([],()=>(require('src/views/bookLibrary/importBookQuery.vue')),'bookLibrary')


// 用户借阅排行
const userBorrowManage=r=>require.ensure([],()=>(require('src/views/userBorrow/userBorrowManage.vue')),'userBorrow')
const userBorrowDetail=r=>require.ensure([],()=>(require('src/views/userBorrow/userBorrowDetail.vue')),'userBorrowDetail')
const stuBorrowDetail=r=>require.ensure([],()=>(require('src/views/userBorrow/stuBorrowDetail.vue')),'stuBorrowDetail')


//书本借阅排行
const bookBorrowManage=r=>require.ensure([],()=>(require('src/views/bookBorrow/bookBorrowManage.vue')),'bookBorrowManage')
const bookBorrowDetail=r=>require.ensure([],()=>(require('src/views/bookBorrow/bookBorrowDetail.vue')),'bookBorrowDetail')


//图书借阅配置
const bookSetting=r=>require.ensure([],()=>(require('src/views/bookSetting/bookSetting.vue')),'bookSetting')

//预约管理
const subscribeManage=r=>require.ensure([],()=>(require('src/views/subscribe/subscribeManage.vue')),'subscribeManage')
const subscribeDetail=r=>require.ensure([],()=>(require('src/views/subscribe/subscribeDetail.vue')),'subscribeDetail')

//借书
const lendSchBook=r=>require.ensure([],()=>(require('src/views/lendSchBook/lendSchBook.vue')),'lendSchBook')

//借书管理
const borrowManage=r=>require.ensure([],()=>(require('src/views/borrow/borrowManage.vue')),'borrowManage')
const borrowDetail=r=>require.ensure([],()=>(require('src/views/borrow/borrowDetail.vue')),'borrowDetail')

//还书
const returnBook=r=>require.ensure([],()=>(require('src/views/returnBook/returnBook.vue')),'returnBook')

//问卷调查
const questionAlbum=r=>require.ensure([],()=>(require('src/views/questionAlbum/questionAlbum.vue')),'questionAlbum')
const questionAlbum_add=r=>require.ensure([],()=>(require('src/views/questionAlbum/add.vue')),'questionAlbum')
const questionAlbum_detail=r=>require.ensure([],()=>(require('src/views/questionAlbum/detail.vue')),'questionAlbum')
const questionAlbum_edit=r=>require.ensure([],()=>(require('src/views/questionAlbum/edit.vue')),'questionAlbum')
//点点科创
const scienceCreate=r => require.ensure([], () => r(require('src/views/scienceCreate/scienceCreate.vue')), 'scienceCreate')
const addScienceLibrary=r => require.ensure([], () => r(require('src/views/scienceCreate/addScienceLibrary.vue')), 'addScienceLibrary')
const editScienceLibrary=r => require.ensure([], () => r(require('src/views/scienceCreate/editScienceLibrary.vue')), 'editScienceLibrary')
const scienceList=r => require.ensure([], () => r(require('src/views/scienceCreate/scienceList.vue')), 'scienceList')
const addScience=r => require.ensure([], () => r(require('src/views/scienceCreate/addScience.vue')), 'addScience')
const editScience=r => require.ensure([], () => r(require('src/views/scienceCreate/editScience.vue')), 'editScience')
const comments=r => require.ensure([], () => r(require('src/views/scienceCreate/comments.vue')), 'comments')
//家长宝典
const patriarchBookLibrary=r => require.ensure([], () => r(require('src/views/patriarchBook/patriarchBookLibrary.vue')), 'patriarchBookLibrary')
const addPatriarchBookLibrary=r => require.ensure([], () => r(require('src/views/patriarchBook/addPatriarchBookLibrary.vue')), 'addPatriarchBookLibrary')
const editPatriarchBookLibrary=r => require.ensure([], () => r(require('src/views/patriarchBook/editPatriarchBookLibrary.vue')), 'editPatriarchBookLibrary')
const patriarchBookList=r => require.ensure([], () => r(require('src/views/patriarchBook/patriarchBookList.vue')), 'patriarchBookList')
const addPatriarchBook=r => require.ensure([], () => r(require('src/views/patriarchBook/addPatriarchBook.vue')), 'addPatriarchBook')
const editPatriarchBook=r => require.ensure([], () => r(require('src/views/patriarchBook/editPatriarchBook.vue')), 'editPatriarchBook')
const comment=r => require.ensure([], () => r(require('src/views/patriarchBook/comment.vue')), 'comment')
//用户信息查询
const selUser=r => require.ensure([], () => r(require('src/views/selectUser/selUser.vue')), 'selUser')
//课程
const courseList=r => require.ensure([], () => r(require('src/views/course/courseList.vue')), 'courseList')
const courseDetail=r => require.ensure([], () => r(require('src/views/course/courseDetail.vue')), 'courseDetail')
const courseAdd=r => require.ensure([], () => r(require('src/views/course/courseAdd.vue')), 'courseAdd')
const courseEdit=r => require.ensure([], () => r(require('src/views/course/courseEdit.vue')), 'courseEdit')
const courseDetailAdd=r => require.ensure([], () => r(require('src/views/course/courseDetailAdd.vue')), 'courseDetailAdd')
const courseDetailEdit=r => require.ensure([], () => r(require('src/views/course/courseDetailEdit.vue')), 'courseDetailEdit')
//终端管理
const terminalVersion=r => require.ensure([], () => r(require('src/views/terminalVersion/terminalVersion.vue')), 'terminalVersion')
const terminalVersionAdd=r => require.ensure([], () => r(require('src/views/terminalVersion/terminalVersionAdd.vue')), 'terminalVersionAdd')
// 通过 Vue.extend() 创建的组件构造器，
export const router_E = [
   {path:'/selUser',component:selUser},
		//视频监控
		{path:'/monitorInfo',component:monitorInfo},
		{path:'/monitorInfo/monitorInfoNew',component:monitorInfoNew},
		{path:'/monitorInfo/monitorInfoEdit/:id',component:monitorInfoEdit},
		{path:'/monitorInfo/monitorInfoDetail/:id',component:monitorInfoDetail},
		{path:'/monitorInfo/monitorInfoSetParent/:id',component:monitorInfoSetParent},
		{path:'/monitorInfo/monitorInfoSetTeacher/:id',component:monitorInfoSetTeacher},

		//教师信息
		{path:'/teacher',component:teacherManage},
		{path:'/teacher/teacherNew',component:teacherNew},
		{path:'/teacher/teacherEdit/:userId',component:teacherEdit},
		{path:'/teacher/addLibraryTeachers',component:addLibraryTeachers},
		{path:'/teacher/importTeacher',component:importTeacher},
		{path:'/teacher/importLibraryTeachers',component:importLibraryTeachers},
    {path:'/teacher/teaFaceImport',component:teaFaceImport},
		{path:'/teacher/teacherDetail/:userId',component:teacherDetail},
		//微通知
		{path:'/microNotice',component:microNotice},
		{path:'/microNotice/add',component:microNotice_add},
		{path:'/microNotice/edit/:id',component:microNotice_edit},
		{path:'/microNotice/detail/:id',component:microNotice_detail},
  		//书库管理
  		{path:'/bookLibrary',component:bookLibrary},
  		{path:'/bookLibrary/add/:bookId',component:bookLibrary_add},
  		{path:'/bookLibrary/edit/:bookId',component:bookLibrary_edit},
  		{path:'/bookLibrary/detail/:bookId',component:bookLibrary_detail},
  		{path:'/bookLibrary/bookAdd',component:bookLibrary_bookAdd},
  		{path:'/bookLibrary/localAdd',component:bookLibrary_localAdd},
  		{path:'/bookLibrary/importBookQuery',component:bookLibrary_importBookQuery},
  		{path:'/bookLibrary/bookImp',component:bookLibrary_bookImp},
  		{path:'/bookLibrary/localBookImp',component:bookLibrary_localBookImp},
  		{path:'/bookLibrary/proBookImp',component:bookLibrary_proBookImp},

  		//用户借阅排行
  		{path:'/userBorrow',component:userBorrowManage},
  		{path:'/userBorrow/userBorrowDetail',component:userBorrowDetail},
  		{path:'/userBorrow/stuBorrowDetail',component:stuBorrowDetail},

  		//书本借阅排行
  		{path:'/bookBorrow',component:bookBorrowManage},
  		{path:'/bookBorrow/bookBorrowDetail',component:bookBorrowDetail},
  		//图书借阅设置
  		{path:'/bookSetting',component:bookSetting},
  		
  		//图书借阅
  		{path:'/lendSchBook',component:lendSchBook},
  		

  		//预约管理
  		{path:'/subscribe',component:subscribeManage},
		{path:'/subscribe/subscribeDetail',component:subscribeDetail},

		//借书管理
		{path:'/borrow',component:borrowManage},
		{path:'/borrow/borrowDetail',component:borrowDetail},

		//还书
		{path:'/returnBook',component:returnBook},
		//问卷调查
		{path:'/questionAlbum',component:questionAlbum},
		{path:'/questionAlbum/add',component:questionAlbum_add},
		{path:'/questionAlbum/edit/:id',component:questionAlbum_edit},
		{path:'/questionAlbum/detail/:id',component:questionAlbum_detail},
		//点点科创
       { path: '/scienceCreate', component: scienceCreate },
       {path:'/scienceCreate/addScienceLibrary',component:addScienceLibrary},
       {path:'/scienceCreate/editScienceLibrary/:id',component:editScienceLibrary},
       {path:'/scienceCreate/scienceList/:id',component:scienceList},
        {path:'/scienceCreate/scienceList/addScience/:id',component:addScience},
         {path:'/scienceCreate/scienceList/editScience/:id',component:editScience},
         {path:'/scienceCreate/scienceList/comments/:id',component:comments},
         //家长宝典
           { path: '/patriarchBookLibrary', component: patriarchBookLibrary },
            {path:'/patriarchBookLibrary/addPatriarchBookLibrary',component:addPatriarchBookLibrary},
             {path:'/patriarchBookLibrary/editPatriarchBookLibrary/:id',component:editPatriarchBookLibrary},
              {path:'/patriarchBookLibrary/patriarchBookList/:id',component:patriarchBookList},
               {path:'/patriarchBookLibrary/patriarchBookList/addPatriarchBook/:id',component:addPatriarchBook},
               {path:'/patriarchBookLibrary/patriarchBookList/editPatriarchBook/:id',component:editPatriarchBook},
               {path:'/patriarchBookLibrary/patriarchBookList/comment/:id',component:comment},
               //课程
               { path: '/courseList', component: courseList },
               { path: '/courseList/courseDetail/:id', component: courseDetail },
                { path: '/courseList/courseAdd', component: courseAdd },
                { path: '/courseList/courseEdit/:id', component: courseEdit },
                 { path: '/courseList/courseDetail/courseDetailAdd/:id', component: courseDetailAdd },
                 { path: '/courseList/courseDetail/courseDetailEdit/:id/:courseDetailId', component: courseDetailEdit },

               //终端管理
               { path: '/terminalVersion', component: terminalVersion },
               { path: '/terminalVersion/terminalVersionAdd', component: terminalVersionAdd },
            

];            