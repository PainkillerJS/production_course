import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

import type { BuildPaths } from './types/config';

export const buildPlugins = (options: Pick<BuildPaths, 'html'>): webpack.WebpackPluginInstance[] => {
  return [
    new HTMLWebpackPlugin({
      template: options.html,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.ProgressPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ];
};
