import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import type { BuildOptionsType, BuildPaths } from './types/config';

type BuildPluginsParamsType = Pick<BuildPaths, 'html' | 'locales' | 'buildLocales'> &
  Pick<BuildOptionsType, 'isDev' | 'project'>;

export const buildPlugins = ({
  html,
  isDev,
  project,
  buildLocales,
  locales
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
      __IS_DEV__: isDev
    }),
    new CleanWebpackPlugin(),
    new Dotenv({
      path: isDev ? '.env.dev' : '.env.prod'
    }),
    new CopyPlugin({
      patterns: [{ from: locales, to: buildLocales }]
    })
  ];

  if (isDev) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new BundleAnalyzerPlugin({
        openAnalyzer: false
      }),
      new ReactRefreshWebpackPlugin(),
      new ForkTsCheckerWebpackPlugin()
    );
  }

  return plugins;
};
