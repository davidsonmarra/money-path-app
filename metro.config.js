const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  transformer: {
    unstable_allowRequireContext: true,
  },
  resolver: {
    sourceExts: [...getDefaultConfig(__dirname).resolver.sourceExts, 'mjs'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
