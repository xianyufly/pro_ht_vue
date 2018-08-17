import HttpUtil from 'src/util/httpUtil.js'

export default {
	tags_parentLevelTags(params,callBack){
		HttpUtil.post("tags/plat/parentLevelTags",params,callBack);
	},
	tags_tagsData(params,callBack){
		HttpUtil.post("tags/plat/tagsData",params,callBack);
	},
	tags_saveTags(params,callBack){
		HttpUtil.post("tags/plat/saveTags",params,callBack);
	},
	tags_editTags(params,callBack){
		HttpUtil.post("tags/plat/editTags",params,callBack);
	},
	tags_deleteTags(params,callBack){
		HttpUtil.post("tags/plat/deleteTags",params,callBack);
	}
}