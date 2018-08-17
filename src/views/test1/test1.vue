<style type="text/css" scoped>
	.map{
		width: 100%;
		height: 800px;
	}
	.no-padding{
		padding: none;
	}
</style>
<template>
	<div>
		<form class="panel form-horizontal">
		    <div class="panel-heading">
			<span class="panel-title">地图</span>
		    </div>
		    <div class="panel-body no-padding" >
				<div id="amapContainer" class="map"></div>
		    </div>
		</form>
	</div>
</template>
<script type="text/javascript">
	import { AMapManager } from 'vue-amap';
	import { lazyAMapApiLoaderInstance } from 'vue-amap';
	export default {
		data () {
			return {
			  map:undefined
			}
		},
		computed:{
			
		},
		mounted () {
			let _vue=this;
			 _vue.map = new AMap.Map('amapContainer', {
			    resizeEnable: true,
				center: [116.406441,39.905018],
				zoom: 15
			  });
			//起点
			this.startMarker([116.405289,39.904987]);
			//终点
			this.endMarker([116.405731,39.90081]);
			//行进路线
		 	this.line([[116.405289,39.904987]],[116.405289,39.904987]);
	   	},
		methods:{
			line(startLineData,nowCarPotion){
				let _vue=this;
				lazyAMapApiLoaderInstance.load().then(() => {
				    var lineArr = startLineData;

				    var car= new AMap.Marker({
				        map: _vue.map,
				        position: nowCarPotion,
				        icon: "http://webapi.amap.com/images/car.png",
				        offset: new AMap.Pixel(-26, -13),
				        autoRotation: true
				    });

				    var polyline = new AMap.Polyline({
				        path: lineArr,            // 设置线覆盖物路径
				        strokeColor: '#3366FF',   // 线颜色
				        strokeOpacity: 1,         // 线透明度
				        strokeWeight: 5,          // 线宽
				        strokeStyle: 'solid',     // 线样式
				        strokeDasharray: [10, 5], // 补充线样式
				        geodesic: true            // 绘制大地线
				    });
				    polyline.setMap(_vue.map);
				    let _temp=[[116.406265,39.905015],[116.406441,39.905018],[116.406647,39.905018],[116.40667,39.904457],[116.4067,39.903893],[116.4067,39.903473],[116.4067,39.902996],[116.406731,39.902462],[116.406731,39.901714],[116.406731,39.901463],[116.406731,39.901031],[116.406738,39.901001],[116.406746,39.900829],[116.406746,39.900829],[116.405731,39.90081]];
				   	let i=0;
				    let si=setInterval(function(){
				    	let temp=_temp[i];
		           		lineArr.push(temp);
		           		car.moveTo(temp,500);
		           		polyline.setPath(lineArr);

		           		i++;
		           		if(i==_temp.length){
		           			clearInterval(si)
		           		}
		           	},1000)
				});
			},
			//起始标志点
			startMarker(position){
				let _vue=this;
				lazyAMapApiLoaderInstance.load().then(() => {
				  let map=_vue.map;
				  var marker = new AMap.Marker({
				  	 	zIndex: 0,
				  	 	icon:"http://webapi.amap.com/theme/v1.3/markers/n/start.png",
				        map: map,
				        position: position

				  });
				  map.setCenter(marker.getPosition());
				});
			},
			//终点标志点
			endMarker(position){
				let _vue=this;
				lazyAMapApiLoaderInstance.load().then(() => {
				  let map=_vue.map;
				  var marker = new AMap.Marker({
				  	 	zIndex: 0,
				  	 	icon:"http://webapi.amap.com/theme/v1.3/markers/n/end.png",
				        map: map,
				        position: position
				  });
				});
			}
		}
	}

</script>