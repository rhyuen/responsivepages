const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: [
        "webpack-dev-server/client?http://localhost:9999",
        "webpack/hot/only-dev-server",
        "react-hot-loader/patch",
        path.join(__dirname, "src/index.js")
    ],
    output: {
        path: path.join(__dirname, "/dist"),
        publicPath: "/",
        filaname: "bundle.js"
    },
    module:{
        loaders: [{
            test:/\.jsx?$/,
            exclude: /node_modules/,
            loader: "react-hot-loader!babel-loader"
        }]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    devServer: {
        contentBase: "./dist",
        hot: true
    },    
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};