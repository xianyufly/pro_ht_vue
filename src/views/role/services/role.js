import HttpUtil from 'src/util/httpUtil.js'

export default {
	role_select(params,callBack){
		HttpUtil.post("role/select",params,callBack);
	},
	role_add(params,callBack){
		HttpUtil.post("role/add",params,callBack);
	},
	role_delete(params,callBack){
		HttpUtil.post("role/delete",params,callBack);
	},
	role_get(params,callBack){
		HttpUtil.post("role/get",params,callBack);
	},
	role_tree(params,callBack){
		HttpUtil.post("tree/elTree",params,callBack);
	},
	role_treeSave(params,callBack){
		HttpUtil.post("tree/elTreeSave",params,callBack);
	},
	role_treeFunction(params,callBack){
		HttpUtil.post("tree/elTreeFunction",params,callBack);
	},
	role_getOptions(params,callBack){
		HttpUtil.post("role/getOptions",params,callBack);
	}
}