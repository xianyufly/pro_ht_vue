/**
 * 文件上传组件V1.0(基于 viewerjs,webuploader,jquery.dragsort,videojs,这些库文件在static/mUpload底下)
 */
属性:
data:初始化数据(数组)
config:配置项(对象)

config子项:
		    type:上传文件类型image/audio/video/file 4种,(类型:字符串)必填,
        itemWidth:宽度(类型:整数),默认:250,
        itemHeight:高度(类型:整数),默认:200
        btnText:上传按钮文字,
        suffix:上传文件后缀只对类型为file的起效果
        auto:是否自动上传(类型:布尔),默认:false
      	server:请求地址(类型:字符串 ),
      	fileVal:文件字段名(类型:字符串 ),
      	formData:请求参数(类型:对象 ),
      	fileNumLimit:文件最大数量(类型:整数),默认:无限制,
      	fileSingleSizeLimit:文件最大大小(类型:整数 单位:M),默认:无限制,
      	isRequired:是否必传(类型:布尔),默认:非必传,
      	isSort:是否可以排序(类型:布尔),默认:不排序,
      	isView:是否可以预览(类型:布尔,只对type:'image'类型有效果)默认:不浏览,
      	isShowContent:是否显示内容(类型:布尔,说明设置该参数为false时,只会保存一次上传数据,就是如果分开2次上传就只会回传最新一次上传结果)默认:显示
        isHideBtn:是否隐藏上传按钮(类型:布尔),默认:不不隐藏,
      	/*解析数据结构,对属性data传入数据进行解析,如果不设置这一项,默认认为data初始化数据为字符串数组*/
      	dataFormat:{
      		href:""//解析资源地址,
      		faceHref:""//封面地址
      	}
方法:
checkUpload:检查是否可以上传,返回true表示可以上传,false看提示信息
clearData:清空组件数据
getData:获取上传文件值,返回一个数组,如果dataFormat不设置返回字符串数组,如果dataFormat有设置，例如设置成
dataFormat:{
	  href:"key"//解析资源地址,
    faceHref:"key1"//封面地址,
    key:""//主键值字段,
    size:""//获取文件大小,
    fileName:""//文件名称
}
则返回数据:
[{
	key:'111111',
	key1:'222222'
},{
	key:'333333',
	key1:'444444'
}]
使用方法：
<template>
	<v-MUpload ref="faceUpload" :data.sync="faceData" :config="mUploadConfig" ></v-MUpload>
</template>

export default {
		data () {
			return {
                faceData:[{
                    key:"http://192.168.3.8:5081/FileServer/file/0/201705/upload/14954478854349q9i9b.mp4",
                    key1:"http://192.168.3.8:5081/FileServer/file/videoPreview/201705/1495447885465a7l1.jpg"
                }],
                //上传文件配置
                mUploadConfig:{
                    server:"http://192.168.3.8:5081/FileServer/cellPhoneUploadFileFullNew_upload.jhtml",
                    type:'video',//image/audio/video
                    fileVal:"userfile",
                    fileNumLimit:5,
                    isRequired:true,
                    isSort:true,
                    isView:true,
                    fileSingleSizeLimit:60,//单位:M
                    formData:{
                        uid:'0',
                        fileType:"4"
                    },
                    dataFormat:{
                        href:'key',
                        faceHref:'key1'
                    }
                }
			}
		},
		computed:{
			
		},
		mounted () {
		  
	   	},
		methods:{
            saveResource(){
            	  //检查是否有未上传文件
                console.log(this.$refs.faceUpload.checkUpload());
                /*获取数据  如果:data属性添加了.sync修饰符,就可以不用调用getData()方法获取数据，.sync修饰符具有组件数据双向传递的功能;*/
                console.log(this.$refs.faceUpload.getData());
                //清空组件数据
                console.log(this.$refs.faceUpload.clearData());

            }
		}
	}

