import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import type { BuildOptionsType, BuildPaths } from './types/config';

type BuildPluginsParamsType = Pick<BuildPaths, 'html'> &
  Pick<BuildOptionsType, 'isDev' | 'project'>;

export const buildPlugins = ({
  html,
  isDev,
  project
}: BuildPluginsParamsType): webpack.WebpackPluginInstance[] => {
  const plugins = [
    new HTMLWebpackPlugin({
      template: html
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.ProgressPlugin(),
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: isDev,
      __PROJECT__: project
    }),
    new ReactRefreshWebpackPlugin(),
    new CleanWebpackPlugin(),
    new Dotenv({
      path: isDev ? '.env.dev' : '.env.prod'
    })
  ];

  if (isDev) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new BundleAnalyzerPlugin({
        openAnalyzer: false
      })
    );
  }

  return plugins;
};
