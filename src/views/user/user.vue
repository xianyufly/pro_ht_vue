<style type="text/css" scoped>
	
</style>
<template>
	<div>
		<div class="panel">
			<div class="panel-heading">
				<span class="panel-title">查询条件</span>
			</div>
			<div class="panel-body">
				<div class="row">
					<div class="col-md-3">
						<div class="form-group">
							<el-input type="text" v-model.trim="param['mapVo[loginName]']" placeholder="用户账号"></el-input>
						</div>
					</div>
					<div class="col-md-3">
						<div class="form-group">
							<el-input type="text" v-model.trim="param['mapVo[trueName]']" placeholder="真实姓名"></el-input>
						</div>
					</div>
					<div class="col-md-3">
						<div class="form-group">
							<el-input type="text" v-model.trim="param['mapVo[nickName]']" placeholder="用户昵称"></el-input>
						</div>
					</div>
					<div class="col-md-3">
						<div class="form-group">
							<el-button type="primary" @click="select(1)">查询</el-button>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-3">
						<div class="form-group">
							<el-input type="text" v-model.trim="param['mapVo[phone]']" placeholder="联系电话"></el-input>
						</div>
					</div>
					<div class="col-md-3">
						<div class="form-group">
							<el-cascader
							  placeholder="所属机构"
							  @change="handleCascaderChange"
							  :options="options"
							  filterable
							  :clearable="true"
							  change-on-select
							></el-cascader>
						</div>
					</div>
					<div class="col-md-3">
						<div class="form-group">
							<el-select v-model="param['mapVo[userType]']" clearable placeholder="用户类型">
								<el-option
								  v-for="item in userTypeList"
								  :key="item.itemCode"
								  :label="item.itemName"
								  :value="item.itemCode">
								</el-option>
							</el-select>
						</div>
					</div>
					<div class="col-md-3">
						<div class="form-group">
							<el-button
								v-func="'save_user'"
								type="primary"
								@click="addUserPage">新增用户
							</el-button>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<el-table
					      :data="tableData"
					      style="width: 100%">
					      <el-table-column
					      type="index"
					      width="66" label="序号">
						      <template scope="scope">
						      	 <span>{{(currentPage-1)*rows+scope.$index+1}}</span>
						      </template>
					      </el-table-column>
					      <!--<el-table-column
					        prop="userId"
					        label="注册码"
					        min-width="85">-->
					      </el-table-column>
					      <el-table-column
					        prop="loginName"
					        label="用户账号"
					        min-width="140">
					      </el-table-column>
					      <el-table-column
					        prop="trueName"
					        label="真实姓名"
					        min-width="100">
					      </el-table-column>
					      <el-table-column
					        prop="userTypeName"
					        label="用户类型"
					        min-width="125">
					      </el-table-column>
					      <!--<el-table-column
					        prop="nickName"
					        label="昵称"
					        min-width="120">
					      </el-table-column>-->
					      <el-table-column
					        prop="organName"
					        label="所属机构"
					        min-width="125">
					      </el-table-column>
					      <el-table-column
					        prop="areaName"
					        label="所属地区"
					        min-width="125">
					      </el-table-column>
					      <el-table-column
					        prop="compName"
					        label="所属学校"
					        min-width="100">
					      </el-table-column>
					      <el-table-column
					        prop="stateDate"
					        label="变更时间"
					        min-width="180">
					      </el-table-column>
					      <!--<el-table-column
					        prop="phone"
					        label="联系电话"
					        min-width="140">
					      </el-table-column>-->
					      <el-table-column fixed="right"  min-width="140"
					      	label="操作"
					      	>
						      <template scope="scope">
						        <el-button type="text"
						          v-func="'update_user'"
						          size="small"
						          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
						        <el-button
						          v-func="'delete_user'"
						          size="small"
						          type="text"
						          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
						      	<el-button type="text"
						      	  v-func="'get_user'"
						          size="small"
						          @click="handleDetail(scope.$index, scope.row)">详情</el-button>
						        <el-button type="text"
						          v-func="'resetPassword_user'"
						          size="small"
						          @click="handleResetPwd(scope.$index, scope.row)">重置密码</el-button>
						        <el-button type="text"
						          v-func="'assignRole_user'"
						          size="small"
						          @click="handleAssignRole(scope.$index, scope.row)">分配角色</el-button>
						      </template>
						    </el-table-column>
					    </el-table>
					</div>
					<div class="pager-box">
				    	<el-pagination
					      @size-change="handleSizeChange"
					      @current-change="handleCurrentChange"
					      :current-page="currentPage"
					      :page-sizes="[10,20,30,50]"
					      :page-size="rows"
					      layout="total, sizes, prev, pager, next, jumper"
					      :total="totals">
					    </el-pagination>
				    </div>
				</div>
			</div>
		</div>
		<!-- 新增/编辑用户对话窗 -->
		<el-dialog v-bind:title="formTitle" :visible.sync="dialogFormVisible"
		 size="tiny" top="1%" @close="clearForm('saveData')">
		  <el-form :model="saveData" :rules="rules" ref="saveData">
		    <el-form-item label="用户账号" prop="loginName" :label-width="formLabelWidth" required>
		      <el-input v-model.trim="saveData.loginName" placeholder="手机号码或邮箱"></el-input>
		    </el-form-item>
		    <el-form-item label="真实姓名" prop="trueName" :label-width="formLabelWidth">
		      <el-input v-model.trim="saveData.trueName"></el-input>
		    </el-form-item>
		    <el-form-item label="用户类型" prop="userType" :label-width="formLabelWidth">
		      <el-select v-model="saveData.userType" clearable placeholder="请选择用户类型">
				<el-option
				  v-for="item in userTypeList"
				  :key="item.itemCode"
				  :label="item.itemName"
				  :value="item.itemCode">
				</el-option>
			</el-select>
		    </el-form-item>
		    <el-form-item label="所属区划" prop="areaArray" :label-width="formLabelWidth">
		       <el-cascader
		       	  v-model="saveData.areaArray"
				  placeholder="请选择所属区划"
				  @change="handleCascaderAreaChange_add"
				  :options="saveDataAreaOptions"
				  filterable
				  :clearable="true"
				  change-on-select
				></el-cascader>
		    </el-form-item>
		    <el-form-item label="所属机构" prop="orgArray" :label-width="formLabelWidth">
		    	<el-cascader
		    	  v-model="saveData.orgArray"
				  placeholder="请选择所属机构"
				  @change="handleCascaderOrgChange_add"
				  :options="saveDataOrgOptions"
				  filterable
				  :clearable="true"
				  change-on-select
				></el-cascader>
		    </el-form-item>
		    <el-form-item label="联系电话" prop="phone" :label-width="formLabelWidth">
		      <el-input v-model.trim="saveData.phone" auto-complete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="身份证号" prop="credNo" :label-width="formLabelWidth">
		      <el-input v-model.trim="saveData.credNo"></el-input>
		    </el-form-item>
		    <el-form-item label="备注" prop="memo" :label-width="formLabelWidth">
		      <el-input type="textarea" v-model.trim="saveData.memo"></el-input>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取消</el-button>
		    <el-button type="primary" @click="submitAddData('saveData')">确 定</el-button>
		  </div>
		</el-dialog>
		<!-- 用户详情对话窗 -->
		<el-dialog title="用户详情" :visible.sync="detailVisible"
		 size="small" top="1%">
		  <el-form :inline="true" :model="detailData" ref="detailData">
		  	<el-form-item label="注册码" :label-width="formLabelWidth">
		      <el-input :readonly="true" v-model="detailData.userId" ></el-input>
		    </el-form-item>
		    <el-form-item label="用户积分" :label-width="formLabelWidth">
		      <el-input :readonly="true" v-model="detailData.credits" ></el-input>
		    </el-form-item>
		    <el-form-item label="用户账号" :label-width="formLabelWidth">
		      <el-input :readonly="true" v-model.trim="detailData.loginName" ></el-input>
		    </el-form-item>
		    <el-form-item label="真实姓名" :label-width="formLabelWidth">
		      <el-input :readonly="true" v-model.trim="detailData.trueName"></el-input>
		    </el-form-item>
		    <el-form-item label="用户等级" :label-width="formLabelWidth">
		      <el-input :readonly="true" v-model.trim="detailData.levalName"></el-input>
		    </el-form-item>
		    <el-form-item label="昵称" :label-width="formLabelWidth">
		      <el-input :readonly="true" v-model.trim="detailData.nickname"></el-input>
		    </el-form-item>
		    <el-form-item label="身份证号" :label-width="formLabelWidth">
		      <el-input :readonly="true" v-model.trim="detailData.credNo"></el-input>
		    </el-form-item>
		    <el-form-item label="所属区划" :label-width="formLabelWidth">
		      <el-input :readonly="true" v-model.trim="detailData.areaName"></el-input>
		    </el-form-item>
		    <el-form-item label="所属机构" :label-width="formLabelWidth">
		      <el-input :readonly="true" v-model.trim="detailData.organName"></el-input>
		    </el-form-item>
		    <el-form-item label="联系电话" :label-width="formLabelWidth">
		      <el-input :readonly="true" v-model.trim="detailData.phone" auto-complete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="所属学校" :label-width="formLabelWidth">
		      <el-input :readonly="true" v-model.trim="detailData.compName"></el-input>
		    </el-form-item>
		    <el-form-item label="用户类型" :label-width="formLabelWidth">
		      <el-input :readonly="true" v-model.trim="detailData.userTypeName"></el-input>
		    </el-form-item>
		    <el-form-item label="备注" :label-width="formLabelWidth">
		      <el-input type="textarea" v-model.trim="detailData.memo" :readonly="true"></el-input>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="detailVisible = false">关闭</el-button>
		  </div>
		</el-dialog>
		<!-- 分配角色对话窗 -->
		<el-dialog title="分配角色" :visible.sync="assignRoleVisible"
		 size="tiny" top="1%">
		  <el-form :model="assignRoleData" ref="assignRoleData">
		    <el-form-item label="用户账号" :label-width="formLabelWidth">
		      <el-input :readonly="true" v-model.trim="assignRoleData.loginName" ></el-input>
		    </el-form-item>
		    <el-form-item label="真实姓名" :label-width="formLabelWidth">
		      <el-input :readonly="true" v-model.trim="assignRoleData.trueName"></el-input>
		    </el-form-item>
		    <el-form-item label="所属机构" :label-width="formLabelWidth">
		      <el-input :readonly="true" v-model.trim="assignRoleData.organName"></el-input>
		    </el-form-item>
		    <el-form-item label="角色(可多选)" :label-width="formLabelWidth">
			    <el-select @change="roleChange" v-model="rolesArr" multiple placeholder="请选择">
				    <el-option
				      v-for="item in roleOptions"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>
			</el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="assignRoleVisible = false">取消</el-button>
		    <el-button type="primary" @click="submitAssignRoleData('assignRoleData')">确 定</el-button>
		  </div>
		</el-dialog>
	</div>
 </template>
<script type="text/javascript">
	import user_services from './services/user.js'
	import area_services from '../area/services/area.js'
	import organ_services from '../organ/services/organ.js'
	import role_services from '../role/services/role.js'
	export default {
		data () {
			var uniqueLoginName = (rule, value, callback) => {
				let _vue = this;
				var reg = /^1[34578]\d{9}$/;
				var reg2 = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
		        if (value === '') {
		          return callback(new Error('用户账号不能为空'));
		        }
		        
		          if (!reg.test(value) && !reg2.test(value)) {
		            callback(new Error('请输入正确的手机号码或邮箱'));
		          } else {
		          	_vue.tempData.loginName = value;
		          	_vue.tempData.userId = _vue.saveData.userId;
		          	user_services.user_unique(_vue.tempData,function(data){
		          		_vue.tempData.loginName = "";
		          		_vue.tempData.userId = "";
		          		if(data.data == 1){
		          			callback(new Error(data.desc));
		          		}else{
		          			callback();
		          		}
		          	});
		          }
		    };
		    var credNoValid = (rule, value, callback) => {
				let _vue = this;
				var reg = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
		        
		        if (value!=null&&value != '' && !reg.test(value)) {
		            callback(new Error('请输入正确的身份证号'));
		        }else{
		          	callback();
		        }
		    };
		    var phoneValid = (rule, value, callback) => {
				let _vue = this;
				var reg = /^\d{5,20}$/;
		        if (value != '' && !reg.test(value)) {
		            callback(new Error('5~20位数字'));
		        }else{
		          	callback();
		        }
		    };
			let temp=null;
			if(this.$store.state.cacheData.DATA[this.$route.path]){
				temp=JSON.parse(this.$store.state.cacheData.DATA[this.$route.path]);
			}
			return temp|| {
				currentPage:1,
				rows:10,
				totals:0,
		        value: '',
				param:{
					"mapVo[loginName]":'',
					"mapVo[userType]":'',
					array:[]
				},
				tableData: [],
				userTypeList: [],
				options: [],
		        dialogFormVisible: false,
		        detailVisible: false,
		        assignRoleVisible: false,
		        formLabelWidth: '120px',
		        formTitle:'',
		        saveData:{
		        	userId:"",
		        	loginName:"",
		        	trueName:"",
		        	userType:"",
		        	areaArray:[],
		        	orgArray:[],
		        	areaInfoId:"",
		        	organInfoId:"",
		        	phone:"",
		        	credNo:"",
		        	memo:'',
		        	compInfoId:'',
		        },
		        detailData:{},
		        assignRoleData:{
		        	"mapVo[userId]":'',
		        	array:[]
		        },
		        tempData:{},
		        userIdTemp:{
		        	userId:""
		        },
		        saveDataOrgOptions:[],
		        saveDataAreaOptions:[],
		        rules: {
		        	loginName: [
			            { validator: uniqueLoginName, trigger: 'blur' }
			        ],
		        	trueName: [
		        		{ required: true, message: '请输入真实姓名', trigger: 'blur' },
		        		{ max: 50, message: '长度最多 50 个字符', trigger: 'blur' }
		        	],
		        	userType: [
		        		{ required: true, message: '请选择用户类型', trigger: 'change' }
		        	],
		        	phone: [
		        		{ validator: phoneValid, trigger: 'blur' }
		        	],
		        	credNo: [
		        		{ validator: credNoValid, trigger: 'blur' }
		        	]
		        },
		        areaIdTemp:{
		        	"mapVo[areaCode]":'',
		        	//flag标志位不为空表示取到完整地区数组，否则只取到上级
		        	"mapVo[flag]":'1'
		        },
		        orgIdTemp:{
		        	organInfoId:""
		        },
		        roleOptions: [],
		        rolesArr: []
			}
		},
		beforeRouteLeave (to, from, next) {
			//缓存查询对象
			let data={
			};
			data[from.path]=JSON.stringify(this.$data);
			this.$store.dispatch('SET_DATA',data);
			next();
		},
		computed:{
			
		},
		mounted () {
		 	this.select();
		 	this.getUserTypeList();
		 	this.initCascaderOrgData();	 	
	   	},
	   	watch:{
	   	},
		methods:{
            handleSizeChange(val){
            	this.rows=val;
				this.select();
			},
			handleCurrentChange(currentPage){
				this.currentPage=currentPage;
				this.select();
			},
            select(currentPage){
	   			let _vue=this;
	   			if(currentPage){	
					_vue.currentPage=currentPage;	
				}
	   			_vue.param["page"]=_vue.currentPage;
				_vue.param["rows"]=_vue.rows;
	   			user_services.user_select(_vue.param,function(data){
	   				_vue.tableData=data.data.rows;
	   				_vue.totals=data.data.totals;
	   			});
            },
            getUserTypeList(){
            	let _vue=this;
            	user_services.user_getUserTypeList('',function(data){
	   				_vue.userTypeList=data.data;
	   			});
            },
            addUserPage(){
            	let _vue = this;
            	_vue.formTitle = "新增用户";
            	_vue.dialogFormVisible = true;
            	_vue.addPageInitCascaderOrgData();
            	_vue.addPageInitCascaderAreaData();
            },
            initCascaderOrgData(){
            	var _vue=this;
				organ_services.organ_initCascaderData('',function(data){
	   				_vue.options=data.data;
	   			});
            },
            addPageInitCascaderOrgData(){
            	var _vue=this;
				organ_services.organ_initCascaderData('',function(data){
	   				_vue.saveDataOrgOptions=data.data;
	   						console.log(_vue.saveDataOrgOptions)

	   			});
            },
            addPageInitCascaderAreaData(){
            	var _vue =this;
				area_services.area_initCascaderData('',function(data){
	   				_vue.saveDataAreaOptions=data.data;
	   			});
            },
            handleCascaderChange(value){
            	var _vue=this;
            	_vue.param.array=value;
            },
            handleCascaderOrgChange_add(value){
            	if (value!=null && value.length>0) {
            		var _vue=this;
            		console.log(value);
            		var size = value.length;
            		var orgId = value[size-1];
            		console.log(orgId);
            		_vue.saveData.organInfoId = orgId;
            	}
            },
            handleCascaderAreaChange_add(value){
            	if (value!=null && value.length>0) {
            		var _vue=this;
            		var size = value.length;
            		var areaId = value[size-1];
            		console.log(areaId);
            		_vue.saveData.areaInfoId = areaId;
            	}
            },
            submitAddData(formName){
            	let _vue=this;
            	_vue.$refs[formName].validate((valid) => {
		          if (valid) {
		          	_vue.saveData.areaArray=[];
            		user_services.user_saveData(_vue.saveData,function(data){
		   				if(data.error==0){
							_vue.$message({
                              type:'success',
                              duration:2000,
                              showClose: true,
                              message: data.desc
                            });
                            _vue.dialogFormVisible=false;
                            _vue.clearForm(formName);
                            _vue.select();
						}else{
							_vue.$message({
                              type:'error',
                              duration:2000,
                              showClose: true,
                              message: data.desc
                            });
						}
		   			});
		          } else {
		            return false;
		          }
		        });
            },
            clearForm(formName){
            	let _vue = this;
            	_vue.resetForm(formName);
            	_vue.saveData.userId = null;
            	_vue.saveData.areaInfoId = null;
		        _vue.saveData.organInfoId = null;
		        _vue.saveData.compInfoId = null;
            },
            resetForm(formName) {
		        this.$refs[formName].resetFields();
		    },
			handleEdit(index,row){
				let _vue = this;
				var userId = row.userId;
            	_vue.formTitle = "修改用户信息";
            	_vue.dialogFormVisible = true;
            	
            	_vue.addPageInitCascaderAreaData();
            	_vue.addPageInitCascaderOrgData();
            	_vue.userIdTemp["userId"] = userId;
            	user_services.user_get(_vue.userIdTemp,function(data){
	   				_vue.userIdTemp["userId"] = "";
	   				data.data.orgArray=[];
	   				_vue.saveData = data.data;
	   				_vue.saveData.userType = data.data.userType+"";
	   				var areaId = _vue.saveData.areaInfoId;
   					if(areaId != null && areaId !=""){
	   					_vue.areaIdTemp['mapVo[areaCode]'] = areaId;
			   			area_services.area_get(_vue.areaIdTemp,function(data){
			   				if(data.error==0){
			   					_vue.saveData.areaArray = data.data.array;
			   				}else{
								_vue.$message.error('系统异常');
							}
			   			});
	   				}
	   				var orgId = _vue.saveData.organInfoId;
	   				if(orgId != null && orgId !=""){
	   					_vue.orgIdTemp.organInfoId = orgId;
	   					organ_services.organ_get(_vue.orgIdTemp,function(data){
	   						console.log(_vue.saveDataOrgOptions)
	   						if(data.error==0){

	   						

	   						_vue.saveData.orgArray = data.data.orgIdArr;

	   						}
	   					});
	   				}

	   			});
			},
			handleDetail(index,row){
				let _vue = this;
				var userId = row.userId;
            	_vue.detailVisible = true;
            	_vue.userIdTemp["userId"] = userId;
            	user_services.user_getAsso(_vue.userIdTemp,function(data){
	   				_vue.userIdTemp["userId"] = "";
	   				_vue.detailData = data.data;
	   			});
			},
			handleResetPwd(index,row){
				let _vue = this;
				_vue.$confirm('您确定要重置该用户的密码吗?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		        	var userId = row.userId;
	            	_vue.userIdTemp["userId"] = userId;
	            	user_services.user_resetPwd(_vue.userIdTemp,function(data){
		   				_vue.userIdTemp["userId"] = "";
		   				if (data.error == 0) {
		   					_vue.$message({
					            type: 'success',
					            message: '操作成功!'
					        });
		   				}else{
		   					_vue.$message({
					            type: 'error',
					            message: '操作失败!'
					        });
		   				}
		   			});
		        }).catch(() => {
		          _vue.$message({
		            type: 'info',
		            message: '已取消'
		          });          
		        });
			},
			handleDelete(index,row){
				let _vue = this;
				_vue.$confirm('您确定要删除该用户吗?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		        	var userId = row.userId;
	            	_vue.userIdTemp["userId"] = userId;
	            	user_services.user_delete(_vue.userIdTemp,function(data){
		   				_vue.userIdTemp["userId"] = "";
		   				if (data.error == 0) {
		   					_vue.$message({
					            type: 'success',
					            message: '删除成功!'
					        });
					        _vue.select();
		   				}else{
		   					_vue.$message({
					            type: 'error',
					            message: '删除失败!'
					        });
		   				}
		   			});
		        }).catch(() => {
		          _vue.$message({
		            type: 'info',
		            message: '已取消'
		          });          
		        });
			},
			handleAssignRole(index,row){
				let _vue = this;
				var userId = row.userId;
				_vue.userIdTemp["userId"] = userId;
            	user_services.user_getAsso(_vue.userIdTemp,function(data){
	   				_vue.assignRoleData = data.data;
	   			});
	   			//角色下拉框
	   			role_services.role_getOptions({},function(data){
	   				_vue.roleOptions = data.data;
	   				if (data.data.length > 0) {
	   					//回显
			   			user_services.userRole_getByUserId(_vue.userIdTemp,function(data){
			   				_vue.userIdTemp["userId"] = "";
			   				console.log(data.data);
			   				_vue.rolesArr = data.data;
			   			});
			   		}else{
			   			_vue.rolesArr = [];
			   		}
	   			});
	   			_vue.assignRoleVisible = true;
			},
			roleChange(value){
				let _vue = this;
				_vue.assignRoleData.array = value;
				console.log(_vue.assignRoleData.array);
			},
			submitAssignRoleData(formName){
				let _vue = this;
				_vue.assignRoleData['mapVo[userId]'] = _vue.assignRoleData.userId;
				user_services.userRole_save(_vue.assignRoleData,function(data){
	   				_vue.assignRoleData.array = [];
	   			});
	   			_vue.assignRoleVisible = false;
			}

		}
	}
</script>