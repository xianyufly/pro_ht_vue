import HttpUtil from 'src/util/httpUtil.js'

export default {
	user_initData(params,callBack){
		HttpUtil.post("user/plat/initData",params,callBack);
	},
	user_logout(params,callBack){
		HttpUtil.post("user/plat/logout",params,callBack);
	}
	
	
}