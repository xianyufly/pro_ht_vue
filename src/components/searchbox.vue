<template>
  <div class="amap-page-container">
    <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult" :events="events"></el-amap-search-box>
    <el-amap :vid="vid" :center="mapCenter" :zoom="12" >
      <el-amap-marker v-for="(marker, index) in markers" :key="index" draggable=true :position="marker" :events="events"></el-amap-marker>
    </el-amap>
  </div>
</template>
<script>
  import { lazyAMapApiLoaderInstance } from 'vue-amap';
  export default {
    props:{
      defaultMarkers:{
          type: Array,
          default: function () {
             return [119.253496,26.10345];
          }
        }
    },
    data: function() {
      let self = this;
      return {
        vid: 'amap-vue-'+ (Math.random() * 100000000000000000),
        markers: [
          this.defaultMarkers
        ],
        mapCenter: this.defaultMarkers,
        searchOption:{},
        events: {
          init(o) {
            //实例化城市查询类
            var citysearch = new AMap.CitySearch();
            //自动获取用户IP，返回当前城市
            citysearch.getLocalCity(function(status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    if (result && result.city && result.bounds) {
                        var cityinfo = result.city;
                        try{
                          o.placeSearch.setCity(cityinfo);
                        }catch(e){
                          
                        }
                    }
                }
            });
          },
          click: () => {
              console.log('click marker');
            },
            dragend: (e) => {//停止拖拽地图时触发事件
              const {lng, lat} = e.target.getPosition();
              // this.markers[0]='';
              this.markers[0] = [lng, lat];
              //组件直接进行交互 2017-5-24 11:02:03
              //只能在事件里面使用
              this.$emit("getMarkers",this.markers[0]);
              //返回地址 
              this.$emit("getAddress","");
            },
            complete(){
            }

        }
      };
    },
    mounted(){
      this.initResult();
      
    },
    methods: {
      initResult(){
          let _vue=this;
          lazyAMapApiLoaderInstance.load().then(() => {
            //获取当前地址
                let geolocation = new AMap.Geolocation({
                    enableHighAccuracy: true,//是否使用高精度定位，默认:true
                    timeout: 10000,          //超过10秒后停止定位，默认：无穷大
                    buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                    zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                    buttonPosition:'RB'
                });
                geolocation.getCurrentPosition((status, result) => {
                  if (result && result.position) {
                    let marker = [result.position.lng, result.position.lat];
                    _vue.markers=[];
                    _vue.markers.push(marker);
                    //组件交互 数据
                    _vue.$emit("getMarkers",marker);
                    _vue.mapCenter = marker;
                  }
                });
          });  
      },
      onSearchResult(pois) {
      //搜索时触发事件
        console.log(pois);
        let latSum = 0;
        let lngSum = 0;
        console.log(pois);
        this.markers=[];
        if (pois.length > 0) {
          // alert(pois[0].lng+':'+pois[0].lat);
          console.log("------经纬度"+pois[0].lng+':'+pois[0].lat);
          this.markers.push([pois[0].lng,pois[0].lat]);

          //组件交互 数据
          this.$emit("getMarkers",this.markers[0]);
          //返回地址 
          this.$emit("getAddress",pois[0].address);
  

          this.mapCenter = [pois[0].lng,pois[0].lat];

        }
      }
    }
  };
</script>
<style lang="scss" rel="stylesheet/scss">
  .amap-page-container {
    margin: auto;
  }

  .amap-page-container .el-vue-amap {
    width: 100%;
    height: 95%;
  }

  .search-box {
    position: relative;
    top: 65px;
    left: 5%;
    width:80%;
  }
</style>
