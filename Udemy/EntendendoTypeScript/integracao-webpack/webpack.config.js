const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'production', //development
    entry: './src/main.ts',
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 9000,
        hot: true,
    },
    output: {
        filename: 'app.min.js',
        path: path.join(__dirname, 'dist')
    },
   plugins: [
    new CopyPlugin({
        patterns: [{from: 'public'}]
    })
],
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    module: {
        rules: [{
            test: /\.ts$/, //quais arquivos serão processador por essa regra (loader)
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    }
}

// copy-webpack-plugin

// plugins:[
//     new CopyPlugin([
//         {from: 'public'},
//     ])
// ],


// plugins: [
//     new CopyPlugin({
//         patterns: [{from: 'public'}]
//     })
// ]