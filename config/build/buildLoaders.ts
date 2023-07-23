import { type RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import type { BuildOptionsType } from './types/config';

export const buildLoaders = ({ isDev }: Pick<BuildOptionsType, 'isDev'>): RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const finalStyleLoader = isDev ? 'style-loader' : MiniCssExtractPlugin.loader;

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      finalStyleLoader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  return [typescriptLoader, scssLoader];
};
