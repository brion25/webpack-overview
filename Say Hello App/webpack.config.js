var path = require('path');

module.exports = {
    entry:'./app/app.js',
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.jade$/,
                loader:'jade',
            },
            {
                test:/\.js$/,
                loader: "babel?presets[]=es2015"
            },
            {
                test: /\.css/,
                loader: "css-loader"
            },
            {
                test: /\.woff[(\?v=\d+\.\d+\.\d+)]?$/,
                loader: "url?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&minetype=application/octet-stream"
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&minetype=image/svg+xml"
            }
        ]
    }
}