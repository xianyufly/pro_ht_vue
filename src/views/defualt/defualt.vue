<style type="text/css">
	
    .pictur{
    	    height: 492px;
		    background-image: url(./images/bg.jpg);
		    background-repeat: no-repeat;
		    width: 900px;
		    margin: 0px auto;
    }
    @media screen and (max-width: 768px){
		.pictur{
	    	    height: 492px;
			    background-image: url(./images/bg.jpg);
			    background-repeat: no-repeat;
			    width: 100%;
			    margin: 0px auto;
	    }
	}
	.fr{
		float: right;
	}
	.empty{
		text-align: center;
	}
	.title{
		font-size: 14px;
		font-weight: bolder;
		text-align: center;
	}
	.content{
		font-size: 12px;
		margin-top: 20px; 
	}
</style>
<template>
	<div>
		<div>
			<form class="panel widget-support-tickets">
			    <div class="panel-heading">
				<span class="panel-title">系统公告</span>
			    </div>
			    <div class="panel-body">
			    	<div v-if="tableData.length!=0" class="panel-padding no-padding-vr">
						<div class="ticket" v-for="item in tableData">
	                        <span v-if="item.isNew==1" class="label label-danger ticket-label">NEW</span>
	                        <span v-if="item.isNew==0" class="label ticket-label">OLD</span>
	                        <a href="#" @click="showDetail(item)" title="" class="ticket-title clearfix">
	                        {{item.title}}
	                        <span class="fr">[{{item.creTime}}]</span> 
	                        </a>
	                    </div>
			    	</div>
			    	<div v-if="tableData.length==0" class="empty">暂无数据</div>
			    </div>
			</form>
			<div class="pager-box">
		    	<el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page="currentPage"
			      :page-size="rows"
			      layout="prev, pager, next"
			      :total="totals">
			    </el-pagination>
		    </div>
		</div>
		<!-- <div class="d_bg">
			<div class="pictur"></div>
		</div> -->
		<el-dialog
      title=""
      :visible.sync="privateVisible"
      >
      <div class="row">
      	<div class="col-sm-8 title">{{tempData.title}}</div>
      	<div class="col-sm4 title">{{tempData.creTime}}</div>
      </div>
      <div class="row">
      	<div class="col-sm-12 content" v-html="tempData.content">
      	</div>
      </div>
    </el-dialog>
	</div>
</template>
<script type="text/javascript">
	import s_default from './services/defualt.js'
	export default {
		data () {
			return {
				privateVisible:false,
				totals:0,
				rows:10,
				currentPage:1,
				tableData:[],
				tempData:{}	
			}
		},
		computed:{
			
		},
		mounted () {
		  this.selectData();
	   	},
		methods:{
			showDetail(data){
				this.privateVisible=true;
				this.tempData=data;
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
					page:_vue.currentPage,
					rows:_vue.rows
				}
	   			s_default.notification_getDataByPage(param,function(data){
	   				_vue.tableData=data.data.rows;
	   				_vue.totals=data.data.totals;
	   			});
			}
		}
	}

</script>