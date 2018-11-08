const path=require("path");
//导入loader的配置
const rulesConfig=require('./webpack.rules.config.js');
//导入plugins的配置
const pluginsConfig=require('./webpack.plugins.config.js');
//导入webpack的基本配置
//webpack4.x自带json-loader
//webpack4.可以自动将json转化为键对值的对象
const proJson=require('./webpack.config.json');
//导入optimization配置
const optimizationConfig=require('./webpack.optimization.config');

module.exports={
    //设置打包模式为开发模式
    mode: proJson.devMode,
    entry:{
        //需要打包的文件的文件路径
        index1:proJson.index1,
        index2:proJson.index2,
        //配置第三方库的打包入口
        jquery:'jquery'
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
    plugins:pluginsConfig ,
    //配置optimization
    //主要用于分离项目所用的第三方库
    //分离后的第三方库会导致项目依赖的CSS不能正常分离
    // optimization: optimizationConfig,
    devServer: {
        //设置服务器的静态资源托管目录
        contentBase:path.resolve(__dirname,'dist'),
        //设置服务器监听器监听的端口
        host:'localhost',
        port:63357
    }
}