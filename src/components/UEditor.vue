<template>
  <div>
    <!--下面通过传递进来的id完成初始化-->
    <script :id="randomId"  type="text/plain"></script>
  </div>
</template>

<script>


  //主体文件引入
  // import '../../static/ueditor/ueditor.config.js'
  // import '../../static/ueditor/ueditor.all.min.js'
  // import '../../static/ueditor/lang/zh-cn/zh-cn.js'
  // //视频和音频上传
  // import '../../static/ueditor/dialogs/jplayer/jplayer.js'
  
  //主体文件引入


  export default {
    props: {
      content:"",
      //配置可以传递进来
      ueditorConfig:{}
    },
    data () {
      return {
        //每个编辑器生成不同的id,以防止冲突
        randomId: 'editor_' + (Math.random() * 100000000000000000),
        //编辑器实例
        instance: null,
        //定时器
        timer: null
      };
    },
    //此时--el挂载到实例上去了,可以初始化对应的编辑器了
    mounted () {
      this.initEditor()
    },
    watch:{
      'content':'setContent'
    },
    beforeDestroy () {
      // 组件销毁的时候，要销毁 UEditor 实例
      if (this.instance !== null && this.instance.destroy) {
        this.instance.destroy();
      }
      if(this.timer){
        clearInterval(this.timer);
      }
    },
    methods: {
      setContent(){
        if(this.instance){
           let content=this.content||"";
           let tempContent=this.instance.getContent();
           if(tempContent==""){
            this.instance.setContent(content);
           }
        }
      },
      initEditor () {
        //dom元素已经挂载上去了
          this.$nextTick(() => {
            this.instance = UE.getEditor(this.randomId, this.ueditorConfig);
            this.instance.addListener('afterInsertImage', () => {
                this.instance.setContent(this.instance.getContent());
            });
            // 绑定事件，当 UEditor 初始化完成后，将编辑器实例通过自定义的 ready 事件交出去
            this.instance.addListener('ready', () => {
              this.timer=setInterval( () =>{
                if(this.instance.getContent()==""){
                  this.$emit('ready', this.instance);
                }else{
                  clearInterval(this.timer);
                }
              },500);
            });
            
          });
        }
    }
  };
</script>