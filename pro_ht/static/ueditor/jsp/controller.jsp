<%@ page language="java" contentType="text/html; charset=UTF-8"
	import="java.util.Date,com.xino.basicFunc.util.DateUtil,java.util.ResourceBundle,com.baidu.ueditor.ActionEnter,com.xino.basicFunc.util.JSONConvertUtil,java.util.Map,com.xino.basicFunc.util.UEditorFileUtil"
    pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<%

    request.setCharacterEncoding( "utf-8" );
	response.setHeader("Content-Type" , "text/html");
	
	String rootPath = request.getSession().getServletContext().getRealPath("/");
	//String rootPath1 =request.getSession().getServletContext().getRealPath("/");
	System.out.println("rootPath:"+rootPath);
	//System.out.println("rootPath1:"+rootPath1);
	
	String action = request.getParameter("action");
    String logoText = request.getParameter("logoText");
	String result = new ActionEnter( request, rootPath ).exec();
    System.out.println("百度UE接口:"+result);
    if(result!=""&&result!=null){
    	Map<String,Object> resultMap=JSONConvertUtil.jsonToMap(result);
        //上传数据文件服务器
        if(resultMap.get("state")!=null&&"SUCCESS".equals(resultMap.get("state").toString())){
        	ResourceBundle resource = ResourceBundle.getBundle("sys-config");  
        	String serverUrl = resource.getString("xino.webRoot");  
        	System.out.println("上传地址:"+resultMap.get("url")+",服务器地址:"+serverUrl);
        	String url=resultMap.get("url").toString();
        	//Integer index=url.lastIndexOf("/");
        	//String aimFolder=rootPath+url.substring(1,index);
        	//String fileName=url.substring(index+1,url.length());
        	String tempType="";
        	if(action.equals("uploadimage")){
        		tempType="image";
        	}else if(action.equals("uploadvideo")){
        		tempType="video";
        	}
        	String aimFolder=rootPath+"/ueditor/jsp/upload/"+tempType+"/"+DateUtil.formatDate(new Date(), "yyyyMMdd");
        	String fileName=resultMap.get("title").toString();
        	System.out.println("aimFolder:"+aimFolder+",fileName:"+fileName);
        	url=UEditorFileUtil.uploadFile(serverUrl,aimFolder,fileName,tempType,logoText);
        	resultMap.put("url",url);
        	result=JSONConvertUtil.mapToJson(resultMap);
        }
    }
    

	if( action!=null && 
	   (action.equals("listfile") || action.equals("listimage") ) ){
	    rootPath = rootPath.replace("\\", "/");
	    result = result.replaceAll(rootPath, "/");//把返回路径中的物理路径替换为 '/'
	    System.out.println("百度UE接口2:"+result);
	}
	out.write( result );
	
%>