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
								<el-select v-model="pId" clearable placeholder="标签">
								    <el-option
								      v-for="item in options"
								      :key="item.tid"
								      :label="item.text"
								      :value="item.tid">
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
								 @click="saveDialogVisible=true">新增标签</el-button>
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
						        label="标签名称"
						        >
						      </el-table-column>
						      <el-table-column
						        prop="code"
						        label="标签编码"
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
	      title="新增标签"
	      :visible.sync="saveDialogVisible"
	      size="tiny">
	      <div class="form-horizontal"  >
	        <div :class="{'row form-group':true,'has-error':errors.has('moduleName')}">
	            <label class="col-sm-4 control-label">标签名称:</label>
	            <div class="col-sm-8">
	                <input type="text" v-model="saveData.text" v-validate="'required|min:2|max:50'" data-vv-as="标签名称" name="moduleName" class="form-control">
	                <div class="help-block" v-if="errors.has('moduleName')">{{ errors.first('moduleName') }}</div>
	            </div>
	        </div>
	        <div :class="{'row form-group':true,'has-error':errors.has('code')}">
	            <label class="col-sm-4 control-label">标签编码:</label>
	            <div class="col-sm-8">
	                <input type="text" v-model="saveData.code" v-validate="'required|min:2|max:50'" data-vv-as="标签编码" name="code" class="form-control">
	                <div class="help-block" v-if="errors.has('code')">{{ errors.first('code') }}</div>
	            </div>
	        </div>
	        <div :class="{'row form-group':true,'has-error':errors.has('moduleName')}">
	            <label class="col-sm-4 control-label">上级标签:</label>
	            <div class="col-sm-8">
	                <el-select v-model="saveData.pTid"  placeholder="请选择父标签">
					    <el-option
					      v-for="item in options"
					      :key="item.tid"
					      :label="item.text"
					      :value="item.tid">
					    </el-option>
				  	</el-select>
	            </div>
	        </div>
	      </div>
	      <span slot="footer" class="dialog-footer">
	        <el-button @click="saveDialogVisible = false">取 消</el-button>
	        <el-button type="primary" @click="saveMenu" >确 定</el-button>
	      </span>
	    </el-dialog>

		<el-dialog @close="clearError"
	      title="标签编辑"
	      :visible.sync="dialogVisible"
	      size="tiny">
	      <div class="form-horizontal"  >
	        <div :class="{'row form-group':true,'has-error':errors.has('moduleName')}">
	            <label class="col-sm-4 control-label">标签名称:</label>
	            <div class="col-sm-8">
	                <input type="text" v-model="editData.text" v-validate="'required|min:2|max:50'" data-vv-as="标签名称" name="moduleName" class="form-control">
	                <div class="help-block" v-if="errors.has('moduleName')">{{ errors.first('moduleName') }}</div>
	            </div>
	        </div>
	        <div :class="{'row form-group':true,'has-error':errors.has('code')}">
	            <label class="col-sm-4 control-label">标签编码:</label>
	            <div class="col-sm-8">
	                <input type="text" v-model="editData.code" v-validate="'required|min:2|max:50'" data-vv-as="标签编码" name="code" class="form-control">
	                <div class="help-block" v-if="errors.has('code')">{{ errors.first('code') }}</div>
	            </div>
	        </div>
	      </div>
	      <span slot="footer" class="dialog-footer">
	        <el-button @click="dialogVisible = false">取 消</el-button>
	        <el-button type="primary" @click="editMenu" >确 定</el-button>
	      </span>
	    </el-dialog>
	    
	</div>
</template>
<script type="text/javascript">
	import s_menu from './services/tags.js'
	export default {
		data () {
			let temp=null;
			if(this.$store.state.cacheData.DATA[this.$route.path]){
				temp=JSON.parse(this.$store.state.cacheData.DATA[this.$route.path]);
			}
			return temp|| {
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
			clearError(){
				this.$validator.errors.items=[];
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
							s_menu.tags_deleteTags({
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
			//编辑操作
			handleEdit(index,row){
				let _vue=this;
				_vue.dialogVisible=true;
				_vue.editData=Object.assign({},row);
			},
			//修改标签
			editMenu(){
				let _vue=this;
				this.$validator.validateAll().then(() => {
					if(this.$validator.errors.items.length!=0){
						return;
					}
					s_menu.tags_editTags(_vue.editData,function(data){
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
			//新增标签
			saveMenu(){
				let _vue=this;
				this.$validator.validateAll().then(() => {
					if(this.$validator.errors.items.length!=0){
						return;
					}
					s_menu.tags_saveTags(_vue.saveData,function(data){
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
				s_menu.tags_parentLevelTags({},function(data){
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
				s_menu.tags_tagsData(param,function(data){
					if(data.error==10000){
						_vue.tableData=data.data.rows;
						_vue.totals=data.data.totals
					}
				})
			}
		}
	}

</script>