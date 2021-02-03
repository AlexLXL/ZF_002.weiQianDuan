module.exports = {
    configureWebpack: {
        output: {
            library: "secondChild",
            libraryTarget: "umd"
        }
    },
    devServer: {
        port: 9102,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }
}