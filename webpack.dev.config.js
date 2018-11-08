const path=require("path");
//导入loader的配置
const rulesConfig=require('./webpack.rules.config.js');
//导入plugins的配置
const pluginsConfig=require('./webpack.plugins.config');
//导入webpack的基本配置
const webpackConfig=require('./webpack.config.json');

module.exports={
    //设置打包模式为开发模式
    mode: webpackConfig.prMode,
    entry:{
        //需要打包的文件的文件路径
        index1:webpackConfig.index1,
        index2:webpackConfig.index2
    },
    output: {
        //打包后的输出路径
        path: path.resolve(__dirname,'dist'),
        //打包后的打包文件的文件名
        filename: '[name]-bundle.js'
    },
    //配置loader
    module: rulesConfig,
    //配置plugins
    plugins: pluginsConfig,
    devServer: {
        //设置服务器的静态资源托管目录
        contentBase:path.resolve(__dirname,'dist'),
        //设置服务器监听器监听的端口
        host:'localhost',
        //配置端口
        port:63357,
        //配置浏览器自动打开
        open:true,
        //启用浏览器的热更新
        hot:true
    }
}




