/**
 * 预览组件V1.0
 */
属性:
visible:是否显示(布尔)
content:富文本(字符串)


使用方法：
<template>
	<v-preview :visible.sync="isVisible" :content="previewContent"></v-preview>
  </template>
export default {
		data () {
			return {
                isVisible:false,
                previewContent:"11111"
			}
		},
		computed:{
			
		},
		mounted () {
		  
	   	},
		methods:{
            saveResource(){
              this.isVisible=true;
            }
		}
	}

