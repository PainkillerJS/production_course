import { type Configuration } from 'webpack';

import { type BuildOptionsType } from './types/config';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugin';
import { buildResolvers } from './buildResolvers';

export const buildWebpackConfig = ({ mode, paths, port, isDev }: BuildOptionsType): Configuration => {
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins({ html: paths.html, isDev }),
    module: {
      rules: buildLoaders({ isDev }),
    },
    resolve: buildResolvers({ paths }),
    devtool: isDev ? 'inline-source-map' : false,
    devServer: isDev ? buildDevServer({ port }) : undefined,
  };
};
