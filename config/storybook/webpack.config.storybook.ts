import { type Configuration, type RuleSetRule, DefinePlugin } from 'webpack';

import { webpackAlias } from '../common/webpack/webpackAlias';
import { svgLoader } from '../common/webpack/webpackLoaders';

export const webpackConfig = async (config: Configuration): Promise<Configuration> => {
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    // eslint-disable-next-line @typescript-eslint/prefer-includes
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module.rules.push(svgLoader);

  config.resolve.alias = {
    ...config.resolve.alias,
    ...webpackAlias
  };

  config.plugins.push(
    new DefinePlugin({
      __IS_DEV__: true
    })
  );

  return config;
};
