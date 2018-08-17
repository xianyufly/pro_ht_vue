import HttpUtil from 'src/util/httpUtil.js'

export default {
	menu_parentLevelMenu(params,callBack){
		HttpUtil.post("menu/plat/parentLevelMenu",params,callBack);
	},
	menu_menuData(params,callBack){
		HttpUtil.post("menu/plat/menuData",params,callBack);
	},
	menu_saveMenu(params,callBack){
		HttpUtil.post("menu/plat/saveMenu",params,callBack);
	},
	menu_editMenu(params,callBack){
		HttpUtil.post("menu/plat/editMenu",params,callBack);
	},
	menu_deleteMenu(params,callBack){
		HttpUtil.post("menu/plat/deleteMenu",params,callBack);
	}
}