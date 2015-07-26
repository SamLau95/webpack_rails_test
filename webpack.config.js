var webpack = require("webpack");

var js_directory = "./app/assets/javascripts/";

module.exports = {
    entry: {
        app: [js_directory + "src/hello.js"]
    },
    output: {
        path: js_directory + "dist",
        filename: "rails-bundle.js",
    },
    module: {
        preLoaders: [
            // { test: /\.jsx?$/, loader: "eslint", exclude: /node_modules/ }
        ],
        loaders: [
            { test: /\.scss$/, loader: "style!css!sass" },
            { test: /\.jsx?$/, loader: "babel", exclude: /node_modules/ },
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ],
    // eslint: {
    //     configFile: ".eslintrc"
    // }
};
