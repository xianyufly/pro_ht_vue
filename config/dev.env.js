var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  UE_IFRAME_URL:'"http://test.handforture.com"',
  BASE:'"/pro_ht/"',//history 模式 访问根路径
  API_URL:'"http://10.0.1.41:12001/"'//接口地址
})
