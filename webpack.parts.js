exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    host, //Defaults to 'localhost'
    port, //Defaults to 8080
    overlay: true,
  },
});

exports.lintJavaScript = ({ include, exclude, options }) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,
        enforce: 'pre',

        loader: 'eslint-loader',
        options,
      },
    ],
  },
});

exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        include,
        exclude,

        use: [
          {
            loader: 'style-loader',
            options:{}
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => ([
                require('postcss-cssnext')(),
              ]),
            },
          },
          {
            loader: 'sass-loader',
            options: {},
          },
        ],
      },
    ],
  },
});

const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.extractCSS = ({ include, exclude, use }) => {
  //Output extracted CSS to a file
  const plugin = new ExtractTextPlugin({
    filename: '[name].css',
  });

  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          include,
          exclude,

          use: plugin.extract({
            use,
            fallback: 'style-loader',
          }),
        },
      ],
    },
    plugins: [plugin],
  };
};