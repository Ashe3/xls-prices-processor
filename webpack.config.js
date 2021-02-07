const path = require('path');

module.exports = {
  watch: true,
  entry: './src/public/js/app.js',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: "entry"
                }
              ]
            ],
            plugins: [["@babel/plugin-transform-runtime", { "regenerator": false }]]
          }
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'src', 'public'),
    filename: 'app_bundle.js'
  },
  devtool: 'inline-source-map',
  mode: 'development'
};