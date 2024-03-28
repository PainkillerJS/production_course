import type { Configuration as WebpackDevConfiguration } from 'webpack-dev-server';

import type { BuildOptionsType } from './types/config';

export const buildDevServer = (
  options: Pick<BuildOptionsType, 'port'>
): WebpackDevConfiguration => {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
        runtimeErrors: false
      }
    }
  };
};
