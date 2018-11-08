//导入css分离插件
var ExtracTextPlugin=require('extract-text-webpack-plugin');

module.exports={
    rules: [
        {
            test:/\.css$/,
            use: ExtracTextPlugin.extract({
                fallback:'style-loader',
                use:['css-loader','postcss-loader'],
                publicPath:'../'
            })
        },
        {
            test:/\.(png|jpg|gif)$/,
            use: [
                //配置文件源loader
                {
                    loader:'url-loader',
                    options:{
                        limit:5,
                        outputPath:'images'
                    }
                }
            ]
        },
        {
            test:/\.(sass|scss)$/,
            use: ExtracTextPlugin.extract({
                fallback:'style-loader',
                use: ['css-loader','postcss-loader','sass-loader'],
                publicPath:'../'
            })
        },
        {
            test:/\.(js|jsx)$/,
            use:['babel-loader'],
            exclude:/node_modules/
        },
        {
            test:/\.less$/,
            use:ExtracTextPlugin.extract({
                fallback:'style-loader',
                use:['css-loader','less-loader']
            })
        }
    ]
}