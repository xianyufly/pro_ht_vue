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
								
								<el-input v-model="param['mapVo[roleName]']" placeholder="角色名称"  type="text"></el-input>
								</div>
							</div>
							<div class="col-md-1">
								<div class="form-group">
								<el-button type="primary" @click="select">查询</el-button>
								</div>
							</div>
							<div class="col-md-1">
								<div class="form-group">
								<el-button type="primary" @click="reset()">新增角色</el-button>
								</div>
							</div>
					</div>
					<hr width="100%" color="#F0F0F0" style="margin-top: 2px;" />
					
					<div class="row"> 
						<div class="col-md-12">
							  <el-table
						      :data="tableData"
						      style="width: 100%">
						      <el-table-column
						       type="index"
						       width="100"
						       label="序号">
							      <template scope="scope">
							      	 <span>{{(currentPage-1)*rows+scope.$index+1}}</span>
							      </template>
						      </el-table-column>
						      <el-table-column
						        prop="roleName"
						        label="角色名称"
						        >
						      </el-table-column>
						      <el-table-column
						        prop="roleDesc"
						        label="描述信息"
						        >
						      </el-table-column>
						      <el-table-column
						        prop="roleDate"
						        label="创建时间"
								
						        >
						      </el-table-column>
						      <el-table-column label="操作">
							      <template scope="scope">
							        <el-button
							          type="text"
							          v-func="'update_roleInfo'"
							          size="small"
							          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
							        <el-button
							          v-func="'delete_roleInfo'"
							          size="small"
							          type="text"
							          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
							        <el-button
							          type="text"
							          v-func="'assignMenu_roleInfo'"
							          size="small"
							          @click="handleMenu(scope.$index, scope.row)">分配菜单</el-button>
							        <el-button
							          type="text"
							          v-func="'assignFunc_roleInfo'"
							          size="small"
							          @click="handleFunction(scope.$index, scope.row)">分配功能</el-button>
							      </template>
							   </el-table-column>
						    </el-table>
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
		</div>
		<el-dialog v-bind:title="formTitle" :visible.sync="dialogFormVisible" >
		  <el-form :model="form" :rules="rules" ref="form">
		    <el-form-item label="角色名称" :label-width="formLabelWidth" prop="name">
		      <el-input v-model="form.name" ></el-input>
		    </el-form-item>
		   	<el-form-item label="描述信息" :label-width="formLabelWidth" prop="desc">
		      <el-input v-model="form.desc" ></el-input>
		    </el-form-item>
		    <el-form-item label="用户类型" :label-width="formLabelWidth" prop="roleType">
		      <el-input v-model.number="form.roleType" ></el-input>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="addRole('form')">保存</el-button>
		  </div>
		</el-dialog>
		<div style="height:300px;">
		<el-dialog :title="menuTitle" :visible.sync="dialogMenuVisible">
		  <el-tree
			  :data="data2"
			  ref="tree"
			  show-checkbox
			  node-key="module_id"
			  :accordion="accordionVal"
			  @check-change="checkChange"
			  :default-expanded-keys="[]"
			  :default-checked-keys="checkedKeys"
			  :props="defaultProps">
			</el-tree>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogMenuVisible = false">取 消</el-button>
		    <el-button type="primary" @click="handleMenuSave()">保存</el-button>
		  </div>
		</el-dialog>
		</div>
	</div>

</template>

<script type="text/javascript">

	import role_services from './services/role.js'
	export default {
		data () {
			var checkUserType = (rule, value, callback) => {
				console.log('---------value:'+value+Number.isInteger(value));
		        if (!value) {
		          return callback(new Error('用户类型不能为空'));
		        }
		        setTimeout(() => {
		          if (!Number.isInteger(value)) {
		            callback(new Error('请输入数字值'));
		          } else {
		            if (value < 2 || value>200) {
		              callback(new Error('用户类型须在2-200之间'));
		            } else {
		              callback();
		            }
		          }
		        }, 1000);
		      };
		     var outBlank = (rule, value, callback) => {
		        if (!value || value.trim()=='') {
		          return callback(new Error(''));
		        }else{
		        	return callback();
		        }
		      };

		     
			let temp=null;
			if(this.$store.state.cacheData.DATA[this.$route.path]){
				temp=JSON.parse(this.$store.state.cacheData.DATA[this.$route.path]);
			}
			return temp|| {
				options: [{
		          value: '1',
		          label: '老师'
		        }, {
		          value: '2',
		          label: '家长'
		        }, {
		          value: '3',
		          label: '行政老师'
		        }, {
		          value: '4',
		          label: '管理员'
		        }],
				currentPage:1,
				rows:10,
				totals:0,
		        value: '',
		        tableData:[],
			    param:{
					"mapVo[roleName]":'',
					"mapVo[roleId]":'',
				},
				dialogFormVisible: false,
		        form: {
		          name: '',
		          desc: '',
		          roleType:'',
		          "mapVo[roleName]":'',
		          "mapVo[roleDesc]":'',
		          "mapVo[roleType]":'',
		          "mapVo[roleId]"  :'',
		          "mapVo[opType]":''
		        },
		        formLabelWidth: '120px',
		        dialogMenuVisible:false,  //菜单对话框
		        data2:[{
		        	"module_id":1,
		        	"text":'菜单',
		        	"level":'1'
		        }],
		        accordionVal:true,
		        defaultProps: {
		          children: 'children',
		          label: 'text'
		        },
		        formTitle:'',
		        checkedKeys:'',//选中的key
		       
		        treebean:{
		        	"mapVo[roleId]":'',
		        	"mapVo[treeNodes]":'',
		        	array:[],
		        	"mapVo[opType]":''
		    	},
		    	menuTitle:'',
		    	rules: {
		            name: [
		              { required: true,validator:outBlank, message: '请输入角色名称', trigger: 'blur' },
		              { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
		            ],
		            desc: [
		              { required: true, validator:outBlank,message: '请输入描述信息', trigger: 'blur' }
	            	],
	            	roleType: [
		              { required: true, validator: checkUserType , trigger: 'blur' }
		            ]
	        	}
	        	

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
	   	},
	   	watch:{
			
	   		value:function(){
	   			var selectValue=this.value;
	   			let _vue=this;
	   			//alert(this.value);
	   			
	   			role_services.role_select(_vue.param,function(data){
	   				
	   				alert(data.desc);
	   				_vue.tableData=data.data;
	   			});
	   		}
	   	},
		methods:{
			checkChange(){
				// alert('111');
			},
			reset(vform){
				var _vue = this;
				_vue.form.name='';
				_vue.form.desc='';
				_vue.form.roleType='';
				_vue.form['mapVo[opType]']=0;//类型为添加
				_vue.form['mapVo[roleId]']='';

				_vue.formTitle='新增角色信息';
				this.dialogFormVisible = true;

			},
			handleSizeChange(val){
				//选择每页10/20/30/50条数据时触发
				this.rows=val;
				this.select();
			},
			handleCurrentChange(currentPage){
				this.currentPage=currentPage;
				this.select();
			},
			select(){
				let _vue=this;
				_vue.param["page"]=_vue.currentPage;
				_vue.param["rows"]=_vue.rows;
				_vue.param['mapVo[roleName]']=_vue.param['mapVo[roleName]'].trim();
	   			role_services.role_select(_vue.param,function(data){
	   				_vue.tableData=data.data.rows;
	   				_vue.totals=data.data.totals;
	   			});
			},
			addRole(formName){
				let _vue=this;

				_vue.$refs[formName].validate((valid) => {
					console.log('----------------valid:'+valid);
		          if (valid) {
		          	console.log("-----------valid submit");
		            _vue.form['mapVo[roleName]']=_vue.form.name;
					_vue.form['mapVo[roleDesc]']=_vue.form.desc;
					_vue.form['mapVo[roleType]']=_vue.form.roleType;

						role_services.role_add(_vue.form,function(data){
	   					if(data.error==0){
	   						if (_vue.form['mapVo[opType]']==1) {
	   							_vue.$message({
						          message: '恭喜你，修改成功!!',
						          type: 'success'
						        });
	   						}else{
	   							_vue.$message({
						          message: '恭喜你，添加成功!!',
						          type: 'success'
						        });
	   						}
							
					        _vue.dialogFormVisible = false;
					        _vue.select();
							
						}else{
							_vue.$message.error('添加失败,请检查输入的数据~~');
						}
	   				
	   					});
					
		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        });
				
				console.log('22');
			
			},
			handleMenu(ind,row) {//
				var _vue=this;
				var roleId=row.roleId;
				_vue.param['mapVo[roleId]']=roleId;
				_vue.checkedKeys='';//先置空
				_vue.menuTitle='分配菜单';
				_vue.treebean['mapVo[opType]']=0;
				role_services.role_tree(_vue.param,function(data){
						   					if(data.error==0){
												_vue.data2=data.data.menu;
												_vue.checkedKeys=data.data.checkedKeys;
												_vue.dialogMenuVisible = true;
											}else{
												_vue.$message.error('操作出错了TT');
											}
										});
            },	
            handleMenuSave() {//
				var _vue=this;
				_vue.treebean['mapVo[roleId]']=_vue.param['mapVo[roleId]'];//赋值roleId

				var treeNodes=this.$refs.tree.getCheckedKeys();
				_vue.treebean['mapVo[treeNodes]']=treeNodes+'';
				// alert(_vue.treebean['mapVo[treeNodes]']);
				// var a=this.$refs.tree.getCheckedNodes();
				// for (var i = a.length - 1; i >= 0; i--) {
				// 	alert(a[i]['text']+a[i]['module_id']);
				// }

				role_services.role_treeSave(_vue.treebean,function(data){
						   					if(data.error==0){
						   						_vue.$message({
										          message: '恭喜你，保存成功!!',
										          type: 'success'
										        });
										        _vue.treebean['array']='';
												_vue.dialogMenuVisible = false;
											}else{
												_vue.$message.error('操作出错了TT');
											}
										});
            },	
            handleFunction(ind,row) {
				var _vue=this;
				var roleId=row.roleId;
				_vue.param['mapVo[roleId]']=roleId;
				_vue.checkedKeys='';//先置空
				_vue.menuTitle='分配功能';
				_vue.treebean['mapVo[opType]']=1;
				role_services.role_treeFunction(_vue.param,function(data){
						   					if(data.error==0){
												_vue.data2=data.data.menu;
												_vue.checkedKeys=data.data.checkedKeys;
												_vue.treebean['array']=data.data.AllFunctionList+"";
												//console.log(data.data.AllFunctionList);
												_vue.dialogMenuVisible = true;
											}else{
												_vue.$message.error('操作出错了TT');
											}
										});
            },
			handleEdit(ind,row) {//添加返回参数
				var _vue=this;
				var roleId=row.roleId;
				_vue.param['mapVo[roleId]']=roleId;
				_vue.form['mapVo[opType]']=1;//编辑类型 保存用
				_vue.form['mapVo[roleId]']=roleId;
				_vue.formTitle='编辑角色信息';
				role_services.role_get(_vue.param,function(data){
						   					if(data.error==0){
												_vue.form.name=data.data.roleName;
												_vue.form.desc=data.data.roleDesc;
												_vue.form.roleType=data.data.roleType;
												_vue.dialogFormVisible = true;
											}else{
												_vue.$message.error('操作出错了~~');
											}
										});
            },	
            handleDelete(ind,row) {
	        	var _vue=this;

 				bootbox.confirm({
		       					size: "small",
								message: "你确定删除吗?",
								callback: function(result) {
									if(result){
										//点击确定
										var roleId=row.roleId;
										console.log("确定了");
										
										_vue.param['mapVo[roleId]']=roleId;
										//alert(_vue.param['mapVo[roleId]']);
										role_services.role_delete(_vue.param,function(data){
						   					if(data.error==0){
												_vue.$message({
										          message: '恭喜你，操作成功!!',
										          type: 'success'
										        });
										        _vue.select();
												
											}else{
												_vue.$message.error('操作出错了~~');
											}
										});

									}else{
										//点击取消
										console.log("取消了")
										_vue.$message.error('已取消操作');
									}
								}
							});
	      }

		}
	}

</script>