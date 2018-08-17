import HttpUtil from 'src/util/httpUtil.js'

export default {
	//登陆
	user_login(params,callBack){
		HttpUtil.post("user/login",params,callBack);
	}
	
}