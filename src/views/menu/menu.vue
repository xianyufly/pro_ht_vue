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
								<el-select v-model="pId" clearable placeholder="请选择父菜单">
								    <el-option
								      v-for="item in options"
								      :key="item.tid"
								      :label="item.text"
								      :value="item.tid">
								    </el-option>
								  </el-select>
								</div>
							</div>
							<div class="col-md-3">
								<div class="form-group">
								<el-select v-model="subType" clearable placeholder="菜单类型">
								    <el-option
								      v-for="item in subType_Options"
								      :key="item.id"
								      :label="item.text"
								      :value="item.id">
								    </el-option>
								  </el-select>
								</div>
							</div>
							<div class="col-md-1">
								<div class="form-group">
								<el-button type="primary" @click="selectData">查询</el-button>
								</div>
							</div>
							<div class="col-md-1">
								<div class="form-group">
								<el-button type="primary"
								 @click="saveDialogVisible=true">新增菜单</el-button>
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
						      width="66" label="序号">
							      <template scope="scope">
							      	 <span>{{(currentPage-1)*rows+scope.$index+1}}</span>
							      </template>
						      </el-table-column>
						      <el-table-column
						        prop="text"
						        label="菜单名称"
						        >
						      </el-table-column>
						      <el-table-column
						        prop="subType"
						        label="菜单类型"
						        >
						       <template scope="scope">
									<el-tag v-if="scope.row.subType==1" type="success">前端</el-tag>
									<el-tag v-if="scope.row.subType==0" type="info">后端</el-tag>
						        </template>
						      </el-table-column>
						      <el-table-column
						        prop="iconAddr"
						        label="菜单图标"
								align="center"
						        >
						         <template scope="scope">
						         	<i :class="'menu-icon fa '+scope.row.icon"></i>
							     </template>
						      </el-table-column>
						      <el-table-column
						        prop="href"
						        label="菜单路径"
						        >
						      </el-table-column>
						      <el-table-column
						        prop="sort"
						        label="排序值"
						        >
						      </el-table-column>
						      <el-table-column fixed="right" label="操作" min-width="50">
							      <template scope="scope">
							        <el-button type="text"
							          size="small"
							          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
							        <el-button
							          size="small"
							          type="text"
							          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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

		<!-- 窗体 -->
		<el-dialog @close="clearError"
	      title="新增菜单"
	      :visible.sync="saveDialogVisible"
	      size="tiny">
	      <div class="form-horizontal"  >
	        <div :class="{'row form-group':true,'has-error':errors.has('moduleName')}">
	            <label class="col-sm-4 control-label">菜单名称:</label>
	            <div class="col-sm-8">
	                <input type="text" v-model="saveData.text" v-validate="'required|min:2|max:50'" data-vv-as="菜单名称" name="moduleName" class="form-control">
	                <div class="help-block" v-if="errors.has('moduleName')">{{ errors.first('moduleName') }}</div>
	            </div>
	        </div>
	        <div :class="{'row form-group':true,'has-error':errors.has('code')}">
	            <label class="col-sm-4 control-label">菜单编码:</label>
	            <div class="col-sm-8">
	                <input type="text" v-model="saveData.code" v-validate="'required|min:2|max:10'" data-vv-as="菜单编码" name="code" class="form-control">
	                <div class="help-block" v-if="errors.has('code')">{{ errors.first('code') }}</div>
	            </div>
	        </div>
	        <div :class="{'row form-group':true,'has-error':errors.has('moduleName')}">
	            <label class="col-sm-4 control-label">上级菜单:</label>
	            <div class="col-sm-8">
	                <el-select v-model="saveData.pTid"  placeholder="请选择父菜单">
					    <el-option
					      v-for="item in options"
					      :key="item.tid"
					      :label="item.text"
					      :value="item.tid">
					    </el-option>
				  	</el-select>
	            </div>
	        </div>
	        <div :class="{'row form-group':true,'has-error':errors.has('subType')}">
	            <label class="col-sm-4 control-label">菜单类型:</label>
	            <div class="col-sm-8">
	                <el-select v-model="saveData.subType"  placeholder="请选择菜单类型">
					    <el-option
					      v-for="item in subType_Options"
					      :key="item.id"
					      :label="item.text"
					      :value="item.id">
					    </el-option>
				  	</el-select>
	            </div>
	        </div>
	        <div :class="{'row form-group':true,'has-error':errors.has('iconAddr')}">
	            <label class="col-sm-4 control-label">图标:</label>
	            <div class="col-sm-8">
	                <i :class="' fa '+saveData.icon"></i>
	                <el-button size="small" @click="showIconWindow(saveData)"
							         >更换图标</el-button>
	            </div>
	        </div>
	        <div :class="{'row form-group':true,'has-error':errors.has('menuPath')}">
	            <label class="col-sm-4 control-label">路径:</label>
	            <div class="col-sm-8">
	                <input type="text" v-model="saveData.href" v-validate="'max:100'" data-vv-as="路径" name="menuPath" class="form-control">
	                <div class="help-block" v-if="errors.has('menuPath')">{{ errors.first('menuPath') }}</div>
	            </div>
	        </div>
	        <div :class="{'row form-group':true,'has-error':errors.has('orderCode')}">
	            <label class="col-sm-4 control-label">排序值:</label>
	            <div class="col-sm-8">
	                <input type="text" v-model="saveData.sort" v-validate="'required|numeric|max:10'" data-vv-as="排序值" name="orderCode" class="form-control">
	                <div class="help-block" v-if="errors.has('orderCode')">{{ errors.first('orderCode') }}</div>
	            </div>
	        </div>
	        
	      </div>
	      <span slot="footer" class="dialog-footer">
	        <el-button @click="saveDialogVisible = false">取 消</el-button>
	        <el-button type="primary" @click="saveMenu" >确 定</el-button>
	      </span>
	    </el-dialog>

		<el-dialog @close="clearError"
	      title="菜单编辑"
	      :visible.sync="dialogVisible"
	      size="tiny">
	      <div class="form-horizontal"  >
	        <div :class="{'row form-group':true,'has-error':errors.has('moduleName')}">
	            <label class="col-sm-4 control-label">菜单名称:</label>
	            <div class="col-sm-8">
	                <input type="text" v-model="editData.text" v-validate="'required|min:2|max:50'" data-vv-as="菜单名称" name="moduleName" class="form-control">
	                <div class="help-block" v-if="errors.has('moduleName')">{{ errors.first('moduleName') }}</div>
	            </div>
	        </div>
	        <div :class="{'row form-group':true,'has-error':errors.has('code')}">
	            <label class="col-sm-4 control-label">菜单编码:</label>
	            <div class="col-sm-8">
	                <input type="text" v-model="editData.code" v-validate="'required|min:2|max:10'" data-vv-as="菜单编码" name="code" class="form-control">
	                <div class="help-block" v-if="errors.has('code')">{{ errors.first('code') }}</div>
	            </div>
	        </div>
	        <div v-if="editData.pTid!=null" :class="{'row form-group':true,'has-error':errors.has('moduleName')}">
	            <label class="col-sm-4 control-label">上级菜单:</label>
	            <div class="col-sm-8">
	                <el-select v-model="editData.pTid"  placeholder="请选择父菜单">
					    <el-option
					      v-for="item in options"
					      :key="item.tid"
					      :label="item.text"
					      :value="item.tid">
					    </el-option>
				  	</el-select>
	            </div>
	        </div>
	        <div :class="{'row form-group':true,'has-error':errors.has('iconAddr')}">
	            <label class="col-sm-4 control-label">图标:</label>
	            <div class="col-sm-8">
	                <i :class="' fa '+editData.icon"></i>
	                <el-button size="small" @click="showIconWindow(editData)"
							         >更换图标</el-button>
	            </div>
	        </div>
	        <div :class="{'row form-group':true,'has-error':errors.has('menuPath')}">
	            <label class="col-sm-4 control-label">路径:</label>
	            <div class="col-sm-8">
	                <input type="text" v-model="editData.href" v-validate="'max:100'" data-vv-as="路径" name="menuPath" class="form-control">
	                <div class="help-block" v-if="errors.has('menuPath')">{{ errors.first('menuPath') }}</div>
	            </div>
	        </div>
	        <div :class="{'row form-group':true,'has-error':errors.has('orderCode')}">
	            <label class="col-sm-4 control-label">排序值:</label>
	            <div class="col-sm-8">
	                <input type="text" v-model="editData.sort" v-validate="'required|numeric|max:10'" data-vv-as="排序值" name="orderCode" class="form-control">
	                <div class="help-block" v-if="errors.has('orderCode')">{{ errors.first('orderCode') }}</div>
	            </div>
	        </div>
	      </div>
	      <span slot="footer" class="dialog-footer">
	        <el-button @click="dialogVisible = false">取 消</el-button>
	        <el-button type="primary" @click="editMenu" >确 定</el-button>
	      </span>
	    </el-dialog>
	    <!--图标选择-->
	    <el-dialog
	      title="图标选择(单击)"
	      :visible.sync="iconVisible"
	      size="large">
	      <div class="row">
	      <div @click="setIcon(item)" class="col-md-3 col-sm-4" v-for="item in ICON"><i :class="'fa '+item " ></i>&nbsp;&nbsp;&nbsp;&nbsp;{{item}}</div>
		  </div>
	    </el-dialog>
	    
	</div>
</template>
<script type="text/javascript">
	import s_menu from './services/menu.js'
	import ICON from './services/ICON.js'
	export default {
		data () {
			let temp=null;
			if(this.$store.state.cacheData.DATA[this.$route.path]){
				temp=JSON.parse(this.$store.state.cacheData.DATA[this.$route.path]);
			}
			return temp|| {
				ICON:ICON,
				subType_Options:[{
					id:0,
					text:"后端"
				},{
					id:1,
					text:"前端"
				}],
				options: [],
		        pId: "",
		        subType:"",
		        currentPage:1,
				rows:10,
				totals:0,
		        tableData:[],
		        dialogVisible:false,
		        iconVisible:false,
		        saveDialogVisible:false,
		        editData:{},
		        saveData:{
		        	text:"",
		        	pTid:"",
		        	code:"",
		        	subType:1
		        },
		        tempData:{},
		        funcVisible:false,
		        saveFuncData:{
		        	functionName:"",
		        	functionId:""
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
		 	let _vue=this;
	   		_vue.getSelectData();
	   	},
	   	activated(){
	   		
	   	},
		methods:{
			showIconWindow(data){
				let _vue=this;
				_vue.iconVisible=true;
				_vue.tempData=data;
			},
			setIcon(icon){
				this.tempData.icon=icon;
				this.iconVisible=false;
			},
			handleSizeChange(size){
				this.rows=size;
				this.selectData();
			},
			handleCurrentChange(currentPage){
				this.currentPage=currentPage;
				this.selectData();
			},
			//删除操作
			handleDelete(index,row){
				let _vue=this;
				bootbox.confirm({
   					size: "small",
					message: "你确定删除吗?",
					callback: function(result) {
						if(result){
							s_menu.menu_deleteMenu({
								tid:row.tid
							},function(data){
								if(data.error==10000){
									_vue.$message({
		                              type:'success',
		                              duration:2000,
		                              showClose: true,
		                              message: data.desc
		                            });
									_vue.selectData();
								}else{
									_vue.$message({
		                              type:'error',
		                              duration:2000,
		                              showClose: true,
		                              message: data.desc
		                            });
								}
							})
						}else{
							
						}
					}
				});
			},
			clearError(){
				this.$validator.errors.items=[];
			},
			//编辑操作
			handleEdit(index,row){
				let _vue=this;
				_vue.dialogVisible=true;
				_vue.editData=Object.assign({},row);
			},
			//修改菜单
			editMenu(){
				let _vue=this;
				this.$validator.validateAll().then(() => {
					if(this.$validator.errors.items.length!=0){
						return;
					}
					s_menu.menu_editMenu(_vue.editData,function(data){
						if(data.error==10000){
							_vue.$message({
                              type:'success',
                              duration:2000,
                              showClose: true,
                              message: data.desc
                            });
                            _vue.dialogVisible=false;
							_vue.selectData();
						}else{
							_vue.$message({
                              type:'error',
                              duration:2000,
                              showClose: true,
                              message: data.desc
                            });
						}
					})
			    }).catch(() => {
			    });
			},
			//新增菜单
			saveMenu(){
				let _vue=this;
				this.$validator.validateAll().then(() => {
					if(this.$validator.errors.items.length!=0){
						return;
					}
					s_menu.menu_saveMenu(_vue.saveData,function(data){
						if(data.error==10000){
							_vue.$message({
                              type:'success',
                              duration:2000,
                              showClose: true,
                              message: data.desc
                            });
                            _vue.saveDialogVisible=false;
							_vue.selectData();
						}else{
							_vue.$message({
                              type:'error',
                              duration:2000,
                              showClose: true,
                              message: data.desc
                            });
						}
					})
			    }).catch(() => {
			    });
			},
			//获取下拉框数据
			getSelectData(){
				let _vue=this;
				s_menu.menu_parentLevelMenu({},function(data){
						if(data.error==10000){
							_vue.options=data.data['subjects'];
							_vue.selectData();
						}
				});
			},
			//分页数据
			selectData(){
				let _vue=this;
				let param={
					pTid:_vue.pId,
					subType:_vue.subType,
					page:_vue.currentPage,
					rows:_vue.rows
				}
				s_menu.menu_menuData(param,function(data){
					if(data.error==10000){
						_vue.tableData=data.data.rows;
						_vue.totals=data.data.totals
					}
				})
			}
		}
	}

</script>