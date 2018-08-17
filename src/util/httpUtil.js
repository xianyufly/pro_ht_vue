/**
 * HTTP 请求公用模块 axios 版本
 */
//vue 模块
import Vue from 'vue'
import Qs from 'qs'
import axios from 'axios';

axios.defaults.withCredentials=true;
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
//请求数据  process node对象 API_URL变量是通过dev.env require进来的
var apiUrl=process.env.API_URL;
export default {
	//GET 请求
	get:function(api,params,callBack){
		axios.get(apiUrl+api,{
			params:params,
			// headers: {'Content-Type': 'application/json'},
            validateStatus: function (status) {
			    return (status ==200 || status ==401); // 状态码在大于或等于500时才会 reject
			}
		}).then((response) => {
			if(response.status==401){
				window.router.push("/");
			}else{
				callBack(response.data);
			}
		})
		.catch(function(response) {
			console.log(response);
			bootbox.alert({ 
			  size: "small",
			  message: "系统异常", 
			  callback: function(){
			  	//确定回调函数
			  }
			});
		});
	},
	//POST 请求
	post:function(api,params,callBack){
		axios({
            method: 'post',
            //headers: {'Content-Type': 'application/json; charset=UTF-8'},
            url: apiUrl+api,
            // data: Qs.stringify(params),
            data: params,
            validateStatus: function (status) {
			    return (status ==200 || status ==401); // 状态码在大于或等于500时才会 reject
			}
        }).then((response) => {
			if(response.status==401){
				window.router.push("/");
			}else{
				callBack(response.data);
			}
		 	
		})
		.catch(function(response) {
			console.log(response);
			bootbox.alert({ 
			  size: "small",
			  message: "系统异常", 
			  callback: function(){
			  	//确定回调函数
			  }
			});
		});
	},
	//提交文件表单
	postFile:function(api,params,callBack){
		//处理下数据
		let _params=new FormData();
		for(let key in params){
			_params.append(key,params[key]);
		}
		axios({
            method: 'post',
            url: apiUrl+api,
            //headers: {'Authorization': token},
            data: _params,
            validateStatus: function (status) {
			    return (status ==200 || status ==401); // 状态码在大于或等于500时才会 reject
			},
			headers: {'Content-Type': 'multipart/form-data'}
        }).then((response) => {
			if(response.status==401){
				window.router.push("/");
			}else{
				callBack(response.data);
			}
		 	
		})
		.catch(function(response) {
			console.log(response);
			bootbox.alert({ 
			  size: "small",
			  message: "系统异常", 
			  callback: function(){
			  	//确定回调函数
			  }
			});
		});
	},
}
//catch方法用于捕捉程序的异常，catch方法和errorCallback是不同的，errorCallback只在响应失败时调用，而catch则是在整个请求到响应过程中，只要程序出错了就会被调用。
