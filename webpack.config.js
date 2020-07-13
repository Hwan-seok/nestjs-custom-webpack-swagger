const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: ['webpack/hot/poll?100', './src/main.ts'],
  watch: process.env.NODE_ENV ? false : true,
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [
    nodeExternals({
      allowlist: ['webpack/hot/poll?100'],
    }),
  ],
  module: {
    rules: [
      {
        test: /.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: program => ({
            before: [
              require('@nestjs/swagger/plugin').before(
                {
                  dtoFileNameSuffix: [
                    '.enum.ts',
                    '.dto.ts',
                    '.entity.ts',
                    '.interface.ts',
                  ],
                },
                program,
              ),
            ],
          }),
        },
        exclude: /node_modules/,
      },
    ],
  },
  mode: process.env.NODE_ENV ? 'none' : 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
  },
  devtool: 'inline-cheap-module-source-map',
  optimization: {
    minimize: false,
    namedModules: true,
    nodeEnv: false,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false,
    }),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,js}', // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
      },
    }),
  ],
};
