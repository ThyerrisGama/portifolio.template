const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports ={
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, './build/'),
        filename: 'app.js',
    },
    resolve: {
            extensions: [".ts", ".tsx", ".js"],
            extensionAlias: {
                    ".js": [".js", ".ts", "tsx"],
                    ".cjs": [".cjs", ".cts"],
                    ".mjs": [".mjs", ".mts"]
                },
                alias: {
                    public: path.resolve(__dirname, './public'),
                    styles: path.resolve(__dirname, './src/styles'),
                    utils: path.resolve(__dirname, './src/utils'),
                    modules: path.resolve(__dirname, './node_modules') 
                }
             },    
    plugins: [ 
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: "index.html",
            inject: false,
            minify: true,

        }),
        new MiniCssExtractPlugin({
            filename: "styles.css"
        }),
             ],
    module: {
        rules: [
            {
                test: /.js[x]?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,'css-loader'],
            },
            {
                test: /\.less$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            {
                test: /\.([cm]?ts|tsx)$/, 
                loader: "ts-loader" 
            },
        ],
    },
};