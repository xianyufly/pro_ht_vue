<style type="text/css" scoped>
	#signin-demo {
		position: fixed;
		right: 0;
		bottom: 0;
		z-index: 10000;
		background: rgba(0,0,0,.6);
		padding: 6px;
		border-radius: 3px;
	}
	#signin-demo img { cursor: pointer; height: 40px; }
	#signin-demo img:hover { opacity: .5; }
	#signin-demo div {
		color: #fff;
		font-size: 10px;
		font-weight: 600;
		padding-bottom: 6px;
	}
	.authcode{
		width: 2.6rem; 
		padding-left:20px !important; 
		display: inline-block;
	}
	.authimg{
		width: 1.20rem;height:0.45rem;
	}
	#page-signin-bg {
	    height: 100%;
	    left: 0;
	    overflow: hidden;
	    position: fixed;
	    top: 0;
	    width: 100%;
	    z-index: 20;
	    background: url(./images/signin-bg-1.jpg) no-repeat center;
    	background-size: cover;
	}
	.signin-form-icon{
		height: 27px;
	}
</style>
<template>
	<div class="theme-default page-signin">
		<!-- Page background -->
		<div id="page-signin-bg">
			<!-- Background overlay -->
			<div class="overlay"></div>
		</div>
		<!-- / Page background -->

		<!-- Container -->
		<div class="signin-container">
			<!-- Left side -->
			<div class="signin-info">
				<a class="logo">
					<img src="./images/logo-big.png" alt="" style="margin-top: -5px;">&nbsp;
					17搜模板
				</a> <!-- / .logo -->
				<div class="slogan">
					免费的Bootstrap模板
				</div> <!-- / .slogan -->
			</div>
			<!-- / Left side -->

			<!-- Right side -->
			<div class="signin-form" @keyup.enter="login">
				<!-- Form -->
				<form id="signin-form_id">
					<div class="signin-text">
						<span>登陆账号</span>
					</div> <!-- / .signin-text -->

					<div :class="{'form-group w-icon':true,'has-error':errors.has('loginName')}">
						<input type="text" v-validate="'required|min:4|max:20'"
						 name="loginName" class="form-control input-lg" placeholder="账号" data-vv-as="账号" v-model="param.account">
						<span class="fa fa-user signin-form-icon"></span>
						<div class="help-block" v-if="errors.has('loginName')">{{ errors.first('loginName') }}</div>
					</div> <!-- / Username -->

					<div :class="{'form-group w-icon':true,'has-error':errors.has('pwd')}">
						<input type="password" v-validate="'required|min:6|max:20'" name="pwd" class="form-control input-lg" placeholder="密码" data-vv-as="密码" v-model="param.pwd">
						<span class="fa fa-lock signin-form-icon"></span>
						<div class="help-block" v-if="errors.has('pwd')">{{ errors.first('pwd') }}</div>
					</div> <!-- / Password -->
					<div class="form-group">
	                    <div :class="{'form-group w-icon':true,'has-error':errors.has('code')}">
	                        <input style="width:200px;" type="text" name="code" v-validate="'required'" class="form-control authcode input-lg"  placeholder="验证码" data-vv-as="验证码" v-model="param.code">
	                        <img  @click="refreshCode" :src="authCodeUrl" id="authcode" >
	                        <div class="help-block" v-if="errors.has('code')">{{ errors.first('code') }}</div>
	                    </div>
	                </div>
					<div class="form-actions">
						<input type="button"   @click="login" value="登陆" class="signin-btn bg-primary">
					</div> <!-- / .form-actions -->
					
				</form>
				<!-- / Form -->
			</div>
			<!-- Right side -->
		</div>
	</div>
</template>
<script type="text/javascript">
	import s_login from './services/login.js'
	import { Validator } from 'vee-validate'
	export default {
		data () {
			return {
				apiUrl:process.env.API_URL,
				authCodeUrl:process.env.API_URL+"user/createAuthCode?d="+new Date().getTime(),
				param:{
					"code":'',//验证码
					"pwd":'',//密码
					"account":""//登陆账号
				},
				secondText:'获取验证码',
				dialogVisible:false,
				intervalId:null,
				isSubmit:false
			}
		},
		mounted(){
			let _vue=this;
			_vue.refreshCode();
		},
		methods:{
			//刷新验证码
			refreshCode(){
				let _vue=this;
				_vue.authCodeUrl=_vue.apiUrl+"user/createAuthCode?d="+new Date().getTime();
			},
			//登陆
			login(){
				let _vue=this;
				this.$validator.validateAll().then(() => {
					s_login.user_login(_vue.param,function(data){
						if(data.error==10000){
							// let user=data['data']['user'];
							// let menu=data['data']['subjects'];
							// _vue.$store.dispatch('SET_USER',user);
							// _vue.$store.dispatch('SET_MENU',menu);
							//赋值菜单数据
							_vue.$router.push("/index");
						}else{
							_vue.refreshCode();
							bootbox.alert({ 
							  size: "small",
							  title: "温馨提示",
							  message: data.desc, 
							  callback: function(){
							  	//确定回调函数
							  }
							});
						}
					});
			    }).catch((e) => {
			    	console.log(e)
			    });
			}
		}
	}

</script>