import path from 'node:path';
import { type Configuration } from 'webpack';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import type { BuildEnvType, BuildPaths } from './config/build/types/config';

export default (env: BuildEnvType): Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'dist', 'locales')
  };

  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3000;

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    project: 'frontend'
  });
};
