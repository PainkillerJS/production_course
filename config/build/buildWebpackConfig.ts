import { type Configuration } from 'webpack';

import { buildPlugins } from './buildPlugin';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';

import { type BuildOptionsType } from './types/config';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = ({ mode, paths, port, isDev }: BuildOptionsType): Configuration => {
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins({ html: paths.html }),
    module: {
      rules: buildLoaders({ isDev }),
    },
    resolve: buildResolvers({ paths }),
    devtool: isDev ? 'inline-source-map' : false,
    devServer: isDev ? buildDevServer({ port }) : undefined,
  };
};
