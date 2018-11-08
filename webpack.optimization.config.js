module.exports={
    splitChunks: {
        // 单独提取JS文件引入html
        cacheGroups: {
            //第三方库分离配置的键值
            //可自定义
            jq: {
                    chunks: 'initial',
                    //第三方库的打包入口中所配置的key
                    name: 'jquery',
                    enforce: true
            }
        }
    }
}
