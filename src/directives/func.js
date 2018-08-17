/**
 * 权限指令
 */
import Vue from 'vue'
//项目Store加载
import store from 'src/stores/index.js'

// 注册一个全局自定义指令 v-focus
Vue.directive('func', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el,binding) {
    let funcList=store.state.user.func;
    let func=binding.value;
    if(funcList.filter((x)=>{ return func==x.func}).length==0){
    	//chorme
    	try{
    		el.remove();
    	}catch(e){

    	}
        //IE
    	try{
    		el.parentNode.removeNode(el);
    	}catch(e){

    	}
    	
    }
  }
})