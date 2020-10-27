var path = require('path');

module.exports = {
   // entry: {
   //    stimulus: './controllers/application.js',
   //    turbolinks: './turbolinks/application.js'
   // },
   entry: {
     css: './styles/scss/app.scss',
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
          include: path.resolve(__dirname, 'assets'),
          loader: 'babel-loader',
          query: {
             presets: ["@babel/preset-env"]
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
   }
};
