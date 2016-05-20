var path = require('path');
var webpack = require('webpack');


module.exports = {
    devtool: 'eval',    // 会显示出报错行数与文件名, 等效命令: webpack --devtool eval
    entry: {
        app: './App/app.js'
    },
    output: {
        path: path.join(__dirname, '/public/javascripts/'),
        filename: '[name].bundle.js'
    },
    resolve: {
        // 后缀自动补全
        modulesDirectories: [path.join(__dirname, 'node_modules')],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        externals: {
            //don't bundle the 'react' npm package with our bundle.js
            //but get it from a global 'React' variable
            'react': 'React',
            'react-dom': 'ReactDOM',
            'material-ui': 'MaterialUI'
        },
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                    plugins: ['add-module-exports', 'typecheck']
                }
            },
            // {
            //     test: /\.css$/,
            //     loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            // },
            { test: /\.css$/, exclude: /\.useable\.css$/, loader: "style!css" },
            { test: /\.useable\.css$/, loader: "style/useable!css" }
        ]
    },
    babel: {
        plugins: ['antd', {
            style: 'css', // if true, use less
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
            DEVELOPMENT: true,
            DEBUG: true
        })
    ]
};
