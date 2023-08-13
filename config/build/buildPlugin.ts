import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

import type { BuildOptionsType, BuildPaths } from './types/config';

type BuildPluginsParamsType = Pick<BuildPaths, 'html'> & Pick<BuildOptionsType, 'isDev'>;

export const buildPlugins = ({ html, isDev }: BuildPluginsParamsType): webpack.WebpackPluginInstance[] => {
  return [
    new HTMLWebpackPlugin({
      template: html,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.ProgressPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: isDev,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new CleanWebpackPlugin(),
  ];
};
