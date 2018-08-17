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
        suffix:"mp4,MP4",
        formData:{
            uid:'0',
            fileType:"4"//请注意修改该参数
        }
      },
      //错误信息
      errorMsg:"",
      //文件对象
      item:{
        href:"",//地址
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
      //上传视频标识
      upImg:"upImg",
      //上传视频
      upVideo:"upVideo",
      //进度条
      upProgress:"upProgress",
      //成功标志
      upSuccess:"upSuccess",
      //进度条前景色
      upProgressPre:"upProgressPre",
      //进度条
      upPercent:"upPercent",
      preview:"preview",
      //显示上传按钮,隐藏上传界面
      s_UpBtn_h_UpView:function(){
        $("#"+viewer.upBtnBox).removeClass("hidden");
        $("#"+viewer.upViewBox).addClass("hidden");
      },
      //隐藏上传按钮,显示上传界面
      s_UpView_h_UpBtn:function(){
        $("#"+viewer.upViewBox).removeClass("hidden");
        $("#"+viewer.upBtnBox).addClass("hidden");
      },
      //更新进度条
      updateProgress(percentage){
        //隐藏成功标志
        $("#"+viewer.upSuccess).addClass("hidden");
        //隐藏上传视频
        $("#"+viewer.upVideo).addClass("hidden");
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
         //显示成功标志
        $("#"+viewer.upSuccess).removeClass("hidden");
        //显示上传视频
        $("#"+viewer.upVideo).removeClass("hidden");
        //隐藏经度条
        $("#"+viewer.upProgress).addClass("hidden");
        //隐藏视频标识
        $("#"+viewer.upImg).addClass("hidden");
        var myPlayer = videojs(viewer.upVideo);
        var videoUrl = _config.item.href;
        $("#"+viewer.upVideo+" video").attr("poster",_config.item.faceHref);
        videojs(viewer.upVideo, {}, function() {
            myPlayer.src(videoUrl);
            myPlayer.load(videoUrl);
        });
      },
      //创建section
      createSection:function(){
        var videoUrl = _config.item.href;
        var faceUrl= _config.item.faceHref;
        var html="";
        if(videoUrl!=""){
          var temp=parent.window.UEIframeUrl+"/SchoolPage/module/preview.html#/?faceUrl="+encodeURIComponent(faceUrl)+"&videoUrl="+encodeURIComponent(videoUrl);
          $("#"+linkViewer.preview+" iframe").attr("src",temp);
          html=$("#"+viewer.preview).html();
          $("#"+viewer.preview).html("");
        }else{
          alert("请上传视频")
        }
        return html;
      }
    }

    var linkViewer={
      //腾讯视频text框
      linkText:"linkText",
      preview:"preview",
      validUrl:function(){
        var reg=/^(https|http)\:\/\/v\.qq\.com\/x\/[a-z0-9A-Z\/]*\/([a-z0-9A-Z]+)\.html$/;
        var url=$("#"+linkViewer.linkText).val();
        return reg.test(url);
      },
      //初始化腾讯视频
      init:function(){
        //https://v.qq.com/iframe/preview.html?vid=g0502naw3h2&auto=0
        $("#"+linkViewer.linkText).change(function(){
           //验证合法地址
           var url=$(this).val();
           if(linkViewer.validUrl()){
             var reg=/^(https|http)\:\/\/v\.qq\.com\/x\/[a-z0-9A-Z\/]*\/([a-z0-9A-Z]+)\.html$/;
             var resultS2=url.match(reg);
             var vid=resultS2[2];
             var temp="https://v.qq.com/iframe/player.html?vid="+vid+"&auto=0";
             $("#"+linkViewer.preview+" iframe").attr("src",temp);
           }else{
             alert("非法腾讯视频地址");
           }
        })
      },
      //创建section
      createSection:function(){
        var html=$("#"+linkViewer.preview).html();
        $("#"+linkViewer.preview).html("");
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
        setTabFocus("mp4");
        //初始化上传组件
        initUploader();
        //
        linkViewer.init();
    }

    function initUploader(){
        let _vue=_config;
        var uploader = WebUploader.create({
          accept:{
                 title: 'mp4',
                 extensions: "mp4,MP4",
                 mimeTypes: "video/mp4"
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
            //初始化对象
            _vue.item={
              href:"",//地址
              faceHref:""//封面地址
            };
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
          console.log(response);
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
            if(nowTab=='mp4'){
              var temp=viewer.createSection();
              editor.execCommand('insertHtml', temp);
            }else if(nowTab=='mp4Link'){
              if(linkViewer.validUrl()){
                var temp=linkViewer.createSection();
                editor.execCommand('insertHtml', temp);
              }else{
                alert("非法腾讯视频地址");
              }
              
            }
        };
        
        dialog.oncancel = function () {

        };
        
    });

    

   

    
})();