/**
 * 公用表单验证
 */
import { Validator } from 'vee-validate';
import HttpUtil from 'src/util/httpUtil.js';

/**
 * 只能是字母和数据
 */
Validator.extend('onlyLetterAndNumber', {
  messages: {
    zh_CN: (field, args) => {
      return  field+'只能为a-zA-Z0-9字符';
    }
  },
  validate: (value,filed,data) => new Promise(resolve => {  
    let reg=/^[a-zA-Z0-9]*$/
  	//异步验证器
  	resolve({
        valid: reg.test(value)
    });
  })
});
