const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = function (configDirs) {
    return {
        entry: './src/js/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
        },

        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader"
                        }
                    ]
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                }

            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "./index.html",
            })
        ]
    }
};


