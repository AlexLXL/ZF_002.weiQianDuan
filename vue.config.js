module.exports = {
    configureWebpack: {
        output: {
            library: 'singleVue',
            libraryTarget: 'umd'
        },
        devServer: {
            port: 9100
        }
    }
}

// library: 会将暴露的bootstrap、mount、unmount挂载到window.singleVue上
// libraryTarget: 打包后的模块类型