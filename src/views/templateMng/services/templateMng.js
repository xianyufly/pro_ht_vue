import HttpUtil from 'src/util/httpUtil.js'

export default {
	templateMng_templateData(params,callBack){
		HttpUtil.post("templateMng/plat/templateData",params,callBack);
	},
	templateMng_editTemplate(params,callBack){
		HttpUtil.post("templateMng/plat/editTemplate",params,callBack);
	},
	templateMng_deleteTemplate(params,callBack){
		HttpUtil.post("templateMng/plat/deleteTemplate",params,callBack);
	},
	templateMng_menuList(params,callBack){
		HttpUtil.post("templateMng/plat/menuList",params,callBack);
	},
	templateMng_tagList(params,callBack){
		HttpUtil.post("templateMng/plat/tagList",params,callBack);
	},
	
	
	
}