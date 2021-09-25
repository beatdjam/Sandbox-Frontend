const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
    },
    devServer: {
        static: [
            // rootのindex.htmlを読み込ませるためにこうしてる
            // なんか方法ありそうな気はする
            {directory: path.join(__dirname)},
            // こっちでbundle.js読ませてる
            {directory: path.join(__dirname, 'dist')}
        ],
        open: true,
    },
    devtool: 'eval',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};
