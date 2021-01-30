const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: {
            list: [
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
              {
                tag: "img",
                attribute: "data-gallery-src",
                type: "src",
              },
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: [
              '**/*.DS_Store'
            ],
          },
        },
      ],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/projects.html",
      inject: true,
      chunks: ["index"],
      filename: "projects.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/bim.html",
      inject: true,
      chunks: ["index"],
      filename: "bim.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/scanning.html",
      inject: true,
      chunks: ["index"],
      filename: "scanning.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/about.html",
      inject: true,
      chunks: ["index"],
      filename: "about.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/revolution.html",
      inject: true,
      chunks: ["index"],
      filename: "revolution.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/contact.html",
      inject: true,
      chunks: ["index"],
      filename: "contact.html",
    }),
  ],
};
