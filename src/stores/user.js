/**
 * 授权用户信息
 */
//系统常量
import Constant from 'src/constant/'
//保存USER用户
const SET_USER='SET_USER'
//保存菜单
const SET_MENU='SET_MENU'
//保存功能按钮
const SET_FUNC='SET_FUNC'
//保存系统配置项
const SET_SETTING='SET_SETTING'
export default {
	//vuex state
	state:{
		user:{},//用户基本信息
		menu:[],//菜单数据
		func:[],//按钮权限数据
		setting:{}//系统配置项 fileServerUrl文件服务器上传地址
	},
	mutations:{
		[SET_USER](state,user){
			state.user={ ...state.user ,...user }
		},
		[SET_MENU](state,menu){
			state.menu=menu
		},
		[SET_FUNC](state,func){
			state.func=func
		},
		[SET_SETTING](state,setting){
			state.setting={ ...state.setting ,...setting }
		},
	},
	actions:{
		[SET_USER]({commit},user){
			commit(SET_USER,user);
		},
		[SET_MENU]({commit},menu){
			commit(SET_MENU,menu);
		},
		[SET_FUNC]({commit},func){
			commit(SET_FUNC,func);
		},
		[SET_SETTING]({commit},setting){
			commit(SET_SETTING,setting);
		}		
	},
	getters:{

	}
}