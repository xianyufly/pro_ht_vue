<template>
  <div class="amap-page-container">
    <el-amap :vid="'amap-vue'" :center="mapCenter" :zoom="12" >
      <el-amap-marker v-for="(marker, index) in markers" :key="index" draggable=true :position="marker" :events="events"></el-amap-marker>
    </el-amap>
  </div>
</template>
<script>
  export default {
    name: 'search-box-page',
    props:{
      defaultMarkers:{
          type: Array,
          default: function () {
             return [119.253496,26.10345];
          }
        }
    },
    data: function() {
      return {
        vid: 'amap-vue-2',
        markers: [
          this.defaultMarkers
        ],
        searchOption: {
        },
        mapCenter: this.defaultMarkers,
        events: {
          init(o) {
            console.log('-------------------99init');

            console.log(o);
          },
          click: () => {
              console.log('click marker');
            },
            dragend: (e) => {//停止拖拽地图时触发事件
              console.log(e.target.getPosition())
              const {lng, lat} = e.target.getPosition();
              // this.markers[0]='';
              this.markers[0] = [lng, lat];
              console.log('-------------------------------990'+lng+":"+lat);
              console.log('-----------------this.markers:'+this.markers);

              //组件直接进行交互 2017-5-24 11:02:03
              //只能在事件里面使用
              this.$emit("getMarkers",this.markers[0]);
              //返回地址 
              this.$emit("getAddress","");
            },
            complete(){
              console.log("-----------------------------complete");
            }

        }
      };
    },
    methods: {
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
          // pois.forEach(poi => {
          //   let {lng, lat} = poi;
          //   lngSum += lng;
          //   latSum += lat;
          //   this.markers.push([poi.lng, poi.lat]);
          //   alert(poi.lng+':'+poi.lat);
          // });

          this.mapCenter = [pois[0].lng,pois[0].lat];
          // let center = {
          //   lng: lngSum / pois.length,
          //   lat: latSum / pois.length
          // };
          // this.mapCenter = [center.lng, center.lat];

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
    height: 100%;
  }

</style>
