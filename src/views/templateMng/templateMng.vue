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
								<el-input v-model="title" placeholder="模板名称"></el-input>
								</div>
							</div>
							<div class="col-md-1">
								<div class="form-group">
								<el-button type="primary" @click="selectData(1)">查询</el-button>
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
						        prop="title"
						        label="模板名称"
						        >
						      </el-table-column>
						      <el-table-column
						        prop="subjectName"
						        label="所属栏目"
						        >
						      </el-table-column>
						      <el-table-column
						        prop="code"
						        label="模板编码"
						        >
						      </el-table-column>
						      <el-table-column
						        prop="viewUrl"
						        label="预览"
						        >
						        <template scope="scope">
						        	<a :href="scope.row.viewUrl" target="_blank">预览</a>
						        </template>
						      </el-table-column>
						      <el-table-column label="操作">
							      <template scope="scope">
							        <el-button
							          size="small"
							          type="text"
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

		<el-dialog @close="clearError"
		  @open="fixHeight"
	      title="模板编辑"
	      :visible.sync="dialogVisible"
	      size="full">
	      <div class="row">
	      	<div class="col-sm-4">
	      		<div class="form-horizontal"  >
			        <div :class="{'row form-group':true,'has-error':errors.has('moduleName')}">
			            <label class="col-sm-4 control-label">模板名称:</label>
			            <div class="col-sm-8">
			                <input type="text" v-model="editData.title" v-validate="'required|min:2|max:50'" data-vv-as="模板名称" name="moduleName" class="form-control">
			                <div class="help-block" v-if="errors.has('moduleName')">{{ errors.first('moduleName') }}</div>
			            </div>
			        </div>
			        <div :class="{'row form-group':true,'has-error':errors.has('code')}">
			            <label class="col-sm-4 control-label">模板编码:</label>
			            <div class="col-sm-8">
			                <input type="text" v-model="editData.code" v-validate="'required|min:2|max:10'" data-vv-as="模板编码" name="code" class="form-control">
			                <div class="help-block" v-if="errors.has('code')">{{ errors.first('code') }}</div>
			            </div>
			        </div>
			        <div :class="{'row form-group':true,'has-error':errors.has('moduleName')}">
			            <label class="col-sm-4 control-label">所属栏目:</label>
			            <div class="col-sm-8">
			                <el-select style="width:100%;" v-model="editData.subjectCode"  placeholder="所属栏目">
							    <el-option
							      v-for="item in subjectList"
							      :key="item.code"
							      :label="item.text"
							      :value="item.code">
							    </el-option>
						  	</el-select>
			            </div>
			        </div>
			        <div :class="{'row form-group':true,'has-error':errors.has('moduleName')}">
			            <label class="col-sm-4 control-label">所属标签:</label>
			            <div class="col-sm-8">
						  	<el-select style="width:100%;" :multiple="multiple" :filterable="filterable" v-model="relas" placeholder="所属标签">
							    <el-option-group  
							      v-for="group in tagList"
							      :key="group.tid"
							      :label="group.text">
							      <el-option
							        v-for="item in group.children"
							        :key="item.tid"
							        :label="item.text"
							        :value="item.tid">
							      </el-option>
							    </el-option-group>
							  </el-select>
			            </div>
			        </div>
			        <div :class="{'row form-group':true,'has-error':errors.has('menuPath')}">
			            <label class="col-sm-4 control-label">描述:</label>
			            <div class="col-sm-8">
			                <textarea style="height: 150px;" v-model="editData.memo" v-validate="'max:250'" data-vv-as="描述" name="menuPath" class="form-control"></textarea>
			                <div class="help-block" v-if="errors.has('menuPath')">{{ errors.first('menuPath') }}</div>
			            </div>
			        </div>
			      </div>
			      <span slot="footer" class="dialog-footer" style="text-align: right;">
			        <el-button @click="dialogVisible = false">取 消</el-button>
			        <el-button type="primary" @click="editTemplate" >确 定</el-button>
			      </span>
	      	</div>
	      	<div class="col-sm-8">
	      		<iframe id="iframe" :src="editData.viewUrl" frameborder="0" width="100%"></iframe>
	      	</div>
	      </div>
	    </el-dialog>
	</div>
</template>
<script type="text/javascript">
	import api from './services/templateMng.js'
	export default {
		data () {
			let temp=null;
			if(this.$store.state.cacheData.DATA[this.$route.path]){
				temp=JSON.parse(this.$store.state.cacheData.DATA[this.$route.path]);
			}
			return temp|| {
				multiple:true,
				filterable:true,
				relas:[],
				subjectList:[],
				tagList:[],
				options:[],
				editData:{},
				dialogVisible:false,
				title:"",
				currentPage:1,
				rows:10,
				totals:0,
		        tableData:[]
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
		 this.selectData();
		 this.getTagList();
		 this.getSubjectList();
	   	},
		methods:{
			clearError(){
				this.$validator.errors.items=[];
			},
			getSubjectList(){
				let _vue=this;
				api.templateMng_menuList({
					subType:1
				},function(data){
					if(data.error==10000){
						_vue.subjectList=data.data['subjectExts'];
					}
				})
			},
			getTagList(){
				let _vue=this;
				api.templateMng_tagList({

				},function(data){
					if(data.error==10000){
						_vue.tagList=data.data['tagExts'];
					}
				})
			},
			fixHeight() {
				setTimeout(function(){
					let d_height =$(window).height();
	                let f_height =$(".el-dialog__footer").height();
	                $("#iframe").attr("height", d_height - f_height + "px");
				},500)
            },
			editTemplate(){
				let _vue=this;
				let relas=[];
				if(_vue.relas.length==0){
					_vue.$message({
                      type:'error',
                      duration:2000,
                      showClose: true,
                      message: "请选择标签"
                    });
					return;
				}
				for(let tagId of _vue.relas){
					let rela={
						tagId:tagId,
						resId:_vue.editData.tid
					}
					relas.push(rela);
				}
				this.$validator.validateAll().then(() => {
					if(this.$validator.errors.items.length!=0){
						return;
					}
					api.templateMng_editTemplate({
						res:_vue.editData,
						relas:relas
					},function(data){
						if(data.error==10000){
							_vue.$message({
                              type:'success',
                              duration:2000,
                              showClose: true,
                              message: data.desc
                            });
                            _vue.relas=[];
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
			handleEdit(index,row){
				this.editData=Object.assign({},row);;
				this.dialogVisible=true;
				this.relas=row.tagList;
			},
			handleDelete(index,row){
				let _vue=this;
				bootbox.confirm({
   					size: "small",
					message: "你确定删除吗?",
					callback: function(result) {
						if(result){
							api.templateMng_deleteTemplate({
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
			handleSizeChange(size){
				this.rows=size;
				this.selectData();
			},
			handleCurrentChange(currentPage){
				this.currentPage=currentPage;
				this.selectData();
			},
			selectData(currentPage){
				let _vue=this;
				if(currentPage){
					_vue.currentPage=currentPage;	
				}
				let param={
					title:_vue.title,
					page:_vue.currentPage,
					rows:_vue.rows
				}
				api.templateMng_templateData(param,function(data){
					if(data.error==10000){
						_vue.tableData=data.data.rows;
						_vue.totals=data.data.totals
					}
				})
			}	
		}
	}

</script>