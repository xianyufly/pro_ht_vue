webpackJsonp([3],{"3SZ7":function(t,e,a){t.exports={default:a("dKWS"),__esModule:!0}},"3WR5":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Edqs"),l=a.n(s),i=a("u6qr"),r=a.n(i),o=a("3SZ7"),n=a.n(o),c=a("V80C");e.default={data:function(){var t=null;return this.$store.state.cacheData.DATA[this.$route.path]&&(t=JSON.parse(this.$store.state.cacheData.DATA[this.$route.path])),t||{multiple:!0,filterable:!0,relas:[],subjectList:[],tagList:[],options:[],editData:{},dialogVisible:!1,title:"",currentPage:1,rows:10,totals:0,tableData:[]}},beforeRouteLeave:function(t,e,a){var s={};s[e.path]=n()(this.$data),this.$store.dispatch("SET_DATA",s),a()},computed:{},mounted:function(){this.selectData(),this.getTagList(),this.getSubjectList()},methods:{clearError:function(){this.$validator.errors.items=[]},getSubjectList:function(){var t=this;c.a.templateMng_menuList({subType:1},function(e){1e4==e.error&&(t.subjectList=e.data.subjectExts)})},getTagList:function(){var t=this;c.a.templateMng_tagList({},function(e){1e4==e.error&&(t.tagList=e.data.tagExts)})},fixHeight:function(){setTimeout(function(){var t=$(window).height(),e=$(".el-dialog__footer").height();$("#iframe").attr("height",t-e+"px")},500)},editTemplate:function(){var t=this,e=this,a=[];if(0==e.relas.length)return void e.$message({type:"error",duration:2e3,showClose:!0,message:"请选择标签"});var s=!0,l=!1,i=void 0;try{for(var o,n=r()(e.relas);!(s=(o=n.next()).done);s=!0){var d=o.value,u={tagId:d,resId:e.editData.tid};a.push(u)}}catch(t){l=!0,i=t}finally{try{!s&&n.return&&n.return()}finally{if(l)throw i}}this.$validator.validateAll().then(function(){0==t.$validator.errors.items.length&&c.a.templateMng_editTemplate({res:e.editData,relas:a},function(t){1e4==t.error?(e.$message({type:"success",duration:2e3,showClose:!0,message:t.desc}),e.relas=[],e.dialogVisible=!1,e.selectData()):e.$message({type:"error",duration:2e3,showClose:!0,message:t.desc})})}).catch(function(){})},handleEdit:function(t,e){this.editData=l()({},e),this.dialogVisible=!0,this.relas=e.tagList},handleDelete:function(t,e){var a=this;bootbox.confirm({size:"small",message:"你确定删除吗?",callback:function(t){t&&c.a.templateMng_deleteTemplate({tid:e.tid},function(t){1e4==t.error?(a.$message({type:"success",duration:2e3,showClose:!0,message:t.desc}),a.selectData()):a.$message({type:"error",duration:2e3,showClose:!0,message:t.desc})})}})},handleSizeChange:function(t){this.rows=t,this.selectData()},handleCurrentChange:function(t){this.currentPage=t,this.selectData()},selectData:function(t){var e=this;t&&(e.currentPage=t);var a={title:e.title,page:e.currentPage,rows:e.rows};c.a.templateMng_templateData(a,function(t){1e4==t.error&&(e.tableData=t.data.rows,e.totals=t.data.totals)})}}}},CiWC:function(t,e,a){a("mBwc");var s=a("8+ys")(a("3WR5"),a("Vqr6"),"data-v-6afa6e21",null);t.exports=s.exports},V80C:function(t,e,a){"use strict";var s=a("XRFq");e.a={templateMng_templateData:function(t,e){s.a.post("templateMng/plat/templateData",t,e)},templateMng_editTemplate:function(t,e){s.a.post("templateMng/plat/editTemplate",t,e)},templateMng_deleteTemplate:function(t,e){s.a.post("templateMng/plat/deleteTemplate",t,e)},templateMng_menuList:function(t,e){s.a.post("templateMng/plat/menuList",t,e)},templateMng_tagList:function(t,e){s.a.post("templateMng/plat/tagList",t,e)}}},Vqr6:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"panel"},[t._m(0),t._v(" "),a("div",{staticClass:"panel-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("el-input",{attrs:{placeholder:"模板名称"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)]),t._v(" "),a("div",{staticClass:"col-md-1"},[a("div",{staticClass:"form-group"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.selectData(1)}}},[t._v("查询")])],1)])]),t._v(" "),a("hr",{staticStyle:{"margin-top":"2px"},attrs:{width:"100%",color:"#F0F0F0"}}),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{type:"index",width:"66",label:"序号"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s((t.currentPage-1)*t.rows+e.$index+1))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"title",label:"模板名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"subjectName",label:"所属栏目"}}),t._v(" "),a("el-table-column",{attrs:{prop:"code",label:"模板编码"}}),t._v(" "),a("el-table-column",{attrs:{prop:"viewUrl",label:"预览"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{attrs:{href:e.row.viewUrl,target:"_blank"}},[t._v("预览")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"pager-box"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,20,30,50],"page-size":t.rows,layout:"total, sizes, prev, pager, next, jumper",total:t.totals},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)])])]),t._v(" "),a("el-dialog",{attrs:{title:"模板编辑",visible:t.dialogVisible,size:"full"},on:{close:t.clearError,open:t.fixHeight,"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-horizontal"},[a("div",{class:{"row form-group":!0,"has-error":t.errors.has("moduleName")}},[a("label",{staticClass:"col-sm-4 control-label"},[t._v("模板名称:")]),t._v(" "),a("div",{staticClass:"col-sm-8"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.editData.title,expression:"editData.title"},{name:"validate",rawName:"v-validate",value:"required|min:2|max:50",expression:"'required|min:2|max:50'"}],staticClass:"form-control",attrs:{type:"text","data-vv-as":"模板名称",name:"moduleName"},domProps:{value:t.editData.title},on:{input:function(e){e.target.composing||t.$set(t.editData,"title",e.target.value)}}}),t._v(" "),t.errors.has("moduleName")?a("div",{staticClass:"help-block"},[t._v(t._s(t.errors.first("moduleName")))]):t._e()])]),t._v(" "),a("div",{class:{"row form-group":!0,"has-error":t.errors.has("code")}},[a("label",{staticClass:"col-sm-4 control-label"},[t._v("模板编码:")]),t._v(" "),a("div",{staticClass:"col-sm-8"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.editData.code,expression:"editData.code"},{name:"validate",rawName:"v-validate",value:"required|min:2|max:10",expression:"'required|min:2|max:10'"}],staticClass:"form-control",attrs:{type:"text","data-vv-as":"模板编码",name:"code"},domProps:{value:t.editData.code},on:{input:function(e){e.target.composing||t.$set(t.editData,"code",e.target.value)}}}),t._v(" "),t.errors.has("code")?a("div",{staticClass:"help-block"},[t._v(t._s(t.errors.first("code")))]):t._e()])]),t._v(" "),a("div",{class:{"row form-group":!0,"has-error":t.errors.has("moduleName")}},[a("label",{staticClass:"col-sm-4 control-label"},[t._v("所属栏目:")]),t._v(" "),a("div",{staticClass:"col-sm-8"},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"所属栏目"},model:{value:t.editData.subjectCode,callback:function(e){t.$set(t.editData,"subjectCode",e)},expression:"editData.subjectCode"}},t._l(t.subjectList,function(t){return a("el-option",{key:t.code,attrs:{label:t.text,value:t.code}})}))],1)]),t._v(" "),a("div",{class:{"row form-group":!0,"has-error":t.errors.has("moduleName")}},[a("label",{staticClass:"col-sm-4 control-label"},[t._v("所属标签:")]),t._v(" "),a("div",{staticClass:"col-sm-8"},[a("el-select",{staticStyle:{width:"100%"},attrs:{multiple:t.multiple,filterable:t.filterable,placeholder:"所属标签"},model:{value:t.relas,callback:function(e){t.relas=e},expression:"relas"}},t._l(t.tagList,function(e){return a("el-option-group",{key:e.tid,attrs:{label:e.text}},t._l(e.children,function(t){return a("el-option",{key:t.tid,attrs:{label:t.text,value:t.tid}})}))}))],1)]),t._v(" "),a("div",{class:{"row form-group":!0,"has-error":t.errors.has("menuPath")}},[a("label",{staticClass:"col-sm-4 control-label"},[t._v("描述:")]),t._v(" "),a("div",{staticClass:"col-sm-8"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.editData.memo,expression:"editData.memo"},{name:"validate",rawName:"v-validate",value:"max:250",expression:"'max:250'"}],staticClass:"form-control",staticStyle:{height:"150px"},attrs:{"data-vv-as":"描述",name:"menuPath"},domProps:{value:t.editData.memo},on:{input:function(e){e.target.composing||t.$set(t.editData,"memo",e.target.value)}}}),t._v(" "),t.errors.has("menuPath")?a("div",{staticClass:"help-block"},[t._v(t._s(t.errors.first("menuPath")))]):t._e()])])]),t._v(" "),a("span",{staticClass:"dialog-footer",staticStyle:{"text-align":"right"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.editTemplate}},[t._v("确 定")])],1)]),t._v(" "),a("div",{staticClass:"col-sm-8"},[a("iframe",{attrs:{id:"iframe",src:t.editData.viewUrl,frameborder:"0",width:"100%"}})])])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel-heading"},[a("span",{staticClass:"panel-title"},[t._v("查询条件")])])}]}},dKWS:function(t,e,a){var s=a("hkgF"),l=s.JSON||(s.JSON={stringify:JSON.stringify});t.exports=function(t){return l.stringify.apply(l,arguments)}},mBwc:function(t,e,a){var s=a("tAVi");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("sAjz")("f523813e",s,!0)},tAVi:function(t,e,a){e=t.exports=a("yj8u")(),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"templateMng.vue",sourceRoot:""}])}});
//# sourceMappingURL=3.b8f98d85b7f9dd4f9065.js.map