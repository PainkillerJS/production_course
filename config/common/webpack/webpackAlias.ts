import path from 'node:path';
import { type ResolveOptions } from 'webpack';

const setPathAlias = (...paths: string[]): string => path.resolve(...paths);

const pathToSrc = setPathAlias(process.cwd(), 'src');

export const webpackAlias: ResolveOptions['alias'] = {
  '@/app': setPathAlias(pathToSrc, 'app'),
  '@/entities': setPathAlias(pathToSrc, 'entities'),
  '@/features': setPathAlias(pathToSrc, 'features'),
  '@/pages': setPathAlias(pathToSrc, 'pages'),
  '@/shared': setPathAlias(pathToSrc, 'shared'),
  '@/widgets': setPathAlias(pathToSrc, 'widgets')
};
