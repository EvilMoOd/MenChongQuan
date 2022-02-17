module.exports = {
    //关闭eslint
    lintOnSave: false,
    // 执行 npm run build 统一配置路径
    publicPath: './',
    //配置服务器地址
    devServer: {
        proxy: {
            //会把请求路径中的/api换为后面的代理服务器
            '/api': {
                //提供数据的服务器地址
                target: 'http://localhost:8081',
            }
        },
    }
}