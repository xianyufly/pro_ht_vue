<style type="text/css"  scope>
  .preview-mask{
    position: fixed;
    left: 0;
    z-index: 100000;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0.5;
    background-color: #000;
  }
  .preview-btn{
    position: fixed;
    top:0px;
    right: 0px;
    font-size: 20px;
    width: 40px;
    z-index: 1;
    height: 40px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    border-bottom-left-radius: 100%;
    background-color: #000;
    background-color: rgba(0,0,0,.5);
  }
  .preview-content-view iframe {
    width: 100%;
    height: 100%;
    /*overflow-x: hidden;
    overflow-y: auto;*/
  }
  @media screen and (min-width: 768px){
    .preview-box{
      position: fixed;
      z-index: 100001;
      top: 50px;
      display: block;
      left: calc(50% - 150px);
      width: 300px;
      height: 718px;
      font-family: "Helvetica Neue", sans-serif;
      background-image: url(./images/device-sprite.png);
      background-size: 300%;
      background-repeat: no-repeat;
      background-position: 0 0;
      -webkit-transition: background-image 0.1s linear;
      transition: background-image 0.1s linear;
    }
    .preview-content{
      position: absolute;
      top: 90px;
      left: 29px;
      width: 243px;
      height: 431px;
      overflow: hidden;
      background: #eeeeee;
    }
    .preview-content-view{
      width:100%;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  }
  @media screen and (max-width: 768px){
    .preview-box{
      position: fixed;
      z-index: 100001;
      top: 0px;
      left: 0px;
      bottom: 0px;
      right: 0px;
      display: block;
    }
    .preview-content{
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #eeeeee;
    }
    .preview-content-view{
      width:100%;
      height: 100%;
      overflow: auto;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  }
</style>
<template>
  <div class="preview clearfix" v-if="visible">
    <div class="preview-box">
      <div class="preview-btn" @click="close">
        <i class="fa fa-times"></i>
      </div>
      <div class="preview-content">
        <div class="preview-content-view" v-html="content">
          
        </div>
      </div>
    </div>  
    <div class="preview-mask" @click="close"></div>
  </div>
</template>

<script>

  export default {
    props: {
      visible:Boolean,
      content:String
    },
    data () {
      return {

      };
    },
    computed:{
      
    },
    mounted () {
      
    },
    beforeDestroy () {
      
    },
    methods: {
      //关闭按钮
      close(){
          this.$emit('update:visible', false);
      }
    }
  };
</script>