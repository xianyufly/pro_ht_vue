import HttpUtil from 'src/util/httpUtil.js'

export default {
	user_select(params,callBack){
		HttpUtil.post("user/select",params,callBack);
	},
	user_getUserTypeList(params,callBack){
		HttpUtil.post("coder/getUserType",params,callBack);
	},
	user_saveData(params,callBack){
		HttpUtil.post("user/saveOrUpdate",params,callBack);
	},
	user_unique(params,callBack){
		HttpUtil.post("user/unique",params,callBack);
	},
	user_get(params,callBack){
		HttpUtil.post("user/get",params,callBack);
	},
	user_getAsso(params,callBack){
		HttpUtil.post("user/getAsso",params,callBack);
	},
	user_resetPwd(params,callBack){
		HttpUtil.post("user/resetPwd",params,callBack);
	},
	user_delete(params,callBack){
		HttpUtil.post("user/delete",params,callBack);
	},
	userRole_getByUserId(params,callBack){
		HttpUtil.post("userRole/getRoleIdListByUserId",params,callBack);
	},
	userRole_save(params,callBack){
		HttpUtil.post("userRole/save",params,callBack);
	}
}