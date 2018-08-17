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
								<el-select v-model="pId" placeholder="请选择父类别">
								    <el-option
								      v-for="item in options"
								      :key="item.id"
								      :label="item.text"
								      :value="item.id">
								    </el-option>
								  </el-select>
								</div>
							</div>
							<div class="col-md-1">
								<div class="form-group">
								<el-button type="primary" @click="selectData(1)">查询</el-button>
								</div>
							</div>
							<div class="col-md-1">
								<div class="form-group">
								<el-button type="primary" v-func="'add_menu'"
								 @click="saveDialogVisible=true">新增类别</el-button>
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
						        prop="moduleName"
						        label="类别名称"
						        >
						      </el-table-column>
						      <el-table-column
						        prop="pMenuName"
						        label="上级类别"
						        >
						      </el-table-column>
						      <el-table-column
						        prop="creDate"
						        label="发布状态"
						        >
						      </el-table-column>
						      <el-table-column
						        prop="creDate"
						        label="菜单显示"
						        >
						      </el-table-column>
						      <el-table-column
						        prop="orderCode"
						        label="排序值"
						        >
						      </el-table-column>
						      <el-table-column fixed="right" label="操作" min-width="180">
							      <template scope="scope">
							        <el-button
							          v-func="'edit_menu'"
							          size="small"
							          type="text"
							          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
							        <el-button
							          size="small"
							          v-func="'delete_menu'"
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
	</div>
</template>
<script type="text/javascript">
	
	export default {
		data () {
			let temp=null;
			if(this.$store.state.cacheData.DATA[this.$route.path]){
				temp=JSON.parse(this.$store.state.cacheData.DATA[this.$route.path]);
			}
			return temp|| {
				saveDialogVisible:false,
				pId:"",
				options:[],
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
		 
	   	},
		methods:{
			handleEdit(index,row){

			},
			handleDelete(index,row){

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
			}	
		}
	}

</script>