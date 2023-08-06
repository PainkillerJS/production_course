import path from 'node:path';

import { type ResolveOptions } from 'webpack';

import type { BuildOptionsType } from './types/config';

const setPathAlias = (...paths: string[]): string => path.resolve(...paths);

export const buildResolvers = ({ paths }: Pick<BuildOptionsType, 'paths'>): ResolveOptions => {
  const srcPath = paths.src;

  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [srcPath, 'node_modules'],
    alias: {
      '@/app': setPathAlias(srcPath, 'app'),
      '@/entities': setPathAlias(srcPath, 'entities'),
      '@/features': setPathAlias(srcPath, 'features'),
      '@/pages': setPathAlias(srcPath, 'pages'),
      '@/shared': setPathAlias(srcPath, 'shared'),
      '@/widgets': setPathAlias(srcPath, 'widgets'),
    },
  };
};
