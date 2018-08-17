import HttpUtil from 'src/util/httpUtil.js'

export default {
	notification_getDataByPage(params,callBack){
		HttpUtil.post("notification/getDataByPage",params,callBack);
	},
	notification_getNotification(params,callBack){
		HttpUtil.post("notification/getNotification",params,callBack);
	},
}