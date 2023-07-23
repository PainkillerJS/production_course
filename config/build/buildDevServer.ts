import type { BuildOptionsType } from './types/config';
import type { Configuration as WebpackDevConfiguration } from 'webpack-dev-server';

export const buildDevServer = (options: Pick<BuildOptionsType, 'port'>): WebpackDevConfiguration => {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
  };
};
