var path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   // entry: {
   //    stimulus: './controllers/application.js',
   //    turbolinks: './turbolinks/application.js'
   // },
   entry: {
     css: './styles/scss/app.scss',
     cms: path.join(__dirname, "src", "js", "cms.js"),
   },
   output: {
      path: path.resolve(__dirname, 'static'),
      //filename: 'stimulus_controllers.js'
      filename: 'assets/js/[name].bundle.js'
   },
   mode:'development',
   module: {
      rules: [
        {
          test: /\.js$/,
          // include: path.resolve(__dirname, 'assets'),
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
             presets: ["@babel/preset-env", "@babel/preset-react"],
             plugins: ["@babel/plugin-syntax-object-rest-spread",
                       "@babel/plugin-proposal-object-rest-spread"]
          }
       },
       {
			    test: /\.scss$/,
				  use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/css/[name].css',
              }
            },
            {
              loader: 'extract-loader'
            },
            {
              loader: 'css-loader?-url'
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
   },
   plugins: [
    // new AssetsPlugin({
    //   filename: "webpack.json",
    //   path: path.join(process.cwd(), "site/data"),
    //   prettyPrint: true
    // }),
    // new CopyWebpackPlugin([
    //   {
    //     from: "./src/fonts/",
    //     to: "fonts/",
    //     flatten: true
    //   }
    // ]),
    // new HtmlWebpackPlugin({
    //   filename: 'admin/index.html',
    //   template: 'src/cms.html',
    //   inject: false,
    // }),
  ]
};
