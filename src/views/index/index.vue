<style type="text/css" scoped>
	.hand{
        cursor: pointer;
    }
</style>
<template>
	<div>
		<div id="main-wrapper">
        <div id="main-navbar" class="navbar navbar-inverse" role="navigation">
            <!-- Main menu toggle -->
            <div @click.stop="trigExpend()">
            	<button type="button" id="main-menu-toggle"><i class="navbar-icon fa fa-bars icon"></i><span class="hide-menu-text">隐藏菜单</span></button>
            </div>
            

            <div class="navbar-inner">
                <!-- Main navbar header -->
                <div class="navbar-header">

                    <!-- Logo -->
                    <a href="#" class="navbar-brand">
                        <div>
                            <img alt="Pixel Admin" src="./images/main-navbar-logo.png">
                        </div>
                        17搜模板
                    </a>

                    <!-- Main navbar toggle -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar-collapse"><i class="navbar-icon fa fa-bars"></i></button>

                </div>
                <!-- / .navbar-header -->

                <div id="main-navbar-collapse" class="collapse navbar-collapse main-navbar-collapse">
                    <div>
                        <div class="right" style="position: relative;">
                            <ul class="nav navbar-nav pull-right right-navbar-nav">
                                <li class="nav-icon-btn nav-icon-btn-danger dropdown">
                                    <a @click="routerNext('/index')" class="dropdown-toggle" data-toggle="dropdown">
                                        <span class="label">{{notifiNum}}</span>
                                        <i class="nav-icon fa fa-bullhorn"></i>
                                        <span class="small-screen-text">系统通知</span>
                                    </a>
                                </li>
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle user-menu" data-toggle="dropdown">
                                        <img :src="(picAddr==''||!picAddr)?headPic:picAddr" alt="">
                                        <span>{{nickname}}</span>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <!-- <li @click="dialogVisible = true"><a href="#"><i class="dropdown-icon fa fa-cog"></i>&nbsp;&nbsp;修改密码</a></li>
                                        <li class="divider"></li>
                                        <li @click="openEditUserWindow"><a ><i class="dropdown-icon fa fa-male"></i>&nbsp;&nbsp;个人信息</a></li>
                                        <li class="divider"></li> -->
                                        <li @click="logout"><a ><i class="dropdown-icon fa fa-power-off"></i>&nbsp;&nbsp;注销</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <!-- / .navbar-nav -->
                        </div>
                        <!-- / .right -->
                    </div>
                </div>
                <!-- / #main-navbar-collapse -->
            </div>
            <!-- / .navbar-inner -->
        </div>
        <!-- / #main-navbar -->
        <!-- /2. $END_MAIN_NAVIGATION -->
        <div id="main-menu" role="navigation">
            <div id="main-menu-inner">
                <ul class="navigation">
                    <li v-bind:class="{'mm-dropdown':item.children&&item.children.length!=0,'active':$route.path==item.href,'active open':item.children&&item.children.length!=0&&item.children.filter((x)=>{ return $route.path.indexOf(x.href)!=-1&&x.href!=''}).length>0,'mm-dropdown-root':isExpend=='collapsed'&&item.children&&item.children.length!=0}" v-for="item in menuData">
                    	<a class="hand" v-if="!item.children||item.children.length==0" @click="routerNext(item.href)">
                        	<i v-bind:class="'menu-icon fa '+item.icon"></i>
                        	<span class="mm-text">{{item.text}}</span>
                        </a>
                        <a v-if="item.children&&item.children.length!=0">
                        	<i v-bind:class="'menu-icon fa '+item.icon"></i>
                        	<span class="mm-text">{{item.text}}</span>
                        </a>
                        <ul v-if="item.children&&item.children.length!=0">
                            <li v-bind:class="{'active':$route.path.indexOf(itemChild.href)!=-1&&itemChild.href!=''}" v-for="itemChild in item.children">
                            	<a class="hand" @click="routerNext(itemChild.href)">
                            	<i v-bind:class="'menu-icon fa '+itemChild.icon"></i>
                                <span class="mm-text">{{itemChild.text}}</span></a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!-- / #main-menu-inner -->
        </div>
        <!-- / #main-menu -->
        <!-- /4. $MAIN_MENU -->

        <div id="content-wrapper">
            <ul class="breadcrumb breadcrumb-page">
                <div class="breadcrumb-label text-light-gray">当前位置: </div>
                <li><a>{{oneLevelMenu}}</a></li>
                <li class="active"><a>{{childLevelMenu}}</a></li>
            </ul>
           <!-- <keep-alive> -->
             <router-view></router-view>
           <!-- </keep-alive> -->
        </div>
        <!-- / #content-wrapper -->
        <div id="main-menu-bg"></div>
    </div>
    
	</div>
</template>
<script type="text/javascript">
    import Constant from 'src/constant/'
    import headPic from './images/ppHead.png'
    import s_index from './services/index.js'
	export default {
		data () {
			return {
                picAddr:this.$store.state.user.user.picAddr,
                notifiNum:this.$store.state.user.setting.notificationNum||0,
                nickname:this.$store.state.user.user.nickname,
                headPic:headPic,
                dialogVisible: false,
                privateVisible: false,
				//从localSession中获取菜单开启状态
				isExpend:localStorage.getItem("pa_mmstate")||"expanded",
                menuData:this.$store.state.user.menu,
                oneLevelMenu:"首页",
                childLevelMenu:"默认页",
                userTypeData:[]
			}
		},
        watch:{
            "$route":"setBreadcrumb"
        },
        computed:{
            
        },
		methods:{
            //导航到子菜单时
            routerNext(path){
                let _vue=this;
                for(let key in this.$store.state.cacheData.DATA){
                    let keyArray=key.split("/");
                    let temp=keyArray.filter((x)=>{
                        return path==="/"+x;
                    })
                    //去掉本身的缓存和孩子的缓存
                    if(temp.length>0){
                        let data={
                        };
                        data[key]=null;
                        this.$store.dispatch('SET_DATA',data);
                    }
                }
                //跳转到子菜单
                _vue.$router.push(path);
            },
            cancel(){
                let _vue=this;
                this.formData={
                    newPwd:"",
                    repeatPwd:"",
                    oldPwd:""
                };
                this.dialogVisible = false;
            },
            setBreadcrumb(){
                let _vue=this;
                let menuData=_vue.menuData;
                for(let item of menuData){
                   if(!item.children){
                    _vue.oneLevelMenu="首页";
                    return;
                   }
                   let length=item.children.filter((x)=>{ return _vue.$route.path.indexOf(x.href)!=-1&&x.href!=''}).length;
                   if(length>0){
                    _vue.oneLevelMenu=item.text;
                    break;
                   }else{
                    _vue.oneLevelMenu="首页";
                   }
                }
                for(let item of menuData){
                   if(!item.children){
                    _vue.childLevelMenu="默认页";
                    return;
                   }
                   let child=item.children.filter((x)=>{ return _vue.$route.path.indexOf(x.href)!=-1&&x.href!=''})
                   if(child.length>0){
                    _vue.childLevelMenu=child[0].text;
                    break;
                   }else{
                    _vue.childLevelMenu="默认页";
                   }
                }
            },
			trigExpend(){
				this.isExpend=localStorage.getItem("pa_mmstate");
			},
            //登出
            logout(){
                let _vue=this;
                bootbox.confirm({
                    size: "small",
                    message: "您确定注销吗?",
                    callback: function(result) {
                        if(result){
                            localStorage.clear();
                            s_index.user_logout({},function(){});
                            _vue.$store.dispatch('SET_USER',{});
                            _vue.$store.dispatch('SET_FUNC',[]);
                            _vue.$router.push("/");
                        }else{
                            //点击取消
                        }
                    }
                });
                
            }
		},
		mounted(){
            let _vue=this;
            var init = [];
            window.PixelAdmin.start(init); 
		}
	}
</script>