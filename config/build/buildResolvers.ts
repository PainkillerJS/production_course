import { type ResolveOptions } from 'webpack';

import { webpackAlias } from '../common/webpack/webpackAlias';

import type { BuildOptionsType } from './types/config';

export const buildResolvers = ({ paths }: Pick<BuildOptionsType, 'paths'>): ResolveOptions => {
  const srcPath = paths.src;

  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [srcPath, 'node_modules'],
    alias: webpackAlias
  };
};
