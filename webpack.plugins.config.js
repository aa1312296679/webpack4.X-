const path=require("path");
//导入html自动生成插件
const HtmlWebpackPlugin=require("html-webpack-plugin");
//导入目录文件自动清除插件
const cleanWebpackPlugin=require("clean-webpack-plugin");
//导入CSS分离插件
const ExtracTextPlugin=require('extract-text-webpack-plugin');

//导入css消除冗余插件
const purifyCssWebpack=require('purifycss-webpack');
const glob=require('glob');
//导入webpacck模块
const webpack=require('webpack');
//导入静态资源
const copyWebpackPlugin=require('copy-webpack-plugin');

module.exports=[
    new webpack.HotModuleReplacementPlugin(),
    //创建自动清除插件使webpack打包输出前清除指定目录
    new cleanWebpackPlugin(['dist']),
    //创建html模板生成器
    new HtmlWebpackPlugin({
        //minify为html优化对象
        minify:{
            //对生成后的Html进行压缩
            //true为压缩,false为不压缩
            collapseWhitespace:false,
            //去除生成后的html的部分属性值的双引号
            //true为去除，false为不去除
            removeAttributeQuotes:true
        },
        //设置生成的html的文件路径和文件名
        //文件名自定义
        //文件路径以打包文件所配置的输出路径为根目录
        filename:"html/index1.html",
        //配置该html所要引入的打包后的js
        //名称为打包后的JS的前缀
        chunks:['jquery','index1'],
        //消除html文件使用链接后的Html缓存
        hash:true,
        //渲染html模板中的属性
        title:'打包测试文档',
        text:'testbox1',
        //调用指定的html模板进行渲染
        template:'./src/index.html'
    }),
    //创建html模板生成器
    new HtmlWebpackPlugin({
        //minify为html优化对象
        minify:{
            //对生成后的Html进行压缩
            //true为压缩,false为不压缩
            collapseWhitespace:false,
            //去除生成后的html的部分属性值的双引号
            //true为去除，false为不去除
            removeAttributeQuotes:true
        },
        filename:"html/index2.html",
        chunks:['jquery','index2'],
        //消除html文件使用链接后的Html缓存
        hash:true,
        title:'打包测试文档',
        text:'testbox1',
        template:'./src/index.html'
    }),
    //配置css分离插件分离出的css的输出路径和文件名
    new ExtracTextPlugin('css/[name].css'),
    //创建CSS冗余清除插件
    new purifyCssWebpack({
        //设置需要消除CSS冗余的模板文件的文件目录和文件类型
        paths:glob.sync(path.join(__dirname,'src/*.html'))
    }),
    //创建静态资源输出插件
    new copyWebpackPlugin([{
        from:path.resolve(__dirname,'src/assets'),
        to:'./public'
    }]),
    //创建webpack的全局接口
    //通过webpack的全局接口配置第三方库全局调用的变量
    new webpack.ProvidePlugin({
        $:'jquery',
        jQuery:'jquery'
    })
]