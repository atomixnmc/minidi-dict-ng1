const path = require('path');
const webpack = require('webpack');


var config = {
    entry: './src/app/app.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]

};

config.serve = {
    content: path.join(__dirname, 'dist'),
    host: 'localhost',
    port: 4001,
};

// config.devServer= {
//     contentBase: path.join(__dirname, 'dist'),
//     compress: true,
//     port: 4001,
//     proxy: [{
//         context: [
//             '/api'
//         ],
//         target: 'http://localhost:4000',
//         secure: false
//     }],
// };

module.exports = function (env) {
    var curEnv = env ? env.NODE_ENV : 'development';
    console.log('Webpack mode: ', curEnv);

    config.resolve = {
        alias: {
            configEnv: path.join(__dirname, 'src/configs/' + curEnv)
        }
    };

    return config;
};