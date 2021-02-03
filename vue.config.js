module.exports = {
    configureWebpack: {
        output: {
            library: "firstChild",
            libraryTarget: "umd"
        }
    },
    devServer: {
        port: 9101,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }
}