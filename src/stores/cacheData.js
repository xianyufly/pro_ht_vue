/**
 * 授权用户信息
 */
//系统常量
import Constant from 'src/constant/'
//保存缓存数据
const SET_DATA='SET_DATA'
export default {
	//vuex state
	state:{
		DATA:{},//缓存组件查询数据
		
	},
	mutations:{
		[SET_DATA](state,data){
			state.DATA={ ...state.DATA ,...data }
		}
	},
	actions:{
		[SET_DATA]({commit},data){
			commit(SET_DATA,data);
		}	
	},
	getters:{

	}
}