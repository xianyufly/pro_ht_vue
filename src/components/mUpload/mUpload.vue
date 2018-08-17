<style type="text/css"  scope>
  /**
   * 去掉原始样式
   */
  .webuploader-pick {
	background: none !important; 
	padding: 0px !important; 
	display: inline !important;
  }
  .mup {

  }
  .mup .mup-box {
	padding: 10px 0px;

  }
  .mup-box-item{
  	position:relative;
  	border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    height: 200px;
    width: 250px;
    display: inline-block;
    float: left;
    margin: 0 10px 10px 0px;
  }
  .mup-box-item img,.mup-box-item a{
  	width: 100%;
  	height:100%;
  }
  .mup-box-item-tool,.mup-progress{
  	position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    cursor: default;
    text-align: center;
    color: #fff;
    font-size: 20px;
  }
  .mup-box-item-tool{
  	z-index: 3;
  }
  .mup-box-item-box .mup-box-item-mask{
  	z-index: 2;
  }
  .mup-progress{
  	z-index: 1;
  }
  .mup-box-item-mask{
	  position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0.5;
    font-size: 20px !important;
    background-color: #000;
  }
  .height20{
  	height: 20% !important;
    min-height: 36px;
  }
  .mup-box-item-icon-box{
  	cursor: pointer;
  	position: absolute;
  	top:6px;
  	right: 10px;
  }
  .mup-progress .el-progress{
    z-index: 1 !important;
  }
  .mup-progress .el-progress{
  	position: absolute; top: 50%; left: 50%; 
    transform: translate(-50%, -50%);
  }
  .mup-progress .el-progress__text{
	color:#FFF !important;
  }
  .mup-success{
  	position: absolute;
    right: -17px;
    top: -8px;
    width: 46px;
    height: 26px;
    background: #13ce66;
    text-align: center;
    transform: rotate(45deg);
    box-shadow: 0 1px 1px #ccc;
    color: #FFF;
    padding: 10px;
  }
  .mup-success .el-icon-upload-success{
  	transform: rotate(-45deg);
  }
  .mup-error-info{
  	display: inline-block;
  	color: red;
  	font-weight: bold;
  }
  .mup-item-holder{
  	width: 300px;
  	height: 230px;
  	margin-top: 10px;
  	position:relative;
  	border:dashed 1px gray !important;
  	float: left;
  }
  .video-js{
  	width: 100% !important;
  	height: 100% !important;
  }
  .boxHandle{
  	width: 100%;
  	height: 100%;
  }
  .vjs-big-play-button,.vjs-control-bar{
  	z-index: 10;
  }
</style>
<template>
  <div>
      <div class="mup" :id="mUploadId">
        <div class="btns" v-if="!config.isHideBtn">
            <div class="btn btn-primary" v-if="config.btnText" :id="randomId">{{config.btnText}}</div>
            <div class="btn btn-primary" v-if="!config.btnText" :id="randomId">{{btnText}}</div>
            <div class="btn btn-default" @click="upload" v-if="!config.auto">开始上传</div>
            <div class="mup-error-info">{{errorMsg}}</div>
        </div>
        <div class="mup-box clearfix" v-show="config.isShowContent">
         <div v-bind:style="{ width: config.itemWidth+'px', height: config.itemHeight + 'px' }" class="mup-box-item clearfix" v-on:mouseenter="item.isShowTool=1" v-on:mouseleave="item.isShowTool=0"  v-for="(item,index) in itemList" >
         	<!-- 上传类型为图片 -->
          <a v-if="config.type=='image'&&config.isView" :href="item.href" :data-lightbox="mUploadId"><img :key_id="item.key" :size="item.size" :fileName="item.fileName"  :src="item.href"></a>
          <a v-if="config.type=='image'&&!config.isView" :href="item.href"><img :key_id="item.key" :size="item.size" :fileName="item.fileName" :src="item.href"></a>
          <!-- 上传类型为文件 -->
          <img v-if="config.type=='file'" :size="item.size" :key_id="item.key" :src="file" :fileName="item.fileName" :temp="item.href">
         	<!-- 上传类型为视频 -->
         	<div class="boxHandle" v-if="config.type=='video'">
         		<img :src="item.faceHref" v-show="item.href==''">
    				<video v-if="item.href!=''"  :id="item._videoId" class="video-js" controls preload="none" :poster="item.faceHref" data-setup="{}">
    			    <source :src="item.href" :fileName="item.fileName" :size="item.size" :key_id="item.key" type="video/mp4" />
    				</video>
         	</div>
    			<!-- 上传类型为音频 -->
    			<div class="boxHandle" v-if="config.type=='audio'">
    				<img :src="item.faceHref" v-show="item.href==''">
    				<video v-if="item.href!=''" :id="item._videoId" class="video-js" controls preload="none" :poster="item.faceHref" data-setup="{}">
    				    <source :src="item.href" :fileName="item.fileName" :size="item.size" :key_id="item.key" type="audio/mp3" />
    				</video>
    			</div>
         	<!-- 工具条 -->
         	<div class="mup-box-item-box" v-if="item.isShowTool==1">
				    <div class="mup-box-item-tool height20" >
	         		<div class="mup-box-item-icon-box" >
	         			<i class="el-icon-view" v-if="config.isView&&config.type=='image'" @click="view($event,index)"></i>
	         			<i class="el-icon-delete2" v-if="config.isHideBtn!=true" @click="removeItem(index)"></i>
	         			<i v-if="config.isSort" class="fa fa-arrows-alt"></i>
	         		</div>
	         	</div>
	         	<div class="mup-box-item-mask height20">
	         	</div>
         	</div>
         	<!-- 经度条 -->
         	<div class="mup-progress" v-if="item.status==1" >
         		<el-progress type="circle" :width="config.itemWidth?config.itemWidth-20:126" :percentage="item.progress"></el-progress>
         		<div class="mup-box-item-mask">
	         	</div>
         	</div>
         	<!-- 失败 -->
         	<div class="mup-progress" v-if="item.status==3">
         		<el-progress type="circle" :percentage="item.progress" status="exception"></el-progress>
         		<div class="mup-box-item-mask">
	         	</div>
         	</div>
         	<!-- 上传成功标志 -->
         	<div class="mup-success" v-if="item.status==2" >
         		<i class="el-icon-upload-success el-icon-check"></i>
         	</div>

         </div>
        </div>
    </div>
  </div>
</template>

<script>

  //文件上传组件
  import webuploaderCss  from 'static/mUpload/webuploader-0.1.5/webuploader.css'
  import WebUploader from 'static/mUpload/webuploader-0.1.5/webuploader.min.js'
  import audio from './images/mp3.jpg'
  import video from './images/video.jpg'
  import file from './images/file.png'
  export default {
    props: {
      //回填数据
      data:Array,
      //配置可以传递进来
      config:{
        //是否自动上传
        auto:{
          type: Boolean,
          default: function () {
             return false
          }
        },
      	//请求地址(类型:字符串 )
      	server:String,
      	//文件字段名(类型:字符串 )
      	fileVal:String,
      	//请求参数(类型:对象 )
      	formData:{
      		type: Object,
  		    default: function () {
  		       return { }
  		    }
      	},
        //后缀
        suffix:{
          type: Object,
          default: function () {
             return "*"
          }
        },
      	//文件最大数量(类型:整数)
      	fileNumLimit:Number,
      	//文件最大大小(类型:整数 单位:M)
      	fileSingleSizeLimit:Number,
      	//是否必填(类型:布尔)
      	isRequired:{
      		type: Boolean,
  		    default: function () {
  		       return false
  		    }
      	},
      	//是否可以排序(类型:布尔)
      	isSort:{
      		type: Boolean,
  		    default: function () {
  		       return false;
  		    }
      	},
      	//是否可以预览(类型:布尔)
      	isView:{
      		type: Boolean,
  		    default: function () {
  		       return false;
  		    }
      	},
        isShowContent:{
          type: Boolean,
          default: function () {
             return true;
          }
        },
      	//是否隐藏按钮
      	isHideBtn:{
      		type: Boolean,
  		    default:function () {
  		       return false;
  		    }
      	},
        itemWidth:{
          type: Number,
          default:function () {
             return 250;
          }
        },
        itemHeight:{
          type: Number,
          default:function () {
             return 200;
          }
        },
        btnText:{
          type: String,
          default:function () {
             return "选择文件";
          }
        },
      	//解析数据结构
      	dataFormat:{
      		type: Object,
  		    default: function () {
  		       return {
  		      		href:"",
  		      		faceHref:"",
                key:"",
                size:"",
                fileName:""
  		      	};
  		    }
      	}
      }
    },
    data () {
      return {
      	//默认图片
      	video:video,
      	audio:audio,
        file:file,
        btnText:"选择文件",
        //每个编辑器生成不同的id,以防止冲突
        randomId: 'mUpload_btn_' + (Math.random() * 100000000000000000),
        //每个编辑器生成不同的id,以防止冲突
        mUploadId: 'mUpload_' + (Math.random() * 100000000000000000),
        //uploader实例
        instance: null,
        //错误信息
        errorMsg:"",
        //上传对象数组
        itemList:[],
        showImgIndex:0
        // [{
        // 	href:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495184777414&di=575783f9547ab7376ee26a3c403cb985&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F17%2F76%2F85%2F15Y58PICsGr_1024.jpg",//地址
        // 	faceHref:"",//封面地址
        // 	id:"",//文件id
        // 	progress:10,//上传进度
        // 	status:0,//0:未上传 1:上传中 2:上传成功 3:上传失败
        // 	isShowTool:0//不显示工具栏
        // }]
        
      };
    },
    computed(){

    },
    mounted () {
      if(this.config.isShowContent===undefined){
        this.config.isShowContent=true;
      }
      //初始化属性
      this.config.dataFormat=Object.assign({
                href:"",
                faceHref:"",
                key:"",
                size:"",
                fileName:""
              },this.config.dataFormat)
      this.init();
      if(this.data.length>0){
        this.initData();
      }else{
        this.itemList=[];
      }
    },
    beforeDestroy () {
      //销毁上传组件
      this.instance.destroy();
    },
    watch:{
    	'itemList.length':'initView',
      'data':'initData'
    },
    methods: {
      //初始化播放器
      initPlayer(item){
      	this.$nextTick(function(){
          		if(this.config.type=='video'||this.config.type=='audio'){
    				videojs(item._videoId);
    			}
    		});
      },
      initData(){
        this.clearData();
      	let data=this.data;
      	for(let item of data){
      		let href="",faceHref="",key="",size="",fileName="";

      		if(this.config.dataFormat.href==''&&this.config.dataFormat.faceHref==''){
      			href=item;
      		}else{
      			href=item[this.config.dataFormat.href];
      			faceHref=item[this.config.dataFormat.faceHref];
      		}
          if(this.config.dataFormat.key!=''){
            key=item[this.config.dataFormat.key];
          }
          if(this.config.dataFormat.size!=''){
            size=item[this.config.dataFormat.size];
          }
          if(this.config.dataFormat.fileName!=''){
            fileName=item[this.config.dataFormat.fileName];
          }
          if(href==null||href==''||!href){
            break;
          }
      		let dto={
        		href:href,//地址
        		progress:100,//上传进度
        		faceHref:faceHref,//封面图片
        		_videoId:'mUpload_v_' + (Math.random() * 100000000000000000),
        		id:"",//id
            size:size,
            fileName:fileName,
            key:key,
        		status:2,//0:未上传 1:上传中 2:上传成功 3:上传失败
        		isShowTool:0//不显示工具栏
        	};
        	this.itemList.push(dto);
          //初始化播放器
          this.initPlayer(dto);
      	}
      },
      initView(){
      	let _vue=this;
      	this.$nextTick(function(){
      		if(_vue.config.isSort){
    				//记得销毁重新创建
    				$("#"+this.mUploadId+" .mup-box").dragsort("destroy");
    				//绑定拖拽组件
    				$("#"+this.mUploadId+" .mup-box").dragsort({
    					dragSelector: "i.fa-arrows-alt",
    					placeHolderTemplate:"<div class='mup-item-holder'></div>",
    					dragEnd:function(){
    					}
    				});
    			}	
      	})
      	
      },
      view(event,index){ 
        $(event.target).parents("div.mup-box-item").find("a").trigger("click");
      },
      selectAccept(){
      	var fileType={
					};
    		if(this.config.type=="audio"){
    			fileType={
    	             title: 'mp3',
    	             extensions: "mp3,MP3",
    	             mimeTypes: "audio/mpeg"
    	        };
    		}else if(this.config.type=="video"){
    			fileType={
                 title: 'mp4',
                 extensions: "mp4,MP4",
                 mimeTypes: "video/mp4"
            };
    		}else if(this.config.type=="image"){
    			fileType={
    			    title: 'Images',
    			    extensions: 'gif,jpg,jpeg,bmp,png',
    			    mimeTypes: 'image/jpg,image/jpeg,image/png,image/bmp,image/gif'
    			}
    		}else {
          fileType={
              title: 'file',
              extensions: this.config.suffix,
              mimeTypes: '*/*'
          }
        }
    	 	return fileType;
      },
      init(){
      	let _vue=this;
        var uploader = WebUploader.create({
        	accept:_vue.selectAccept(),
            // swf文件路径
            swf: 'static/mUpload/webuploader-0.1.5/js/Uploader.swf',
            // 文件接收服务端。
            server: _vue.config.server,
            // 选择文件的按钮。可选。
            // 内部根据当前运行是创建，可能是input元素，也可能是flash.
            pick: '#'+_vue.randomId,
            // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
            resize: false,
            duplicate:true,
            //自动上传
            auto:_vue.config.auto,
            //文件字段
            fileVal:_vue.config.fileVal,
            //请求参数
            formData:_vue.config.formData||{},
            //文件数量限制
            fileNumLimit:_vue.config.fileNumLimit,
            //文件大小限制
            fileSingleSizeLimit:_vue.config.fileSingleSizeLimit*1024*1024
        });
		    //选择文件后操作
        uploader.on("beforeFileQueued",function(file){
        	//选择不显示数据，就只会保存一次数据
          if(!_vue.config.isShowContent){
            _vue.itemList=[];
          }
          //计算剩余上传文件数量
    			let num=_vue.config.fileNumLimit-_vue.itemList.length;
    			if(num==0){
    				_vue.errorMsg="文件数量错误,最多添加"+_vue.config.fileNumLimit+"个文件";
    				return false;
    			}
        });
        //选择文件后操作
        uploader.on("filesQueued",function(files){
          for(let file of files){
            console.log("文件大小:"+file.size);
            let size=(file.size/1024/1024).toFixed(3);
            let fileName=file.name;
            _vue.errorMsg="";
            if(_vue.config.type=='video'){
              let data={
                //上传文件ID
                id:file.id,
                faceHref:_vue.video,
                size:size,
                fileName:fileName,
                path:""
              }
            _vue.addItem(data);
            }else if(_vue.config.type=='audio'){
              let data={
                //上传文件ID
                id:file.id,
                faceHref:_vue.audio,
                size:size,
                fileName:fileName,
                path:""
              }
              _vue.addItem(data);
            }else{
              let data={
                //上传文件ID
                id:file.id,
                size:size,
                fileName:fileName,
                path:""
              }
              let item=_vue.addItem(data);
              uploader.makeThumb( file, function( error, ret ) {
                  item.href=ret;
              });
            }
          }
        	
        });
        //上传进度处理
    		uploader.on("uploadProgress",function(file,percentage ){
    			var percentage100=(percentage*100).toFixed(0);
    			let itemFilter=_vue.itemList.filter((x)=>{
    				return x.id==file.id;
    			})
    			itemFilter[0].progress=parseInt(percentage100);
    		});
        //所有上传完成是触发
        uploader.on("uploadFinished",function(){
            //赋值
            if(_vue.config.type=='image'){
                let itemFilter=_vue.itemList.filter((x)=>{
                  return x.id!="";
                })
                let count=0;
                let length=itemFilter.length;
                let imageArrary=[];
                for(let i=0;i<length;i++){
                  let temp=itemFilter[i];
                  imageArrary.push(new Image())
                  imageArrary[i].src = temp.href;
                  imageArrary[i].onload=function() {
                    var naturalWidth = imageArrary[i].width;
                    var naturalHeight = imageArrary[i].height;
                    temp.href= temp.href+"?width="+naturalWidth+"&height="+naturalHeight;
                    count++;
                    //多个onLoad,都处理完毕,在广播结果值
                    if(count==length){
                      _vue.$nextTick(function(){
                        let data=_vue.getData();
                        _vue.$emit('update:data', data);
                      })
                    }
                  }
                }
            }else{
               _vue.$nextTick(function(){
                let data=_vue.getData();
                _vue.$emit('update:data', data);
              })
            }
              
        });

    		//上传成功
    		uploader.on("uploadSuccess",function(file,response ){
    			let itemFilter=_vue.itemList.filter((x)=>{
    				return x.id==file.id;
    			})
    			if(response.error==0){
    				itemFilter[0].status=2;
    				itemFilter[0].href=response.data.photoUrl;
    				if(response.data.videoPreview!=''){
    					itemFilter[0].faceHref=response.data.videoPreview;
    				}
    				//初始化播放器
            _vue.initPlayer(itemFilter[0]);
           
    			}else{
    				itemFilter[0].status=3;
    			}
    		});
    		//上传出错
    		uploader.on("uploadError",function(file,reason  ){
    			let itemFilter=_vue.itemList.filter((x)=>{
    				return x.id==file.id;
    			})
    			itemFilter[0].status=3;
    		});
    		//错误信息
    		uploader.on("error",function(type){
    			//debugger;
    			if(type=='Q_EXCEED_NUM_LIMIT'){
    				_vue.errorMsg="文件数量错误,最多添加"+_vue.config.fileNumLimit+"个文件";
    			}else if(type=='Q_EXCEED_SIZE_LIMIT'||type=='F_EXCEED_SIZE'){
    				_vue.errorMsg="文件超出大小,最大上传文件为"+_vue.config.fileSingleSizeLimit+"M";
    			}else if(type=='Q_TYPE_DENIED'){
            let ext="";
            if(_vue.config.suffix){
              ext="请上传后缀为"+_vue.config.suffix+"文件";
            }
    				_vue.errorMsg="文件类型错误"+ext;
    			}
	      });
        //点击上传
        _vue.instance=uploader;
      },
      addItem(data){
      	let item={
      		id:data.id,
      		_videoId:'mUpload_v_' + (Math.random() * 100000000000000000),
      		href:data.path,
          kye:"",
          size:data.size,
          fileName:data.fileName,
      		faceHref:data.faceHref,
      		progress:0,//上传进度
        	status:0,//0:未上传 1:上传中 2:上传成功 3:上传失败
        	isShowTool:0//不显示工具栏
      	}
      	this.itemList.push(item);
        return item;
      },
      //移除对象
      removeItem(index){
        let _vue=this;
		    //移除上传对象
      	let item=this.itemList.splice(index,1);
      	item=item[0];
      	if(item.id&&item.id!=''){
      		//webuploader 移除对象
      		this.instance.removeFile(item.id,true);
      	}

        var fileArray=this.instance.getFiles("inited","queued","progress","interrupt");
        if(fileArray.length==0){
          //赋值
          _vue.$nextTick(function(){
            let data=_vue.getData();
            _vue.$emit('update:data', data);
          })
        }
      },
      //上传
      upload(){
      	//选获取所有未上传的图片
    		var files=this.instance.getFiles("inited");
    		for(var i=0;i<files.length;i++){
    			let file=files[i];
    			//然后进行上传
    			this.instance.upload(file);
    			let itemFilter=this.itemList.filter((x)=>{
    				return x.id==file.id;
    			})
    			//上传中
    			itemFilter[0].status=1;
    		}
      },
      //上传完毕 返回true 未完毕返回false
      checkUpload(){
      	var fileArray=this.instance.getFiles("inited","queued","progress","interrupt");
	    if(fileArray.length>0){
	    	this.errorMsg="请上传未传文件";
	    	return false;
	    }else{
	    	if(this.config.isRequired&&this.itemList==0){
				this.errorMsg="请上传文件";
	    		return false;
	    	}else{
	    		this.errorMsg="";
	    		return true;
	    	}
	    }
      },
      clearData(){
        this.instance.reset();
      	this.itemList=[];
      },
      //返回字符串数组
      getData(){
      	let data=[];
      	let _vue=this;
    		if(!this.config.dataFormat||(this.config.dataFormat.href==''&&this.config.dataFormat.faceHref=='')){
    			if(this.config.type=='image'){
    				$("#"+this.mUploadId+" .mup-box img").each(function(){
        				data.push($(this).attr("src"));
        			})
    			}else if(this.config.type=='file'){
            $("#"+this.mUploadId+" .mup-box img").each(function(){
                data.push($(this).attr("temp"));
              })
          }else{
    				$("#"+this.mUploadId+" .mup-box source").each(function(){
        				data.push($(this).attr("src"));
        			})
    			}
    		}else{
    			if(this.config.type=='image'){
    				$("#"+this.mUploadId+" .mup-box img").each(function(){
    					let obj={
    					}
              if(_vue.config.dataFormat.href!=""){
                obj[_vue.config.dataFormat.href]=$(this).attr("src");
              }
    					if(_vue.config.dataFormat.faceHref!=""){
      					obj[_vue.config.dataFormat.faceHref]="";
              }
              if(_vue.config.dataFormat.key!=""){
                obj[_vue.config.dataFormat.key]=$(this).attr("key_id");
              }
              if(_vue.config.dataFormat.size!=""){
                obj[_vue.config.dataFormat.size]=$(this).attr("size");
              }
              if(_vue.config.dataFormat.fileName!=""){
                obj[_vue.config.dataFormat.fileName]=$(this).attr("fileName");
              }
        				data.push(obj);
        			})
    			}else if(this.config.type=='audio'){
    				$("#"+this.mUploadId+" .mup-box video").each(function(){
        				let obj={
    					}
              if(_vue.config.dataFormat.href!=""){
    					 obj[_vue.config.dataFormat.href]=$("source",this).attr("src");
              }
              if(_vue.config.dataFormat.faceHref!=""){
    					 obj[_vue.config.dataFormat.faceHref]="";
              }
              if(_vue.config.dataFormat.key!=""){
                obj[_vue.config.dataFormat.key]=$("source",this).attr("key_id");
              }
              if(_vue.config.dataFormat.size!=""){
                obj[_vue.config.dataFormat.size]=$("source",this).attr("size");
              }
              if(_vue.config.dataFormat.fileName!=""){
                obj[_vue.config.dataFormat.fileName]=$("source",this).attr("fileName");
              }
        				data.push(obj);
        			})
    			}else if(this.config.type=='video'){
    				$("#"+this.mUploadId+" .mup-box video").each(function(){
        				let obj={
    					}
              if(_vue.config.dataFormat.href!=""){
    					 obj[_vue.config.dataFormat.href]=$("source",this).attr("src");
              }
              if(_vue.config.dataFormat.key!=""){
                obj[_vue.config.dataFormat.key]=$("source",this).attr("key_id");
              }
              if(_vue.config.dataFormat.faceHref!=""){
    					 obj[_vue.config.dataFormat.faceHref]=$(this).attr("poster");
              }
              if(_vue.config.dataFormat.size!=""){
                obj[_vue.config.dataFormat.size]=$("source",this).attr("size");
              }
              if(_vue.config.dataFormat.fileName!=""){
                obj[_vue.config.dataFormat.fileName]=$("source",this).attr("fileName");
              }
        				data.push(obj);
        			})
    			}else if(this.config.type=='file'){
            $("#"+this.mUploadId+" .mup-box img").each(function(){
                let obj={
                }
                if(_vue.config.dataFormat.href!=""){
                  obj[_vue.config.dataFormat.href]=$(this).attr("temp");
                }
                if(_vue.config.dataFormat.key!=""){
                  obj[_vue.config.dataFormat.key]=$(this).attr("key_id");
                } 
                if(_vue.config.dataFormat.size!=""){
                  obj[_vue.config.dataFormat.size]=$(this).attr("size");
                } 
                if(_vue.config.dataFormat.fileName!=""){
                  obj[_vue.config.dataFormat.fileName]=$(this).attr("fileName");
                }
                if(_vue.config.dataFormat.faceHref!=""){
                  obj[_vue.config.dataFormat.faceHref]="";
                }
                data.push(obj);
            })
          }
    		}
      	return data;
      }
    }
  };
</script>