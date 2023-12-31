import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { type RuleSetRule } from 'webpack';

import { svgLoader } from '../common/webpack/webpackLoaders';

import type { BuildOptionsType } from './types/config';

export const buildLoaders = ({ isDev }: Pick<BuildOptionsType, 'isDev'>): RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  const finalStyleLoader = isDev ? 'style-loader' : MiniCssExtractPlugin.loader;

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|wp)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  };

  const babelLoader = {
    test: /\.(js|ts|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean)
      }
    }
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      finalStyleLoader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  };

  return [svgLoader, fileLoader, babelLoader, typescriptLoader, scssLoader];
};
