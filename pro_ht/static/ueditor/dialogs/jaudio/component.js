(function(){
    var _config={
      //上传文件控件实例
      instance:null,
      //文件按钮ID
      randomId:'select_video',
      fileServer:parent.window.UEFileServerUrl,
      //上传文件配置
      config:{
        fileNumLimit:1,
        fileSingleSizeLimit:500,
        suffix:"mp3,MP3",
        formData:{
            uid:'0',
            fileType:"3"//请注意修改该参数
        }
      },
      //错误信息
      errorMsg:"",
      //文件对象
      item:{
        href:"",//地址
        title:"未知标题",//标题
        source:"未知来源",//来源
        faceHref:""//封面地址
      }
    };
    var nowTab="";

    /* 初始化tabbody */
    function setTabFocus(id) {
        if(!id) return;
        var i, bodyId, tabs = $('#tabhead').children();
        nowTab=id;
        for (i = 0; i < tabs.length; i++) {
            bodyId = $(tabs[i]).attr('data-content-id');
            if (bodyId == id) {
                $(tabs[i]).addClass('focus');
                $("#"+bodyId).addClass('focus');
            } else {
                $(tabs[i]).removeClass('focus');
                $("#"+bodyId).removeClass('focus');
            }
        }
    }

    //界面更新操作
    var viewer={
      //上传按钮容器
      upBtnBox:"upBtnBox",
      //上传界面容器
      upViewBox:"upViewBox",
      //audio
      weixinAudio:"weixinAudio",
      //上传视频标识
      upImg:"upImg",
      //进度条
      upProgress:"upProgress",
      //进度条前景色
      upProgressPre:"upProgressPre",
      //进度条
      upPercent:"upPercent",
      preview:"preview",
      //标题
      title:"title",
      //来源
      source:"source",
      s_title:"s_title",
      s_source:"s_source",
      //初始化
      initViewer:function(){
        $("#"+viewer.title).change(function(){
          if($(this).val()!=""){
            $("#"+viewer.s_title).text($(this).val());
            _config.item.title=$(this).val();
          }else{
            $("#"+viewer.s_title).text("未知标题");
            _config.item.title="未知标题";
          }
          
        });
        $("#"+viewer.source).change(function(){
          if($(this).val()!=""){
            $("#"+viewer.s_source).text($(this).val());
            _config.item.source=$(this).val();
          }else{
            $("#"+viewer.s_source).text("未知来源");
            _config.item.source="未知来源";
          }
          
        });
      },
      //显示上传按钮,隐藏上传界面
      s_UpBtn_h_UpView:function(){
        $("#"+viewer.upBtnBox).removeClass("hidden");
        $("#"+viewer.upViewBox).addClass("hidden");
        $("#"+viewer.weixinAudio).addClass("hidden");
      },
      //隐藏上传按钮,显示上传界面
      s_UpView_h_UpBtn:function(){
        $("#"+viewer.upViewBox).removeClass("hidden");
        $("#"+viewer.upBtnBox).addClass("hidden");
        $("#"+viewer.weixinAudio).addClass("hidden");
      },
      //更新进度条
      updateProgress(percentage){
        //显示经度条
        $("#"+viewer.upProgress).removeClass("hidden");
        //显示视频标识
        $("#"+viewer.upImg).removeClass("hidden");
        //更新进度
        $("#"+viewer.upPercent).text(percentage+"%");
        $("#"+viewer.upProgressPre).width(percentage+"%");
      },
      //上传完毕
      updateSuccess(){
        //隐藏经度条
        $("#"+viewer.upProgress).addClass("hidden");
        //隐藏视频标识
        $("#"+viewer.upImg).addClass("hidden");
        $("#"+viewer.upViewBox).addClass("hidden");
        $("#"+viewer.weixinAudio).removeClass("hidden");
        var src=_config.item.href;
        $('.weixinAudio').weixinAudio({
         autoplay:false,
         src:src
        });
      },
      //创建section
      createSection:function(){
        var audioUrl = _config.item.href;
        var title= _config.item.title;
        var source= _config.item.source;
        var html="";
        if(audioUrl!=""){
          var temp=parent.window.UEIframeUrl+"/SchoolPage/module/previewAudio.html#/?audioUrl="+encodeURIComponent(audioUrl)+"&title="+encodeURIComponent(title)+"&source="+encodeURIComponent(source);
          $("#"+viewer.preview+" iframe").attr("src",temp);
          html=$("#"+viewer.preview).html();
          $("#"+viewer.preview).html("");
        }else{
          alert("请上传音频");
        }
        return html;
      }
    }

    //初始化tab事件绑定
    function initTab(){
        $("#tabhead>.tab").unbind("click").click(function(){
             $("#tabhead>.tab").removeClass("focus");
             $(this).addClass("focus");
             var id=$(this).attr("data-content-id");
             setTabFocus(id);
        });
        setTabFocus("mp3");
        //初始化上传组件
        initUploader();
        viewer.initViewer();
    }

    function initUploader(){
        let _vue=_config;
        var uploader = WebUploader.create({
          accept:{
                 title: 'mp3',
                 extensions: "mp3,MP3",
                 mimeTypes: "audio/mpeg"
            },
            // swf文件路径
            swf: 'static/mUpload/webuploader-0.1.5/js/Uploader.swf',
            // 文件接收服务端。
            server: _vue.fileServer,
            //文件字段名称
            //fileVal:editor.getOpt('videoFieldName'),
            //server:"http://192.168.3.8:5081/FileServer/cellPhoneUploadFileFullNew_upload.jhtml",
            fileVal:"userfile",
            // 选择文件的按钮。可选。
            // 内部根据当前运行是创建，可能是input元素，也可能是flash.
            pick: '#'+_vue.randomId,
            // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
            resize: false,
            duplicate:true,
            //自动上传
            auto:true,
            //请求参数
            formData:_vue.config.formData,
            //文件数量限制
            fileNumLimit:_vue.config.fileNumLimit,
            //文件大小限制
            fileSingleSizeLimit:_vue.config.fileSingleSizeLimit*1024*1024
        });
        //选择文件后操作
        uploader.on("beforeFileQueued",function(file){
          //计算剩余上传文件数量
          
        });
        //选择文件后操作
        uploader.on("filesQueued",function(files){
          for(let file of files){
            let size=(file.size/1024/1024).toFixed(3);
            let fileName=file.name;
            _vue.errorMsg="";
            //并更新视图
            viewer.s_UpView_h_UpBtn();
          }
          
        });
        //上传进度处理
        uploader.on("uploadProgress",function(file,percentage ){
          var percentage100=(percentage*100).toFixed(0);
          //上传经度并更新界面
          viewer.updateProgress(percentage100);
        });
        //所有文件上传完成触发
        uploader.on("uploadFinished",function(){
              
        });

        //上传成功
        uploader.on("uploadSuccess",function(file,response ){
          //上传成功,更新文件对象,并更新界面
          if(response.error==0){
            _vue.item.href=response.data.photoUrl;
            _vue.item.faceHref=response.data.videoPreview;
            viewer.updateSuccess();
          }else{

          }
        });
        //上传出错
        uploader.on("uploadError",function(file,reason  ){
          //上传出错,更新文件对象,并更新界面
        });
        //错误信息
        uploader.on("error",function(type){
          //debugger;
          if(type=='Q_EXCEED_NUM_LIMIT'){
            _vue.errorMsg="文件数量错误,最多添加"+_vue.config.fileNumLimit+"个文件";
          }else if(type=='Q_EXCEED_SIZE_LIMIT'||type=='F_EXCEED_SIZE'){
            _vue.errorMsg="文件超出大小,最大上传文件为"+_vue.config.fileSingleSizeLimit+"M";
          }else if(type=='Q_TYPE_DENIED'){
            let ext="";
            if(_vue.config.suffix){
              ext="请上传后缀为"+_vue.config.suffix+"文件";
            }
            _vue.errorMsg="文件类型错误"+ext;
          }
        });
        //点击上传
        _vue.instance=uploader;
    }




    //显示公用
    function showCommon(parentId,showClass){
        $("#"+parentId+">div").hide();
        $("#"+parentId+" ."+showClass).show();
    }

    $(function(){
        initTab();
        dialog.onok = function (){
            if(nowTab=='mp3'){
              var temp=viewer.createSection();
              editor.execCommand('insertHtml', temp);
            }
        };
        
        dialog.oncancel = function () {

        };
        
    });

    

   

    
})();